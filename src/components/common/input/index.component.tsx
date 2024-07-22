import { Controller, useController } from "react-hook-form"
import { INPUT_TYPE, ITextInputComponent } from "./input.contract"


export const InputLabel = ({ value, htmlFor }: { value: string, htmlFor: string }) => {
	return (
		<>
			<label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
				{value}
			</label>
		</>
	)
}

export const TextInputComponent = ({ type = INPUT_TYPE.TEXT, name, defaultValue = '', msg, control }: ITextInputComponent) => {

	const { field } = useController(
		{
			control: control,
			name: name,
			defaultValue: defaultValue
		}
	)

	return (
		<>
			<input
				type={type}
				id={name}
				{...field}
				className="mt-2 py-3 px-4 block w-full border-2  border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
			/>
			<span className="text-sm text-red-600 mt-2 ms-2">{msg}</span>
		</>
	)
}

export const RoleSelector = ({ name, defaultValue = '', msg, control }: ITextInputComponent) => {
	return (
		<>
			<Controller
				control={control}
				name={name}
				defaultValue={defaultValue}
				render={({ field: { onChange } }) => (
					<select
						id="role"
						onChange={onChange}
						className=""
						data-hs-select='{
							"placeholder": "Select option...",
							"toggleTag": "<button type=\"button\"></button>",
							"toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
							"dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
							"optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
							"optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
							"extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
						  }'>
						<option value="">Choose</option>
						<option value="customer">Customer</option>
						<option value="seller">Seller</option>
					</select>


				)}

			/>
			<span className="text-sm text-red-600 mt-2">{msg}</span>
		</>
	)
}

export const SearchField = () => {
	return (
		<>
			<label htmlFor="hs-trailing-button-add-on-with-icon-and-button" className="sr-only">Label</label>
			<div className="relative flex rounded-lg shadow-sm max-w-lg">
				<input type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" className="block w-full rounded-s-lg border-gray-200 px-4 py-3 ps-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
				<div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
					<i className="ri-search-2-line flex-shrink-0 text-gray-400 dark:text-neutral-500 text-md"></i>
				</div>
				<button type="button" className="inline-flex items-center justify-center gap-x-2 rounded-e-md border border-transparent bg-amber-500 px-4 py-3 text-sm font-semibold text-white hover:bg-amber-700 disabled:pointer-events-none disabled:opacity-50">Search</button>
			</div>
		</>
	)
}