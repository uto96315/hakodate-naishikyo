
type Props = {
    icon: any;
    text: string;
    onClick: any;
};

const HeaderMenuButton: React.FC<Props> = ({ icon, text, onClick }) => {
    return (
        <button 
        className="font-sans text-theme hover:font-bold bg-white hover:bg-gray-200 py-2 px-3 rounded-lg shadow hover:shadow-lg flex items-center space-x-2"
        onClick={onClick}
        >
            <div>{icon}</div>
            <p>{text}</p>
        </button>
    );
};

export default HeaderMenuButton;