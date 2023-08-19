/* eslint-disable @next/next/no-img-element */


const accessData = [
    {
        title: "所在地",
        text: ["〒040-0001", "函館市五稜郭町34-12サンセイメディカルプラザ２階"]
    },
    {
        title: "交通機関",
        text: ["市電「五稜郭公園前駅」から徒歩7分", "バス停「五稜郭」から徒歩5分"]
    },
    {
        title: "駐車場",
        text: ["ナカジマ薬局の駐車場をご利用ください"]
    },
];

const Access = () => {
    const mapSource = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.8317037272816!2d140.75463934132497!3d41.791979317440386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef46e53084c07%3A0xb106e22ccbb47d25!2z44CSMDQwLTAwMDEg5YyX5rW36YGT5Ye96aSo5biC5LqU56ic6YOt55S677yT77yU4oiS77yR77ySIOOCteODs-OCu-OCpOiqv-WJpOiWrOWxgA!5e0!3m2!1sja!2sjp!4v1684241620716!5m2!1sja!2sjp";

    return (
        <div className="mt-16" id="access">
            <h1 className="text-center text-4xl pb-2 text-gray-500">アクセス</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Access</h2>

            <div className="px-3 font-sans lg:px-20">
                {accessData.map((data, index) => (
                    <div
                        key={index}
                        className="flex py-4 border-b-2"
                    >
                        <p className="w-28 font-semibold">{data.title}</p>
                        <div className="flex flex-col">
                            {data.text.map((data, index) => (
                                <p key={index}>{data}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="px-5 my-5 md:flex md:items-start">
                <img className="w-full md:w-1/2 object-contain md:flex-shrink-0 md:h-[500px]" src="/アクセス地図.jpg" alt="" />
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
                    width="50%"
                    height="500px"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Access;