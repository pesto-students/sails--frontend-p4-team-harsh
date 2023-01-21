import React, { useState } from "react";
import Table from "../../components/tableuser";
import managerMockData from "./manager.mock.json";
import styles from "./index.module.scss";
import BasicDetail from "../../components/popup/basicdetail";

const Index = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className={styles.main}>
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
