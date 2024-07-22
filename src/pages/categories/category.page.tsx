import { ProductCardV2 } from "../../components/cards/cards.component"
import { HeadingCta } from "../../components/common/CTA/title-with-btn.component"

import CategoryData from '../../../category.json';
import { AdsSection1 } from "../../components/sections/advertisement.component";

const CategoryPage = () => {
	const category = CategoryData.categories; // Limiting to first 8 products
	
	return (
		<>
			<div className="max-w-[120rem] mx-auto">
				<HeadingCta title="All Categories" />

				<div className="mx-20 py-8 grid md:grid-cols-4 gap-2">
					{
						category.map((category, i) => (
							<ProductCardV2
								key={i}
								image={category.category_image}
								title={category.category_name}
								url={`/categories/${category.slug}`}
								// price={product.price}
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

export default CategoryPage