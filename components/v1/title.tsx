
type Props = {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => {
    return (
        <div className="text-4xl border-b-2 py-1 px-2 text-gray-500">
            {text}
        </div>
    )
}
export default Title;