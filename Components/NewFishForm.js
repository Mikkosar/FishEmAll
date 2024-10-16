import { Card, Modal, Text, List, RadioButton, TextInput, Switch, FAB } from "react-native-paper";
import { ScrollView, TouchableWithoutFeedback, Keyboard, View,  Alert } from "react-native";
import styles from "../AppStyles";
import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import DateTimePicker from '@react-native-community/datetimepicker';
import GetAllFishes from "../Helpers/GetAllFishes"

import { app } from "../firebaseConfig";
import { getDatabase, ref, push, onValue } from "firebase/database";
const db = getDatabase(app);

const NewFishForm = ({ hideModal, visible, setMyFishes, myFishes }) => {
    
    const location = {
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [date, setDate] = useState(new Date());
    const [img, setImg] = useState('');
    const [species, setSpecies] = useState('');
    const [fishId, setFishId] = useState('');
    const [newDate, setNewDate] = useState('');
    const [weight, setWeight] = useState('');
    const [length, setLength] = useState('');
    const [markerLocation, setMarkerLocation] = useState(null);

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
    }, []);

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
        setMarkerLocation({longitude: coordinate.longitude, latitude: coordinate.latitude});
    };

    const handleAlert = () => {
        Alert.alert('Pick a Fish', 'Select a fish from the list', 
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          );
    }

    const handleSubmit = () => {
        if (species === '') {
            handleAlert();
        }
        else{
        const fishData = {
            fishId: fishId,
            species: species,
            date: newDate === '' ? getCurrentDateFormatted() : newDate,
            kg: weight === '' ? '?kg' : weight + ' kg',
            length: length === '' ? '?cm' : weight + ' cm',
            location: markerLocation ? markerLocation : null
        };
        if (fishData) {
            push(ref(db, "catches/"), fishData);
        }
        setMyFishes([...myFishes, fishData]);
        setSpecies('');
        setNewDate('');
        setWeight('');
        setLength('');
        setMarkerLocation(null);
        hideModal();
        };
    };

    const handleDismiss = () => {
        setSpecies('');
        setNewDate('');
        setWeight('');
        setLength('');
        setMarkerLocation(null);
        hideModal();
    }

    const handleNewDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Kuukaudet alkavat 0:sta
        const year = currentDate.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;
        setNewDate(formattedDate);
    };

    return (
        <Modal visible={visible} onDismiss={handleDismiss} contentContainerStyle={styles.modalContainerNewFish}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={styles.modalContent}>
                    <Card style={styles.modalCardContainerNewFish}>
                        <ScrollView style={styles.ScrollView} overScrollMode="never" >
                            <List.Section>
                                <List.Subheader style={styles.listHeader}>Pick a Fish *</List.Subheader>
                                {allFishes.map((fish, index) => (
                                    <List.Item
                                        key={index}
                                        title={fish.species}
                                        onPress={() => {
                                            setSpecies(fish.species)
                                            setFishId(fish.id)
                                            setImg(fish.img)
                                        }}
                                        right={() => (
                                            <RadioButton
                                                color="black"
                                                value={fish.species}
                                                status={species === fish.species ? 'checked' : 'unchecked'}
                                            />
                                        )}
                                    />
                                ))}
                            </List.Section>
                        </ScrollView>
                    </Card>

                    <Card style={styles.modalCardContainer}>
                        <View style={styles.dateTimePickerContainer}>
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={handleNewDate}
                            />
                        </View>
                        <View style={styles.detailsRow}>
                            <TextInput
                                mode={'flat'}
                                keyboardType="numeric"
                                placeholder="Weight (kg)"
                                style={styles.textInputFormDetails}
                                underlineColor="gray"
                                activeUnderlineColor="black"
                                value={weight}
                                onChangeText={value => setWeight(value)}
                            />
                            <TextInput
                                mode={'flat'}
                                keyboardType="numeric"
                                placeholder="Length (cm)"
                                style={styles.textInputFormDetails}
                                underlineColor="gray"
                                activeUnderlineColor="black"
                                value={length}
                                onChangeText={value => setLength(value)}
                            />
                        </View>
                    </Card>

                    <Card style={styles.modalCardContainerMap}>
                        {!isSwitchOn && (
                            <Text>Do you want to reveal location where you catched the fish</Text>
                        )}
                        <View style={{alignItems: 'center'}}>
                            <Switch color="gray" value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>
                        {isSwitchOn && (
                            <MapView 
                                initialRegion={location}
                                style={{ width: '100%', height: 180 }}
                                onPress={handleMapPress}
                            >
                                {markerLocation && ( 
                                    <Marker
                                        coordinate={markerLocation}
                                        title={"Catch Location"}
                                        description={"You caught the fish here!"}
                                    />
                                )}
                            </MapView>
                        )}
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