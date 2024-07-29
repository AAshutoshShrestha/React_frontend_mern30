import { createContext, useEffect, useState } from "react";
import LoadingSpinner from "../components/common/loading/index.component";
import authSvc from "../pages/auth/auth.service";

let AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: any }) => {
	const [LoggedInUser, setLoggedInUser] = useState(false)
	const [loading, setLoading] = useState(true)

	const getLoggedInUser = async () => {
		setLoading(true)
		try {
			const responce:any = await authSvc.getRequest("/auth/me/", {Auth:true})
			setLoggedInUser(responce.result)
			setLoading(false)

		} catch (exception:any) {
			if(exception.status === 401){
				if(exception.data.message === "jwt expired"){
					localStorage.removeItem("_at")
					localStorage.removeItem("_rt")
				}
			}
			console.log(exception);
		}
	}

	useEffect(() => {
		const token = localStorage.getItem("_at")
		if (token){
			getLoggedInUser()

		}else{
			setLoading(false)
		}
		
	}, [])
	
	return (
		<AuthContext.Provider value={{LoggedInUser, setLoggedInUser}}>
			{ 
				loading ? <><LoadingSpinner/></> : <>{children}</>
			}
		</AuthContext.Provider>
	)
}

export default AuthContext;