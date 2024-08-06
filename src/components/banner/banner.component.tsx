// import { useEffect, useState } from "react"

import { useEffect, useState } from "react";
import bannerSvc from "../../pages/AdminBanner/banner.service";
import LoadingSpinner from "../common/loading/index.component";
import { Carousel } from "flowbite-react";


export const HomeBanner = () => {

	const [Banner, setBanner] = useState([])
	let [loading, setLoading] = useState(true)
	const getBanners = async () => {
		try {
			const response: any = await bannerSvc.getRequest("/banner/list-home");
			setBanner(response.result);
			setLoading(false)
		} catch (exception) {
			// handling 
		} finally {
			// 
		}
	}

	useEffect(() => {
		getBanners();
	}, [])

	return (
		<>
			<div className="h-80 sm:h-64 2xl:h-[550px] ">
				{
					loading ? <><LoadingSpinner /></>
						:
						<>
							<Carousel slideInterval={5000}>
								{
									Banner && Banner.map((BannerImage: any, index: number) => (
										<a href={BannerImage.link} target="_banner" key={index}>
											<img src={import.meta.env.VITE_IMAGE_URL + '/banner/' + BannerImage.image} alt="..." />
										</a>
									))
								}
							</Carousel>


						</>
				}
			</div>



		</>
	)
}