import React, { useState } from "react";

function BaiTap4() {
  const [test, setTest] = useState("");
  const [list, setList] = useState([]);

  function handleClick() {
    if (test.trim()) {
      setList([...list, test]);
      setTest("");
    }
  }

  function handleDelete(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mb-6">
      <h1 className="text-xl font-bold mb-4">ToDo list</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border rounded-md"
          value={test}
          onChange={(e) => setTest(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleClick}
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-50 rounded-md"
          >
            <span>{item}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(index)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BaiTap4;
