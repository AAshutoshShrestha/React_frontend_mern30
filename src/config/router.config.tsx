import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/homepage"
import AllProductsPage from "../pages/Products"
import CategoriesPage from "../pages/categories/category.page"
import AboutUsPage from "../pages/Aboutus"
import NotFoundPage from "../pages/errorPage"
import HomeLayout from "../pages/layout/homeLayout.page"
import CategoryDetailPage from "../pages/categories/categoryDetail.page"
import ProductDetailPage from "../pages/Products/productDetail.page"

import { RegisterPage, LoginPage, ActivationPage } from "../pages/auth/index"
import DashboardLayout from "../pages/layout/DashboardLayout.page"
import DashboardMain from "../pages/dashboard/admin.component"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { AuthProvider } from "../context/auth.content"
import AllowUser from "./permission-config"
import { BannerCreate, BannerPage } from "../pages/banner/index"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getLoggedInUserFromReducer } from "../reducer/auth.reducer"
import LoadingSpinner from "../components/common/loading/index.component"
import BannerEdit from "../pages/banner/bannerEdit.page"

// context

export const RouterConfig = () => {

	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const token = localStorage.getItem("_at") || null
		if (token) {
			dispatch(getLoggedInUserFromReducer())
		}
		setLoading(false)
	}, [])

	return (
		<>
			{
				loading ? <> <LoadingSpinner /></> : <>
					<AuthProvider>
						<>
							<ToastContainer
								theme="colored"
							/>
							<BrowserRouter>
								<Routes>
									<Route path="/" element={<HomeLayout />}>
										<Route index element={<Homepage />} />
										<Route path="products" element={<AllProductsPage />} />
										<Route path="categories" element={<CategoriesPage />} />
										<Route path="categories/:slug" element={<CategoryDetailPage />} />
										<Route path="product/:pid/:slug" element={<ProductDetailPage />} />
										<Route path="about-us" element={<AboutUsPage />} />
										<Route path="activate/:token" element={<ActivationPage />} />

										<Route path="*" element={<NotFoundPage />}></Route>
									</Route>

									<Route path="/sign-up" element={<RegisterPage />}></Route>
									<Route path="/sign-in" element={<LoginPage />}></Route>

									<Route path="/admin" element={<AllowUser allowuser="admin"><DashboardLayout /></AllowUser>}>
										<Route index element={<DashboardMain />} />
										<Route path="banner" element={<BannerPage />} />
										<Route path="banner/create" element={<BannerCreate />} />
										<Route path="banner/:id/edit" element={<BannerEdit />} />

										<Route path="*" element={<NotFoundPage />}></Route>
									</Route>

								</Routes>
							</BrowserRouter>
						</>
					</AuthProvider>
				</>
			}


		</>
	)
}