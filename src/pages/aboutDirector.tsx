import Biography from "../../components/biography";
import Message from "../../components/message";
import Profile from "../../components/profile";


const AboutDirector = () => {
    return (
        <div>
            <Message isNextButton={false} />
            <Biography />
            <Profile />
        </div>
    );
};

export default AboutDirector;