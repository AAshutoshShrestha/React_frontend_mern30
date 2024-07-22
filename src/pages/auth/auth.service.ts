import HttpService from "../../services/http.service";
import * as Yup from "yup";

class AuthService  extends HttpService{
	registerUserDTO = () => {
		const RegisterUserDTO = Yup.object({
			name: Yup.string().matches(/^[a-zA-Z ]+$/, "Name is compulsary")
				.min(2)
				.max(50)
				.required(),
	
			email: Yup.string()
				.email()
				.required(),
	
			password: Yup.string()
				.matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/, "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-25 characters long.")
				.min(8)
				.max(25)
				.required(),
	
			confirmPassword: Yup.string()
				.oneOf([Yup.ref('password')])
				.required(),
	
			address: Yup.string()
				.nullable()
				.optional(),
	
			phone: Yup.string()
				.matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Invalid Phone Number")
				.min(10)
				.max(20)
				.required(),
	
			image: Yup.mixed(),
	
			role: Yup.string()
				.matches(/^(admin|seller|customer)/, "Role can be admin, seller or customer only")		//validate 
				.required()
		})
		return RegisterUserDTO
	}
}


const authSvc = new AuthService()
export default authSvc