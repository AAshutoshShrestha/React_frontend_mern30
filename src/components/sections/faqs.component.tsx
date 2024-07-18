import {  AccordionItem } from "../common/accordion/accordionItem.component";

export const FaqSection = () => {
	return (
		<>
			<div className="max-w-[150rem] p-12 sm:p-20 mx-auto">
				<div className="grid gap-10 md:grid-cols-5">
					<div className="md:col-span-2">
						<div className="max-w-xs">
							<h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently<br />asked questions</h2>
							<p className="mt-1 hidden text-gray-600 md:block dark:text-neutral-400">Answers to the most frequently asked questions.</p>
						</div>
					</div>

					<div className="md:col-span-3">
						<div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
							<div className="divide-y divide-gray-200 dark:divide-neutral-700">

								<AccordionItem question="Can I cancel at anytime?" answer="Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback." />

								<AccordionItem question="Can " answer="Yes, " />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
