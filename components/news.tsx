import Title from "./v1/title";
import newsMock from "../mocks/newsMock.json";
import AllViewButton from "./v1/allViewButton";


const News = () => {
    
    return (
        <div className="w-screen py-10 px-10">
            <Title text="News"/>
            <div className="pt-5">
                {
                    newsMock.map((news, index) => (
                        <div key={index} className="py-2 font-sans hover:bg-gray-200 px-5 rounded cursor-pointer">
                            <div className="flex space-x-4 text-lg">
                                <p className="text-gray-500">
                                    {news.date}
                                </p>
                                <p>
                                    {news.title}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            

            <div className="text-center my-5">
                <AllViewButton />
            </div>
            <hr style={{ border: "1px solid #e5e7eb"}}/>
        </div>
    )
}

export default News;