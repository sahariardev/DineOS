export default function LoginView() {
    console.log('API URL:', process.env.DATABASE_URL);
    return <div className="bg-slate-50 text-gray-800">

        <div className="flex items-center justify-center min-h-screen p-4">

            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">

                <div className="text-center mb-8">

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div
                            className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                            D
                        </div>
                        <span className="font-bold text-3xl text-gray-900">DineOS</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back!</h1>
                    <p className="text-gray-500 text-sm mt-1">Please log in to access the POS dashboard.</p>
                </div>

                <form className="space-y-6">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email
                            Address</label>
                        <div className="relative">

                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                            </svg>
                        </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="store" className="block text-sm font-medium text-gray-700 mb-1">Store</label>
                        <div className="relative">

                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h1.5M13.5 21v-7.5a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75V21m-4.5 0H9m12.75 0H21.75a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75h-1.5m-12.75 0H9M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0h.008v.008H13.5v-.008Zm0 0H9.75m-1.5-7.5H3.75M14.25 13.5h3.375m0 0a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-3.375m0 3.375c.621 0 1.125-.504 1.125-1.125V10.875c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h1.5m0-3.375h.008v.008H14.25v-.008Zm0 3.375h.008v.008H14.25v-.008Zm0-3.375H9.75m0 3.375H9.75"/>
                            </svg>
                        </span>
                            <input
                                type="email"
                                id="store"
                                name="store"
                                className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700">Password</label>
                            <a href="#" className="text-sm text-orange-500 font-medium hover:underline">Forgot
                                password?</a>
                        </div>
                        <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                            </svg>
                        </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-100 rounded-lg pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 border border-gray-200"
                                required
                            />
                            <button type="button" id="togglePassword"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                <svg id="icon-eye" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.01 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.01-9.963-7.178Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                                <svg id="icon-eye-slash" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-5 h-5 hidden">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.571M12 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="m2.036 12.322.01.004.009.009.02.018.02.017.02.014.018.01.02.009.019.006.02.004.01.001.01.001h.004a1.01 1.01 0 0 1 0-.639c-1.39-4.166-5.33-7.178-9.962-7.178C7.36 4.5 3.423 7.51 2.036 12.322ZM12 19.5c-4.638 0-8.573-3.01-9.963-7.178.07-.207.07-.431 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.01 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21 3 3"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox"
                               className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"/>
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
}