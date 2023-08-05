import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { HiDesktopComputer, HiOutlineClipboardList } from "react-icons/hi";

const ButtonAreaForPC = () => {
    const buttons = [
        {
            description: "",
            icon: <HiDesktopComputer size={30} />,
            text: "WEB予約",
            bg: "bg-white text-gray-700 border border-gray-700 border-2 shadow",
        },
        {
            description: "",
            icon: <HiOutlineClipboardList size={30} />,
            text: "WEB問診",
            bg: "bg-white border border-2 border-orange-300 text-orange-300 shadow",
        },
        {
            description: "お電話でのお問い合わせ",
            icon: <BsFillTelephoneForwardFill />,
            text: "0138-86-7633",
            bg: "bg-slate-400 text-white",
        },
    ];
    return (
        <div className="hidden md:fixed md:font-sans md:bottom-3 md:w-screen md:space-x-8 md:right-5 md:flex md:justify-center md:items-center">
            {buttons.map((btn, index) => (
                <div key={index} className={`${btn.bg} ${`px-1 py-1 rounded-lg w-1/5 h-20 flex flex-col justify-center`}`}>
                    <p className="text-center font-bold">{btn.description}</p>
                    <div className="flex space-x-1 justify-center items-center">
                        <div>{btn.icon}</div>
                        <div className="text-xl">{btn.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ButtonAreaForPC;