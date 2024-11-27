import { Card, Modal, FAB } from "react-native-paper";
import { ScrollView, TouchableWithoutFeedback, Keyboard, View, Alert } from "react-native";
import { app, auth } from "../firebaseConfig";
import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";

import FishPicker from "./FishForm/FishPicker";
import DatePicker from "./FishForm/DatePicker";
import DimensionsInput from "./FishForm/DimensionsInput";
import LocationToggle from "./FishForm/LocationToggle";
import styles from "../AppStyles";

const db = getDatabase(app);

const NewFishForm = ({ hideModal, visible, setMyCatches, myCatches, allFishes }) => {

    const location = {
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const user = auth.currentUser.uid;

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [date, setDate] = useState(new Date());
    const [species, setSpecies] = useState('');
    const [fishId, setFishId] = useState('');
    const [newDate, setNewDate] = useState('');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [markerLocation, setMarkerLocation] = useState(null);

    const getCurrentDateFormatted = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        setMarkerLocation(null);
    };

    const handleMapPress = (event) => {
        const { coordinate } = event.nativeEvent;
        setMarkerLocation({ longitude: coordinate.longitude, latitude: coordinate.latitude });
    };

    const handleAlert = () => {
        Alert.alert('Pick a Fish', 'Select a fish from the list',
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        );
    }

    const handleSubmit = async () => {
        if (species === '') {
            handleAlert();
        }
        else {
            const fishData = {
                fishId: fishId,
                species: species,
                date: newDate === '' ? getCurrentDateFormatted() : newDate,
                kg: weight === '' ? '?kg' : weight + ' kg',
                length: length === '' ? '?cm' : length + ' cm',
                location: markerLocation ? markerLocation : null,
                userId: user
            };
            try {
                const fishRef = await push(ref(db, "catches/"), fishData);
                
                const fishWithId = {
                    id: fishRef.key,
                    ...fishData
                };
    
                setMyCatches([fishWithId, ...myCatches]);

                setSpecies('');
                setNewDate('');
                setWeight('');
                setLength('');
                setMarkerLocation(null);
                hideModal();
            } catch (error) {
                console.error("Error adding fish data:", error);
            }
        };
    };

    const handleDismiss = () => {
        setSpecies('');
        setNewDate('');
        setWeight('');
        setLength('');
        setMarkerLocation(null);
        hideModal();
    };

    const handleNewDate = (event, selectedDate) => {
        if (event.type === 'set') {
            const currentDate = selectedDate;
            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = currentDate.getFullYear();
            const formattedDate = `${day}.${month}.${year}`;
            setNewDate(formattedDate);
        }
    };

    return (
        <Modal visible={visible} onDismiss={handleDismiss} contentContainerStyle={styles.modalContainerNewFish}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={styles.modalContent}>
                    <Card style={styles.modalCardContainerNewFish}>
                        <ScrollView style={styles.ScrollView} overScrollMode="never" >
                            <FishPicker allFishes={allFishes} species={species} setSpecies={setSpecies} setFishId={setFishId} />
                        </ScrollView>
                    </Card>
                    <Card style={styles.modalCardContainer}>
                        <DatePicker date={date} setNewDate={setNewDate} handleNewDate={handleNewDate} />
                        < DimensionsInput weight={weight} setWeight={setWeight} length={length} setLength={setLength} />
                    </Card>
                    <Card style={styles.modalCardContainerMap}>
                        <LocationToggle isSwitchOn={isSwitchOn} onToggleSwitch={onToggleSwitch} location={location} markerLocation={markerLocation} handleMapPress={handleMapPress} />
                    </Card>
                    <FAB
                        icon={'plus-circle'}
                        style={styles.newFishButtonSubmit}
                        color="black"
                        containerColor="lightGray"
                        onPress={handleSubmit}
                    />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default NewFishForm;