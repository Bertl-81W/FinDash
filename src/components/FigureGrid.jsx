import { useState, useEffect } from "react";
import data from "../data/figures.json";
import FigureCard from "./FigureCard";
import Modal from "./Modal";

export default function FigureGrid({ user }) {
  const [owned, setOwned] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(user.email)) || [];
    setOwned(saved);
  }, [user.email]);

  const toggleOwned = (id) => {
    const updated = owned.includes(id)
      ? owned.filter((fid) => fid !== id)
      : [...owned, id];
    setOwned(updated);
    localStorage.setItem(user.email, JSON.stringify(updated));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {data.map((figure) => (
          <FigureCard
            key={figure.id}
            figure={figure}
            owned={owned.includes(figure.id)}
            toggleOwned={toggleOwned}
            showDetails={setSelected}
          />
        ))}
      </div>

      {selected && (
        <Modal figure={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
