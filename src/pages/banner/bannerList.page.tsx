import { useState } from "react"
import { Heading1 } from "../../components/common/typography/typography.component"
import { PrimaryBtn } from "../../components/common/CTA/buttons.component"

const BannerPage = () => {
	const [paginationData, setPaginationData] = useState({
		currentPage: 1,
		totalpage: 1,
	})
	return (
		<>
		<div className="flex justify-between">

		<Heading1 value={"Banner page"}/>
		<PrimaryBtn value="Create banner" href="/admin/banner/create" iconsName="ri-file-list-line"/>
		</div>
			<div className="mx-auto max-w-[100rem] px-4 py-10">
				<div className="flex flex-col">
					<div className="-m-1.5 overflow-x-auto">
						<div className="inline-block min-w-full p-1.5 align-middle">
							<div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900">
								<div className="grid gap-3 border-b border-gray-200 px-6 py-4 md:flex md:items-center md:justify-between dark:border-neutral-700">
									<div className="sm:col-span-1">
										<label className="sr-only">Search</label>
										<div className="relative">
											<input type="text" id="table-search" name="table-search" className="block w-full rounded-lg border-gray-200 px-3 py-2 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search" />
											<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
												<i className="ri-search-2-line text-gray-400 dark:text-neutral-500"></i>
											</div>
										</div>
									</div>
								</div>


								<table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
									<thead className="bg-gray-50 dark:bg-neutral-800">
										<tr>
											<th scope="col" className="px-6 py-3 text-start">
												<div className="flex items-center gap-x-2">
													<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> Product </span>
												</div>
											</th>

											<th scope="col" className="px-6 py-3 text-start">
												<div className="flex items-center gap-x-2">
													<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> Reviewer </span>
												</div>
											</th>

											<th scope="col" className="px-6 py-3 text-start">
												<div className="flex items-center gap-x-2">
													<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> Review </span>
												</div>
											</th>

											<th scope="col" className="px-6 py-3 text-start">
												<div className="flex items-center gap-x-2">
													<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> Date </span>
												</div>
											</th>

											<th scope="col" className="px-6 py-3 text-start">
												<div className="flex items-center gap-x-2">
													<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> Status </span>
												</div>
											</th>

											<th scope="col" className="px-6 py-3 text-end">
												<div className="flex items-center gap-x-2">
													<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"> Actions </span>
												</div>
											</th>

										</tr>
									</thead>

									<tbody className="divide-y divide-gray-200 dark:divide-neutral-700">

										<tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
											<td className="size-px whitespace-nowrap align-top">
												<a className="block p-6" href="#">
													<div className="flex items-center gap-x-4">
														<img className="size-[38px] shrink-0 rounded-lg" src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80" alt="Product Image" />
														<div>
															<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Brown Hat</span>
														</div>
													</div>
												</a>
											</td>
											<td className="size-px whitespace-nowrap align-top">
												<a className="block p-6" href="#">
													<div className="flex items-center gap-x-3">
														<img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Product Image" />
														<div className="grow">
															<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">Christina Bersh</span>
															<span className="block text-sm text-gray-500 dark:text-neutral-500">christina@site.com</span>
														</div>
													</div>
												</a>
											</td>
											<td className="h-px w-72 min-w-72 align-top">
												<a className="block p-6" href="#">
													<div className="mb-2 flex gap-x-1">
														<svg className="size-3 shrink-0 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
															<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
														<svg className="size-3 shrink-0 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
															<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
														<svg className="size-3 shrink-0 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
															<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
														<svg className="size-3 shrink-0 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
															<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
														<svg className="size-3 shrink-0 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
															<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
													</div>
													<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">I just love it!</span>
													<span className="block text-sm text-gray-500 dark:text-neutral-500">I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a mens" hat.</span>
												</a>
											</td>
											<td className="size-px whitespace-nowrap align-top">
												<a className="block p-6" href="#">
													<span className="text-sm text-gray-600 dark:text-neutral-400">10 Jan 2022</span>
												</a>
											</td>
											<td className="size-px whitespace-nowrap align-top">
												<a className="block p-6" href="#">
													<span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-1.5 py-1 text-xs font-medium text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
														<svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
															<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
														</svg>
														Published
													</span>
												</a>
											</td>
											<td className="size-px whitespace-nowrap">
												<div className="px-6 py-1.5">
													<a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">
														Edit
													</a>
												</div>
											</td>
										</tr>

									</tbody>
								</table>

								<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
									<div className="inline-flex items-center gap-x-2">
										<p className="text-sm text-gray-600 dark:text-neutral-400">
											Showing:
										</p>
										<div className="max-w-sm space-y-3">
											<select className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
												<option>20</option>
											</select>
										</div>
										<p className="text-sm text-gray-600 dark:text-neutral-400">
											of {paginationData.totalpage}
										</p>
									</div>

									<div>
										<div className="inline-flex gap-x-2">
											<button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
												<svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
												Prev
											</button>

											<button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
												Next
												<svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BannerPage