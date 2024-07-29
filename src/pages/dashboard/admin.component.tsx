import { TableDashboardSample } from "../../components/Table/index.component";

const DashboardMain = () => {
	return (
		<>

			<div className="mx-auto max-w-[85rem] py-4 px-6">
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
					<div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<div className="flex justify-between gap-x-3 p-4 md:p-5">
							<div>
								<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">Total users</p>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl font-medium text-gray-800 sm:text-2xl dark:text-neutral-200">72,540</h3>
								</div>
							</div>
							<div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
								<i className="ri-group-line text-md"></i>
							</div>
						</div>
					</div>

					<div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<div className="flex justify-between gap-x-3 p-4 md:p-5">
							<div>
								<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">Total users</p>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl font-medium text-gray-800 sm:text-2xl dark:text-neutral-200">72,540</h3>
								</div>
							</div>
							<div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
								<i className="ri-group-line text-md"></i>
							</div>
						</div>
					</div>
					<div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<div className="flex justify-between gap-x-3 p-4 md:p-5">
							<div>
								<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">Total users</p>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl font-medium text-gray-800 sm:text-2xl dark:text-neutral-200">72,540</h3>
								</div>
							</div>
							<div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
								<i className="ri-group-line text-md"></i>
							</div>
						</div>
					</div>
					<div className="flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<div className="flex justify-between gap-x-3 p-4 md:p-5">
							<div>
								<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">Total users</p>
								<div className="mt-1 flex items-center gap-x-2">
									<h3 className="text-xl font-medium text-gray-800 sm:text-2xl dark:text-neutral-200">72,540</h3>
								</div>
							</div>
							<div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-900 dark:text-blue-200">
								<i className="ri-group-line text-md"></i>
							</div>
						</div>
					</div>
				</div>
			</div>

				<TableDashboardSample/>
			
			<div className="mb-4 grid grid-cols-2 gap-4">
				<div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
				<div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
				<div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
				<div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
			</div>
			
		</>
	)
}

export default DashboardMain;