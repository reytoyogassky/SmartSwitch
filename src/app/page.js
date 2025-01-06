"use client";

import { useState, useEffect } from "react";
import useRealtimeData from "@/hooks/useRealtimeData";
import NewStats from "@/components/NewStats";
import BarLevel from "@/components/BarLevel";
import Switch from "@/components/Switch";
import BatasDayaSelector from "@/components/BatasDayaSelector";
import Loading from "@/components/Loading";

export default function Home() {
  const { data } = useRealtimeData("myiot");
  const [voltase, setVoltase] = useState(0);
  const [power, setPower] = useState(0);
  const [amper, setAmper] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [pf, setPf] = useState(0);
  const [tagihan, setTagihan] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [selectedBatasDaya, setSelectedBatasDaya] = useState("900VA-RTM");
  const [selectedSaklar, setSelectedSaklar] = useState("saklar1"); // Tambahan state untuk saklar

  useEffect(() => {
    if (data) {
      // Ambil data berdasarkan saklar yang dipilih
      const saklarData = data[selectedSaklar]?.kelistrikan || {};
      setVoltase(parseFloat(saklarData.voltage) || 0);
      setAmper(parseFloat(saklarData.current) || 0);
      setFrequency(parseFloat(saklarData.frequency) || 0);
      setPower(parseFloat(saklarData.power) || 0);
      setPf(parseFloat(saklarData.pf) || 0);
      setEnergy(parseFloat(saklarData.energy)||0)
    }
  }, [data, selectedSaklar]);

  const handleBatasDayaChange = (batasDaya) => {
    setSelectedBatasDaya(batasDaya);
  };

  const calculateTagihan = () => {
    if (
      data &&
      data[selectedSaklar]?.kelistrikan?.energy &&
      data.keuangan?.hargaKwh?.batasDaya[selectedBatasDaya]
    ) {
      const electricUsage = parseFloat(data[selectedSaklar].kelistrikan.energy);
      const batasDaya = parseFloat(
        data.keuangan.hargaKwh.batasDaya[selectedBatasDaya]
      );

      if (!isNaN(electricUsage) && !isNaN(batasDaya)) {
        const calculatedTagihan = electricUsage * batasDaya;
        setTagihan(calculatedTagihan.toFixed(2));
      }
    }
  };

  useEffect(() => {
    calculateTagihan();
  }, [selectedBatasDaya, data, selectedSaklar]);

  const voltasePercentage = Math.min(100, (voltase / 240) * 100);
  const powerPercentage = Math.min(100, (power / 100) * 100);
  const amperPercentage = Math.min(100, (amper / 10) * 100);
  const frequencyPercentage = Math.min(100, (frequency / 100) * 100);
  const pfPercentage = Math.min(100, (pf / 1) * 100);

  const voltaseDisplay = voltase.toFixed(2);
  const powerDisplay = power.toFixed(2);
  const amperDisplay = amper.toFixed(2);
  const frequencyDisplay = frequency.toFixed(2);
  const pfDisplay = pf.toFixed(2);

  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <NewStats 
      tagihan={tagihan} 
      selectedBatasDaya={selectedBatasDaya}
      voltase={voltaseDisplay} 
      energy={energy}
      
      />
      <BatasDayaSelector
        data={data.keuangan.hargaKwh.batasDaya}
        onBatasDayaChange={handleBatasDayaChange}
      />
      <div>
        <h2 className="text-xl font-semibold mb-4">Devices</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <Switch
            nama="Saklar 1"
            switchId="saklar1"
            initialValue={data.saklar1?.switch === 1}
          />
          <Switch
            nama="Saklar 2"
            switchId="saklar2"
            initialValue={data.saklar2?.switch === 1}
          />
        </div>
      </div>

      {/* Switch Saklar */}
      <div className="mb-4">
        <label className="font-semibold text-lg">Pilih Saklar:</label>
        <select
          value={selectedSaklar}
          onChange={(e) => setSelectedSaklar(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full mt-2"
        >
          <option value="saklar1">Saklar 1</option>
          <option value="saklar2">Saklar 2</option>
        </select>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Bar Levels</h2>
        <BarLevel
          voltasePercentage={voltasePercentage}
          voltase={voltaseDisplay}
          powerPercentage={powerPercentage}
          power={powerDisplay}
          amperPercentage={amperPercentage}
          amper={amperDisplay}
          frPercentage={frequencyPercentage}
          fr={frequencyDisplay}
          pfPercentage={pfPercentage}
          pf={pfDisplay}
        />
      </div>
    </div>
  );
};
