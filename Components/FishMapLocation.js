import MapView, { Marker } from "react-native-maps";

const FishMapLocations = ({ catches }) => {

    const catchesWithCoords = catches.filter(c => c.cords);

    return (
        <MapView style={{ width: '100%', height: '100%' }}>
            {catchesWithCoords.length > 0 && catchesWithCoords.map((c, index) => (
                <Marker 
                    key={index}
                    coordinate={c.cords}
                    title={c.title + ' ' + c.date} 
                />
            ))}
        </MapView>
    );
};

export default FishMapLocations;