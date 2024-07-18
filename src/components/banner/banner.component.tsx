// import { useEffect, useState } from "react"


export const HomeBanner = () => {

	// const [Banner,setBanner] = useState([])
	// const [loading,setLoading] = useState(true)

	// const getBanners = async () => {

	// }
	
	// useEffect(() => {
	// 	return() => {
	// 		getBanners();
	// 		setBanner(responce.data.result)
			
	// 	}
	// },[])
	// useEffect(() => {
	// 	return() => {
	// 		console.log("");
	// 		setLoading(false)
			
	// 	}
	// },[loading])
	return (
		<>
		{/* loading ? <>loading.....</> : <> */}
		{/* loop banner images */}
			<div className="relative">

				<div className="hs-carousel relative overflow-hidden w-full min-h-64">
					<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
					<div className="hs-carousel-slide">
						1
					</div>
					<div className="hs-carousel-slide">
						2
					</div>
					<div className="hs-carousel-slide">
						3
					</div>
					</div>
				</div>

				<button type="button" className="hs-carousel-prev">
					<span aria-hidden="true">«</span>
					<span className="sr-only">Previous</span>
				</button>
				<button type="button" className="hs-carousel-next">
					<span className="sr-only">Next</span>
					<span aria-hidden="true">»</span>
				</button>
			</div>
			{/* </> */}

		</>
	)
}