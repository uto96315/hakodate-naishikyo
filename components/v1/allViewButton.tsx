
import { useRouter } from "next/router";
import { MdOutlineNavigateNext } from "react-icons/md";

type AllViewButtonProps = {
    route: string;
};

const AllViewButton: React.FC<AllViewButtonProps> = ({ route }) => {
    const router = useRouter();
    return (
        <button
            className="font-sans py-2 px-14 md:px-28 text-lg bg-orange-500 text-white shadow-md rounded-md hover:bg-orange-600 hover:shadow-xl"
            onClick={() => { router.push(route); }}
        >
            <div className="flex justify-center items-center space-x-2">
                <span>一覧へ</span>
                <MdOutlineNavigateNext color={"white"} size={25} />
            </div>
        </button>
    );
};

export default AllViewButton;