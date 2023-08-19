import Biography from "../../components/biography";
import Message from "../../components/message";


const AboutDirector = () => {
    return (
        <div>
            <Message isNextButton={false}/>
            <Biography />
        </div>
    )
}

export default AboutDirector;