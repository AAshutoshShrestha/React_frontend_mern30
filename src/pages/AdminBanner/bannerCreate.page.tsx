import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { InputLabel, SingleImageUpload, StatusSelector, TextInputComponent } from "../../components/common/input/index.component";
import { toast } from "react-toastify";
import { CancelButton, SubmitButton } from "../../components/common/CTA/buttons.component";
import { INPUT_TYPE } from "../../components/common/input/input.contract";
import { useNavigate } from "react-router-dom";
import bannerSvc from "./banner.service";

const BannerCreate = () => {
	const bannerDTO = Yup.object({
		name: Yup.string()
			.min(2)
			.required(),
		status: Yup.object({
			label: Yup
				.string()
				.required(),
			value: Yup
				.string()
				.required()
		}).required(),
		link: Yup
			.string()
			.url(),
		image: Yup
			.mixed()
			.required()

	})

	const [loading, setLoading] = useState<boolean>(false)


	const { control, setValue, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(bannerDTO)
	})

	const navigate = useNavigate();

	const submitEvent = async (data: any) => {
		setLoading(true);
		try {
			const submitData = {
				...data,
				status: data.status.value
			}
			console.log(submitData);
			
			await bannerSvc.postRequest('/banner', submitData, { Auth: true, file: true })
			toast.success("Banner created successfully.")
			navigate("/admin/banner")

		} catch (exception) {
			console.log(exception);
			toast.error("Banner cannot be added at this moment.")
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
				<form onSubmit={handleSubmit(submitEvent)} >
					<div className="p-4 pt-0 sm:p-7 sm:pt-0">
						<div className="space-y-4 sm:space-y-6">
							<div className="space-y-2">
								<InputLabel htmlFor="name" value="Banner Name" />

								<TextInputComponent
									name="name"
									control={control}
									msg={errors?.name?.message}
								/>
							</div>

							<div className="space-y-2">
								<InputLabel htmlFor="link" value="Link" />

								<TextInputComponent
									name="link"
									type={INPUT_TYPE.URL}
									control={control}
									msg={errors?.link?.message}
								/>
							</div>

							<div className="space-y-2">
								<InputLabel htmlFor="status" value="Status" />

								<StatusSelector
									name="status"
									control={control}
									msg={errors?.status?.message}
								/>
							</div>

							<div className="space-y-2">
								<InputLabel htmlFor="image" value="Banner Image" />
								<SingleImageUpload
									name="image"
									msg={errors?.image?.message}
									setValue={setValue}
								/>
							</div>
						</div>

						<div className="flex gap-4">

							<SubmitButton loading={loading as boolean} value="Add Banner" iconName="ri-add-circle-fill" />
							<CancelButton loading={loading as boolean} value="Cancel" iconName="ri-close-circle-fill" />
						</div>
					</div>
				</form>
			</div>

		</>
	)
}
export default BannerCreate