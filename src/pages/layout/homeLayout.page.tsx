import { Outlet } from "react-router-dom"
import NavBar from "../../components/nav"
import { Footer } from "../../components/sections/footer.component"
import { AdsSection1 } from "../../components/sections/advertisement.component"

const HomeLayout =  () => {
	return (
		<>
			<NavBar />
				<Outlet/>
			<AdsSection1
				image_title="Knitware"
				image_url="https://i.pinimg.com/736x/66/f3/9c/66f39c6c2428234104926ea6279c6ea9.jpg"
			/>

			<Footer />
		</>
	)
}

export default HomeLayout