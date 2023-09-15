/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { MdOutlineNavigateNext } from "react-icons/md";

type Props = {
    isNextButton: boolean; // 次へボタンの有無
    isDetail: boolean; // 詳細まで表示するかどうかのフラグ
};

const Message: React.FC<Props> = ({ isNextButton, isDetail }) => {
    const router = useRouter();
    const message = <p className="pt-2 space-x-1 text-lg leading-9 md:px-14">
        こんにちは。 “まべ五稜郭消化器・内視鏡クリニック”を開院させて頂くことになりました、院長の間部克裕（まべ かつひろ）です。<br />
        <span className="font-bold text-theme">
            “ずっと、ちゃんと、あなたと”
        </span><br />
        私達のクリニックでは、元気に活躍する現役世代の方にも、適切な検査をし、ちゃんと“リスク”を判断し、リスクと適切な予防、治療法を説明し、皆様と一緒に、ずっと笑顔で健康に過ごせるよう取り組んでまいります。<br />
        忙しい方、遠方の方も検査、治療が受けられるようにオンライン予約、土曜日の検査、診療とオンライン診療を取り入れています。
    </p>;

    const detailMessage = <p className="md:text-lg">
        働く世代の皆さまが幸せな笑顔で毎日過ごせるよう、そして70歳を過ぎても社会で生き生きと活躍していただけるよう、適切な診療と予防医療を提供することで地域に貢献していくことが私たちの理念です。<br />
        検診で発見される胃癌、大腸癌は98％前後が助かりますが、症状で受診した場合は半数近く助けることが出来ません。消化管（口、喉、食道、胃、大腸）の癌はリスクがわかっていて、癌になることを予防したり、適切な間隔で内視鏡検査を受けることで癌が出来ても治すことができ、多くはお腹を切らず内視鏡で治すことができます。<br />
        同様に症状で発見されると重篤な脳梗塞や心筋梗塞、腎不全も、リスクがわかっており生活習慣の改善や治療で予防することができます。<br />
        当院は最新の内視鏡システムを用いた高精度で苦しくない内視鏡検査、エコー検査、血液検査、AI付きのレントゲン装置を導入し、ピロリ菌除菌、日帰り大腸ポリープ切除、炎症性腸疾患など専門の診療と生活習慣病の予防、治療を行います。<br />
        忙しい方や遠方の方でも適切な検査、治療が行えるよう、土曜日診療、オンライン診療を行い、検査当日に結果を説明して予防、治療を行います。
    </p>;

    return (
        <div className="min-w-screen px-5 md:px-10 pb-10">
            <h1 className="text-center text-4xl pb-2 text-gray-500">院長挨拶</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">MESSAGE</h2>

            <div className="py-5 shadow-lg -mx-4 -my-2 leading-tight">
                <div className="md:flex md:space-x-3">
                    <img src="/院長写真.jpg" alt="" className="w-auto md:w-1/2 h-auto md:h-full object-cover" />
                    <div className="w-full h-auto py-10 px-10 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl md:text-3xl font-sans font-semibold pb-5 text-center">
                                健康をサポートし”笑顔”に！
                            </h2>
                            {
                                isDetail ? detailMessage : message
                            }
                        </div>

                        {/* 次へボタンが有りなら表示 */}
                        {isNextButton &&
                            <div className="flex justify-center items-center py-14 text-white">
                                <button
                                    className="py-3 px-10 md:px-20 rounded-lg shadow-md bg-theme flex"
                                    onClick={() => { router.push("/aboutDirector"); }}
                                >
                                    詳しく見る
                                    <MdOutlineNavigateNext size={25} color="white" />
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;