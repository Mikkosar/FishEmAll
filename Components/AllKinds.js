import { useData } from "../Helpers/DataProvider";
import { PaperProvider } from "react-native-paper";

import FishList from "./FishList";
import AppBarTop from "./AppBarTop";

const AllKinds = () => {

    const pageTitle = "All Kinds";
    const infoPage = true;
    const { allFishes } = useData();

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