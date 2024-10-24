import { app } from "../firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";

import GetImages from "./GetAllIMages";
const db = getDatabase(app);

const GetAllFishes = () => {

    const images = GetImages();

    console.log(images)

    return new Promise((resolve, reject) => {
        const fishesRef = ref(db, 'fishes/');
        onValue(fishesRef, (snapshot) => {
            const data = snapshot.val();
            const fishArray = [];
            if (data) {
                for (let id in data) {
                    const fish = data[id];
                    fishArray.push({
                        id: id,
                        species: fish.species,
                        description: fish.description,
                        img: images[fish.species],
                    });
                }
                resolve(fishArray);
            } else {
                resolve([]);
            }
        }, (error) => {
            reject(error);
        });
    });
};

export default GetAllFishes;