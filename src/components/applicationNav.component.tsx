import { SearchField } from "./common/input/index.component"

export const ApplicationNav = () => {
	return (
		<>
			<header className="flex w-full flex-wrap border-b bg-white py-2 text-sm sm:flex-nowrap sm:justify-start sm:py-4 dark:border-neutral-700 dark:bg-neutral-900">
				<nav className="mx-auto flex w-full max-w-7xl basis-full items-center px-4 sm:px-6 lg:px-8">
					<div className="ms-auto flex w-full items-center justify-end sm:order-3 sm:justify-between sm:gap-x-3">
						<div className="sm:hidden">
							<button type="button" className="inline-flex size-[38px] flex-shrink-0 items-center justify-center gap-2 rounded-full bg-white align-middle text-xs font-medium text-gray-700 transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white dark:focus:ring-neutral-700 dark:focus:ring-offset-gray-800">
								<svg className="size-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="11" cy="11" r="8" />
									<path d="m21 21-4.3-4.3" />
								</svg>
							</button>
						</div>

						<SearchField />

						<div className="flex flex-row items-center justify-end gap-2">
							<button type="button" className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-gray-500 hover:bg-amber-100 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700">
								<i className="ri-notification-3-line"></i>
							</button>
							<button type="button" className="hs-dropdown-toggle inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700" data-hs-offcanvas="#hs-offcanvas-right">
								<svg className="size-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
							</button>

							<div className="hs-dropdown hs-dropdown-example relative inline-flex">
								<button id="hs-dropdown-example" type="button" className="hs-dropdown-toggle inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center gap-x-2 rounded-full text-sm font-semibold text-gray-500 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700">
									<img className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
								</button>

								<div className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-10 mt-2 hidden w-56 min-w-60 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-example">
									<a className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#"> Newsletter </a>
									<a className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#"> Purchases </a>
									<a className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#"> Downloads </a>
									<a className="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" href="#"> Team Account </a>
								</div>
							</div>

						</div>
					</div>
				</nav>
			</header>
		</>
	)
}