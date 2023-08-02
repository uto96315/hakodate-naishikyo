import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { HiDesktopComputer, HiOutlineClipboardList } from "react-icons/hi";

const ButtonArea = () => {
    const buttons = [
        {
            description: "お電話でのお問い合わせ",
            icon: <BsFillTelephoneForwardFill />,
            text: "0138-86-7633",
            bg: "bg-slate-400 text-white",
        },
        {
            description: "",
            icon: <HiDesktopComputer size={30}/>,
            text: "WEB予約",
            bg: "bg-white text-gray-700 border border-gray-700 border-2 shadow",
        },
        {
            description: "",
            icon: <HiOutlineClipboardList size={30}/>,
            text: "WEB問診",
            bg: "bg-white border border-2 border-orange-300 text-orange-300 shadow",
        },
    ]
    return (
        <div className="fixed font-sans bottom-3 w-screen space-x-5 right-5 flex justify-center items-center">
            {buttons.map((btn, index) => (
                <div key={index} className={`${btn.bg} ${`px-3 py-4 rounded-lg w-1/4 h-20 flex flex-col justify-center`}`}>
                    <p className="text-center font-bold">{btn.description}</p>
                    <div className="flex space-x-3 justify-center items-center">
                        <div>{btn.icon}</div>
                        <div className="text-xl">{btn.text}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ButtonArea;