import { Layout } from "../../layout/layout"
import eu from "../../assets/eu.jpg"
export function Projects() {
    return (
        <>
            <Layout currentPage={2} />
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100 gap-5">
                <h1 className="text-4xl font-bold text-gray-600">Projects</h1>
                <div className="flex flex-row flex-wrap gap-5 container">
                    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <img src={eu} alt="eu" className="my-5 border rounded-xl" />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                </div>
            </div>

        </>
    );
}