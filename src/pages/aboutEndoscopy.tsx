/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import EndoscopyFeature from "../../components/endoscoryFeature";
import BackButton from "../../components/v1/backButton";
import DownloadButton from "../../components/v1/downloadButton";
import { GrNext } from "react-icons/gr";

type Props = {

};

export const jumpToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 20;  // ここでオフセット値を設定。例として50px上で止めたい場合
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
};

const AboutEndoscopy: React.FC<Props> = () => {
    const router = useRouter();
    const menus = [
        { title: "検査を受けるまでの流れ", id: "flow" },
        { title: "上部内視鏡検査（胃カメラ）の流れ", id: "gastroscope" },
        { title: "下部内視鏡検査(大腸カメラ)の流れ", id: "colonoscop" },
        { title: "経鼻内視鏡のメリット", id: "nasal_endoscope" },
        { title: "当院の鎮静剤に対する考え", id: "sedative" },
        { title: "大切なお知らせ", id: "must_read" },
        { title: "同意書ダウンロードへ", id: "consent_form" },
    ];

    const gastroscopeMenu = [
        {
            step: 1,
            title: "前日",
            desc: <p>夜9時までに夕食を済ませ、それ以降は食べられません。飲水可能です。</p>
        },
        {
            step: 2,
            title: "検査当日【受診前】",
            desc: <p>朝食は食べられません。水、お茶は受診まで飲みましょう。<br />
                ＊お薬：血圧の薬や抗血栓薬（血液をサラサラにする薬）など必要な薬は、
                起床後早めに、多めのお水で飲みましょう。<span className="border-b border-gray-500 font-bold">糖尿病の薬は飲めません。</span></p>
        },
        {
            step: 3,
            title: "検査当日【受診】",
            desc: <p>検査予約時間の<span className="border-b border-gray-500 font-bold">30分前</span>に受診下さい。</p>
        },
        {
            step: 4,
            title: "検査の前処置",
            desc: <p>問診内容を確認します。経鼻内視鏡の場合、
                鼻孔を広げる薬を両方に噴霧します。楽に飲むための説明をします。
                10分程してからスティックで鼻孔の麻酔を行います。</p>
        },
        {
            step: 5,
            title: "内視鏡検査",
            desc: <p>医師が<span className="font-bold">のど</span>の麻酔をします。説明してから、検査を開始します。
                検査時間は5-10分程度です。</p>
        },
        {
            step: 6,
            title: "検査説明",
            desc: <p>検査終了後、医師より結果を説明します。組織検査を行った場合は、
                後日、説明致します（郵送やオンラインでも可能です）。</p>
        },
        {
            step: 7,
            title: "検査後",
            desc: <p>検査終了約1時間後に水を飲み、むせらない場合は食事可能です。</p>
        },
    ];

    const colonoscopyMenu = [
        {
            step: 1,
            title: "前日まで",
            desc: <p>前日は【検査食】を食べていただきます。夕食以降は食べられません。<br />水は十分に飲みましょう。<span className="font-bold">便秘傾向の方</span>は3日前から<span className="font-bold">軟下剤</span>を服用します。</p>
        },
        {
            step: 2,
            title: "前日",
            desc: <p>前日夜8時に下剤と洗腸剤900mlを飲みます。当日朝6時に洗腸剤の残り900mlを飲みます。お昼前には綺麗になり便意がおさまります。</p>
        },
        {
            step: 3,
            title: "検査当日",
            desc: <p>血圧の薬など必要な薬は、起床後早めに飲みましょう。<br />糖尿病の薬は飲めません。抗血栓薬（血液をサラサラにする薬）は可能な方は当日朝は休薬します。＊抗血栓薬を服用中の方へ 主治医にお見せ下さい。検査予約時間の20-30分前に受診下さい。</p>
        },
        {
            step: 4,
            title: "検査前",
            desc: <p>排便状況、問診内容を確認します。<br />検査前の注射（必要な際の点滴）のため注射ルート確保をします。</p>
        },
        {
            step: 5,
            title: "内視鏡検査",
            desc: <p>大腸の動きを止める薬を注射します。医師が説明し、検査を開始します。<br />検査時間は挿入時間が５分前後、観察時間が10分前後、全部で15分程度です。ポリープ切除を行う場合は30分前後です。</p>
        },
        {
            step: 6,
            title: "検査説明",
            desc: <p>検査終了後、医師より結果を説明します。組織検査、ポリープ切除を行った場合は、後日説明致します（郵送やオンラインでも可能です）。</p>
        },
        {
            step: 7,
            title: "検査後",
            desc: <p>検査終了後、お腹が落ち着いたら食事可能です。</p>
        },
    ];

    const nasalEndoscopeMerit = [
        "約5mmの細い内視鏡を鼻から入れるため、舌を圧迫せず、嘔気を感じずに楽に検査を受けられます。",
        "鎮静剤の必要がないので、車やバイク、自転車での通院が可能です。",
        "話すことが出来るので、リラックスして検査が可能です。",
        "口腔内、咽頭、喉頭の観察も出来るため、喫煙、飲酒者や飲むと赤くなるフラッシャーでは特に有用です。",
        "細くてもハイビジョンの高精度内視鏡。確実な診断が行なえます。"
    ];

    const chinnsei = [
        "呼吸状態の悪化、血圧低下など生命にも関わる重い副作用がおこるリスクがある",
        "当日は自動車、バイクなどの運転が出来ず、車での通院は出来ない",
        "検査中に意思疎通が出来ないため、体位変換が不十分になったり、息どめなど呼吸状態をコントロール出来ないため、咽喉頭、胃食道接合部など十分に観察出来ない部位が出来る",
        "副作用で検査を受けたことや説明内容を忘れてしまうことがある",
    ];

    return (
        <div className="bg-slate-100 min-h-screen w-full pt-5 py-10">
            <div className="mb-10 px-5">
                <BackButton />
            </div>
            <h1 className="text-center text-4xl pb-2 text-gray-500">内視鏡検査</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Endoscopy</h2>

            {/* メニュー部分 */}
            <div className="px-10 md:grid md:grid-cols-3 md:gap-3">
                {menus.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => { jumpToSection(data.id); }}
                        className="text-center bg-orange-200 py-4 mb-4 shadow rounded"
                    >
                        <div className="flex items-center justify-center space-x-2">
                            <p className="">{data.title}</p>
                            <GrNext size={20} color="#808080" className="" />
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
                            <p className="text-lg pt-1">②オンラインでの説明を予約</p>
                            <p className="text-lg pt-1">③予約枠が一杯の場合：予約なしでクリニックに直接受診</p>
                            <p className="text-lg pt-1">※胃カメラの場合は、説明の受診なしで<span className="border-b border-gray-600">前日21:00以降絶食し</span>直接検査に受診することも可能です。</p>
                            {/* <img src="/検査を受ける流れ02.png" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* 胃カメラの流れ */}
            <div id="gastroscope" className="my-10 px-10">
                <h2 className="text-2xl font-bold text-center py-1 mb-3 border-b-2 border-gray-500">上部消化管内視鏡(胃カメラ)の流れ</h2>
                <div className="my-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3">
                    {gastroscopeMenu.map((data) => (
                        <div key={data.step} className="my-3 px-3 py-3 rounded-xl bg-white">
                            <p className="text-xl text-gray-500">Step{data.step} <span className="font-bold">{data.title}</span></p>
                            <div className="my-2 text-lg md:text-base">
                                {data.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 大腸内視鏡の流れ */}
            <div id="colonoscop" className="my-10 px-10">
                <h2 className="text-2xl font-bold text-center py-1 mb-3 border-b-2 border-gray-500">大腸内視鏡の流れ</h2>
                <p className="text-lg py-1">大腸内視鏡の前処置について、くわしくは<a onClick={() => { jumpToSection("down"); }} className="border-b border-blue-500 text-blue-500">こちら</a>をご覧ください</p>
                <div className="my-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3">
                    {colonoscopyMenu.map((data) => (
                        <div key={data.step} className="my-3 px-3 py-3 rounded-xl bg-white">
                            <p className="text-xl text-gray-500">Step{data.step} <span className="font-bold">{data.title}</span></p>
                            <div className="my-2 text-lg md:text-base">
                                {data.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 経鼻内視鏡について */}
            <div id="nasal_endoscope" className="px-10 my-10">
                <h2 className="text-2xl font-bold text-center py-1 mb-3 border-b-2 border-gray-500">経鼻内視鏡のメリット</h2>
                <div>
                    <img src="/経鼻内視鏡メリット.png" alt="" className="hidden md:block" />
                    <img src="/経鼻内視鏡メリットsm.png" alt="" className="md:hidden" />
                </div>
                <div>
                    {nasalEndoscopeMerit.map((data, index) => (
                        <div key={index} className="flex space-x-1 my-2">
                            <div className="font-bold text-lg">・</div>
                            <p className="text-lg">{data}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 鎮静剤についての考え */}
            <div id="sedative" className="my-10 px-10">
                <h2 className="text-2xl font-bold text-center py-1 mb-3 border-b-2 border-gray-500">当院の鎮静剤に関する考え</h2>
                {/* <div className="flex justify-center py-3">
                    <img src="/鎮静剤.png" alt="" />
                </div> */}
                <div>
                    <p>
                        内視鏡検査は苦痛があり苦手だ、と考える人は多いですよね。<br />
                        院長も経口内視鏡は苦しく苦手でした。鎮静剤を用いた内視鏡検査は、不安なく安心して受けて頂け、検査する側からも、落ち着いて検査が可能なため、とても有用な検査です。<br />
                        一方で、鎮静剤を使うと以下のような様々なデメリットもあります。
                    </p>
                    <div className="bg-blue-200 p-2 my-2">
                        {chinnsei.map((data, index) => (
                            <div key={index} className="flex py-1">
                                <p className="font-bold">・</p>
                                <p>{data}</p>
                            </div>
                        ))}
                    </div>
                    <p>
                        当院では問診と内視鏡所見からリスクに応じた内視鏡観察と、リスクに応じた対応を当日説明していますが、鎮静剤をもちいると、十分な検査や結果説明が出来ないことが一番のデメリットです。<br />
                        そのため、当院では経鼻内視鏡、細い大腸内視鏡など苦痛の少ない内視鏡検査を鎮静せずに行うことをお勧めしています。<br />
                        もちろん、それでも苦痛が強い方には鎮静内視鏡を行っていますのでご安心下さい。
                    </p>
                </div>
            </div>



            {/* 大切なお知らせ */}
            <div id="must_read" className="px-10 mt-20 text-lg">
                <h2 className="text-2xl font-bold text-center py-1 mb-3 border-b-2 border-gray-500">大切なお知らせ</h2>
                <div className="md:px-20">
                    <p>※当院では忙しい方も内視鏡検査が受けられるよう、<span className="font-bold">WEB予約制</span>にしています。</p>
                    <p>安心・安全な検査のため<span className="font-bold">年齢制限</span>を設けています。</p>
                    <p className="mb-3">それ以上の年齢で希望される場合は、事前に診察し相談させて頂きますのでご理解をお願いいたします。</p>

                    <div className="py-2 px-2 bg-white bg-opacity-50">
                        <p className="pb-1">1.対象年齢：75歳以下</p>
                        <p className="pb-1">2.腹痛、貧血、血便、便秘、細い便、体重減少など<span className="font-bold border-b border-gray-500">症状がある場合</span>は、
                            <span className="font-bold border-b border-gray-500">内視鏡検査をwebで予約せず、出来るだけ早く診察</span>を受けて下さい。
                            診察の予約枠も一杯の場合は、食事をせずに診療している日の早めの時間に受診して下さい。</p>
                        <p>3.WEB予約では、同日に上部、大腸を予約しないでください。同一日の検査は原則としてドッグ（自由診療）で行っています。</p>
                    </div>
                </div>
            </div>


            {/* ダウンロード部分 */}
            <div className="mt-10 py-5 px-10" id="consent_form" >
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
                        <div className="flex flex-col justify-center items-center" id="down">
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