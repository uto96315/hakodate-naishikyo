import Biography from "../../components/biography";
import Message from "../../components/message";
import Profile from "../../components/profile";


const AboutDirector = () => {
    return (
        <div>
            <Message isNextButton={false} isDetail={true}/>
            <Biography />
            <Profile />
        </div>
    );
};

export default AboutDirector;