export default function Modal({ figure, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>
        <img
          src={figure.filecard}
          alt={`${figure.name} Filecard`}
          className="w-full h-64 object-contain mb-4 rounded-md"
        />
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {figure.name}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {figure.description}
        </p>
      </div>
    </div>
  );
}
