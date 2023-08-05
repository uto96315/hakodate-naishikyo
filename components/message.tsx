/* eslint-disable @next/next/no-img-element */
import { MdOutlineNavigateNext } from "react-icons/md";


const Message: React.FC = () => {
    return (
        <div className="min-w-screen px-5 md:px-10 py-10">
            <h1 className="text-center text-4xl pb-2 text-gray-500">院長挨拶</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">MESSAGE</h2>

            <div className="py-5 shadow-2xl -mx-4 -my-2">
                <div className="md:flex md:space-x-3">
                    <img src="/院長写真.jpg" alt=""/>
                    <div className="w-full h-min py-10 px-10">
                        <h2 className="text-xl md:text-3xl font-sans font-semibold pb-5 text-center">
                            健康をサポートし”笑顔”に！
                        </h2>
                        <p className="pt-2 space-x-1 text-lg leading-9 md:px-14">
                            当院では患者さまの多様な価値観や状況を受け入れ、患者様ファーストの医療を提供いたします。<br />
                            働く世代の皆さまが幸せな笑顔で毎日過ごせるよう、そして70歳を過ぎても社会で生き生きと活躍していただけるよう、適切な診療と予防医療を提供することで地域に貢献していくことが私たちの理念です。<br />
                            当院は最新の内視鏡システムを用いた高精度で苦しくない内視鏡検査や内視鏡治療をはじめ、ピロリ菌除菌、逆流性食道炎、炎症性腸疾患などの消化器疾患の治療と、生活習慣病の診療を専門に行っていきます。<br />
                            日常の忙しさに追われる方や遠方からの方でもお越しいただけるよう、土曜日も診療、検査を行い、オンライン診療も用意しております。<br />
                            開院後はこのホームページでオンライン予約が出来ます。<br />
                            皆さまのご来院をお待ちしております！
                        </p>
                        <div className="flex justify-center items-center py-14 text-white">
                            <button className="py-3 px-10 md:px-20 rounded-lg shadow-md bg-theme flex">
                                詳しく見る
                                <MdOutlineNavigateNext size={25} color="white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;