import EndoscopyFeature from "../../components/endoscoryFeature";
import DownloadButton from "../../components/v1/downloadButton";

type Props = {

};

const AboutEndoscopy: React.FC<Props> = () => {
    return (
        <div className="bg-slate-100 min-h-screen w-full pt-10">
            <h1 className="text-center text-4xl pb-2 text-gray-500">内視鏡検査</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Endoscopy</h2>

            <EndoscopyFeature />

            {/* ダウンロード部分 */}
            <div className="border-t-2  mt-10 py-5 px-10">
                <h2 className="lg:text-lg pt-5 pb-5 lg:pb-16 text-center">各種検査についての説明書及び同意書は以下のボタンからダウンロードしてください。</h2>


                <div className="flex flex-col lg:flex-row justify-center pb-10">
                    <div className="flex-1 text-center mt-10 lg:mt-0 lg:border-r-2">
                        <h3 className="text-lg pb-3">上部消化管内視鏡検査について</h3>
                        <div className="flex flex-col justify-center items-center">
                            <DownloadButton text="説明書ダウンロード" filepath="/上部内視鏡説明書.pdf" />
                            <DownloadButton text="同意書ダウンロード" filepath="/上部内視鏡同意書.pdf" />

                        </div>
                    </div>

                    <div className="flex-1 text-center">

                        <h3 className="text-lg pb-3">大腸内視鏡検査について</h3>
                        <div className="flex flex-col justify-center items-center">
                            <DownloadButton text="説明書ダウンロード" filepath="/大腸内視鏡説明書.pdf" />
                            <DownloadButton text="同意書ダウンロード" filepath="/大腸内視鏡同意書.pdf" />
                            <p className="text-center px-20 pt-10">
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