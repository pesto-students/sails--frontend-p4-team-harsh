import React, { useState } from "react";
import Table from "../../components/table";
import salesteamMockData from "./salesteam.mock.json";
import styles from "./index.module.scss";
import Searchbar from "../../components/searchbar";
import BasicDetail from "../../components/popup/basicdetail";
import DeleteUser from "../../components/popup/deleteuser";
import CreateNewUser from "../../components/createNewUser";

const Index = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.searchBar}>
        <Searchbar />
      </div>
      <div className={styles.buttonDiv}>
        <button
          className={styles.button}
          onClick={() => setIsAddUserOpen(true)}
        >
          Add Salesperson
        </button>
      </div>
      <Table
        leadsData={salesteamMockData}
        type="salesTeam"
        openDetail={() => setIsDetailOpen(true)}
        openDelete={() => setIsDeleteOpen(true)}
      />

      {/* Modals */}
      <BasicDetail
        isOpen={isDetailOpen}
        onCloseHandle={() => setIsDetailOpen(false)}
      />
      <DeleteUser
        isOpen={isDeleteOpen}
        onCloseHandle={() => setIsDeleteOpen(false)}
        message="Are you sure you want to delete user?"
      />
      <CreateNewUser
        isOpen={isAddUserOpen}
        onCloseHandle={() => setIsAddUserOpen(false)}
      />
    </div>
  );
};

export default Index;
