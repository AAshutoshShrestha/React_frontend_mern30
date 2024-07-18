import { useParams } from "react-router-dom";
import productData from '../../../product.json';
import { BreadcrumbProducts } from "../../components/common/breadcrum/index.component";

const ProductDetailPage = () => {
	const params = useParams()
	const slug:string = params.slug || ""
	const Product_id: string = params.pid || ''

	const index: number = parseInt(Product_id);
	const product = productData.products[index]

	return (
		<>

			<BreadcrumbProducts
				mainpage="Home" 
				mainUrl="/"
				subpage="Product" 
				subpageUrl="/products"
				slug={slug} />

			<>
				<section className="py-4 px-6 md:py-12" >
					<div className="mx-auto max-w-lg lg:max-w-6xl">
						<div className="-mx-4 mb-8 flex flex-wrap">
							<div className="w-full p-4 lg:w-1/2">
								<div className="lg:max-w-md">
									<img className="mb-4 block w-full rounded-xl" src={`${product.product_image}`} alt="" />
									<div className="-mx-2 flex">
										<div className="w-1/4 px-2">
											<button className="block w-full">
												<img className="block w-full rounded-xl" src={`${product.product_image}`} alt="" />
											</button>
										</div>
										<div className="w-1/4 px-2">
											<button className="block w-full">
												<img className="block w-full rounded-xl" src={`${product.product_image}`} alt="" />
											</button>
										</div>
										<div className="w-1/4 px-2">
											<button className="block w-full">
												<img className="block w-full rounded-xl" src={`${product.product_image}`} alt="" />
											</button>
										</div>
										<div className="w-1/4 px-2">
											<button className="block w-full">
												<img className="block w-full rounded-xl" src={`${product.product_image}`} alt="" />
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full p-4 lg:w-1/2">
								<div className="max-w-lg lg:ml-auto">
									<h1 className="text-gray-700 font-heading mb-2 text-4xl font-semibold">{product.product_name}</h1>
									<p className="text-gray-400 mb-6 text-sm font-medium">{product.category_id}</p>

									<p className="text-gray-500 mb-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero quae ut, suscipit voluptatem sunt delectus neque officiis necessitatibus, aperiam cum ipsam accusantium harum alias cupiditate numquam vitae maxime. Doloremque voluptas corporis illum asperiores at.</p>

									<div className="mb-6 flex gap-4">
										<h2 className="text-amber-700 text-4xl font-semibold">{product.price}</h2>
									</div>
									<div className="-mx-2 mb-10 flex flex-wrap">
										<div className="xs:w-4/12 xs:mb-0 mb-4 w-full px-2 md:w-3/12">
											<div className="xs:w-full border-coolGray-200 inline-flex h-full items-center justify-between gap-4 rounded-sm border px-4 py-3">
												<button className="text-coolGray-300 hover:text-coolGray-400 cursor-pointer transition duration-200">
													<i className="ri-subtract-line"></i>
												</button>
												<span className="text-coolGray-700 text-sm">1</span>
												<button className="text-coolGray-300 hover:text-coolGray-400 cursor-pointer transition duration-200">
													<i className="ri-add-line"></i>
												</button>
											</div>
										</div>
										<div className="xs:w-5/12 xs:mb-0 mb-4 w-full px-2 md:w-7/12"><a className="block w-full rounded-sm bg-purple-500 px-3 py-4 text-center text-sm font-medium text-white transition duration-200 hover:bg-purple-600" href="#">Add to cart</a></div>
										<div className="xs:w-3/12 w-full px-2 md:w-2/12">
											<a className="xs:px-1 xs:w-full inline-flex h-full items-center justify-center rounded-sm border border-purple-600 px-6 py-4 text-purple-500 transition duration-200 hover:bg-purple-500 hover:text-white" href="#">
												<i className="ri-heart-line"></i>
											</a>
										</div>
									</div>
									<div className="flex flex-wrap items-center justify-between gap-4">
										<div className="flex items-center gap-8">
											<a className="group" href="#">
												<div className="flex items-center gap-2">
													<div className="text-gray-500 group-hover:text-gray-600 transition duration-200">
														<i className="ri-error-warning-line"></i>
													</div>
													<span className="text-gray-500 group-hover:text-gray-600 text-xs font-bold uppercase transition duration-200">Size guide</span>
												</div>
											</a>
											<a className="group" href="#">
												<div className="flex items-center gap-2">
													<div className="text-gray-500 group-hover:text-gray-600 transition duration-200">
														<div>
															<i className="ri-share-forward-line"></i>
														</div>
													</div>
													<span className="text-gray-500 group-hover:text-gray-600 text-xs font-bold uppercase transition duration-200">Share</span>
												</div>
											</a>
										</div>
										<a className="group" href="#">
											<div className="flex items-center gap-2">
												<div className="text-gray-500 group-hover:text-gray-600 transition duration-200">
													<div>
														<i className="ri-printer-line"></i>
													</div>
												</div>
												<span className="text-gray-500 group-hover:text-gray-600 text-xs font-bold uppercase transition duration-200">Ask for product</span>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-8 flex w-full flex-wrap">
							<a className="group" href="#" >
								<p className="text-gray-700 group-hover:text-gray-700 mb-4 block whitespace-nowrap px-4 pt-4 text-sm font-bold transition duration-200">Description</p>
								<div className="h-px w-full bg-purple-500 transition duration-200 group-hover:bg-purple-500"></div>
							</a>
							<div className="flex-1">
								<div className="border-gray-200 h-full w-full border-b"></div>
							</div>
						</div>
						<div className="block">
							<h2 className="text-gray-500 mb-4 font-bold">Lorem ipsum</h2>
							<p className="text-gray-500 leading-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						</div>
					</div>
				</section>




			</>

		</>
	)
}

export default ProductDetailPage