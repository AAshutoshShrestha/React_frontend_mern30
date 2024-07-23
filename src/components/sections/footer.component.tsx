export const Footer = () => {
  return (
    <>
      <section className="bg-gray-900">
        <div className="flex flex-wrap">
          <div className="w-full md:w-5/12 lg:w-3/12 py-20 px-6 bg-white">
            <div className="max-w-xs mx-auto">
              <a className="inline-block mb-12 text-3xl font-bold font-heading" href="#">
                <img className="h-9" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto" />
              </a>
              <div className="mb-12 font-semibold font-heading">
                <p>Our Store</p>
                <p>Nørremark 51, 8700 Horsens</p>
                <p>Denmark</p>
              </div>
              <div className="flex mb-16 md:mb-40">
                <a className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-blue-500 rounded-full" href="#">
                  <i className="ri-facebook-fill text-2xl hover:text-3xl"></i>
                </a>
                <a className="inline-flex items-center justify-center w-12 h-12 mr-2 bg-indigo-300 rounded-full" href="#">
                  <i className="ri-instagram-fill text-2xl hover:text-3xl"></i>
                </a>
                <a className="inline-flex items-center justify-center w-12 h-12 bg-blue-300 rounded-full" href="#">
                  <i className="ri-twitter-x-fill text-2xl hover:text-3xl"></i>
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="px-1 mb-2 lg:mb-0">
                  <i className="ri-paypal-line text-3xl hover:text-4xl"></i>
                </div>
                <div className="px-1 mb-2 lg:mb-0">
                  <i className="ri-visa-line text-3xl hover:text-4xl"></i>
                </div>
                <div className="px-1 mb-2 lg:mb-0">
                  <i className="ri-mastercard-line text-3xl hover:text-4xl"></i>
                </div>
              </div>
              
              
            </div>
          </div>
          <div className="w-full md:w-7/12 lg:w-9/12 py-20 px-6 lg:pl-40">
            <ul className="flex flex-wrap -mx-3 -mb-3">
              <li className="w-1/2 md:w-1/2 lg:w-1/3 xl:w-auto px-3 mb-3"><a className="inline-block w-32 py-2 text-center hover:text-white bg-white hover:bg-gray-900 rounded-full transition duration-300" href="#">Category</a></li>
              <li className="w-1/2 lg:w-1/3 xl:w-auto px-3 mb-3"><a className="inline-block w-32 py-2 text-center hover:text-white bg-white hover:bg-gray-500 rounded-full transition duration-300" href="#">Collection</a></li>
              <li className="w-1/2 lg:w-1/3 xl:w-auto px-3 mb-3"><a className="inline-block w-32 py-2 text-center hover:text-white bg-white hover:bg-gray-500 rounded-full transition duration-300" href="#">Story</a></li>
              <li className="w-1/2 lg:w-1/3 xl:w-auto px-3 mb-3"><a className="inline-block w-32 py-2 text-center hover:text-white bg-white hover:bg-gray-500 rounded-full transition duration-300" href="#">Brand</a></li>
              <li className="w-1/2 lg:w-1/3 xl:w-auto px-3 mb-3"><a className="inline-block w-32 py-2 text-center hover:text-white bg-white hover:bg-gray-500 rounded-full transition duration-300" href="#">Partners</a></li>
              <li className="w-1/2 lg:w-1/3 xl:w-auto px-3 mb-3"><a className="inline-block w-32 py-2 text-center hover:text-white bg-white hover:bg-gray-500 rounded-full transition duration-300" href="#">Videos</a></li>
            </ul>
            <div className="flex flex-wrap mt-16 -mx-4 pb-20 border-b">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                <h3 className="mb-8 text-xl font-bold font-heading text-white">Information</h3>
                <ul>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Newsroom</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Story</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Yofte Careers</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Investor Relations</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Reward program</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Delivery information</a></li>
                  <li><a className="hover:underline text-white" href="#">Paying by invoice</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                <h3 className="mb-8 text-xl font-bold font-heading text-white">Customer Service</h3>
                <ul>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Return an order</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Search Terms</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Advanced Search</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Orders and Returns</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">FAQs</a></li>
                  <li className="mb-6"><a className="hover:underline text-white" href="#">Store Location</a></li>
                  <li><a className="hover:underline text-white" href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4">
                <h3 className="mb-8 text-xl font-bold font-heading text-white">Contact Us</h3>
                <ul>
                  <li className="mb-6">
                    <h4 className="mb-2 text-white">Mobile</h4>
                    <a className="text-amber-500 hover:underline" href="#">+39 4097 533 32 331</a>
                  </li>
                  <li className="mb-6">
                    <h4 className="mb-2 text-white">Email</h4>
                    <a className="text-amber-500 hover:underline" href="#">hi@yoftestore.com</a>
                  </li>
                  <li>
                    <h4 className="mb-2 text-white">Live Chat</h4>
                    <a className="text-amber-500 hover:underline" href="#">yoftestore</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative mt-8 pb-32 lg:pb-0">
              <p className="font-semibold font-heading text-white"><span className="me-2">Mern-Store</span>© Copyright 2024 </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}