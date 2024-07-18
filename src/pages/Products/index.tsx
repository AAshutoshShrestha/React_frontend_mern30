import { ProductCardV2 } from "../../components/cards/cards.component"
import { HeadingCta } from "../../components/common/CTA/title-with-btn.component"

import productData from '../../../product.json';

const AllProductsPage = () => {
	const products = productData.products; // Limiting to first 8 products

	return (
		<>
			<div className="max-w-[120rem] mx-auto">
				<HeadingCta title="All products" />

				<div className="mx-20 py-8 grid md:grid-cols-4 gap-2">
					{
						products.map((product, i) => (
							<ProductCardV2
								key={i}
								image={product.product_image}
								title={product.product_name}
								url={`/product/${product.index}/${product.slug}`}
								price={product.price}
							/>

						))
					}
				</div>
			</div>
		</>
	)
}

export default AllProductsPage