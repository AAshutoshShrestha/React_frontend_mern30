import React from "react";
import { ClientSection } from "../../components/sections/logo.component";
import { OfferSection } from "../../components/offer.component";
import { HeroSection } from "../../components/sections/hero.component";
import { AboutSection } from "../../components/sections/about.component";
import { ProductCard, ProductCardV2 } from "../../components/cards/cards.component";
import { HeadingCta } from "../../components/common/CTA/title-with-btn.component";
import { FaqSection } from "../../components/sections/faqs.component";
import { JoinClubSection } from "../../components/sections/club.component";
import { SingleProductSection } from "../../components/sections/SingleProduct.component";


import productData from '../../../product.json';
const Homepage = () => {

	const products = productData.products.slice(0, 8); // Limiting to first 8 products

	return (
		<React.Fragment>

			<HeroSection />
			<ClientSection />

			<div className="max-w-[120rem] mx-auto">
				<HeadingCta title="Our Featured" url="/products" />

				<div className="mx-8 md:mx-20 grid md:grid-cols-4 gap-2">
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

			<SingleProductSection />
			<OfferSection />






			<div className="max-w-[120rem] mx-auto">
				<HeadingCta title="New Arrivals" url="/products" />

				<div className="mx-20 py-8 grid md:grid-cols-4 gap-2">
					{
						products.map((product, i) => (
							<ProductCard
								key={i}
								title={product.product_name}
								url={`/product/${product.index}/${product.slug}`}
								price={product.price}
								image={product.product_image}
							/>
						))
					}
				</div>
			</div>

			<JoinClubSection />

			<AboutSection />
			<FaqSection />

		
		</React.Fragment>
	)
}

export default Homepage;