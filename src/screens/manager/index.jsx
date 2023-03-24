import React, { useState, useEffect } from "react";
import Table from "../../components/table";
import managerMockData from "./manager.mock.json";
import styles from "./index.module.scss";
import Searchbar from "../../components/searchbar";
import BasicDetail from "../../components/popup/basicdetail";
import DeleteUser from "../../components/popup/deleteuser";
import CreateNewUser from "../../components/createNewUser";
import { createUser, fetchManagers } from "../../api";

const initCreateUserState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  role: "manager",
  phone: "",
  countryCode: "",
  companyId: "",
};

const Index = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [createUserState, setCreateUserState] = useState(initCreateUserState);
  const [managers, setManagers] = useState([]);

  const fetchAllManagers = async () => {
    const response = await fetchManagers();
    console.log(response);
    setManagers(response.data);
  };

  const handleCreateUserStateUpdate = (e) => {
    setCreateUserState({ ...createUserState, [e.target.name]: e.target.value });
  };

  const handleCreateUserSubmit = async (e) => {
    e.preventDefault();
    const companyId = localStorage.getItem("companyId");
    const payload = { ...createUserState, companyId };
    const response = await createUser(payload);
    console.log(response);
    setIsAddUserOpen(false);
    fetchAllManagers();
  };

  useEffect(() => {
    fetchAllManagers();
  }, []);

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
          Add Manager
        </button>
      </div>
      <Table
        // data={managerMockData.data}
        data={managers}
        openDetail={() => setIsDetailOpen(true)}
        openDelete={() => setIsDeleteOpen(true)}
        type="managers"
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
        createUserState={createUserState}
        handleCreateUserStateUpdate={handleCreateUserStateUpdate}
        handleCreateUserSubmit={handleCreateUserSubmit}
      />
    </div>
  );
};

export default Index;
