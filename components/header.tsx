/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { HiDesktopComputer, HiOutlineClipboardList } from "react-icons/hi";
import HeaderMenuButton from "./v1/headerMenuButton";
import { BsFillTelephoneFill } from "react-icons/bs";

type Props = {
    toggleSidebar: any;
    sidebarIsOpen: boolean;
};

const Header: React.FC<Props> = ({ toggleSidebar, sidebarIsOpen }) => {
    return (
        <div className="
        w-screen bg-theme py-3 px-5 fixed top-0 right-0 z-20 flex items-center justify-between 
         md:fixed md:top-0 md:left-0 md:w-full md:z-50 md:py-5
        ">
            <img
                src="/ロゴ.svg"
                alt="まべ五稜郭・内視鏡クリニック"
                className="h-12"
            />
            <div className="hidden md:flex md:space-x-4">
                <HeaderMenuButton icon={<HiDesktopComputer size={30} />} text="WEB予約" onClick={() => { window.open("https://ssc.doctorqube.com/hakodate-naishikyou/"); }} />
                <HeaderMenuButton icon={<HiOutlineClipboardList size={30} />} text="WEB問診" onClick={() => { window.open("https://symview.me/medical_interview_flows/hg07928/public/?url_kind=1"); }} />
                {/* <HeaderMenuButton icon={<BsFillTelephoneFill />} text="お問い合わせ" onClick={() => window.location.href = 'tel:0138-86-7633'} /> */}
            </div>
            <button className="md:hidden" onClick={toggleSidebar}>
                <AiOutlineMenu size={30} color="white" />
            </button>
        </div>
    );
};

export default Header;
