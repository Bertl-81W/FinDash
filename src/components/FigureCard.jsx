import { useState } from "react";

export default function FigureCard({ figure, owned, toggleOwned, showDetails }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-md transition transform hover:scale-105 bg-white dark:bg-gray-800`}
      onClick={() => toggleOwned(figure.id)}
    >
      <img
        src={figure.image}
        alt={figure.name}
        className="w-full h-48 object-cover"
      />
      {owned && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          ✅ Owned
        </span>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {figure.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {figure.description}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            showDetails(figure);
          }}
          className="mt-2 text-blue-500 hover:underline text-sm"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
