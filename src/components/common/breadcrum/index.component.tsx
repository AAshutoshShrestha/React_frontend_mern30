interface BreadcrumbProps {
	mainpage : string,
	mainUrl : string,
	subpage : string,
	subpageUrl : string,
	slug:string
}

export const BreadcrumbProducts = ({mainpage,mainUrl,subpage,subpageUrl,slug}:BreadcrumbProps) => {
	return (
		<>
			<ol className="flex items-center whitespace-nowrap ms-24 my-12">
				<li className="inline-flex items-center">
					<a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href={mainUrl}>
						{mainpage}
					</a>
					<i className="ri-arrow-right-s-line mx-2"></i>
				</li>
				<li className="inline-flex items-center">
					<a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href={subpageUrl}>
					{subpage}
						<i className="ri-arrow-right-s-line mx-2"></i>
					</a>
				</li>
				<li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200" aria-current="page">
					{slug}
				</li>
			</ol>

		</>
	)
}