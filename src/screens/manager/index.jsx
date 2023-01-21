import React, { useState } from "react";
import Table from "../../components/table";
import managerMockData from "./manager.mock.json";
import styles from "./index.module.scss";
import BasicDetail from "../../components/popup/basicdetail";
import Searchbar from "../../components/searchbar";
import DeleteUser from "../../components/popup/deleteuser";

const Index = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.searchBar}>
        <Searchbar />
      </div>

      <div className={styles.buttonDiv}>
        <button className={styles.button}>Add Manager</button>
      </div>
      <Table
        leadsData={managerMockData}
        openDetail={() => setIsDetailOpen(true)}
        openDelete={() => setIsDeleteOpen(true)}
        type="managers"
      />
      <BasicDetail
        isOpen={isDetailOpen}
        onCloseHandle={() => setIsDetailOpen(false)}
      />
      <DeleteUser
        isOpen={isDeleteOpen}
        onCloseHandle={() => setIsDeleteOpen(false)}
        message="Are you sure you want to delete user?"
      />
    </div>
  );
};

export default Index;
