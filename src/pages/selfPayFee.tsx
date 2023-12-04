
// 自由診療

import { useRouter } from "next/router";
import BackButton from "../../components/v1/backButton";

const SelfPayFee = () => {
    const router = useRouter();
    const before = router.query.before as string;
    const treatments = [
        { id: 1, name: "インフルエンザワクチン", price: 3000, campaign: null, },
        // ここから下は意味がわかっていないので10/13に詳細聞いて修正する
        { id: 2, name: "上部消化管内視鏡検査", price: 40000, campaign: 30000 },
        { id: 4, name: "大腸内視鏡検査", price: 2500, campaign: 30000 },
        { id: 3, name: "上部下部同日検査", price: 60000, campaign: 55000 },
    ];

    return (
        <div className="md:px-5">
            <div className="md:px-10 pt-5 mb-5 px-5">
                <BackButton destination={before ?? "/"}/>
            </div>
            <h1 className="text-center text-4xl pb-2 text-gray-500">自由診療価格表</h1>
            <h2 className="text-center text-2xl pb-10 text-gray-400">Price List</h2>

            <div className="px-5 md:px-10">
                <table className="min-w-full bg-white border rounded">
                    <thead>
                        <tr>
                            <th className="border p-2 bg-theme bg-opacity-70">診療内容</th>
                            <th className="border p-2 bg-gray-300">価格</th>
                        </tr>
                    </thead>
                    <tbody>
                        {treatments.map((treatment) => (
                            <tr key={treatment.id}>
                                <td className="border p-2">{treatment.name}</td>
                                <td className="border p-2">
                                    {treatment.campaign
                                        ? <div>
                                            {/* <p className="line-through">{treatment.price}円</p> */}
                                            <p className="text-red-500 text-xs">キャンペーン価格</p>
                                            <p className="text-red-500">{treatment.campaign}円</p>
                                        </div>
                                        : <p>{treatment.price}円</p>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelfPayFee;
