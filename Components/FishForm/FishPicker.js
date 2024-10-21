import React from 'react';
import { List, RadioButton } from 'react-native-paper';

const FishPicker = ({ allFishes, species, setSpecies, setFishId, setImg }) => {
    return (
        <List.Section>
            <List.Subheader>Pick a Fish *</List.Subheader>
            {allFishes.map((fish, index) => (
                <List.Item
                    key={index}
                    title={fish.species}
                    onPress={() => {
                        setSpecies(fish.species);
                        setFishId(fish.id);
                        setImg(fish.img);
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
    );
};

export default FishPicker;