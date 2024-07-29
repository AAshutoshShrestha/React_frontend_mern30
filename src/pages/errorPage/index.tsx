const NotFoundPage = () => {
	return (
		<>
			<main className="max-w-[50rem] flex flex-col mx-auto size-full">
				<div className="text-center py-36 px-4 sm:px-6 lg:px-8">
					<h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
					<p className="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong.</p>
					<p className="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
					<div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
						<a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none" href="/">
							<i className="ri-arrow-left-s-line me-2"></i>
							Back to Home
						</a>
					</div>
				</div>
			</main>
		</>
	)
}

export default NotFoundPage;