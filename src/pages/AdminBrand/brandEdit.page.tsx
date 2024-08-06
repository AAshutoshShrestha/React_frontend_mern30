import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { toast } from "react-toastify";
import brandSvc from "./brand.service";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/common/loading/index.component";
import { InputLabel, SingleImageUpload, StatusSelector, TextInputComponent } from "../../components/common/input/index.component";
import { INPUT_TYPE } from "../../components/common/input/input.contract";
import { CancelButton, SubmitButton } from "../../components/common/CTA/buttons.component";
import { ToggleSwitch } from "flowbite-react";

const BrandEdit = () => {
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

    const [loading, setLoading] = useState<boolean>(true)
    const [isFeatureToggle, setisFeatureToggle] = useState<boolean>(true)


    const { control, setValue, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(brandDTO)
    })
    const navigate = useNavigate();
    const params = useParams();

    const [detail, setDetail] = useState<any>();

    const getBrandDetail = useCallback(async () => {
        try {
            const response: any = await brandSvc.getRequest('/brand' + params.id, { Auth: true })
            let brandDetail = {
                ...response.result,
                logo: import.meta.env.VITE_IMAGE_URL+"brand/" + response.result.logo
            }
            setDetail(brandDetail)
            setValue('name', response.result.name)
            setValue('status', {
                label: response.result.status === 'active' ? "Publish" : "UnPublish",
                value: response.result.status
            })
            setValue('logo', response.result.logo);

            setLoading(false)
        } catch (exception) {
            toast.error("Brand cannot be fetched.")
            navigate("/admin/brand")
        }
    }, [params])


    useEffect(() => {
        getBrandDetail()
    }, [params])

    const submitEvent = async (data: any) => {
        setLoading(true);
        try {
            const submitData = {
                ...data,
                status: data.status.value
            }

            if (typeof submitData.image !== 'object') {
                delete submitData.image;
            }


            await brandSvc.putRequest('/brand/'+params.id, submitData, { Auth: true, file: true })
            toast.success("Brand edited successfully.")

            navigate("/admin/brand")
        } catch (exception) {
            console.log(exception);
            toast.error("Brand cannot be update at this moment.")
        } finally {
            setLoading(false)
        }
    }
    return (<>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto lg:py-12">
                <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">Edit Brand</h2>
                {
                    loading ? <>
                        <LoadingSpinner />
                    </> : <>
                        <form onSubmit={handleSubmit(submitEvent)}>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInputComponent
                                        name="name"
                                        control={control}
                                        msg={errors?.name?.message}
                                    />
                                </div>

                                <div className="sm:col-span-2">
								<InputLabel htmlFor="isFeatured" value="Featured" />

								<ToggleSwitch checked={isFeatureToggle} onChange={setisFeatureToggle} />
                                </div>

                                <div className="sm:col-span-2">
                                    <InputLabel htmlFor="status" value="status" />
                                    <StatusSelector
                                        name="status"
                                        control={control}
                                        msg={errors?.status?.message}
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <InputLabel htmlFor="image" value="image" />
                                    <SingleImageUpload
                                        name="image"
                                        setValue={setValue}
                                        imageUrl={detail && detail.image}
                                    />
                                    <span className="text-sm italic text-red-700">{errors?.image?.message as string}</span>
                                </div>
                            </div>

                            <div className="flex gap-4">

                                <SubmitButton loading={loading as boolean} value="Add Brand" iconName="ri-add-circle-fill" />
                                <CancelButton loading={loading as boolean} value="Cancel" iconName="ri-close-circle-fill" />
                            </div>

                        </form>
                    </>
                }
            </div>
        </section>
    </>)
}

export default BrandEdit;