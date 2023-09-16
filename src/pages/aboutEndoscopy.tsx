/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import EndoscopyFeature from "../../components/endoscoryFeature";
import BackButton from "../../components/v1/backButton";
import DownloadButton from "../../components/v1/downloadButton";
import { GrNext } from "react-icons/gr";

type Props = {

};

const AboutEndoscopy: React.FC<Props> = () => {
    const router = useRouter();
    const menus = [
        { title: "検査を受けるまでの流れ", id: "flow" },
        { title: "大切なお知らせ", id: "must_read" },
        { title: "同意書ダウンロードへ", id: "consent_form" },
    ];
    const jumpToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 20;  // ここでオフセット値を設定。例として50px上で止めたい場合
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-slate-100 min-h-screen w-full pt-5">
            <div className="mb-10 px-5">
                <BackButton />
            </div>
            <h1 className="text-center text-4xl pb-2 text-gray-500">内視鏡検査</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Endoscopy</h2>

            {/* メニュー部分 */}
            <div className="px-10">
                {menus.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => { jumpToSection(data.id); }}
                        className="text-center bg-orange-200 py-4 mb-4 shadow rounded"
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <p>{data.title}</p>
                            <GrNext size={20} color="#808080" />
                        </div>
                    </div>
                ))}

            </div>

            {/* 検査を受けるまでの流れ */}
            <div className="py-10 px-10" id="flow">
                <h2 className="text-2xl font-bold text-center py-1 mb-4 border-b-2 border-gray-500">検査を受けるまでの流れ</h2>

                <div className="grid md:grid-cols-3 gap-3">
                    {/* step1 */}
                    <div className="mb-5 md:h-full bg-white">
                        <div className="py-2 px-5">
                            <h3 className="text-xl font-semibold pb-2">Step1 検査予約</h3>
                            <p>ご都合の良い日程から検査日をお選びください。</p>
                            <p>その後<span className="text-theme">WEB問診</span>の記入をお願いいたします。</p>
                            <img className="hidden md:block" src="/検査を受ける流れ01.png" alt="" />

                            {/* <div className="flex justify-center mt-3">
                            <button
                                className="bg-pink-500 text-lg py-2 px-5 rounded shadow font-bold text-white"
                                onClick={() => { window.open("https://ssc.doctorqube.com/hakodate-naishikyou/"); }}
                            >
                                WEB予約へ
                            </button>
                        </div> */}
                        </div>
                    </div>

                    {/* step2 */}
                    <div className="mb-5 md:h-full bg-white">
                        <div className="py-2 px-5">
                            <h3 className="text-xl font-semibold pb-2">Step2 説明同意書</h3>
                            <p>
                                <span className="border-b border-blue-300 font-semibold" onClick={() => { jumpToSection("consent_form"); }}>
                                    こちら
                                </span>
                                から該当する説明書・同意書をダウンロード頂きよくご確認ください。</p>
                            {/* <p>印刷後サインしてご持参ください。</p> */}
                            <img className="hidden md:block md:mt-10" src="/検査を受ける流れ02.png" alt="" />

                            {/* <div className="flex justify-center mt-3">
                            <button
                                className="bg-pink-500 text-lg py-2 px-5 rounded shadow font-bold text-white"
                                onClick={() => { jumpToSection("consent_form") }}
                            >
                                ダウンロードへ
                            </button>
                        </div> */}
                        </div>
                    </div>

                    {/* step3 */}
                    <div className="h-full bg-white">
                        <div className="py-2 px-5">
                            <h3 className="text-xl font-semibold pb-2">Step3 検査説明</h3>
                            <p className="text-lg">次のいずれかの方法で検査の説明を受けます。</p>
                            <p className="text-lg pt-1">①クリニック受診を予約</p>
                            <p className="text-lg pt-1">②オンライン受診を予約</p>
                            <p className="text-lg pt-1">③予約枠が一杯の場合：予約なしでクリニックに直接受診</p>
                            <p className="text-lg pt-1">※胃カメラの場合は、説明の受診なしで<span className="border-b border-gray-600">前日21:00以降絶食し</span>直接検査に受診することも可能です。</p>
                            {/* <img src="/検査を受ける流れ02.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* 必読部分 */}
            <div id="must_read" className="px-10 mt-20 text-lg">
                <h2 className="text-2xl font-bold text-center py-1 mb-3 border-b-2 border-gray-500">大切なお知らせ</h2>
                <div className=" md:px-20">
                    <p>※当院では忙しい方も内視鏡検査が受けられるよう、<span className="font-bold">WEB予約制</span>にしています。</p>
                    <p>安心・安全な検査のため<span className="font-bold">年齢制限</span>を設けています。</p>
                    <p className="mb-3">それ以上の年齢で希望される場合は、事前に診察し相談させて頂きますのでご理解をお願いいたします。</p>

                    <div className="py-2 px-2 bg-white bg-opacity-50">
                        <p className="pb-1">1.対象年齢：75歳以下</p>
                        <p className="pb-1">2.腹痛、貧血、血便、便秘、細い便、体重減少など<span className="font-bold border-b border-gray-500">症状がある場合</span>は、
                            <span className="font-bold border-b border-gray-500">内視鏡検査をwebで予約せず、出来るだけ早く診察</span>を受けて下さい。
                            診察の予約枠も一杯の場合は、食事をせずに診療している日の早め
                            の時間に受診して下さい。</p>
                        <p>3.WEB予約では、同日に上部、大腸を予約しないでください。同一日の検査は原則としてドッグ（自由診療）で行っています。</p>
                    </div>
                </div>
            </div>


            {/* ダウンロード部分 */}
            <div className="border-t-2  mt-10 py-5 px-10" id="consent_form" >
                <h2 className="text-2xl font-bold text-center py-1 mb-2 border-b-2 border-gray-500">同意書ダウンロード</h2>
                <h2 className="lg:text-lg pt-5 pb-5 lg:pb-16 text-center">各種検査についての説明書及び同意書は以下のボタンからダウンロードしてください。</h2>


                <div className="flex flex-col lg:flex-row justify-center pb-10">
                    <div className="flex-1 text-center mt-10 lg:mt-0 lg:border-r-2">
                        <h3 className="text-xl font-bold pb-3">上部消化管内視鏡検査について</h3>
                        <div className="flex flex-col justify-center items-center">
                            <DownloadButton text="説明書ダウンロード" filepath="/上部内視鏡説明書.pdf" />
                            <DownloadButton text="同意書ダウンロード" filepath="/上部内視鏡同意書.pdf" />
                        </div>
                    </div>

                    <div className="flex-1  text-center pt-10 md:pt-0">
                        <h3 className="text-xl font-bold pb-3">大腸内視鏡検査について</h3>
                        <div className="flex flex-col justify-center items-center">
                            <DownloadButton text="大腸内視鏡検査を受けられる方へ" filepath="/大腸内視鏡検査を受けられる方へ.pdf" />
                            <DownloadButton text="説明書ダウンロード" filepath="/大腸内視鏡説明書.pdf" />
                            <DownloadButton text="同意書ダウンロード" filepath="/大腸内視鏡同意書.pdf" />
                            <p className="text-center px-5 md:px-20 pt-10">
                                ※ 抗血栓薬服用中の方へ：大腸内視鏡では、原則抗血栓薬を当日朝のみ休薬にしていますが、念のため下記をダウンロードして印刷し、主治医に確認ください
                            </p>
                            <DownloadButton text="抗血栓薬を服用中の方へ" filepath="/抗血栓薬休薬の可否について.pdf" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutEndoscopy;