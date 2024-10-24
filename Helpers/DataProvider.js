import { useEffect, useState, createContext, useContext } from "react";
import GetAllCatches from "./GetAllCatches";
import GetAllFishes from "../Helpers/GetAllFishes";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [myCatches, setMyCatches] = useState([]);
    const [allFishes, setAllFishes] = useState([]);

    useEffect(() => {
        const fetchCathces = async () => {
            try {
                const catches = await GetAllCatches();
                setMyCatches(catches);
            } catch (error) {
                console.error("Virhe kalatietojen hakemisessa:", error);
            }
        };

        const fetchFishes = async () => {
            try {
                const fishes = await GetAllFishes();
                setAllFishes(fishes);
            } catch (error) {
                console.error("Virhe kalatietojen hakemisessa:", error);
            }
        };

        fetchCathces();
        fetchFishes();
    }, []);

    return (
        <DataContext.Provider value={({ myCatches, setMyCatches, allFishes, setAllFishes })}>
            {children}
        </DataContext.Provider>
    );
};

const useData = () => {
    return useContext(DataContext);
};

export { DataProvider, useData }