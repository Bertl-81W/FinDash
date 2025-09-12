import React from "react";

export default function App() {
  return (
    <div className="p-6 bg-camoTan font-stencil min-h-screen">
      <h1 className="text-3xl font-bold text-armyGreen mb-4">
        Hallo Tailwind!
      </h1>

      <p className="text-joeBlue mb-4">
        If this text is styled, Tailwind is working 🚀
      </p>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-armyGreen text-camoTan p-4 rounded">armyGreen</div>
        <div className="bg-oliveDrab text-jetBlack p-4 rounded">oliveDrab</div>
        <div className="bg-camoTan text-jetBlack p-4 rounded">camoTan</div>
        <div className="bg-jetBlack text-camoTan p-4 rounded">jetBlack</div>
        <div className="bg-joeBlue text-camoTan p-4 rounded">joeBlue</div>
        <div className="bg-joeRed text-camoTan p-4 rounded">joeRed</div>
      </div>
    </div>
  );
}
