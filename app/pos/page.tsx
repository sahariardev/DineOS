export default function PosView() {
    return <div className="bg-slate-50 text-gray-800">

        <div className="flex h-screen overflow-hidden">
            <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col hidden lg:flex">
                <div className="h-16 flex items-center px-6 gap-3 border-b border-gray-200">
                    <div
                        className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        D
                    </div>
                    <span className="font-bold text-xl text-gray-900">DineOS</span>
                </div>
                <div className="flex items-center gap-3 p-4 mt-4">
                    <img src="https://placehold.co/40x40/E2E8F0/4A5568?text=ST" alt="User Avatar"
                         className="w-10 h-10 rounded-full"/>
                    <div>
                        <div className="font-semibold text-gray-900">Saiful Talukdar</div>
                        <div className="text-xs text-gray-500">Product Designer</div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto pt-4 space-y-1">
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-6 py-3 text-sm font-medium nav-active">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>
                        </svg>
                        <span>Pos</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"/>
                        </svg>
                        <span>Table</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <span>Reservations</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <span>Offering</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <span>Delivery Executive</span>
                    </a>
                    <a href="#"
                       className="flex items-center justify-between gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-3.75H16.5a2.25 2.25 0 0 1 2.25 2.25v2.25a2.25 2.25 0 0 1-2.25 2.25H15m-3-3.75H9.75m0-7.5h7.5m-7.5 7.5h7.5m3-7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25V9.375c0-.621.504-1.125 1.125-1.125H9.75Z"/>
                            </svg>
                            <span>Payments</span>
                        </div>
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">New</span>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                        </svg>
                        <span>Customer</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"/>
                        </svg>
                        <span>Invoice</span>
                    </a>

                    <div className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase">Back Office</div>

                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.148 7.217c-.239.383-.59.69-.99.92.373.23.73.493 1.07.787a9.993 9.993 0 0 1 2.023 2.15c.16.207.19.47.08.7.022.163.03.328.03.493a2.25 2.25 0 0 1-2.25 2.25h-8.25a2.25 2.25 0 0 1-2.25-2.25c0-.165.008-.33.03-.493.11-.23.08-.493-.08-.7a9.993 9.993 0 0 1-2.023-2.15c-.34-.294-.7-.557-1.07-.787-.4.23-.75.537-.99.92a11.95 11.95 0 0 1-2.148-7.217c0-.435.023-.863.068-1.285C.28 11.194 1.2 10.5 2.226 10.5H5.35c.618 0 .99-.724.725-1.282A7.471 7.471 0 0 0 5.25 4.5 2.25 2.25 0 0 1 7.5 2.25.75.75 0 0 1 8.25 3v1.432c0 .64.12 1.258.322 1.838.303.76.93 1.33 1.653 1.715a9.04 9.04 0 0 1 2.86 2.401c.498.634 1.226 1.08 2.032 1.08Z"/>
                        </svg>
                        <span>Testimonial</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                        </svg>
                        <span>User</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"/>
                        </svg>
                        <span>Reports</span>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9.594 3.94c.09-.542.56-1.003 1.11-1.226a21.75 21.75 0 0 1 2.592 0c.55.223 1.02.684 1.11 1.226a21.75 21.75 0 0 1 0 2.592c-.09.542-.56 1.003-1.11 1.226a21.75 21.75 0 0 1-2.592 0c-.55-.223-1.02-.684-1.11-1.226a21.75 21.75 0 0 1 0-2.592ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 0v6m0-6h.008m-6.008 0H6.008m0-6h.008m6 0h.008M12 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H3M21 3h-.375c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125H21M3 12h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H3M21 12h-.375c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125H21M3 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"/>
                        </svg>
                        <span>Setting</span>
                    </a>
                </nav>

                <div className="p-6 border-t border-gray-200">
                    <a href="#"
                       className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/>
                        </svg>
                        <span>Login</span>
                    </a>
                </div>
            </aside>

            <main className="flex-1 flex flex-col overflow-hidden">
                <header
                    className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
                    <div className="flex items-center">
                        <button className="lg:hidden mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        </button>
                        <div className="relative hidden sm:block">
                            <input type="text" placeholder="Search (Ctrl+/)"
                                   className="bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                                   style={{width: 300 + 'px'}}/>
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>
                        </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12H.75m.386-6.364 1.591 1.591M12 12a2.25 2.25 0 0 0-2.25 2.25 2.25 2.25 0 0 0 2.25 2.25 2.25 2.25 0 0 0 2.25-2.25A2.25 2.25 0 0 0 12 12Z"/>
                            </svg>
                        </button>
                        <button>
                            <img src="https://placehold.co/32x32/E2E8F0/4A5568?text=ST" alt="User Avatar"
                                 className="w-8 h-8 rounded-full"/>
                        </button>
                    </div>
                </header>

                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Point of Sale (POS)</h1>
                                <div className="text-sm text-gray-500">
                                    <span>Dashboard</span> &rsaquo; <span>Pos</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-4 sm:mt-0 flex-wrap">
                                <button
                                    className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="2"
                                         stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                    <span>New</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50">
                                    <span>QR Menu Orders</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50">
                                    <span>Draft List</span>
                                </button>
                                <button
                                    className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50">
                                    <span>Table Order</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="relative">
                                    <input type="text" placeholder="Search in products"
                                           className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200"/>
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                    </svg>
                                </span>
                                </div>
                                <select
                                    className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200">
                                    <option>All Category</option>
                                    <option>Rice</option>
                                    <option>Beverages</option>
                                </select>
                                <select
                                    className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200">
                                    <option>Select Brand</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                            <button
                                className="px-5 py-2 rounded-lg text-sm font-medium tab-active whitespace-nowrap">Show
                                All
                            </button>
                            <button
                                className="px-5 py-2 rounded-lg text-sm font-medium tab-inactive whitespace-nowrap">Rice
                            </button>
                            <button
                                className="px-5 py-2 rounded-lg text-sm font-medium tab-inactive whitespace-nowrap">Beverages
                            </button>
                            <button
                                className="px-5 py-2 rounded-lg text-sm font-medium tab-inactive whitespace-nowrap">Salads
                            </button>
                            <button
                                className="px-5 py-2 rounded-lg text-sm font-medium tab-inactive whitespace-nowrap">Soup
                            </button>
                            <button
                                className="px-5 py-2 rounded-lg text-sm font-medium tab-inactive whitespace-nowrap">Pizza
                            </button>
                        </div>

                        <div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Shrimp Basil Salad"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Shrimp Basil Salad</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Onion Rings"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Onion Rings</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Smoked Bacon"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Smoked Bacon</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Fresh Tomatoes"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Fresh Tomatoes</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[148px]"
                                >
                                <span className="text-gray-400">+</span>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[148px]"
                                >
                                <span className="text-gray-400">+</span>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Chicken Burger"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Chicken Burger</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Red Onion Rings"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Red Onion Rings</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Beef Burger"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Beef Burger</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Grilled Burger"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Grilled Burger</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[148px]"
                                >
                                <span className="text-gray-400">+</span>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[148px]"
                                >
                                <span className="text-gray-400">+</span>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Chicken Burger"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Chicken Burger</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Fresh Basil Salad"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Fresh Basil Salad</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Vegetable Pizza"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Vegetable Pizza</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center cursor-pointer hover:shadow-md transition-shadow">
                                <img src="https://placehold.co/150x150/FFF7ED/F97316?text=Food" alt="Fish & Chips"
                                     className="w-full h-24 object-cover rounded-md mb-3"/>
                                <h3 className="text-sm font-semibold text-gray-800">Fish & Chips</h3>
                                <p className="text-sm font-bold text-orange-500">$10.00</p>
                            </div>
                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[148px]"
                                >
                                <span className="text-gray-400">+</span>
                            </div>

                            <div
                                className="bg-white rounded-lg shadow-sm p-3 text-center border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[148px]"
                                >
                                <span className="text-gray-400">+</span>
                            </div>
                        </div>
                    </div>


                    <aside className="w-full lg:w-96 flex-shrink-0 bg-white border-l border-gray-200 flex flex-col">

                        <div className="p-4 border-b border-gray-200 space-y-4">
                            <div className="relative">
                                <input type="text" placeholder="Search in Existing"
                                       className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200"/>
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                </svg>
                            </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <select
                                    className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200">
                                    <option>Select Dining</option>
                                </select>
                                <select
                                    className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200">
                                    <option>Select Table</option>
                                </select>
                            </div>
                        </div>


                        <div className="px-4 pt-4">
                            <h2 className="text-lg font-bold text-gray-900">Order #20</h2>
                        </div>


                        <div className="flex-1 overflow-y-auto p-4 space-y-4">

                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <div className="font-semibold text-sm text-gray-800">Fresh Basil Salad</div>
                                    <div className="text-xs text-gray-500">$10.00 * 2 = $20.00</div>
                                    <div className="flex items-center gap-2 mt-1.5">

                                        <div className="flex items-center border border-gray-300 rounded-md">
                                            <button
                                                className="px-2 py-0.5 text-lg text-gray-600 hover:bg-gray-100 rounded-l-md">-
                                            </button>
                                            <span className="px-3 py-0.5 text-sm font-medium">2</span>
                                            <button
                                                className="px-2 py-0.5 text-lg text-orange-500 hover:bg-gray-100 rounded-r-md">+
                                            </button>
                                        </div>
                                        <button className="text-xs text-orange-500 font-medium hover:underline">Add
                                            Notes
                                        </button>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-700">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c-.27.041-.54.082-.811.124m12.54 0c-3.07.052-6.09.052-9.16 0M4.866 5.79m0 0a48.068 48.068 0 0 1 3.478-.397m7.5 0a48.068 48.068 0 0 0 3.478-.397M6.33 5.79m0 0c.27-.041.54-.082.811-.124m0 0s-1.09.1-1.09.1M12 5.79v.083m0 0c-.27.041-.54.082-.811.124m0 0c.27.041.54.082.811.124m0 0s-1.09.1-1.09.1m7.668 0c.27-.041.54-.082.811-.124m0 0c-.27.041-.54.082-.811.124m0 0s-1.09.1-1.09.1"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <div className="font-semibold text-sm text-gray-800">Fresh Basil Salad</div>
                                    <div className="text-xs text-gray-500">$10.00 * 2 = $20.00</div>
                                    <div className="flex items-center gap-2 mt-1.5">

                                        <div className="flex items-center border border-gray-300 rounded-md">
                                            <button
                                                className="px-2 py-0.5 text-lg text-gray-600 hover:bg-gray-100 rounded-l-md">-
                                            </button>
                                            <span className="px-3 py-0.5 text-sm font-medium">2</span>
                                            <button
                                                className="px-2 py-0.5 text-lg text-orange-500 hover:bg-gray-100 rounded-r-md">+
                                            </button>
                                        </div>
                                        <button className="text-xs text-orange-500 font-medium hover:underline">Add
                                            Notes
                                        </button>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-700">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c-.27.041-.54.082-.811.124m12.54 0c-3.07.052-6.09.052-9.16 0M4.866 5.79m0 0a48.068 48.068 0 0 1 3.478-.397m7.5 0a48.068 48.068 0 0 0 3.478-.397M6.33 5.79m0 0c.27-.041.54-.082.811-.124m0 0s-1.09.1-1.09.1M12 5.79v.083m0 0c-.27.041-.54.082-.811.124m0 0c.27.041.54.082.811.124m0 0s-1.09.1-1.09.1m7.668 0c.27-.041.54-.082.811-.124m0 0c-.27.041-.54.082-.811.124m0 0s-1.09.1-1.09.1"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-1">
                                    <div className="font-semibold text-sm text-gray-800">Fresh Basil Salad</div>
                                    <div className="text-xs text-gray-500">$10.00 * 2 = $20.00</div>
                                    <div className="flex items-center gap-2 mt-1.5">

                                        <div className="flex items-center border border-gray-300 rounded-md">
                                            <button
                                                className="px-2 py-0.5 text-lg text-gray-600 hover:bg-gray-100 rounded-l-md">-
                                            </button>
                                            <span className="px-3 py-0.5 text-sm font-medium">2</span>
                                            <button
                                                className="px-2 py-0.5 text-lg text-orange-500 hover:bg-gray-100 rounded-r-md">+
                                            </button>
                                        </div>
                                        <button className="text-xs text-orange-500 font-medium hover:underline">Add
                                            Notes
                                        </button>
                                    </div>
                                </div>
                                <button className="text-red-500 hover:text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c-.27.041-.54.082-.811.124m12.54 0c-3.07.052-6.09.052-9.16 0M4.866 5.79m0 0a48.068 48.068 0 0 1 3.478-.397m7.5 0a48.068 48.068 0 0 0 3.478-.397M6.33 5.79m0 0c.27-.041.54-.082.811-.124m0 0s-1.09.1-1.09.1M12 5.79v.083m0 0c-.27.041-.54.082-.811.124m0 0c.27.041.54.082.811.124m0 0s-1.09.1-1.09.1m7.668 0c.27-.041.54-.082.811-.124m0 0c-.27.041.54.082-.811.124m0 0s-1.09.1-1.09.1"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="p-4 border-t border-gray-200">
                            <div className="space-y-2 text-sm mb-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sub Total :</span>
                                    <span className="font-medium text-gray-800">1250$</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Product Discount :</span>
                                    <span className="font-medium text-gray-800">240$</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Extra Discount :</span>
                                    <span className="font-medium text-gray-800">0.00$</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Coupon discount :</span>
                                    <span className="font-medium text-gray-800">0.00$</span>
                                </div>
                                <div className="flex justify-between text-base font-bold pt-2 border-t border-dashed">
                                    <span className="text-gray-900">Total :</span>
                                    <span className="text-gray-900">4500$</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        className="w-full bg-gray-800 text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-900">KOT
                                        & Print
                                    </button>
                                    <button
                                        className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-200">Draft
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        className="w-full bg-orange-500 text-white py-3 rounded-lg text-sm font-semibold hover:bg-orange-600">Bill
                                        & Payment
                                    </button>
                                    <button
                                        className="w-full bg-green-500 text-white py-3 rounded-lg text-sm font-semibold hover:bg-green-600">Bill
                                        & Print
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>

            </main>
        </div>

    </div>

}