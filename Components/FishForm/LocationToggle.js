import React from 'react';
import { Text, View, Switch } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationToggle = ({ isSwitchOn, onToggleSwitch, location, markerLocation, handleMapPress }) => (
    <View>
        {!isSwitchOn && <Text>Do you want to reveal location where you caught the fish</Text>}
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
    </View>
);

export default LocationToggle;