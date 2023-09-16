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
    return (
        <div className="bg-solate-100 min-h-screen w-screen pt-5">
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
                <img src="/医院地図.png" alt="医院地図" className="w-full md:w-1/2 px-5"/>
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
        </div>
    );
};

export default Access;