

const biographyData = [
    {
        when: "1970年",
        text: ["北海道札幌市生まれ"]
    },
    {
        when: "1995年",
        text: ["山形大学医学部 卒業"]
    },
    {
        when: "1999年",
        text: ["山形大学大学院医学研究科卒業", "医学博士(緑茶カテキンのピロリ菌に対する効果)"]
    },
    {
        when: "1999年",
        text: ["公立学校共済組合東北中央病院 消化器内科勤務"]
    },
    {
        when: "2000年",
        text: ["山形県立中央病院 内科(消化器)勤務"]
    },
    {
        when: "2003年",
        text: ["内科医長昇任"]
    },
    {
        when: "2006年",
        text: ["医療情報部 副部長昇任"]
    },
    {
        when: "2008年",
        text: ["KKR札幌医療センター消化器科医長就職"]
    },
    {
        when: "2010年",
        text: ["北海道大学病院 第3内科 助教就職"]
    },
    {
        when: "2014年",
        text: ["北海道大学大学院医学研究科がん予防内科 特任講師昇任"]
    },
    {
        when: "2016年",
        text: ["国立病院機構 函館病院 消化器科部長・消化器病センター長就任", "北海道大学病院光学医療診療部 客員臨床教授就任"]
    },
    {
        when: "2019年",
        text: ["淳風会健康管理センター 倉敷センター長就任"]
    },
    {
        when: "2023年",
        text: ["まべ五稜郭消化器・内視鏡クリニック 開業"]
    },
];

const Biography = () => {
    return (
        <div className="mt-10 lg:text-lg mb-20">
            <h1 className="text-center text-4xl pb-2 text-gray-500">院長略歴</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Biography</h2>

            <div className="px-5 lg:px-20">
                {biographyData.map((data, index) => (
                    <div key={index} className="py-1 lg:py-3 flex items-center space-x-5 border-b-2">
                        <p className="w-16 lg:w-32">{data.when}</p>
                        <div>
                            {data.text.map((data, index) => (
                                <p key={index}>{data}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Biography;