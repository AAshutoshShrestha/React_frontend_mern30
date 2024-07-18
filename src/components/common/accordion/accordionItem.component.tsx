interface accordionProps {
	question :string,
	answer :string,
}
export const AccordionItem = ({question,answer}: accordionProps) => {
	return (
		<>
			<div className="hs-accordion active pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-one">
				<button className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
					{question}
					<i className="ri-arrow-down-s-line hs-accordion-active:hidden block size-5 flex-shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"></i>
					<i className="ri-arrow-up-s-line hs-accordion-active:block hidden size-5 flex-shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"></i>
				</button>
				<div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
					<p className="text-gray-600 dark:text-neutral-400">{answer}</p>
				</div>
			</div>
		</>
	)

}