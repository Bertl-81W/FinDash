import { useState, useEffect } from "react";
import FigureCard from "../components/FigureCard";
import Modal from "./Modal";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function FigureGrid({ user }) {
  const [owned, setOwned] = useState([]);
  const [figures, setFigures] = useState([]);
  const [selected, setSelected] = useState(null);

  // Load figures from Firestore
  useEffect(() => {
    const q = query(collection(db, "figures"), where("uid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFigures(items);
      setOwned(items.filter((f) => f.owned).map((f) => f.id));
    });
    return unsubscribe;
  }, [user.uid]);

  // Toggle owned in Firestore
  const toggleOwned = async (figureId) => {
    const figRef = doc(db, "figures", figureId);
    const currentlyOwned = owned.includes(figureId);
    await updateDoc(figRef, { owned: !currentlyOwned });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {figures.map((figure) => (
          <FigureCard
            key={figure.id}
            figure={figure}
            owned={figure.owned}
            toggleOwned={() => toggleOwned(figure.id)}
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
