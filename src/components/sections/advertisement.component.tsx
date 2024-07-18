import { ImageOnlyCard } from "../cards/image.component"
import { PrimaryBtn } from "../common/CTA/buttons.component"

interface adsProps {
	image_title: string,
	image_url: string,
}

export const AdsSection1 = ({ image_title, image_url }: adsProps) => {
	return (
		<>
			<div className="max-w-[150rem] p-8 mx-auto">
				<div className="flex flex-wrap">
					<div className="w-full lg:w-7/12">
						<div className="flex h-full flex-col justify-between rounded-2xl bg-amber-500 p-12">
							<h2 className="font-heading max-w-2xl text-5xl uppercase sm:text-8xl pb-4">Improve your style with our Premium collection</h2>
							<div>
								<p className="mb-8 max-w-xl text-lg font-semibold">Stay Ahead of the Fashion Game with Our Comprehensive Trend Reports, Covering Everything from Runway to Street Style</p>

								<PrimaryBtn href="#" value="Shop Now" />

							</div>
						</div>
					</div>

					<div className="w-full px-2 lg:w-5/12 pt-2">
						<a href="#" className="group ">
							<div className="relative overflow-hidden rounded-2xl h-[650px]">
								<ImageOnlyCard src={image_url} />

								<div className="absolute bottom-8 left-8">
									<h2 className="font-heading max-w-xs text-6xl uppercase text-white sm:text-8xl">{image_title}</h2>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}


export const AdsSection2 = ({ image_title }: adsProps) => {
	return (
		<>
			<div className="h-[40rem] w-full bg-cover bg-center">

				<div className="flex h-full w-full items-center bg-gray-900/40 md:px-24 px-8">
					<div className="lg:w-1/2 bg-white px-8 py-12">
						<h2 className="text-3xl font-semibold text-gray-700 lg:text-4xl">{image_title}</h2>

						<p className="mt-4 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, eum modi incidunt adipisci quod porro et non exercitationem quasi, maxime culpa ut nemo ab delectus saepe iste nostrum explicabo a?</p>
					</div>
				</div>
			</div>

		</>
	)
}