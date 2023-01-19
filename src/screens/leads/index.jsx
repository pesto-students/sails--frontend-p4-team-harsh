import React from "react";
import Table from "../../components/table";
import leadsMockData from "./leads.mock.json";

const Index = () => {
  return (
    <div>
      <Table leadsData={leadsMockData} />
    </div>
  );
};

export default Index;
