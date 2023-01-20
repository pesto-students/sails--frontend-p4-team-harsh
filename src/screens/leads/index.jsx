import React from "react";
import Table from "../../components/table";
import leadsMockData from "./leads.mock.json";
import styles from "./index.module.scss";

const Index = () => {
  return (
    <div className={styles.main}>
      <Table leadsData={leadsMockData} />
    </div>
  );
};

export default Index;
