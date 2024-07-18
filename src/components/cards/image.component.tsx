interface ImageProps {
	src : string,
	className ?: string | null | undefined
}

export const ImageOnlyCard = ({src,className}: ImageProps) => {
	return (
		<>
			<img className={`h-full w-full transform rounded-2xl object-cover transition duration-200 group-hover:scale-105 ${className} `} src={`${src}`} alt="" />
		</>

	)
}