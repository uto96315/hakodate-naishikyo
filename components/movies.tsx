import YouTubeVideo from "./v1/youtube";


const Movies = () => {
    return (
        <div className="md:min-w-screen px-10 py-10 mt-10">
            <h1 className="text-center text-4xl pb-2 text-gray-500">当院動画</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">MOVIES</h2>
            <div className="flex justify-center items-center">
                <YouTubeVideo videoId={"MTR1Jt2EM4w"} />
            </div>
        </div>
    )
}

export default Movies;