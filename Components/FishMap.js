import { PaperProvider } from "react-native-paper";
import { useData } from "../Helpers/DataProvider";

import AppBarTop from "./AppBarTop";
import FishMapLocations from "./FishMapLocation";

const FishMap = () => {

    const pageTitle = 'Fish Map';
    const { myCatches } = useData();

    const catches = myCatches.map(fish => ({
        cords: fish.location,
        title: fish.species,
        date: fish.date
    }));

    return (
        <PaperProvider>
            <AppBarTop 
                pageTitle={pageTitle}
            />
            <FishMapLocations catches={catches} />
        </PaperProvider>
    );
};

export default FishMap;