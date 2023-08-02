
import { MdOutlineNavigateNext } from "react-icons/md";

type AllViewButtonProps = {
};

const AllViewButton: React.FC<AllViewButtonProps> = ({ }) => {
    return (
        <button className="font-sans py-2 px-28 text-lg bg-orange-500 text-white shadow-md rounded-md hover:bg-orange-600 hover:shadow-xl">
            <div className="flex justify-center items-center space-x-2">
                <span>一覧へ</span>
                <MdOutlineNavigateNext color={"white"} size={25} />
            </div>
        </button>
    );
};

export default AllViewButton;