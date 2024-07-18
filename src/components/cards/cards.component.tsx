export interface ProductCardProps {
	image: string,
	title: string,
	price?: string | number | null,
	url?: string | undefined
}
export const ProductCard = ({ image, title, price, url }: ProductCardProps) => {
	return (
		<>
			<div className="h-full bg-gray-50 p-6 rounded-xl ">
				<span className="px-2 py-1"></span>
				<a className="mb-2 mt-6 block px-6" href={url}>
					<img className="mx-auto mb-5 h-64 w-full object-cover" src={image} alt="" />
					<h3 className="font-heading mb-2 text-xl font-bold">{title}</h3>
					<p className="font-heading text-lg font-bold text-amber-500">
						<span>${price}</span>
					</p>
				</a>
				<a className="group ml-auto mr-2 flex h-12 w-12 items-center justify-center rounded-lg border hover:border-amber-500">
					<i className="ri-add-fill text-xl group-hover:text-amber-500"></i>
				</a>
			</div>
		</>
	)
}

export const ProductCardV2 = ({ image, title, price, url }: ProductCardProps) => {
	return (
		<>
			<div className="mb-4">
				<a className="block relative h-64 rounded overflow-hidden" href={url}>
					<img alt={title} className="object-cover object-center w-full h-full block" src={image} />
				</a>
				<div className="mt-4">
					<h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
					{
						price ? <><p className="mt-1">${price}</p></> : <></>
					}
					
				</div>
			</div>
		</>
	)
}