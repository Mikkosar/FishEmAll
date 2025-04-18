import { View, FlatList } from "react-native";
import { Card, Text, Portal } from "react-native-paper";
import { useState } from "react";

import styles from "../AppStyles";
import FishInfo from "./FishInfo"
import GetImages from "../Helpers/GetAllIMages";

const FishList = ({ fishes, infoPage, isCatchList, setMyFishes }) => {

    const images = GetImages();

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({})

    const showModal = (item) => {
        setVisible(true);
        setData(item);
    };
    const hideModal = () => {
        setVisible(false);
        setData({});
    };

    return (
        <View style={styles.container}>
            <Portal>
                <FishInfo fishes={fishes} setMyFishes={setMyFishes} hideModal={hideModal} data={data} visible={visible} infoPage={infoPage} isCatchList={isCatchList}/>
            </Portal>
            {fishes.length > 0 ? (
                <FlatList
                    style={styles.fishList}
                    contentContainerStyle={styles.listContentContainer}
                    data={fishes}
                    renderItem={({ item }) =>
                        <Card onPress={() => showModal(item)} mode="outlined" style={styles.cardContainer}>
                            <Card.Cover source={images[item.species]} />
                            <Card.Content style={styles.cardContent}>
                                <Text style={styles.cardText} variant="bodyMedium">{item.species}</Text>
                                <Text style={styles.cardText} variant="bodyMedium">{item.date}</Text>
                                <Text style={styles.cardText} variant="bodyMedium">{item.kg}</Text> 
                            </Card.Content>
                        </Card>
                    }
                />
            ) : (
                <View style={styles.emptyContainer}>
                    <Text variant="bodyLarge">
                        Go Fish
                    </Text>
                </View>
            )}

        </View>
    );
};

export default FishList