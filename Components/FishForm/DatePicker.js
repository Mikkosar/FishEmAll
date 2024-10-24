import { View } from 'react-native';

import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../AppStyles';

const DatePicker = ({ date, handleNewDate }) => {
    
    return (
        <View style={styles.dateTimePickerContainer}>
            <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleNewDate}
            />
        </View>
    )
};

export default DatePicker;