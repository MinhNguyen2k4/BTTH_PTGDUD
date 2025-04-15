import React, { useState } from "react";

function BaiTap1() {
  const [name, setName] = useState("");

  function handleClick() {
    console.log(`Tên đã nhập: ${name}`);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mb-6">
      <div className="flex items-center space-x-4">
        <p className="font-semibold">Tên:</p>
        <input
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
        />
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        onClick={handleClick}
      >
        Gửi
      </button>
      <hr className="my-4" />
      <h2 className="text-xl font-bold text-center">
        {name || "Chưa nhập tên"}
      </h2>
    </div>
  );
}

export default BaiTap1;
