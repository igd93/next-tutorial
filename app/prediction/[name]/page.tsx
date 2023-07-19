const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}

const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}

const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}

interface Params {
    params: {name: string};
}

export default async function Page({ params }: Params) {
    //the below are still promises, we get the actual result with destructuring later
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    //getting the fetched data
    const [] = await Promise.all([ageData, genderData, countryData]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {" "}
            {params.name}
        </main>
    )
}