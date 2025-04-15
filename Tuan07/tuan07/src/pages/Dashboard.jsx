import { useState } from "react";
import StatsCard from "../components/StatsCard";
import Table from "../components/Table";

const Dashboard = () => {
  const stats = [
    { title: "TURNOVER", value: "$92,405", change: "5.39%" },
    { title: "PROFIT", value: "$32,218", change: "5.39%" },
    { title: "NEW CUSTOMERS", value: "298", change: "6.84%" },
  ];

  const [data, setData] = useState([
    {
      id: 1,
      name: "Elizabeth Lee",
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
    },
    {
      id: 2,
      name: "Carlos Garcia",
      company: "SmoozeShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
    },
    {
      id: 3,
      name: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
    },
    {
      id: 4,
      name: "Ryan Brown",
      company: "OmniTech Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
    },
    {
      id: 5,
      name: "Ryan Young",
      company: "DataStream Inc.",
      value: "$769",
      date: "01/05/2023",
      status: "Completed",
    },
    {
      id: 6,
      name: "Hailey Adams",
      company: "FlowRush",
      value: "$922",
      date: "10/06/2023",
      status: "Completed",
    },
  ]);

  const handleEdit = (item) => {
    console.log("Editing:", item);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Detailed Report</h2>
        </div>
        <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Dashboard;
