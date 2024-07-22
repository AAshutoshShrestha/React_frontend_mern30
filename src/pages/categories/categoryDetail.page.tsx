import { useParams } from "react-router-dom";
import { ProductCardV2 } from "../../components/cards/cards.component"
import { HeadingCta } from "../../components/common/CTA/title-with-btn.component"

import productData from '../../../product.json';
import { AdsSection1 } from "../../components/sections/advertisement.component";


const CategoryDetailPage = () => {
	
	const params = useParams()

	const products = productData.products.slice(0,6); // Limiting to first 8 products
	const categorySlug = params.slug
	
	return (
		<>

			<div className="max-w-[120rem] mx-auto">
				<HeadingCta title={`All products for ${categorySlug}`} />

				<div className="mx-20 py-8 grid md:grid-cols-4 gap-4">
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


			<AdsSection1
				image_title="Knitware"
				image_url="https://i.pinimg.com/736x/66/f3/9c/66f39c6c2428234104926ea6279c6ea9.jpg"
			/>
		</>
	)
}

export default CategoryDetailPage;