import { Heading1 } from "../common/typography/typography.component"

export const JoinClubSection = () => {
	return (
		<>
			<div className="max-w-[150rem] p-12 sm:p-32 mx-auto">
				<Heading1 value="Join Our Premium Club" />
				<p className="mt-3 text-gray-800 dark:text-neutral-400">
					We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.
				</p>
			</div>
		</>
	)
}