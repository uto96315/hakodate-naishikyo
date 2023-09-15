/* eslint-disable @next/next/no-img-element */


const EndoscopyArea = () => {
    const featureData = [
        {
            id: "01",
            text: "安心の技術・診断",
            description: "内視鏡検査歴30年の専門医が丁寧に行うことで可能となる高度な内視鏡検査で安心して検査を受けることができます。",
            imgPath: "/内視鏡特徴01.png",
            detailLink: null,
        },
        {
            id: "02",
            text: "検査中も不安と苦痛のない内視鏡",
            description: "専門のスタッフが丁寧にご説明し、検査中もサポート致します。\n痛みに弱い方でも大丈夫。楽に内視鏡操作を受けるコツを伝授致します。鎮静・鎮痛剤にも、もちろん対応しています。",
            imgPath: "/内視鏡特徴02.png",
            detailLink: null,
        },
        {
            id: "03",
            text: "最新の内視鏡",
            description: "オリンパス社製の最新システムを導入しました。明るいハイビジョンNBI、 TXIなどの最新技術でより確実な検査を。",
            imgPath: "/内視鏡特徴03.png",
            detailLink: null,
        },
        {
            id: "04",
            text: "24時間WEB予約・土曜日も検査",
            description: "WEBでの予約と土曜日の検査で、お忙しい方でも無理せずに検査を受けることができます。",
            imgPath: "/内視鏡特徴04.png",
            detailLink: null,
        },
        {
            id: "05",
            text: "ピロリ菌の専門（当日検査・治療）",
            description: "各種ピロリ菌検査を導入しております。\n当日に診断して確実に除去。",
            imgPath: "/内視鏡特徴05.png",
            detailLink: "",
        },
        {
            id: "06",
            text: "確実な洗浄",
            description: "専任スタッフが丁寧に洗浄致します。\nオリンパス社製最新洗浄機（過酢酸）を使用",
            imgPath: "/内視鏡特徴06.png",
            detailLink: null,
        },
        {
            id: "07",
            text: "楽な大腸内視鏡",
            description: "飲みやすい洗腸剤を夜、朝2回にわけてCO2送気で検査中、検査後の張り少なく",
            imgPath: "/内視鏡特徴07.png",
            detailLink: null,
        },
        {
            id: "08",
            text: "当日ポリープ切除",
            description: "約半数の患者様に見つかる大腸種線（ポリープ）は当日切除可能",
            imgPath: "/内視鏡特徴08.png",
            detailLink: null,
        },
        {
            id: "09",
            text: "専門施設と連携",
            description: "内視鏡切除、外科手術に精通した全国の医師病院と連携。\n生体やポリープ切除で得られた検体は全国の消化器専門の病理医が診断します。",
            imgPath: "/内視鏡特徴09.png",
            detailLink: null,
        },
    ];

    return (
        <div className="pt-10 pb-20 md:px-10">
            <div>
                <h1 className="text-center text-4xl pb-2 text-gray-500">内視鏡検査の特徴</h1>
                <h2 className="text-center text-2xl pb-5 text-gray-400">Endoscopy</h2>
            </div>

            <div className=" font-mono md:grid md:grid-cols-3 md:gap-3">
                {
                    featureData.map((data, index) => (
                        <div
                            key={index}
                            className="px-5 mb-10"
                        >
                            <img src={data.imgPath} alt="" className="w-full rounded-lg" />
                            <div className="">
                                <p className="font-bold text-2xl py-2">{data.id} {data.text}</p>
                                <p className="text-left text-lg"
                                    dangerouslySetInnerHTML={{ __html: data.description.replace(/\n/g, '<br />') }}></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default EndoscopyArea;