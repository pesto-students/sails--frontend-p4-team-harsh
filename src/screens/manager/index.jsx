import React, { useState } from "react";
import Table from "../../components/tableuser";
import managerMockData from "./manager.mock.json";
import styles from "./index.module.scss";
import BasicDetail from "../../components/popup/basicdetail";
import Searchbar from "../../components/searchbar";

const Index = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.searchBar}><Searchbar /></div>

      <div className={styles.buttonDiv} ><button className={styles.button}>Add Manager</button></div>
      <Table
        leadsData={managerMockData}
        openDetail={() => setIsDetailOpen(true)}
      />
      <BasicDetail
        isOpen={isDetailOpen}
        onCloseHandle={() => setIsDetailOpen(false)}
      />
    </div>
  );
};

export default Index;
