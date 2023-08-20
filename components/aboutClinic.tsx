/* eslint-disable @next/next/no-img-element */


const medicalDepartmentData = [
    "内科",
    "消化器内科",
    "経鼻内視鏡",
    "大腸内視鏡",
    // "",
    // "",
    // "",
    // "",
];

const AboutClinic = () => {
    return (
        <div className="" id="aboutClinic">
            {/* ここにロゴ */}
            <div className="flex justify-center pb-10">
                <img
                    src="/ロゴ黒.svg"
                    alt="まべ五稜郭・内視鏡クリニック"
                    className="px-5 md:w-1/2"
                />
            </div>

            <div className="md:flex md:items-start">
                <img
                    src="/診療時間表.svg"
                    alt=""
                    className="w-full px-10 md:w-2/5 md:flex-1"
                />
                <div className="flex-1">
                    <div className="py-5 md:py-0 md:pr-20 font-sans px-10 md:px-2">
                        <h3 className="border-b-2 py-1 text-lg">休診日</h3>
                        <p className="mt-2">木曜日、日曜、祝日、第2、4土曜日午後</p>
                        <p>※受け付けは診療終了時間の30分前迄</p>
                    </div>
                    {/* 診療科目部分 */}
                    <div className="px-10 md:px-0 md:pr-20 font-sans mt-10">
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
            </div>
        </div>
    );
};

export default AboutClinic;