/* eslint-disable @next/next/no-img-element */
import BackButton from "../../../components/v1/backButton";


const Thanks = () => {
    const presents = [
        {
            from: "贈ってくれた人",
            img: "/",
        },
        {
            from: "贈ってくれた人",
            img: "/",
        },
    ];
    return (
        <div className="px-5 md:px-10 pt-5">
            <div>
                <BackButton />
            </div>
            <h1 className="text-xl text-center py-5 font-bold text-gray-500">開院祝い御礼</h1>
            <div className="md:px-20 space-y-2">
                <p>この度、当クリニック開院に際しまして様々な方々からたくさんのお祝いを頂きました。</p>
                <p>こちらでご紹介させていただくと共に、心よりの感謝の気持ちを申し上げます。</p>
                <p>お一人お一人の温かいメッセージやご厚意に、私たちも大変勇気づけられ、さらなる努力を重ねて参りたいと思います。</p>
                <p>今後とも、地域の皆様の健康をサポートし、信頼されるクリニックとしての役割を果たせるよう、スタッフ一同誠心誠意努力して参りますので、どうぞよろしくお願い申し上げます。</p>
            </div>

            <div className="">
                {presents.map((data, index) => (
                    <div key={index}>
                        <img src={data.img} alt="まべ五稜郭消化器・内視鏡開院祝い写真" />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Thanks;