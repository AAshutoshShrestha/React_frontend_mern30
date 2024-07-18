export const AboutSection = () => {
	return (
		<>
			<section className="p-8 sm:p-20 mx-auto bg-black">
				<div className="container mx-auto">
					<div className="m-20 max-w-md">
						<h3 className="mb-8 text-3xl font-bold text-white sm:text-6xl">
							<span className="block">Let’s discover</span>
							<span>why we are the best</span>
						</h3>
						<p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing a elit. Nullam to the dictum aliquet accumsan porta lectus ridicul in these mattis.</p>
					</div>

					<div className="-mx-4 flex flex-wrap">
						<div className="mb-6 w-full px-4 sm:w-1/2 lg:w-1/4">
							<div className="mx-auto flex h-full max-w-md flex-col px-10 py-12">
								<i className="ri-instance-line text-6xl text-amber-600"></i>
								<h4 className="mt-auto pt-8 text-2xl font-bold text-white">Quality Item</h4>
							</div>
						</div>
						<div className="mb-6 w-full px-4 sm:w-1/2 lg:w-1/4">
							<div className="mx-auto flex h-full max-w-md flex-col bg-gray-900 px-10 py-12">
								<i className="ri-truck-line text-7xl text-amber-600"></i>

								<h4 className="mt-auto pt-8 text-2xl font-bold text-white">Fast Delivery</h4>
							</div>
						</div>
						<div className="mb-6 w-full px-4 sm:w-1/2 lg:w-1/4">
							<div className="mx-auto flex h-full max-w-md flex-col px-10 py-12">
								<i className="ri-gift-2-line text-6xl text-amber-600"></i>
								<h4 className="mt-auto pt-8 text-2xl font-bold text-white">Surprise Gifts</h4>
							</div>
						</div>
						<div className="mb-6 w-full px-4 sm:w-1/2 lg:w-1/4">
							<div className="mx-auto flex h-full max-w-md flex-col bg-gray-900 px-10 py-12">
								<i className="ri-message-3-line text-6xl text-amber-600"></i>

								<h4 className="mt-auto pt-8 text-2xl font-bold text-white">Best Support</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>

	)
}