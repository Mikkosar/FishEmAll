import { View } from "react-native";
import styles from "../AppStyles";
import { Card, Text, Button } from "react-native-paper";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import AppBarTop from "./AppBarTop";

const Settings = () => {
    const user = auth.currentUser;
    const pageTitle = 'Settings'
    const isCatchList = true;

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            // Kirjautuminen ulos onnistui
        } catch (error) {
            console.error("Virhe kirjautuessa ulos:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Card style={styles.settingsCardContainer}>
                <Text style={[styles.cardText, {marginTop: 10}]} variant="bodyMedium">Current fisher: {user.email}</Text>
                <Button style={{marginBottom: 40}} mode="contained" buttonColor="red" textColor="black" onPress={handleSignOut}>SignOut</Button>
            </Card>
        </View>
    )
}

export default Settings;