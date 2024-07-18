interface formInputProps {
	fieldName: string,
	name:string,
	msg?:string | null | undefined
}
export const TextFielWithLabel = ({fieldName,name,msg}:formInputProps) => {
	return (
		<>
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{fieldName}
			</label>

			<input
				type="text"
				id={name}
				className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
			/>
			<span className="mt-2 text-red-500 tetx-sm">{msg}</span>
		</>
	)
}