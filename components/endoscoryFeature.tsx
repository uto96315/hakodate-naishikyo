import { AiOutlineArrowRight } from "react-icons/ai";

const featureData = [
    {
        id: 1,
        text: "安心の技術・診断",
        description: "内視鏡検査歴30年の専門医が丁寧に行う高度な内視鏡検査",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 2,
        text: "不安なく",
        description: "専任スタッフが説明検査中もサポート\n話ながら不安なく",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 3,
        text: "苦痛なく",
        description: "楽な内視鏡操作楽に受けるコツ伝授\n鎮静、鎮痛剤も対応",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 4,
        text: "確実な診断・治療",
        description: "専門医が診断、治療最新の高精細内視鏡",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 5,
        text: "最新の内視鏡",
        description: "オリンパス社製の最新システムを導入\n特殊光（NBI, TXI）拡大内視鏡",
        imgPath: "",
        detailLink: "ああ",
    },
    {
        id: 6,
        text: "確実な洗浄",
        description: "専任スタッフの洗浄\nオリンパス社製最新洗浄機（過酢酸）を使用",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 7,
        text: "24時間web予約、土曜日も検査",
        description: "忙しい方も検査可能\n遠方の方にも安心",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 8,
        text: "ピロリ菌の専門 当日検査、治療",
        description: "各種ピロリ菌検査を導入\n当日に診断して確実に除菌",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 9,
        text: "当日ポリープ切除",
        description: "約半数に見つかる大腸腺腫は当日切除可能。",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 10,
        text: "消化器専門の病理",
        description: "精検やポリープ切除で得られた検体は、全国の消化器専門病理医が診断",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 11,
        text: "専門病院と連携",
        description: "内視鏡的粘膜下層剥離術や外科手術などに精通した全国の病院を紹介可能",
        imgPath: "",
        detailLink: null,
    },
    {
        id: 12,
        text: "自由診療で高度な内視鏡＋検査",
        description: "口腔、咽喉頭、食道胃、大腸をリスクに応じて内視鏡＋各種検査、治療",
        imgPath: "",
        detailLink: null,
    },
];

const EndoscopyFeature = () => {
    return (
        <div className="">
            <h2 className="text-2xl text-stone-500 mx-10 pb-2 mb-10 text-center border-b-2">
                当院の内視鏡検査の特徴
            </h2>

            <div className=" md:grid md:grid-cols-3 md:gap-1">
                {featureData.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col px-4 mx-10 py-3 rounded  items-center bg-theme mb-5 text-white"
                    >
                        <p className="text-lg mb-3 font-bold">{data.text}</p>
                        <p className="text-center"
                         dangerouslySetInnerHTML={{ __html: data.description.replace(/\n/g, '<br />') }}></p>
                        {
                            data.detailLink &&
                            <button
                                className="bg-white text-theme rounded px-10 py-1 shadow mt-5 flex justify-center items-center space-x-1"
                            >
                                <p>詳しく見る</p>
                                <AiOutlineArrowRight />
                            </button>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EndoscopyFeature;