import newsMock from "../../mocks/newsMock.json";

const mock = newsMock;
const AllNews = () => {
    return (
        <div className="min-h-screen pt-10 lg:px-10">
            <h1 className="text-center text-4xl pb-2 text-gray-500">お知らせ一覧</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">News</h2>

            <div className="pt-5 lg:text-lg">
                {
                    newsMock.map((news, index) => (
                        <div key={index} className="py-2 font-sans hover:bg-gray-200 px-5 cursor-pointer border-b-2">
                                <p className="text-theme font-semibold">
                                    {news.title}
                                </p>
                            <div className="pt-2">
                                {news.content}
                            </div>

                            <div className="flex justify-end pt-3 lg:pt-1">
                                <p>{news.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllNews;