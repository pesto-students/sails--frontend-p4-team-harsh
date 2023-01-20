import React from "react";
import styles from "./index.module.scss";

const Index = ({ leadsData }) => {
    return (
        <table className={styles.container}>
            <thead>
                <tr>
                    {Object.keys(leadsData.data[0]).map((item, index) => (
                        <th key={`lead-table-head-${index}`}>{item}</th>
                    ))}
                    <th>View</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {leadsData.data.map((item, index) => (
                    <tr key={`leads-row-${index}`}>
                        {Object.values(item).map((value, index) => (
                            <td key={`leads-row-data-${index}`}>{value}</td>
                        ))}
                        <td>
                            <button>Details</button>
                        </td>
                        <td>
                            <button>Delete</button>
                            {/* delete icon */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Index;
