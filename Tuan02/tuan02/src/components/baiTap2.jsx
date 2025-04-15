import React, { useState } from "react";

function BaiTap2() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(0);

  function handleClick() {
    const numA = parseInt(a) || 0;
    const numB = parseInt(b) || 0;
    setResult(numA + numB);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mb-6">
      <div className="space-y-4">
        <input
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setA(e.target.value)}
          placeholder="Nhập số thứ nhất"
          type="number"
        />
        <input
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setB(e.target.value)}
          placeholder="Nhập số thứ hai"
          type="number"
        />
      </div>
      <button
        className="mt-4 w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
        onClick={handleClick}
      >
        Tính tổng
      </button>
      <hr className="my-4" />
      <h2 className="text-xl font-bold text-center">Kết quả: {result}</h2>
    </div>
  );
}

export default BaiTap2;
