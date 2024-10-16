import { PaperProvider, Text } from "react-native-paper";
import { useEffect, useState } from "react";

import FishList from "./FishList";
import AppBarTop from "./AppBarTop";

import GetAllFishes from "../Helpers/GetAllFishes"


const AllKinds = () => {

    const pageTitle = "All Kinds";
    const infoPage = true;
    const [allFishes, setAllFishes] = useState([]);

    useEffect(() => {
        const fetchFishes = async () => {
            try {
                const fishes = await GetAllFishes();
                setAllFishes(fishes);
            } catch (error) {
                console.error("Virhe kalatietojen hakemisessa:", error);
            }
        };
        fetchFishes();
    }, [])

    return (
        <PaperProvider>
            <AppBarTop 
                pageTitle={pageTitle}
            />
            <FishList fishes={allFishes} infoPage={infoPage}/>
        </PaperProvider>
    );
};

export default AllKinds;