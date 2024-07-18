interface BtnProps {
	href : string,
	value :  string
	icons ?:  string

}
export const PrimaryBtn = ({href, value,icons }: BtnProps) => {
	return (
		<>
			<a href={href} className={'inline-flex h-12 items-center rounded-full bg-gray-900 px-8 text-sm font-semibold text-white transition duration-200 hover:bg-gray-300 hover:text-black focus:ring-4 focus:ring-gray-200 m-2'}>
				<span className="me-2">{icons}</span>
				{value}</a>
		</>
	)
}


export const SecondayBtn = ({href, value }: BtnProps) => {
	return (
		<>
			<a href={href} className="inline-flex h-12 items-center rounded-full bg-gray-100 px-8 text-sm font-semibold text-gray-900 transition duration-200 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-200">{value}</a>
		</>
	)
}