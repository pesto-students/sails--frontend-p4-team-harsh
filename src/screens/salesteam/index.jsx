import React from "react";
import Table from "../../components/tableuser";
import salesteamMockData from "./salesteam.mock.json";
import styles from "./index.module.scss"

const Index = () => {
    return (
        <div className={styles.main}>
            <Table leadsData={salesteamMockData} />
        </div>
    );
};

export default Index;