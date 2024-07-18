// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Heading1 } from "../../../components/common/typography/typography.component";
import { PrimaryBtn } from "../../../components/common/CTA/buttons.component";
// import * as Yup from "yup";

const LoginPage = () => {
	// const LoginDTO = Yup.object{
	// 	email: Yup.string().required("Email is required").email("Invalid email format"),
	// 	password: Yup.string().required("Password is required")
	// }
	
	const { register, handleSubmit, formState: { errors } } = useForm({
		// resolver =yupResolver(LoginDTO)
	})

	const LoginAction = (data: object) => {
		// todo
		console.log(data);

	}
	return (
		<>
			<section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
				<div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-4 md:p-12 sm:w-2/4 lg:w-full">


					<Heading1 value="Log in to your account" className="font-light text-left text-amber-600" />
					<div className="pb-6 space-y-2 border-b border-gray-200 ">
						<PrimaryBtn href="#" value="Continue with google" icons="" />
						<PrimaryBtn href="#" value="Continue with Facebook" icons="" />

					</div>
					<form onSubmit={handleSubmit(LoginAction)} className="p-4 space-y-4">
						<label className="block mb-1 text-xs font-medium text-gray-700">
							Your Email
						</label>
						<input
							className="form-input"
							type="email"
							{...register("email", { required: true })}

							placeholder="Ex. james@bond.com"
						/>
						<span className="text-sm text-red">{errors?.email ? "Email is required" : ""}</span>


						<label className="block">
							<span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
							<input
								{...register("password", { required: true })}

								className="form-input" type="password" placeholder="••••••••" required />
						<span className="text-sm text-red">{errors?.password ? "Email is required" : ""}</span>
						</label>
						<div className="flex items-center justify-between">
							<label className="flex items-center">
								<input type="checkbox" className="form-checkbox" />
								<span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">Remember me</span>
							</label>
							<input type="submit" className="btn btn-primary" value="Login" />
						</div>
					</form>
					<div className="my-6 space-y-2">
						<p className="text-xs text-gray-600">
							Don't have an account?
							<a href="#" className="text-purple-700 hover:text-black">Create an account</a>
						</p>
						<a href="#" className="block text-xs text-purple-700 hover:text-black">Forgot password?</a>
						<a href="#" className="block text-xs text-purple-700 hover:text-black">Privacy & Terms</a>
					</div>
				</div>
				<div className="col-span-1 lg:col-span-8">
					<img
						src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
						alt="3 women looking at a laptop"
						className="object-cover w-full h-64 min-h-full bg-gray-100"
						loading="lazy"
					/>
				</div>
			</section>


		</>
	)
}

export default LoginPage;