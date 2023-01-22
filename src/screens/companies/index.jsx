import React, { useState, useEffect } from "react";
import Table from "../../components/table";
import companiesMockData from "./companies.mock.json";
import styles from "./index.module.scss";
import { getAllCompanies } from "../../api";

const Index = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchAllCompanies = async () => {
      const response = await getAllCompanies();
      console.log(response);
      setCompanies(response.data);
    };

    fetchAllCompanies();
  }, []);

  return (
    <div className={styles.main}>
      <Table data={companies} type="companies" />
      {/* <Table leadsData={companiesMockData} type="companies" /> */}
    </div>
  );
};

export default Index;
