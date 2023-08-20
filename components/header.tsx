/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

type Props = {
    toggleSidebar: any;
    sidebarIsOpen: boolean;
};

const Header: React.FC<Props> = ({ toggleSidebar, sidebarIsOpen }) => {
    return (
        <div className="
        w-screen bg-theme py-3 px-5 fixed top-0 right-0 z-20 flex items-center justify-between 
         md:absolute md:top-0 md:left-0 md:w-1/4 md:z-50 md:py-5
        ">
            <img
                src="/ロゴ.svg"
                alt="まべ五稜郭・内視鏡クリニック"
                className="h-12"
            />
            <button className="md:hidden" onClick={toggleSidebar}>
                <AiOutlineMenu size={30} color="white" />
            </button>
        </div>
    );
};

export default Header;
