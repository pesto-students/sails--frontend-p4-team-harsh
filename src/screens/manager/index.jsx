import React from "react";
import Table from "../../components/tableuser";
import managerMockData from "./manager.mock.json";
import styles from "./index.module.scss";

const Index = () => {
    return (
        <div className={styles.main} >
            <Table leadsData={managerMockData} />
        </div>
    );
};

export default Index;
