import { app } from "../firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";
const db = getDatabase(app);

const GetAllCatches = () => {
    return new Promise((resolve, reject) => {
        const catchesRef = ref(db, 'catches/');
        onValue(catchesRef, (snapshot) => {
            const data = snapshot.val();
            const catchArray = [];
            if (data) {
                for (let id in data) {
                    const fish = data[id];
                    if (fish.location) {
                        catchArray.push({
                            fishId: id,
                            date: fish.date,
                            kg: fish.kg,
                            length: fish.length,
                            species: fish.species,
                            location: {
                                latitude: fish.location.latitude,
                                longitude: fish.location.longitude
                            }
                        });
                    }
                    if (!fish.location) {
                        catchArray.push({
                            fishId: id,
                            date: fish.date,
                            kg: fish.kg,
                            length: fish.length,
                            species: fish.species,
                        });
                    }
                }
                resolve(catchArray);
            } else {
                resolve([]);
            }
        }, (error) => {
            reject(error);
        });
    });
}

export default GetAllCatches;