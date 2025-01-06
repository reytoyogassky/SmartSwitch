// hooks/useRealtimeData.js
import { useState, useEffect } from "react";
import { fetchDataRealtime } from "../services/firebase-database";

export default function useRealtimeData(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data dari Firebase secara realtime
    const unsubscribe = fetchDataRealtime(path, (fetchedData) => {
      if (fetchedData) {
        setData(fetchedData);
      } else {
        setError("Data tidak ditemukan.");
      }
      setLoading(false);
    });

    // Cleanup listener saat komponen di-unmount
    return () => unsubscribe();
  }, [path]); // Pastikan path adalah satu-satunya dependency untuk menghindari re-render tak terbatas

  if (loading) {

    return <p>Loading...</p>; // Tampilkan loading jika data belum siap
  }

  if (error) {
    return <p>{error}</p>; // Tampilkan pesan error jika ada masalah pengambilan data
  }

  if (!data) {
    return <p>Data tidak ditemukan.</p>; // Tampilkan pesan jika data tidak ada
  }

  return { data }; // Kembalikan data setelah siap
}
