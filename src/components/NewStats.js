import { FaBolt, FaMoneyBill, FaTachometerAlt } from "react-icons/fa";
import useRealtimeData from "@/hooks/useRealtimeData";
import { useState, useEffect } from "react";

const NewStats = ({ tagihan,voltase,energy }) => {
  const { data, loading, error } = useRealtimeData("myiot");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    setProfileImage(`https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg`);
  }, []);

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>{error || "Data tidak ditemukan."}</p>;
  }


  return (
    <div className="p-4 glass card">
      <div className="flex">
        <div className="avatar online">
          <div className=" w-10 h-10 rounded-full">
            <img src={profileImage || "path/to/default-image.jpg"} alt="Profile" />
          </div>
        </div>
        <div className="ml-2">
          <h1 className="font-semibold">Welcome Home</h1>
          <p className="text-sm text-foreground text-primary">Smart People</p>
        </div>
      </div>

      <hr className="h-px mt-4 my-2 bg-gray-200 border-0" />

      <div className="flex flex-wrap justify-center text-center">
        {/* Menampilkan Voltase */}
        <div className="w-max flex flex-col items-center px-2">
          <FaBolt className="text-center" />
          <h1 className="font-bold">
            {voltase}
            <span className="font-normal text-primary"> V</span>
          </h1>
          <p className="text-sm text-gray-400">Voltase</p>
        </div>

        {/* Menampilkan Tagihan */}
        <div className="w-max flex flex-col items-center px-2">
          <FaMoneyBill className="text-primary" />
          <h1 className="font-extrabold ">
            {tagihan ? formatRupiah(tagihan) : "Rp. 0"}
          </h1>
          <p className="text-sm text-gray-400">Tagihan</p>
        </div>

        {/* Menampilkan Penggunaan Listrik */}
        <div className="w-max flex flex-col items-center px-2">
          <FaTachometerAlt />
          <h1 className="font-bold">
            {energy}
            <span className="font-normal text-primary"> Kwh</span>
          </h1>
          <p className="text-sm text-gray-400">Electric Usage</p>
        </div>
      </div>
    </div>
  );
};

export default NewStats;
