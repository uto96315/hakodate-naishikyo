import { useEffect, useState } from 'react';
import Title from "./v1/title";
import AllViewButton from "./v1/allViewButton";
import { News } from "../types/news";

const News = () => {
    const [newsData, setNewsData] = useState<News[]>([]);
    const [error, setError] = useState(false);
    const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbzPxxkf2qM2K4bmp-9WI3vYIY6PbZ1kjPybZswYEilQdV9Pzl3LIlO-IW84Vq_uDlsP/exec';

    const formatDate = (isoString: Date) => {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1して、2桁になるように0を追加
        const day = String(date.getDate()).padStart(2, '0'); // 日を2桁になるように0を追加
        return `${year}年${month}月${day}日`;
    }
    
    async function fetchNewsData() {
        try {
            const response = await fetch(GAS_API_URL);
            const rawData: any[][] = await response.json();
          
            const headers = rawData[0];
            const dataObjects: News[] = rawData.slice(1).map(row => {
              let obj: any = {};
              row.forEach((value, index) => {
                obj[headers[index]] = value;
              });
              return obj as News;
            }).reverse();

            if (dataObjects.length === 0) {
                setError(true);
            }
          
            setNewsData(dataObjects);
        } catch (err) {
            setError(true);
        }
      }
      

    useEffect(() => {
        fetchNewsData();
    }, []);

    return (
        <div className="w-screen py-10 px-10">
            <Title text="News" />
            <div className="pt-5">
                { error ? (
                    <div>お知らせはありません</div>
                ) : (
                    newsData.slice(0, 3).map((news, index) => (
                        <div key={index} className="py-2 font-sans hover:bg-gray-200 px-5 rounded cursor-pointer">
                            <div className="flex space-x-4 text-lg">
                                <p className="text-gray-500">
                                    {formatDate(news.date)}
                                </p>
                                <p className="text-theme">
                                    {news.title}
                                </p>
                            </div>
                            <div className="py-2">
                                {news.content}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="text-center my-5">
                <AllViewButton route="/news" />
            </div>
            <hr style={{ border: "1px solid #e5e7eb" }} />
        </div>
    );
};

export default News;
