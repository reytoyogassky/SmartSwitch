import { useState, useEffect } from "react";
import { updateData } from "../services/firebase-database";
import { BsLamp, BsLampFill } from "react-icons/bs";

export default function Switch({ nama, switchId, initialValue,}) {
  const [isChecked, setIsChecked] = useState(initialValue);

  useEffect(() => {
    setIsChecked(initialValue); // Memperbarui state ketika initialValue berubah
  }, [initialValue]);

  const toggleSwitch = () => {
    const newValue = isChecked ? 0 : 1; // Toggle nilai antara 0 dan 1
    setIsChecked(newValue); // Mengubah status switch lokal
    updateData(`myiot/${switchId}/switch`, newValue); // Update data di Firebase
  };

  return (
    <>
      <div className="card bg-primary-content text-primary w-[48%] h-max shadow-xl ">
        <div className="">
          <h1 className="text-center mt-2 font-bold text-kuning">{nama}</h1>

          {/* Ikon Lampu */}
          <div className="flex justify-center items-center mt-8">
            {isChecked ? (
              <BsLampFill className="text-6xl text-primary " />
            ) : (
              <BsLamp className="text-6xl " />
            )}
          </div>

          <div className="card-actions justify-end mt-4 mb-2 mr-2">
            <input
              className="toggle toggle-md toggle-primary"
              type="checkbox"
              checked={isChecked} // Status tercentang berdasarkan state isChecked
              onChange={toggleSwitch} // Fungsi toggle untuk mengubah status switch
            />
          </div>
        </div>
      </div>
    </>
  );
}
