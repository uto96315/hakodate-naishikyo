/* eslint-disable @next/next/no-img-element */
import BackButton from "../../components/v1/backButton";


const AboutOnlineTreatment = () => {
    return (
        <div className="pb-10">
            <div className="mb-10 px-5 pt-5">
                <BackButton />
            </div>

            <div>
                <h1 className="text-center text-3xl pb-2 text-gray-500">オンライン診療について</h1>
                <h2 className="text-center text-2xl pb-10 text-gray-400">Online Medical Treatment</h2>
            </div>

            <div className="px-5 md:px-20">
                <p className="md:text-center">
                    まべ五稜郭消化器・内視鏡クリニックでは、オンライン診療を行なっています。<br />
                    患者様のスマートフォンやタブレット、パソコンを用いて、ビデオ通話で診療を行います。<br />
                </p>

                <h2 className="pt-10 pb-2 text-xl font-bold text-center text-gray-500">対象となる方</h2>
                <ul className="md:px-20">
                    <div className="py-2">
                        <li className="list-item pb-1 font-semibold">・通院中の患者様(再来)</li>
                        <p>スケジュールの都合や遠方で受診出来ない場合。 診療や処方、次回の予約などが行えます。</p>
                    </div>
                    <div className="py-2">
                        <li className="list-item pb-1 font-semibold">・大腸内視鏡検査を予約し、検査前の受診が出来ない方</li>
                        <p>オンラインで検査の説明をし、大腸検査の前処置薬を郵送で受け取る場合。新患、再来ともに可能です。</p>
                    </div>
                    <div className="py-2">
                        <li className="list-item pb-1 font-semibold">・検査結果の説明とその後の対応についてオンラインでの説明を希望する場合</li>
                    </div>
                </ul>

                <h2 className="pt-10 pb-2 text-xl font-bold text-center text-gray-500">予約方法</h2>
                <div className=" space-y-1 md:px-20">
                    <p>①
                        <a href="https://ssc.doctorqube.com/hakodate-naishikyou/" className=" border-b border-blue-500 text-blue-500">予約サイト</a>
                        の「予約をとる」ボタンより、受診ご希望日時をご選択ください。</p>
                    <p>②予約が完了すると、メールでお知らせが届きます。</p>
                    <p>③事前にクリニックの公式LINEにお友達登録をします。</p>
                    <p>④薬局に処方箋を提示する際に使用するアプリ
                        <a href="#carada" className=" border-b border-blue-500 text-blue-500">「CARADA」</a>
                        も予めインストール、設定します。</p>
                </div>

                <h2 className="pt-10 pb-2 text-xl font-bold text-center text-gray-500">お支払い</h2>
                <div className="space-y-1 md:px-20">
                    <div>
                        <p>・オンライン診療の会計は全て<span className="text-red-400">クレジットカード</span>でのお支払いになります。</p>
                        <p className="px-5">※正式決済はオンライン診療後、翌日以降の当クリニック最初の診療日に行います。</p>
                    </div>
                    <p>・通常の費用に加え、システム利用及び通信のための費用が追加されます。</p>
                </div>

                <h2 className="pt-10 pb-2 text-xl font-bold text-center text-gray-500">関連リンク</h2>
                <p className="text-center">※CARADAはAndroidとiPhoneでダウンロード方法が異なるためご注意ください。</p>
                <div className="md:flex md:px-20 pt-5 pb-20 space-y-3 md:space-y-0 justify-center">
                    <div className="px-5 py-5 shadow text-center border-2 rounded-xl bg-gray-700">
                        <a href="https://ssc.doctorqube.com/hakodate-naishikyou/" className="font-bold text-white">オンライン予約</a>
                    </div>
                    
                    <div id="carada" className="px-5 py-5 shadow text-center border-2 rounded-xl bg-gray-700">
                        <a href="https://apps.apple.com/jp/app/carada-lian-xieapuri/id1106740618" className="font-bold text-white">CARADA（iPhone）</a>
                    </div>

                    <div className="px-5 py-5 shadow text-center border-2 rounded-xl bg-gray-700">
                        <a href="https://play.google.com/store/apps/details?id=jp.co.mti.carada.app&hl=ja" className="font-bold text-white">CARADA（Android）</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutOnlineTreatment;