import MapView, { Marker } from "react-native-maps";

const FishMapLocations = ({ catches }) => {

    return (
        <MapView style={{ width: '100%', height: '100%' }}>
            {catches.map((c, Index) => (
                <Marker 
                    key={Index}
                    coordinate={c.cords}
                    title={c.title + ' ' + c.date} 
                />
            ))}
        </MapView>
    );
};

export default FishMapLocations;