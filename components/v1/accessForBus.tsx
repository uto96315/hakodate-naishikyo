/* eslint-disable @next/next/no-img-element */


const AccessForBus = () => {
    return (
        <div className="w-full">
            <p className="text-lg py-2 md:text-center">バスでお越しの方はバス停「<span className="font-bold border-b border-gray-500">五稜郭</span>」で降車ください。
            </p>

            <div className="mt-5 py-1 text-center text-lg">
                <div className="flex flex-col justify-between space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3">
                    <div className="flex flex-col justify-end">
                        <p>地図</p>
                        <img src="/バスでお越しの方01.png" alt="" className="w-full h-auto" />
                    </div>
                    <div>
                        <p>①バスを降りたら、<span className="font-bold border-b border-gray-500">ホテル グランティア</span>と<span className="font-bold border-b border-gray-500">太陽生命</span>があるT字路まで進み</p>
                        <img src="/市電でお越しの方04.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>②<span className="font-bold border-b border-gray-500">太陽生命の角を右に曲がります。</span></p>
                        <img src="/市電でお越しの方05.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>③そのまま<span className="font-bold border-b border-gray-500">五稜郭病院の交差点までまっすぐ進みます。</span></p>
                        <img src="/市電でお越しの方06.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>④<span className="font-bold border-b border-gray-500">五稜郭病院の交差点で右に曲がります。</span></p>
                        <img src="/市電でお越しの方07.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>⑤曲がると左手に病院が見えてきます。</p>
                        <img src="/市電でお越しの方08.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>⑥到着です。正面右側の入り口からお入りください。</p>
                        <img src="/市電でお越しの方09.png" alt="" className="w-full h-auto" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AccessForBus;