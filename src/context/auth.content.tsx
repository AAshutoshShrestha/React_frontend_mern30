import { createContext, useEffect, useState } from "react";
import LoadingSpinner from "../components/common/loading/index.component";
import authSvc from "../pages/auth/auth.service";

let AuthContext = createContext({})

export const AuthProvider = ({ children }: { children: any }) => {
	const [LoggedInUser, setLoggedInUser] = useState()
	const [loading, setLoading] = useState(true)

	const getLoggedInUser = async () => {
		setLoading(true)
		try {
			const responce: any = await authSvc.getRequest("/auth/me/", { Auth: true })
			setLoggedInUser(responce.result)
			setLoading(false)

		} catch (exception: any) {
			// error 
			if (exception.status === 401) {
				if (exception.data.message === "jwt expired") {
					// refesh token call => 
					// success locastorage _act => update, ref
					// reload => navigate(0)
				}

				localStorage.removeItem("_at")
				localStorage.removeItem("_rt")
				// 
			}
			setLoading(false)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem("_at")
		if (token) {
			getLoggedInUser()
		} else {
			setLoading(false)
		}

	}, [])

	return (
		<AuthContext.Provider value={{ LoggedInUser, setLoggedInUser }}>
			{
				loading ? <><LoadingSpinner /></> : <>{children}</>
			}
		</AuthContext.Provider>
	)
}

export default AuthContext;