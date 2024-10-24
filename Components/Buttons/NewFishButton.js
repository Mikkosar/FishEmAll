import { FAB } from "react-native-paper";

import styles from "../../AppStyles";

const NewFishButton = ({ showModal }) => {
    return (
        <FAB 
            icon={'plus-circle'}
            style={styles.newFishButton}
            color="black"
            containerColor="lightGray"
            onPress={showModal}
            label="New Catch"
        />
    );
};

export default NewFishButton;