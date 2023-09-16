import { useEffect, useState } from 'react';
import { News } from '../../types/news';

const AllNews = () => {
    const [newsData, setNewsData] = useState<News[]>([]);
    const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbzPxxkf2qM2K4bmp-9WI3vYIY6PbZ1kjPybZswYEilQdV9Pzl3LIlO-IW84Vq_uDlsP/exec';
    async function fetchNewsData() {
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
        setNewsData(dataObjects);
      }
      

    useEffect(() => {
        fetchNewsData();
    }, []);

    return (
        <div className="min-h-screen pt-10 lg:px-10">
            <h1 className="text-center text-4xl pb-2 text-gray-500">お知らせ一覧</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">News</h2>

            <div className="pt-5 lg:text-lg">
                {
                    newsData.map((news, index) => (
                        <div key={index} className="py-2 font-sans hover:bg-gray-200 px-5 cursor-pointer border-b-2">
                            <p className="text-theme font-semibold">
                                {news.title}
                            </p>
                            <div className="pt-2">
                                {news.content}
                            </div>

                            <div className="flex justify-end pt-3 lg:pt-1">
                                <p>{news.date.toString()}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllNews;
