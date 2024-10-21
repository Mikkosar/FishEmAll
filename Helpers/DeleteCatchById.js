import { app } from "../firebaseConfig"
import { getDatabase, ref, remove } from "firebase/database";
const db = getDatabase(app);

const DeleteCatchById = async (id) => {
    try {
        const fishRef = ref(db, `catches/${id}`);
        await remove(fishRef);
        console.log(`Fish with ID ${id} has been deleted successfully.`);
    } catch (error) {
        console.error("Error deleting fish:", error);
    }
}

export default DeleteCatchById;