import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Select from 'react-select'
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { InputLabel, TextInputComponent } from "../../components/common/input/index.component";


const options = [
	{ value: 'active', label: 'Published' },
	{ value: 'inactive', label: 'UnPublished' },
	{ value: 'draft', label: 'Draft' }
  ]

const BannerCreate = () => {
	const bannerDTO = Yup.object({
		Name: Yup.string()
			.min(2)
			.max(50)
			.required(),

		Status: Yup.string()
			.matches(/^(active|inactive)/)		//validate 
			.required(),

		image: Yup.string()
			.required(),

		Link: Yup.string()
			.url()

	})

	const [loading, setLoading] = useState(false)


	const { control, handleSubmit, setValue, setError, formState: { errors } } = useForm({
		resolver: yupResolver(bannerDTO)
	})

	const submitEvent = (data: any) => {
		setLoading(true)
	}

	return (
		<>
			<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
				<form onSubmit={handleSubmit(submitEvent)} >
					<div className="p-4 pt-0 sm:p-7 sm:pt-0">
						<div className="space-y-4 sm:space-y-6">
							<div className="space-y-2">
								<InputLabel htmlFor="Name" value="Name" />

								<TextInputComponent
									name="Name"
									control={control}
									msg={errors?.Name?.message}
								/>
							</div>

							<div className="space-y-2">
								<InputLabel htmlFor="Link" value="Link" />

								<TextInputComponent
								type="url"
									name="Link"
									control={control}
									msg={errors?.Link?.message}
								/>
							</div>

							<div className="space-y-2">
								<InputLabel htmlFor="status" value="Status" />

								<Select options={options} />
							</div>

							<div className="space-y-2">
								<label htmlFor="banner-form-images" className="mt-2.5 inline-block text-sm font-medium text-gray-800 dark:text-neutral-200"> Banner image </label>

								<label htmlFor="banner-form-images" className="group block cursor-pointer rounded-lg border-2 border-dashed border-gray-200 p-4 text-center focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 sm:p-7 dark:border-neutral-700">
									<input id="banner-form-images" name="banner-form-images" type="file" className="sr-only" />
									<svg className="mx-auto size-10 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
										<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
									</svg>
									<span className="mt-2 block text-sm text-gray-800 dark:text-neutral-200"> Browse your device or <span className="text-blue-600 group-hover:text-blue-700">drag 'n drop'</span> </span>
									<span className="mt-1 block text-xs text-gray-500 dark:text-neutral-500"> Maximum file size is 2 MB </span>
								</label>
							</div>
						</div>

						<div className="mt-5 flex justify-center gap-x-2">
							<button type="button" className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50" >Add banner</button>
						</div>
					</div>
				</form>
			</div>

		</>
	)
}
export default BannerCreate