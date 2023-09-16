/* eslint-disable @next/next/no-img-element */


const AccessForCar = () => {
    return (
        <div className="w-full h-100">
            <p className="text-lg py-2">お車でお越しの方は、当院すぐそばの<span className="font-bold border-b border-gray-500">ナカジマ薬局サンセイ本店</span>の駐車場をご利用ください。</p>

            <div className="mt-5 py-1 text-center">
                <p className="text-xl py-2">付近の写真</p>

                {/* 写真 */}
                <div className="flex flex-col space-y-3  md:grid md:grid-cols-3 md:gap-3">
                    <div className="h-full flex flex-col justify-end">
                        <p>地図</p>
                        <img src="/車でお越しの方01.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="h-full">
                        <p>ナカジマ薬局サンセイ本店</p>
                        <img src="/車でお越しの方02.png" alt="" className="w-full h-auto" />
                    </div>
                    <div className="h-full">
                        <p>セブンイレブン側から</p>
                        <img src="/車でお越しの方03.png" alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessForCar;