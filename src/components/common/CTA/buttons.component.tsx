interface BtnProps {
	href?: string,
	value: string
	iconName?: string
	loading?: boolean

}
export const PrimaryBtn = ({ href, value, iconName }: BtnProps) => {
	return (
		<>
			<a href={href} className={'inline-flex h-12 items-center rounded-full bg-gray-900 px-8 text-sm font-semibold text-white transition duration-200 hover:bg-gray-300 hover:text-black focus:ring-4 focus:ring-gray-200 m-2'}>
				<span className="me-2">
					<i className={`${iconName} text-md`}  ></i>
				</span>
				{value}</a>
		</>
	)
}


export const SecondayBtn = ({ href, value }: BtnProps) => {
	return (
		<>
			<a href={href} className="inline-flex h-12 items-center rounded-full bg-gray-100 px-8 text-sm font-semibold text-gray-900 transition duration-200 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-200">{value}</a>
		</>
	)
}

export const SubmitButton = ({ loading = false, value, iconName }: BtnProps) => {
	return (
		<>
			<div className="mt-5 flex justify-center gap-x-2">
				<button 
				type="submit" 
				disabled={loading} 
				className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50" >
					<span className="me-2">
						<i className={`${iconName} text-md`}  ></i>
					</span>

					{value}
					
					</button>
			</div>
		</>
	)
}

export const CancelButton = ({ loading = false, value, iconName }: BtnProps) => {
	return (
		<>
			<div className="mt-5 flex justify-center gap-x-2">
				<button
					type="reset"
					disabled={loading}
					className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50" >
					<span className="me-2">
						<i className={`${iconName} text-md`}  ></i>
					</span>
					{value}
				</button>
			</div>
		</>
	)
}