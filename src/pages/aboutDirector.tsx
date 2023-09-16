import Biography from "../../components/biography";
import Message from "../../components/message";
import Profile from "../../components/profile";
import BackButton from "../../components/v1/backButton";


const AboutDirector = () => {
    
    return (
        <div className="pt-10 px-0 md:px-10">
            <div className="mb-10 px-5">
                <BackButton />
            </div>
            <Message isNextButton={false} isDetail={true}/>
            <Biography />
            <Profile />
        </div>
    );
};

export default AboutDirector;