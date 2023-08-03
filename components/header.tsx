import Image from "next/image";

const Header = () => {
    return (
        <div className="absolute top-0 left-0 bg-theme py-5 px-10 flex items-center justify-between w-1/4 z-50">
            <Image
                src="/logo-flex-white.png"
                alt="まべ五稜郭・内視鏡クリニック"
                objectFit="contain"
                width={300}
                height={50}
                className="z-50"
            />
        </div>
    );
};

export default Header;
