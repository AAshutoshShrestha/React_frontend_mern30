// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Heading1 } from "../../../components/common/typography/typography.component";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { InputLabel, TextInputComponent } from "../../../components/common/input/index.component";
import { INPUT_TYPE } from "../../../components/common/input/input.contract";

const LoginPage = () => {
	const LogginDto = Yup.object({
		email: Yup.string().required("Email is required").email("Invalid email format"),
		password: Yup.string()
			.required("Password is required")
			.min(2,"Password must be minimum of 2 characters")
			.max(25,"Password must be maximum of 25 characters")
	})

	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(LogginDto)
	})

	const LoginAction = (data: object) => {
		// todo
		console.log(data);

	}
	return (
		<>
			<section className="grid grid-cols-1 gap-6 lg:grid-cols-12">

				<div className="col-span-1 lg:col-span-7">
					<img
						src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
						alt="3 women looking at a laptop"
						className="object-cover w-full h-64 min-h-full bg-gray-100"
						loading="lazy"
					/>
				</div>
				<div className="w-full col-span-1 p-4 mx-auto mt-6 lg:col-span-5 md:p-12 sm:w-2/4 lg:w-full">


					<Heading1 value="Log in to your account" className="font-light text-left text-amber-600" />


					<div className="pb-6 space-y-2">

						<button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
							<i className="ri-google-fill text-lg"></i>
							Sign in with Google
						</button>

						<button type="button" className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
							<i className="ri-facebook-fill text-lg"></i>
							Sign in with Facebook
						</button>

						<button type="button" className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
							<i className="ri-github-line text-lg"></i>
							Sign in with Github
						</button>

						<div className="py-4 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>


					</div>

					<form onSubmit={handleSubmit(LoginAction)} className="p-4 space-y-4">
						<InputLabel htmlFor="email" value="Enter Email" />

						<TextInputComponent
							control={control}
							name="email"
							type={INPUT_TYPE.EMAIL}
							msg={errors?.email ? "Email is required": ""}
						/>

						<InputLabel htmlFor="password" value="Enter Password" />

						<TextInputComponent
							control={control}
							name="password"
							type={INPUT_TYPE.PASSWORD}
							msg={errors?.password ? "Password is requires" : ""}
						/>

						<div className="text-center">
							<button type="submit" className="h-12 items-center rounded-lg bg-gray-900 px-12 text-sm font-semibold text-white transition duration-200 hover:bg-gray-300 hover:text-black focus:ring-4 focus:ring-gray-200">Login</button>
						</div>
					</form>
					<div className="bg-gray-100 px-4 py-4 rounded-md">
						<div className="flex justify-between">
							<a href="#" className="block text-xs text-amber-600 hover:text-gray-400">Forgot password?</a>
							<a href="#" className="block text-xs text-amber-600 hover:text-gray-400">Privacy & Terms</a>
						</div>
						<p className="mt-2 text-xs font-light text-center text-gray-400"> Don't have an account? <a href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</a></p>

					</div>
				</div>
			</section>


		</>
	)
}

export default LoginPage;