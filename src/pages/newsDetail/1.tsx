import BackButton from "../../../components/v1/backButton";


const Example = () => {
    return (
        <div className="px-5 md:px-10 pt-5">
            <div>
                <BackButton />
            </div>
            <h1 className="text-xl text-center">タイトル</h1>
            <div>
                以下の部分に詳細が入ります。
            </div>
        </div>
    );
};

export default Example;