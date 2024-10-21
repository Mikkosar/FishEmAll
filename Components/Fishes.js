import { PaperProvider, Portal } from "react-native-paper";
import { useEffect, useState } from "react";

import AppBarTop from './AppBarTop';
import NewFishButton from "./NewFishButton";
import FishList from "./FishList";
import NewFishForm from "./NewFishForm";
import GetAllCatches from "../Helpers/GetAllCatches";
import calculateFishingScores from "../Helpers/CalculateFishingScore";


const Fishes = () => {

    const pageTitle = "Fish'Em All"
    const isCatchList = true;
    const [myFishes, setMyFishes] = useState([]);

    useEffect(() => {
        const fetchCathces = async () => {
            try {
                const catches = await GetAllCatches();
                setMyFishes(catches);
            } catch (error) {
                console.error("Virhe kalatietojen hakemisessa:", error);
            }
        };
        fetchCathces();
    }, [])

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const fisherScore = calculateFishingScores(myFishes);

    return (
        <PaperProvider>
            <AppBarTop 
                pageTitle={pageTitle}
                fisherScore={fisherScore}
                isCatchList={isCatchList}
            />
            <Portal>
                <NewFishForm hideModal={hideModal} visible={visible} setMyFishes={setMyFishes} myFishes={myFishes} />
            </Portal>

            <FishList fishes={myFishes} isCatchList={isCatchList} setMyFishes={setMyFishes} />

            <NewFishButton showModal={showModal} />

        </PaperProvider>
    );
};

export default Fishes