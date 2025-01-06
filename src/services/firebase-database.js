// firebase/firebaseDatabase.js
import { getDatabase, ref, onValue, set, update, remove } from 'firebase/database';
import firebaseApp from './firebase-sdk';  // Import konfigurasi Firebase

const database = getDatabase(firebaseApp);

// Fungsi untuk membaca data secara realtime
export const fetchDataRealtime = (path, callback) => {
    const dataRef = ref(database, path);
    const unsubscribe = onValue(dataRef, (snapshot) => {
        callback(snapshot.val());
    });
    return unsubscribe; // Untuk menghentikan listener
};

// Fungsi untuk menulis data
export const writeData = (path, data) => {
    return set(ref(database, path), data);
};

// Fungsi untuk memperbarui data
export const updateData = (path, data) => {
    return set(ref(database, path), data); // Gunakan set untuk nilai sederhana
};


// Fungsi untuk menghapus data
export const deleteData = (path) => {
    return remove(ref(database, path));
};
