import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
    destination?: string;
};

const BackButton: React.FC<Props> = ({ destination = "/" }) => {
    const router = useRouter();
    return (
        <div
            className="flex cursor-pointer w-24 justify-center items-center space-x-1 bg-gray-100 py-2 rounded hover:bg-gray-400 shadow"
            onClick={() => { router.push(destination); }}
        >
            <IoIosArrowBack size={25} />
            <p>戻る</p>
        </div>
    );
};

export default BackButton;




