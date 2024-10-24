import { PaperProvider, Portal } from "react-native-paper";
import { useState } from "react";
import { useData } from "../Helpers/DataProvider";

import AppBarTop from './AppBarTop';
import NewFishButton from "./Buttons/NewFishButton";
import FishList from "./FishList";
import NewFishForm from "./NewFishForm";
import calculateFishingScores from "../Helpers/CalculateFishingScore";

const Fishes = () => {

    const pageTitle = "Fish'Em All"
    const isCatchList = true;
    const { myCatches, setMyCatches, allFishes } = useData();

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const fisherScore = calculateFishingScores(myCatches);

    return (
        <PaperProvider>
            <AppBarTop 
                pageTitle={pageTitle}
                fisherScore={fisherScore}
                isCatchList={isCatchList}
            />
            <Portal>
                <NewFishForm hideModal={hideModal} visible={visible} setMyCatches={setMyCatches} myCatches={myCatches} allFishes={allFishes} />
            </Portal>

            <FishList fishes={myCatches} isCatchList={isCatchList} setMyFishes={setMyCatches} />

            <NewFishButton showModal={showModal} />

        </PaperProvider>
    );
};

export default Fishes