import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import React from 'react';
import styles from '../../AppStyles';

const DimensionsInput = ({ weight, setWeight, length, setLength }) => (
    <View style={styles.detailsRow}>
        <TextInput
            mode={'flat'}
            keyboardType="numeric"
            placeholder="Weight (kg)"
            style={styles.textInputFormDetails}
            underlineColor="gray"
            activeUnderlineColor="black"
            value={weight}
            onChangeText={weight => setWeight(weight)}
        />
        <TextInput
            mode={'flat'}
            keyboardType="numeric"
            placeholder="Length (cm)"
            style={styles.textInputFormDetails}
            underlineColor="gray"
            activeUnderlineColor="black"
            value={length}
            onChangeText={lenght => setLength(lenght)}
        />
    </View>
);

export default DimensionsInput;