import { BiMap } from "react-icons/bi";
import { HiDesktopComputer, HiOutlineClipboardList } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";




const ButtonAreaForSM = () => {
    const menus = [
        {
            title: "WEB問診",
            icon: <BsFillTelephoneFill size={20} />,
            bg: "",
            link: "",
        },
        {
            title: "WEB予約",
            icon: <HiDesktopComputer size={20} />,
            bg: "",
            link: "",
        },
        {
            title: "アクセス",
            icon: <BiMap size={20} color="white" />,
            bg: "",
            link: "",
        },
    ];
    return (
        <div className="
        md:hidden 
        w-full fixed bottom-0
        ">
            <div className="flex justify-between items-center space-x-1 px-3">
                {menus.map((menu, index) => (
                    <button key={index} className="w-1/3 border text-center flex items-center justify-center py-4 px-2 text-white bg-theme rounded-lg">
                        <div className="mr-1">
                            {menu.icon}
                        </div>
                        {menu.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonAreaForSM;