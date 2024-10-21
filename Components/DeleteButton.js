import { Button } from "react-native-paper";
const DeleteButton = ({ handleDelete }) => {
    return (
        <Button 
            mode="contained" 
            buttonColor="red" 
            textColor="black"
            onPress={handleDelete}
        >
            Delete
        </Button>
    );
};

export default DeleteButton