import React from "react";
import Table from "../../components/table";
import salesteamMockData from "./salesteam.mock.json";
import styles from "./index.module.scss";
import Searchbar from "../../components/searchbar";

const Index = () => {
  return (
    <div className={styles.main}>
      <div className={styles.searchBar}>
        <Searchbar />
      </div>
      <div className={styles.buttonDiv}>
        <button className={styles.button}>Add Salesperson </button>
      </div>
      <Table leadsData={salesteamMockData} type="salesTeam" />
    </div>
  );
};

export default Index;
