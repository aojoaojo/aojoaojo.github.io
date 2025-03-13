import { Layout } from "../../layout/layout"
import gameshelf from "../../assets/gameshelf.png"
import centralfc from "../../assets/centralfc.png"
export function Projects() {
    return (
        <>
            <Layout currentPage={2} />
            <div className="flex flex-col items-center py-6 h-full gap-6">
                <h1 className="text-4xl font-bold text-gray-600">Projects</h1>
                <div className="flex flex-row flex-wrap mx-auto md:gap-8 gap-6 container justify-center">
                    <div className="md:max-w-sm max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-500 dark:border-gray-700">
                        <a href="https://aojoaojo.github.io/gameshelf/" target="_blank">
                            <img className="rounded-t-lg" src={gameshelf} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="https://aojoaojo.github.io/gameshelf/" target="_blank">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                                    Game Shelf
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">
                                A React-based web application designed for board game collectors to catalog, track, and manage their collections effortlessly.
                            </p>
                            <a href="https://aojoaojo.github.io/gameshelf/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Check project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="md:max-w-sm max-w-xs     bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-500 dark:border-gray-700">
                        <a href="https://centralapcef.site/" target="_blank">
                            <img className="rounded-t-lg" src={centralfc} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="https://centralapcef.site/" target="_blank">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                                    Central FC
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">
                                A React-based website showcasing information about an amateur Brazilian soccer team.
                            </p>
                            <a href="https://centralapcef.site/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Check project
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}