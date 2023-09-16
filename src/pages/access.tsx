/* eslint-disable @next/next/no-img-element */
import { GrNext } from "react-icons/gr";
import BackButton from "../../components/v1/backButton";
import { jumpToSection } from "./aboutEndoscopy";
import AccessForCar from "../../components/v1/accessForCar";
import AccessForTrain from "../../components/v1/accessForTrain";
import AccessForBus from "../../components/v1/accessForBus";

const menus = [
    { title: "車でお越しの方", id: "car" },
    { title: "市電でお越しの方", id: "train" },
    { title: "バスでお越しの方", id: "bus" },
];

const Access = () => {
    const mapSource = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11898.657610395616!2d140.7544425!3d41.7924457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef56a8193080b%3A0xf729a88225bd2330!2z44G-44G55LqU56ic6YOt5raI5YyW5Zmo44O75YaF6KaW6Y-h44Kv44Oq44OL44OD44Kv!5e0!3m2!1sja!2sjp!4v1694768287048!5m2!1sja!2sjp";
    return (
        <div id="index" className="bg-solate-100 min-h-screen w-screen pt-5">
            <div className="mb-10 px-5">
                <BackButton />
            </div>

            <h1 className="text-center text-4xl pb-2 text-gray-500">アクセス</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Access</h2>

            <div className="px-10">
                {menus.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => { jumpToSection(data.id); }}
                        className="text-center bg-orange-200 py-4 mb-4 shadow rounded"
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <p>{data.title}</p>
                            <GrNext size={20} color="#808080" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center w-full">
                <img src="/医院地図.png" alt="医院地図" className="w-full md:w-1/2 px-5" />
            </div>


            {/* 車でお越しの方 */}
            <div id="car" className="px-5 mt-20">
                <h2 className="text-2xl font-bold text-center py-1 mb-4 border-b-2 border-gray-500 text-gray-500">車でお越しの方</h2>
                <AccessForCar />
            </div>

            {/* 市電でお越しの方 */}
            <div id="train" className="px-5 mt-20">
                <h2 className="text-2xl font-bold text-center py-1 mb-4 border-b-2 border-gray-500 text-gray-500">市電でお越しの方</h2>
                <AccessForTrain />
            </div>

            {/* バスでお越しの方 */}
            <div id="bus" className="px-5 mt-20">
                <h2 className="text-2xl font-bold text-center py-1 mb-4 border-b-2 border-gray-500 text-gray-500">バスでお越しの方</h2>
                <AccessForBus />
            </div>

            <div className="px-5 my-5 md:flex md:items-start">
                <iframe
                    className="md:hidden"
                    src={mapSource}
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <iframe
                    className="hidden md:block"
                    src={mapSource}
                    width="100%"
                    height="500px"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="flex justify-center mb-10">
                <button
                className=" bg-theme py-3 px-10 shadow text-white rounded"
                 onClick={()=>{jumpToSection("index")}}
                 >
                    一番上に戻る
                </button>
            </div>
        </div>
    );
};

export default Access;