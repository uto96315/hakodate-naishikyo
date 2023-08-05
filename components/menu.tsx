import { HiHome } from "react-icons/hi";

const Menu = () => {
    const menus = [
        {
            jap: "当院について",
            eng: "About Us",
        },
        {
            jap: "アクセス",
            eng: "Access",
        },
        {
            jap: "予防医療について",
            eng: "Preventive Medicine",
        },
        {
            jap: "胃カメラ",
            eng: "Gastroscope",
        },
        {
            jap: "内視鏡",
            eng: "Endoscope Us",
        },
        {
            jap: "自由診療について",
            eng: "Private Practice",
        },
    ];
    return (
        <div className="hidden py-5 md:flex justify-center cursor-pointer" style={{ backgroundColor: "#faf9f5" }}>
            <div className="border-r-2 border-gray-300 w-min px-12 py-5 flex justify-center items-center hover:bg-gray-200 rounded">
                <HiHome size={40} color="orange" />
            </div>
            {menus.map((menu, index) => (
                <div key={index} className="border-r-2 border-gray-300 px-10 py-5 flex flex-col justify-center items-center space-y-1 hover:bg-gray-200 rounded">
                    <p className="text-lg">{menu.jap}</p>
                    <p className="text-theme text-sm">{menu.eng}</p>
                </div>
            ))}
        </div>
    );
};

export default Menu;