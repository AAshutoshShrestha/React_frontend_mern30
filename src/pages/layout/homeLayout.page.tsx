import { Outlet } from "react-router-dom"
import NavBar from "../../components/nav"
import { Footer } from "../../components/sections/footer.component"

const HomeLayout =  () => {
	return (
		<>
			<NavBar />
				<Outlet/>
			<Footer />
		</>
	)
}

export default HomeLayout