// src/components/FigureGrid.jsx
import React from "react";

export default function FigureGrid({ user }) {
  
  const sampleFigures = [
    { id: 1, name: "Snake Eyes", specialty: "Commando" },
    { id: 2, name: "Duke", specialty: "Leadership" },
    { id: 3, name: "Scarlett", specialty: "Martial Arts" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sampleFigures.map((fig) => (
        <div
          key={fig.id}
          className="bg-joeBlue text-camoTan p-6 rounded-lg shadow-md hover:bg-joeRed transition font-stencil"
        >
          <h2 className="text-xl font-bold">{fig.name}</h2>
          <p className="mt-2">{fig.specialty}</p>
        </div>
      ))}
    </div>
  );
}
