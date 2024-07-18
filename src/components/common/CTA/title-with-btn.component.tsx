import { Heading1 } from "../typography/typography.component"

interface headingProps {
	title: string,
	url?: string | null | undefined,

}
export const HeadingCta = ({ title, url }: headingProps) => {
	return (
		<>
			<div className="flex justify-between mx-8 md:mx-20 items-center">
				<Heading1 value={title} />
				{
					url ? <><a href={url} className="text-amber-500 text-md hover:text-amber-700">View all</a></> : <></>
				}

			</div>
		</>
	)
}