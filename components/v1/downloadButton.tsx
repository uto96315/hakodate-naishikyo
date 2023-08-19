import Link from 'next/link';

type Props = {
    text: string;
    filepath: string;
};
const DownloadButton: React.FC<Props> = ({ text, filepath }) => {
    return (
        <div className='py-3 text-white bg-theme rounded-lg border w-full lg:w-1/2 my-3'>
            <Link href={filepath} download>
                <button>{text}</button>
            </Link>
        </div>
    );
};

export default DownloadButton;