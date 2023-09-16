/* eslint-disable @next/next/no-img-element */



const AccessForTrain = () => {
    return (
        <div className="w-full">
            <p className="text-lg py-2 md:text-center">市電でお越しの方は<span className="font-bold border-b border-gray-500">五稜郭公園前駅</span>で降車ください。
            </p>
            <div className="mt-5 py-1 text-center text-lg">
                <div className="flex flex-col justify-between space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3">
                    <div className="flex flex-col justify-end">
                        <p>地図</p>
                        <img src="/市電でお越しの方01.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>①市電を降りたら、まず無印良品やミスタードーナツがある側に横断歩道を渡ります。</p>
                        <img src="/市電でお越しの方02.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>②そのまま無印良品の横の歩道をまっすぐ進みます。</p>
                        <img src="/市電でお越しの方03.png" alt="" className="w-full h-auto" />
                    </div>
                    <div>
                        <p>③<span className="font-bold border-b border-gray-500">ホテル グランティア</span>と<span className="font-bold border-b border-gray-500">北陸銀行</span>があるT字路まで進み</p>
                        <img src="/市電でお越しの方04.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>④<span className="font-bold border-b border-gray-500">北陸銀行の角を右に曲がります。</span></p>
                        <img src="/市電でお越しの方05.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>⑤そのまま<span className="font-bold border-b border-gray-500">五稜郭病院の交差点までまっすぐ進みます。</span></p>
                        <img src="/市電でお越しの方06.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>⑥<span className="font-bold border-b border-gray-500">五稜郭病院の交差点で右に曲がります。</span></p>
                        <img src="/市電でお越しの方07.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>⑦到着です。正面右側の入り口からお入りください。</p>
                        <img src="/市電でお越しの方08.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessForTrain;