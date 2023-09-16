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

                {/* step1 */}
                <div className="mb-5">
                    <div className="py-2 px-5 bg-white">
                        <h3 className="text-xl font-semibold pb-2">Step1 検査予約を取る</h3>
                        <p>ご都合の良い日程から検査日をお選びください。</p>
                        <p>その後<span className="text-theme">WEB問診</span>の記入をお願いいたします。</p>
                        <img src="/検査を受ける流れ01.png" alt="" />

                        <div className="flex justify-center mt-3">
                            <button
                                className="bg-pink-500 text-lg py-2 px-5 rounded shadow font-bold text-white"
                                onClick={() => { window.open("https://ssc.doctorqube.com/hakodate-naishikyou/"); }}
                            >
                                WEB予約へ
                            </button>
                        </div>
                    </div>
                </div>

                {/* step2 */}
                <div className="">
                    <div className="py-2 px-5 bg-white">
                        <h3 className="text-xl font-semibold pb-2">Step2 説明同意書のダウンロード</h3>
                        <p>
                            <span className="border-b border-blue-300 font-semibold" onClick={() => { jumpToSection("consent_form"); }}>
                                こちら
                            </span>
                            から該当する同意書をダウンロード頂き、可能でありましたら印刷後サインしてご持参ください。</p>
                        <p>その後<span className="text-theme">WEB問診</span>の記入をお願いいたします。</p>
                        <img src="/検査を受ける流れ02.png" alt="" />

                        <div className="flex justify-center mt-3">
                            <button
                                className="bg-pink-500 text-lg py-2 px-5 rounded shadow font-bold text-white"
                                onClick={() => { jumpToSection("consent_form") }}
                            >
                                ダウンロードへ
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* 必読部分 */}
            <div id="must_read" className="px-10 mt-20">
                <h2 className="text-2xl font-bold text-center py-1 mb-2 border-b-2 border-gray-500">必ずお読みください</h2>
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