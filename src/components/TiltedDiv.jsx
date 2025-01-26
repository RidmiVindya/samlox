import React from "react";

const TiltedDiv = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-400"></div>

      {/* Tilted Yellow Div */}
      <div
        className="absolute top-[-120px] left-0 w-full h-[150px] bg-yellow-500"
        style={{
          clipPath: "polygon(0 0, 100% 80%, 100% 100%, 0 80%)",
          transform: "skewY(2deg)", transformOrigin: "top right",
        }}
      ></div>

      {/* Tilted Black Div */}
      <div
        className="absolute top-[-30px] left-0 w-full h-[250px] bg-black"
        style={{
          clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
          transform: "skewY(3deg)", transformOrigin: "top right"
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Tilted Div Example</h1>
      </div>
    </div>
  );
};

export default TiltedDiv;
