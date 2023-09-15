import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
    const router = useRouter();
    return (
        <div
            className="flex w-36 justify-center items-center space-x-1 bg-gray-100 py-2 rounded hover:bg-gray-400 shadow"
            onClick={() => { router.push("/"); }}
        >
            <IoIosArrowBack size={25} />
            <p>ホームに戻る</p>
        </div>
    );
};

export default BackButton;

