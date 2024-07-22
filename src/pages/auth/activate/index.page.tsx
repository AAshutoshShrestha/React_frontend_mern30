import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/common/loading/index.component";
import { useParams } from "react-router-dom";
import authSvc from "../auth.service";

const ActivationPage = () => {
	const [loading, setLoading] = useState(true)
	const params = useParams()
	
	const getVerified = async () => {
		try {
			const token = params.token
			const response = await authSvc.getRequest("/auth/register"+token)
			return response
		} catch (exception) {
			// handeling
			throw exception;
		}
	}

	useEffect(() => {
		getVerified
	},[])

	return (
		<>
			{
				loading ? <><LoadingSpinner /></> : <></>

			}
		</>
	)
}

export default ActivationPage;