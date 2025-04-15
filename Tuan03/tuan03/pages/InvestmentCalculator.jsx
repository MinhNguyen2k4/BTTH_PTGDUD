import { useState } from "react";

function InvestmentCalculator() {
  const [capital, setCapital] = useState("");
  const [rate, setRate] = useState("");
  const [target, setTarget] = useState("");
  const [results, setResults] = useState([]);

  const calculateYears = (initial, goal, interest) => {
    const start = Number(initial);
    const end = Number(goal);
    const rate = Number(interest) / 100;

    if (isNaN(start) || isNaN(end) || isNaN(rate)) {
      return { error: "Vui lòng nhập số hợp lệ" };
    }
    if (start <= 0 || end <= 0 || rate <= 0) {
      return { error: "Giá trị phải lớn hơn 0" };
    }
    if (start >= end) {
      return { error: "Vốn ban đầu phải nhỏ hơn mục tiêu" };
    }

    let current = start;
    let years = 0;
    const output = [{ year: years, amount: current.toFixed(2) }];

    while (current < end) {
      years++;
      current += current * rate;
      output.push({ year: years, amount: current.toFixed(2) });
    }

    return { data: output };
  };

  const handleCalculate = () => {
    const result = calculateYears(capital, target, rate);
    if (result.error) {
      alert(result.error);
      setResults([]);
    } else {
      setResults(result.data);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <header className="bg-indigo-700 text-white p-6 rounded-t-xl shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-tight">
          ứng dụng tính toán lãi suất đơn
        </h1>
      </header>
      <main className="bg-white p-6 rounded-b-xl shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <div className="w-full space-y-4">
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              placeholder="Số tiền ban đầu"
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="lãi suất phần trăm mỗi năm"
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="số tiền mục tiêu"
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
            <button
              onClick={handleCalculate}
              className="w-full bg-indigo-600 text-white py-4 rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Tính toán
            </button>
          </div>
          {results.length > 0 && (
            <div className="w-full mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kết quả</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border border-gray-200 rounded-lg">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th className="p-4 font-semibold">Năm</th>
                      <th className="p-4 font-semibold">Số tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result) => (
                      <tr key={result.year} className="hover:bg-gray-50">
                        <td className="p-4 border-t">{result.year}</td>
                        <td className="p-4 border-t">{result.amount} VNĐ</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default InvestmentCalculator;
