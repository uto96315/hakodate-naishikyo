import Image from "next/image";


const Header = () => {
    return (
        <div className="fixed z-50 bg-theme py-5 px-10 flex items-center justify-between">
            <Image
                src="/logo-flex-white.png"
                alt="まべ五稜郭・内視鏡クリニック"
                objectFit="contain"
                width={300}
                height={50}
                className=""
            />
        </div>
    );
};

export default Header;