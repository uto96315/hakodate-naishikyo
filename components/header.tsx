/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Header = () => {
    return (
        <div className="
        w-screen bg-theme py-5 px-10 
         md:absolute md:top-0 md:left-0 md:w-1/4 md:z-50
        ">
            <img
                src="/logo-flex-white.png"
                alt="まべ五稜郭・内視鏡クリニック"
                className=""
            />
        </div>
    );
};

export default Header;
