import { Card, Modal, Text } from "react-native-paper";
import MapView, { Marker } from 'react-native-maps';
import { View, ScrollView } from "react-native";
import styles from "../AppStyles";

import GetImages from "../Helpers/GetAllIMages";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import DeleteCatchById from "../Helpers/DeleteCatchById";

const FishInfo = ({fishes, setMyFishes, visible, hideModal, data, infoPage, isCatchList }) => {

    const images = GetImages();

    const handleDelete = () => {
        DeleteCatchById(data.id);
        setMyFishes(fishes.filter(fish => fish.id !== data.id));
        hideModal();
    }

    return (
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
            <ScrollView style={{ width: '90%' }}>
                <View style={{ alignItems: 'center' }}>
                    <Card style={styles.modalImageContainer}>
                        <Card.Cover source={images[data.species]} />
                    </Card>

                    {!infoPage && (            
                        <Card style={styles.modalCardContainer}>
                            <Text variant="titleLarge" style={styles.speciesText}>{data.species}</Text>
                            <Text style={styles.dateText}>{data.date}</Text>
                            <View style={styles.detailsRow}>
                                <Text style={styles.detailText}>{data.kg}</Text>
                                <Text style={styles.detailText}>{data.length}</Text>
                            </View>
                        </Card>
                    )}

                    {infoPage && (
                        <ScrollView>
                            <Card style={styles.modalCardContainer}>
                                <Text style={styles.speciesText} variant="titleLarge">Some {data.species} Info</Text>
                                <Text>{data.description}</Text>
                            </Card>
                        </ScrollView>
                    )}

                    {data.location ? (
                        <Card style={styles.modalCardContainerMap}>
                            <MapView
                                style={{ width: '100%', height: 200 }}
                                initialRegion={data.location}
                            >
                                <Marker
                                    coordinate={data.location}
                                    title='From Here'
                                />
                            </MapView>
                        </Card>
                    ) : null}

                    {!infoPage && (
                        <View style={styles.buttonContainer}>
                            {/* <EditButton /> */}
                            <DeleteButton handleDelete={handleDelete} />
                        </View>
                    )}
                </View>
            </ScrollView>
        </Modal>
    );
};

export default FishInfo;