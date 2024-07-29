import { Outlet } from "react-router-dom"
import NavBar from "../../components/nav"
import { Footer } from "../../components/sections/footer.component"
import AuthContext from "../../context/auth.content"
import { useContext } from "react"


const HomeLayout =  () => {
	const LoggedInUser = useContext(AuthContext)
	console.log(LoggedInUser);
	return (
		<>
			<NavBar />
				<Outlet/>
			<Footer />
		</>
	)
}

export default HomeLayout