const { useRouter } = require("next/router");
const { useEffect } = require("react");


const Welcome = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/");
    }, [router]);
    return (
        <div></div>
    );
};

export default Welcome;