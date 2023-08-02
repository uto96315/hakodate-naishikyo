

type PassAreaProps = {
    pass: string;
    setPass: any;
    passCheck: () => void;
};


const PassArea: React.FC<PassAreaProps> = ({ pass, setPass, passCheck }) => {
    return (
        <div className="min-h-screen min-w-screen bg-gray-500 flex items-center justify-center">
            <div className="bg-white py-14 px-36 flex flex-col space-y-2 rounded-lg shadow-md">
                <label className="text-lg">パスワード</label>
                <input
                    type="password"
                    className="bg-gray-200 py-1 px-2 rounded text-lg"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <div className="py-4"></div>

                <button
                    className="py-3 bg-orange-400 text-white rounded-md shadow-md"
                    onClick={passCheck}
                >
                    確定
                </button>
            </div>
        </div>
    );
};

export default PassArea;