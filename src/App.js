import { useEffect, useState } from "react";
import { fetchHistory } from "./api";
import "./styles.css";

// Components
import MissionCard from "./components/MissionCard";

export default function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState([]);

  const getHistory = async () => {
    const history = await fetchHistory({
      start: startDate,
      end: endDate
    });
    setData(history);
  };

  useEffect(() => {
    getHistory();
  }, [startDate, endDate]);

  return (
    <div>
      <label>Start Date</label>
      <input onChange={(e) => setStartDate(e.target.value)} type="date" />
      <br />
      <label>Start Date</label>
      <input onChange={(e) => setEndDate(e.target.value)} type="date" />

      <div className="mission-list">
        {data.map((item, idx) => {
          return <MissionCard key={idx} mission={item} />;
        })}
      </div>
    </div>
  );
}
