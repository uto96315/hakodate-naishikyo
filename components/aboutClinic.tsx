/* eslint-disable @next/next/no-img-element */


const medicalDepartmentData = [
    "経鼻内視鏡",
    "大腸内視鏡",
    "ピロリ菌除菌",
    "日帰り大腸ポリープ切除",
    // "",
    // "",
    // "",
    // "",
];

const AboutClinic = () => {
    return (
        <div className="">
            {/* ここにロゴ */}
            {/* <h1 className="text-center text-4xl pb-2 text-gray-500"></h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Profile</h2> */}
            <div className="flex justify-center pb-10">
                <img
                    src="/logo-flex-black.png"
                    alt="まべ五稜郭・内視鏡クリニック"
                    className="px-5"
                />
            </div>
            <img
                src="/診療時間表.svg"
                alt=""
                className="w-full px-10"
            />
            <div className="py-5 font-sans px-10">
                <h3 className="border-b-2 py-1 text-lg">休診日</h3>
                <p className="pt-1">木曜日、日曜、祝日、第2、4土曜日午後</p>
                <p>※受け付けは診療終了時間の30分前迄</p>
            </div>

            {/* 診療科目部分 */}
            <div className="px-10 font-sans">
                <h3 className="border-b-2 py-2 text-lg">診療内容</h3>
                <div className="h-2"></div>
                <div className="">
                    {medicalDepartmentData.map((data, index) => (
                        <p
                            key={index}
                            className="my-1"
                        >
                            {data}
                        </p>
                        
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutClinic;