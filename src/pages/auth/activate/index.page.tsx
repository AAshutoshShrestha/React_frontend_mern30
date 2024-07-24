import LoadingSpinner from "../../../components/common/loading/index.component";
import { useParams } from "react-router-dom";
import authSvc from "../auth.service";
import { useEffect, useState } from "react";

const ActivationPage = () => {

	const [loading, setLoading] = useState(true);
	let [msg, setMsg] = useState("");
	let [isExpired, setIsExpire] = useState(false);

	const params = useParams()

	const getVerified = async () => {
		try {
			const token = params.token
			await authSvc.getRequest("/auth/activate/" + token)
			setMsg("Your account has been activated Successfully.Please Login to continue")

		} catch (exception: any) {
			// handeling
			if (+exception.status === 400 && exception.data.result && exception.data.result.hasOwnProperty('token') && exception.data.result.token === "expired") {
				setMsg("Your Token has been Expired. Please re-verify")
				setIsExpire(true)
			} else {
				setMsg("Your account has been already Activated. Please continue with login ")
			}
		}
		finally {
			setLoading(false)
		}
	}

	const resendToken = async () => {
		try {

			setLoading(true)
			await authSvc.getRequest("/auth/resend-token/" + params.token)
			setMsg("A new activation email has been send to your registered email. Please check for further process")

		} catch (exception) {
			setMsg("There was a problem while sending you the activation email. Please contact the Admin ")

		} finally {
			setLoading(false)
			setIsExpire(false)

		}
	}

	useEffect(() => {
		getVerified()
	}, [])

	return (
		<>
			<section className="min-h-screen mt-24 -mb-20">

				{
					loading ? <>
						<LoadingSpinner />
					</> : <>
						<div className="text-center py-10 px-4 sm:px-6 lg:px-8">
							<h3 className="block text-2xl font-bold text-gray-800 dark:text-white">
								{msg}
							</h3>

							{
								isExpired ? <>
									<div className="mt-16 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">

										<button onClick={resendToken} type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
											Resend Activation Token
										</button>
									</div>
								</> : <>
									<div className="mt-16 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
										<a href="/" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
											<span className="me-2"><i className="ri-arrow-left-s-line"></i></span>
											Back To Home
										</a>

										<span className="mx-4">or</span>


										<a href="/sign-in" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-700 text-white hover:bg-blue-600 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
											Continue
											<span className="ms-2"><i className="ri-arrow-right-s-line"></i></span>
										</a>



									</div>
								</>
							}

						</div>
					</>
				}
			</section>
		</>
	)
}

export default ActivationPage;