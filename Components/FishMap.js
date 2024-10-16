import { PaperProvider } from "react-native-paper";
import { useEffect, useState } from "react";
import AppBarTop from "./AppBarTop";
import FishMapLocations from "./FishMapLocation";
import GetAllCatches from "../Helpers/GetAllCatches";

const FishMap = () => {

    const pageTitle = 'Fish Map';

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
    }, []);

    const catches = myFishes.map(fish => ({
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