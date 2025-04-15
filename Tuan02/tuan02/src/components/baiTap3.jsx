import React, { useState } from "react";
function BaiTap3() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [s, setS] = useState("+");
  const [result, setResult] = useState(0);

  function handleClick() {
    const numA = parseInt(a) || 0;
    const numB = parseInt(b) || 0;
    switch (s) {
      case "+":
        setResult(numA + numB);
        break;
      case "-":
        setResult(numA - numB);
        break;
      case "*":
        setResult(numA * numB);
        break;
      case "/":
        setResult(
          numB !== 0 ? (numA / numB).toFixed(2) : "Lỗi: Không chia được cho 0"
        );
        break;
      default:
        setResult(0);
    }
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
      <div className="flex justify-around my-4">
        {["+", "-", "*", "/"].map((op) => (
          <label key={op} className="flex items-center space-x-2">
            <input
              type="radio"
              name="s"
              value={op}
              checked={s === op}
              onChange={(e) => setS(e.target.value)}
              className="text-blue-500"
            />
            <span className="text-lg font-semibold">{op}</span>
          </label>
        ))}
      </div>
      <button
        className="mt-4 w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 transition"
        onClick={handleClick}
      >
        Tính toán
      </button>
      <hr className="my-4" />
      <h2 className="text-xl font-bold text-center">Kết quả: {result}</h2>
    </div>
  );
}
export default BaiTap3;
