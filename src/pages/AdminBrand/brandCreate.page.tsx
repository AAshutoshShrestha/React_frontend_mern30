import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { InputLabel, SingleImageUpload, StatusSelector, TextInputComponent } from "../../components/common/input/index.component";
import { toast } from "react-toastify";
import { CancelButton, SubmitButton } from "../../components/common/CTA/buttons.component";
import { useNavigate } from "react-router-dom";
import brandSvc from "./brand.service";
import { ToggleSwitch } from "flowbite-react";

const BrandCreate = () => {
	const brandDTO = Yup.object({
		name: Yup.string()
			.min(2)
			.required(),

		isFeatured:Yup.boolean().default(false),

		status: Yup.object({
			label: Yup
				.string()
				.required(),
			value: Yup
				.string()
				.required()
		}).required(),

		logo: Yup
			.mixed()
			.required()

	})

	const [loading, setLoading] = useState<boolean>(false)
	const [isFeatureToggle, setisFeatureToggle] = useState<boolean>(true)
	
	const { control, setValue, setError,handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(brandDTO)
	})

	const navigate = useNavigate();

	const submitEvent = async (data: any) => {
		setLoading(true);
		try {
			const submitData = {
				...data,
				status: data.status.value,
				isFeatured: isFeatureToggle
			}
			console.log(submitData);
			
			await brandSvc.postRequest('/brand', submitData, { Auth: true, file: true })
			toast.success("Brand created successfully.")
			navigate("/admin/brand")

		} catch (exception:any) {
			if(+exception.status === 422) {
                const msgs = exception.data.result;
                Object.keys(msgs).map((field: any) => {
                    setError(field, {message: msgs[field]});
                })
            }
            toast.error("Brand cannot be added at this moment.")
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
								<InputLabel htmlFor="name" value="Brand Name" />

								<TextInputComponent
									name="name"
									control={control}
									msg={errors?.name?.message}
								/>
							</div>

							<div className="space-y-2">
								<InputLabel htmlFor="isFeatured" value="Featured" />

								<ToggleSwitch checked={isFeatureToggle} onChange={setisFeatureToggle} />
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
								<InputLabel htmlFor="logo" value="Brand logo" />
								<SingleImageUpload
									name="logo"
									msg={errors?.logo?.message}
									setValue={setValue}
								/>
							</div>
						</div>

						<div className="flex gap-4">

							<SubmitButton loading={loading as boolean} value="Add Brand" iconName="ri-add-circle-fill" />
							<CancelButton loading={loading as boolean} value="Cancel" iconName="ri-close-circle-fill" />
						</div>
					</div>
				</form>
			</div>

		</>
	)
}
export default BrandCreate