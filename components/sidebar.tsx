import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";


type Props = {
    toggleSidebar: any;
};

const Sidebar: React.FC<Props> = ({ toggleSidebar }) => {
    const router = useRouter();
    const jumpToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;  // ここでオフセット値を設定。例として50px上で止めたい場合
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    const menus = [
        {
            title: "ホーム",
            destination: "/",
            move: "",
            icon: <AiOutlineClose size={25} />,
        },
        {
            title: "当院について",
            destination: "",
            move: "aboutClinic",
            icon: <AiOutlineClose size={25} />,
        },
        {
            title: "予防医療について",
            destination: "",
            move: "",
            icon: <AiOutlineClose size={25} />,
        },
        // {
        //     title: "胃カメラについて",
        //     destination: "",
        //     icon: <AiOutlineClose size={25} />,
        // },
        {
            title: "内視鏡について",
            destination: "/aboutEndoscopy",
            move: "",
            icon: <AiOutlineClose size={25} />,
        },
        // {
        //     title: "自由診療について",
        //     destination: "",
        //     icon: <AiOutlineClose size={25} />,
        // },
        {
            title: "アクセス",
            destination: "",
            move: "access",
            icon: <AiOutlineClose size={25} />,
        },
    ];
    return (
        <div className="min-h-screen">
            <div
                className="flex items-center justify-end py-5 px-3 border-b-2"
            >
                <div
                    className="flex justify-center items-center bg-gray-200 py-1 px-3 rounded-full"
                    onClick={toggleSidebar}
                >
                    <GrClose size={20} />
                    <span className="ml-2">閉じる</span>
                </div>
            </div>
            {menus.map((menu, index) => (
                <div
                    key={index}
                    onClick={() => { 
                        console.log("押された");
                        toggleSidebar();
                        menu.destination === "" ? jumpToSection(menu.move) : null
                    }}
                    className="py-4 px-10 border-b-2 text-lg flex justify-center items-center"
                >
                    {menu.title}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;