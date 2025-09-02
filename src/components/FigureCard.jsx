export default function FigureCard({ figure, owned, toggleOwned, showDetails }) {
  return (
    <div 
      onClick={() => showDetails(figure)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <img 
        src={figure.image} 
        alt={figure.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{figure.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Codename: {figure.codename}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Specialty: {figure.specialty}</p>

        <button 
          onClick={(e) => { e.stopPropagation(); toggleOwned(figure.id); }}
          className={`mt-2 px-3 py-1 rounded-lg text-sm font-medium 
            ${owned ? "bg-green-600 text-white" : "bg-gray-300 text-black"}`}
        >
          {owned ? "Owned" : "Add to Collection"}
        </button>
      </div>
    </div>
  );
}
