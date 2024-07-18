// export const Heading1 = ({children}:any) =>{

import { ReactElement } from "react"

interface HeadingProps {
	value ?: string | ReactElement,
	className ?:  string | null | ReactElement,
	children ?: string | ReactElement,

}
export const Heading1 = ({value,className,children}: HeadingProps) =>{
	return(
		<>
			<h1 className={`mb-8 mt-6 text-4xl font-bold ${className}`}>{value}{children}</h1>
		</>
	)
}