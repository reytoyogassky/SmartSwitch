import { useState, useEffect } from "react";

const BatasDayaSelector = ({ data, onBatasDayaChange }) => {
  const [selectedBatasDaya, setSelectedBatasDaya] = useState("900VA-RTM");

  // Mengambil opsi batas daya dari data, pastikan data valid
  const batasDayaOptions = data
    ? Object.keys(data)
    : []; // Tangani jika data tidak tersedia

  // Mengirimkan batas daya yang dipilih ke parent
  useEffect(() => {
    if (onBatasDayaChange) {
      onBatasDayaChange(selectedBatasDaya);
    }
  }, [selectedBatasDaya, onBatasDayaChange]);

  return (
    <div className="my-4">
      <label htmlFor="batasDaya" className="block mb-2 font-medium ">
        Pilih Batas Daya:
      </label>
      <select
        id="batasDaya"
        value={selectedBatasDaya}
        onChange={(e) => setSelectedBatasDaya(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full text-center"
      >
        {batasDayaOptions.length > 0 ? (
          batasDayaOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option disabled>Data tidak tersedia</option>
        )}
      </select>
    </div>
  );
};

export default BatasDayaSelector;
