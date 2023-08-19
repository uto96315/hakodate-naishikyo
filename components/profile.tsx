

const profileData = [
    {
        institution: "日本消化器内視鏡学会",
        role: ["専門医", "指導医", "内視鏡スクリーニング認定医(上下部)", "学術評議員"],
    },
    {
        institution: "日本消化器病学会",
        role: ["専門医"],
    },
    {
        institution: "日本内科学会",
        role: ["認定医"],
    },
    {
        institution: "日本消化器がん検診学会",
        role: ["消化器がん検診総合認定医", "指導医", "幹事", "代議員"],
    },
    {
        institution: "日本ヘリコバクター学会",
        role: ["H.pylori感染症認定医","幹事","代議員"],
    },
    {
        institution: "日本消化管学会",
        role: ["胃腸専門医","指導医","支部幹事","代議員"],
    },
    {
        institution: "日本がん予防学会",
        role: ["評議員"],
    },
    {
        institution: "日本抗加齢医学会",
        role: ["評議員"],
    },
]

const Profile = () => {
    return (
        <div className="mt-10 lg:text-lg mb-20">
            <h1 className="text-center text-4xl pb-2 text-gray-500">院長プロフィール</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Profile</h2>

            <div className="px-5 lg:px-20">
                {profileData.map((data, index) => (
                    <div key={index} className="py-1 lg:py-3 flex items-center space-x-5 lg:space-x-16 border-b-2">
                        <p className="w-20 lg:w-52">{data.institution}</p>
                        <div>
                            {data.role.map((data, index) => (
                                <p key={index}>{data}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Profile;