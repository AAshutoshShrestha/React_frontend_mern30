import { NavLink } from "react-router-dom"

const EmptyTable = ({ msg, btnTxt, btnUrl }: { msg: string, btnTxt: string, btnUrl: string }) => {
	return (
		<>
			<div className="mx-auto flex min-h-[450px] w-full max-w-sm flex-col justify-center px-6 py-4">
				<div className="flex size-[46px] items-center justify-center rounded-lg bg-gray-100 dark:bg-neutral-800">
					<i className="ri-file-list-line text-xl"></i>
				</div>

				<h2 className="mt-5 font-semibold text-gray-800 dark:text-white">{msg}</h2>

				<div className="mt-5 flex flex-col gap-2 sm:flex-row">
					<NavLink to={btnUrl} className="inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
						<i className="ri-add-line text-lg"></i>

						{btnTxt}
					</NavLink>
				</div>
			</div>


		</>
	)
}

export default EmptyTable