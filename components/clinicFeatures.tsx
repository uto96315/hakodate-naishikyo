/* eslint-disable @next/next/no-img-element */
import Movies from "./movies";
import YouTubeVideo from "./v1/youtube";

const featuresData = [
    {
        id: 1,
        title: "オンラインに対応",
        description: "オンライン予約、web問診、オンライン診療の導入 診察、胃カメラ、大腸内視鏡の予約は24時間いつでもPC，スマホから",
        imgPath: "/クリニックの特徴例.jpg",
    },
    {
        id: 2,
        title: "時間を取らない診療",
        description: "受診日当日に検査結果も説明、大腸ポリープ切除も日帰りで可能",
        imgPath: "/クリニックの特徴例.jpg",
    },
    {
        id: 3,
        title: "土曜・時間外の診療",
        description: "土曜日の内視鏡検査や、時間外のオンライン診療",
        imgPath: "/クリニックの特徴例.jpg",
    },
];

const ClinicFeatures = () => {
    return (
        <div className="mt-10 mb-10">
            <h1 className="text-center text-4xl pb-2 text-gray-500">当院の特徴</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Features</h2>
            {/* <div className="flex justify-center">
                <div className="w-full px-10 lg:w-1/2">
                    <YouTubeVideo videoId={"MTR1Jt2EM4w"} />
                </div>
            </div> */}

            <div className="px-10">
                <h2 className="text-xl font-semibold lg:text-2xl text-center">現役世代の忙しい方・遠方の方でも安心して受診できる体制</h2>
                <div className="mt-10">
                    {featuresData.map((data, index) => (
                        <div key={index} className="pb-10 md:flex md:px-20">
                            <div className="lg:flex-1">
                                <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
                                    <span className="text-theme font-bold font-sans">{data.id}</span>
                                    <p className="px-2 py-1">{data.title}</p>
                                </div>
                                <p className="py-3 text-lg md:text-xl lg:pr-20">
                                    {data.description}
                                </p>
                            </div>

                            <img src={data.imgPath} alt="" className="md:h-72" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClinicFeatures;