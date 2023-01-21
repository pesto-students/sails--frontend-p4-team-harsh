import React from "react";
import styles from "./index.module.scss";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Donut = () => {
    const donut = {
        chart: {
            type: "pie",
            height: 275,
            width: 350,
            borderRadius: 5,
        },
        title: {
            text: "Star Performer"
        },
        plotoptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [
            {
                name: "performance",
                data: [
                    { name: "Leads", y: 15, color: "#8AEBC1", },
                    { name: "outcome", y: 10, color: "#7E6EEE", },


                ]
            }
        ]

    }
    return (
        <div><HighchartsReact highcharts={Highcharts} options={donut} /></div>

    )
}

const piechart = () => {
    return (
        <div className={styles.container4}><Donut /></div>

    )
}
export default piechart;