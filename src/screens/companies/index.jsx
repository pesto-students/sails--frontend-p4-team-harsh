import React from "react";
import Table from "../../components/table";
import companiesMockData from "./companies.mock.json";
import styles from "./index.module.scss";

const Index = () => {
    return (
        <div className={styles.main}>
            <Table leadsData={companiesMockData} type="companies" />
        </div>
    );
};

export default Index;
