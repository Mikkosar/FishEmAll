const calculateFishingScores = (myFishes) => {

    const speciesWeights = {
        'Lohi': 5,    // Lohi saa korkeimman painotuksen
        'Hauki': 4,
        'Ahven': 2,
    };

    const calculateFishScore = (fish) => {
        const speciesWeight = speciesWeights[fish.species] || 1; // Oletus 1, jos lajia ei löydy
        let weight = fish.kg === '?kg' ? 1 : parseFloat(fish.kg.replace(" kg", "").trim()); // Muuta paino numeroksi
        let length = fish.length === '?cm' ? 1 : parseFloat(fish.length.replace(" cm", "").trim()); // Muuta paino numeroksi
        return speciesWeight * length * weight; // Laske score
    };


    const totalScore = myFishes.reduce((total, fish) => {
        return total + calculateFishScore(fish); // Yhdistetään kalojen scoret
    }, 0);

    return totalScore; // Palautetaan yhdistelevä score
};

export default calculateFishingScores