import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../components/common/loading/index.component";
import AuthContext from "../context/auth.content";

const AllowUser = ({ allowuser, children }: { allowuser: string, children: any }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [giveAccess, setAccess] = useState<boolean>(false);

	const auth: any = useContext(AuthContext)

	useEffect(() => {
		if (auth.LoggedInUser) {
			if (allowuser === auth.LoggedInUser.role) {
				setAccess(true);
            } else {
                setAccess(false)
            }
            setLoading(false)
        } else {
            setLoading(false)
        }

	}, [auth])

	return (
		<>
			{
				loading ?
					<>
						<LoadingSpinner />
					</> :
					<>
						{
							giveAccess ? <>{ children }</> : <>you donot have permision to access</>
						}
					</>
			}
		</>
	)
}

export default AllowUser