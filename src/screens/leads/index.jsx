import React, { useState, useEffect } from "react";
import Table from "../../components/table";
import leadsMockData from "./leads.mock.json";
import styles from "./index.module.scss";
import {
  fetchLeads,
  fetchLeadsByCompanyId,
  fetchSalesPersons,
  updateLeadAssignee,
} from "../../api";

const Index = () => {
  const [leads, setLeads] = useState([]);
  const [salesPersons, setSalesPersons] = useState([]);
  const [assignee, setAssignee] = useState("");

  const fetchAllLeads = async () => {
    const response = await fetchLeadsByCompanyId();
    console.log(response);
    setLeads(response.data);
  };

  const fetchAllSalesPersons = async () => {
    const response = await fetchSalesPersons();
    console.log(response);
    const salesPersons = response.data.map((item) => item.email);
    setSalesPersons(salesPersons);
  };

  const handleAssigneeChange = async (id, email) => {
    const response = await updateLeadAssignee(id, email);
    console.log(response);
  };

  useEffect(() => {
    fetchAllLeads();
    fetchAllSalesPersons();
  }, []);

  useEffect(() => console.log(assignee), [assignee]);

  return (
    <div className={styles.main}>
      <Table
        data={leads}
        type="leads"
        salesPersons={salesPersons}
        assignee={assignee}
        handleAssigneeChange={handleAssigneeChange}
      />
    </div>
  );
};

export default Index;
