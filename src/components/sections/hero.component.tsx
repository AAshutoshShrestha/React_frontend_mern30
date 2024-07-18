import { PrimaryBtn, SecondayBtn } from "../common/CTA/buttons.component"
import { ImageOnlyCard } from "../cards/image.component"

export const HeroSection = () => {
	return (
		<>
			<div className="max-w-[150rem] p-8 sm:p-20 mx-auto">
				<div className="flex flex-wrap items-center ">
					<div className="w-auto lg:w-2/5">
						<div>
							<div className="flex flex-wrap items-center gap-6">
								<div className="h-px w-16 bg-gray-900"></div>
								<a href="#">
									<i className="ri-instagram-fill text-2xl hover:text-3xl"></i>
								</a>
								<a href="#">
									<i className="ri-facebook-fill text-2xl hover:text-3xl"></i>
								</a>
								<a href="#">
									<i className="ri-twitter-x-fill text-2xl hover:text-3xl"></i>
								</a>
							</div>
							<h1 className="font-heading mb-8 max-w-lg text-8xl uppercase">Elevate your style"</h1>
							<p className="mb-12 max-w-lg text-lg font-semibold text-gray-500">Collections, meticulously crafted to embody timeless elegance and sophistication. Discover a Wide Range of elegence that sets you apart</p>
							<div className="flex flex-wrap gap-4">
								<PrimaryBtn href="#" value="Shop Now" />
								<SecondayBtn href="" value="Explore More" />
							</div>
						</div>
					</div>

					<div className="w-auto lg:w-3/5">
						<div className="flex flex-wrap items-center pt-8">
							<div className="w-full md:w-2/3">
								<a href="#" className="group">
									<div className="relative overflow-hidden rounded-2xl h-[550px]">
										<ImageOnlyCard src="https://i.pinimg.com/736x/de/2a/01/de2a019832485e6e600c1c39902b82f2.jpg" />
										<div className="absolute bottom-6 w-full">
											<h2 className="font-heading text-center text-6xl uppercase text-white">Linen Shirts</h2>
										</div>
									</div>
								</a>
							</div>
							<div className="w-full md:w-1/3 px-2 hidden md:flex">
								<a href="#" className="group">
									<div className="relative overflow-hidden rounded-2xl h-[550px]">
										<ImageOnlyCard src="https://i.pinimg.com/736x/66/f3/9c/66f39c6c2428234104926ea6279c6ea9.jpg" className="" />
										<div className="absolute bottom-32 left-1/2 -translate-x-1/2 transform">
											<h2 className="font-heading my-12 -rotate-90 transform whitespace-nowrap text-center text-5xl uppercase text-white">#Trending 2024</h2>
										</div>
									</div>
								</a>
							</div>


						</div>
					</div>
				</div>
			</div>
		</>

	)
}