import { PrimaryBtn } from "../common/CTA/buttons.component"

export const SingleProductSection = () => {
	return (
		<>
			<div className="max-w-[150rem] p-12 sm:p-32 mx-auto">
				<div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">

					<div className="lg:col-span-5">
						<div className="space-y-6 sm:space-y-8">
							<div className="space-y-2 md:space-y-4">
								<p className="text-gray-400 dark:text-neutral-500">Ideal for summer</p>
								<h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
									Polo Shirt
								</h2>
								<p className="text-gray-500 dark:text-neutral-500">
									Crafted from 100% knitted cotton for an exceptionally smooth and soft texture. Available in three classic colors.
								</p>
							</div>

							<ul className="space-y-2 sm:space-y-4">
								<li className="flex space-x-3">

									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-800/30 dark:text-amber-500">
										<svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
									</span>

									<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
										<span className="font-semibold">Crafted from 100% knitted cotton</span>
									</span>
								</li>

								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-800/30 dark:text-amber-500">
										<svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
									</span>

									<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
										exceptionally smooth and soft texture
									</span>
								</li>

								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-800/30 dark:text-amber-500">
										<svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
									</span>

									<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
										Scale budgets <span className="font-bold">efficiently</span>
									</span>
								</li>
							</ul>
							<PrimaryBtn href="#" value="Shop Now" />
						</div>
					</div>
					<div className="lg:col-span-7">
						<div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
							<div className="col-span-4">
								<img className="rounded-xl" src="https://parijanofficial.com/cdn/shop/files/B163607F-F35A-4997-9833-50DCF05372B6.jpg" alt="Image Description"/>
							</div>

							<div className="col-span-3">
								<img className="rounded-xl" src="https://parijanofficial.com/cdn/shop/files/9A47D94C-DD13-41E9-A6FD-DBF439D642F1.jpg" alt="Image Description"/>
							</div>

							<div className="col-span-5">
								<img className="rounded-xl" src="https://parijanofficial.com/cdn/shop/files/IMG_0003.jpg" alt="Image Description"/>
							</div>
						</div>
					</div>




				</div>
			</div>

		</>
	)
}