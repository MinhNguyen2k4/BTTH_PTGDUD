const Table = ({ data, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Detailed Report</h2>
        <div>
          <button className="bg-pink-100 text-pink-600 px-2 py-1 rounded mr-1">
            Import
          </button>
          <button className="bg-pink-100 text-pink-600 px-2 py-1 rounded">
            Export
          </button>
        </div>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-gray-500">
            <th className="p-2">NAME</th>
            <th className="p-2">COMPANY</th>
            <th className="p-2">VALUE</th>
            <th className="p-2">DATE</th>
            <th className="p-2">STATUS</th>
            {onEdit && <th className="p-2">ACTIONS</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.company}</td>
              <td className="p-2">{row.value}</td>
              <td className="p-2">{row.date}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    row.status === "New"
                      ? "bg-blue-100 text-blue-600"
                      : row.status === "In-progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              {onEdit && (
                <td className="p-2 flex space-x-2">
                  <button
                    onClick={() => onEdit(row)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
