import React from "react";
import styles from "./index.module.scss";
import Tile from "../../components/admindbtile";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Barchart = () => {
  const bar = {
    chart: {
      type: 'column',
      inverted: false,
      height: 275,
      width: 765,
      borderRadius: 5,

    },
    title: {
      text: 'Company Growth',

    },
    xAxis: {
      categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],



    },
    yAxis: {
      title: {
        // categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        // text: "Fruit eaten"
      }
    },

    series: [{
      name: "Leads",
      data: [1, 2, 3, 4, 5, 6],
      color: "#5C7DEE",

    },
    {
      name: "outcome",
      data: [1, 2, 3, 4, 5, 6],
      color: "#DDE0EF",

    }
    ]
  }
  return (
    <div className={styles.chart}><HighchartsReact highcharts={Highcharts} options={bar} /></div>
  )
}

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

const adminDashboard = () => {
  return (
    <div className={styles.adminScreen}>
      <div className={styles.header}><p>Welcome Admin</p></div>
      <div className={styles.containerMain}>
        <div className={styles.main}>
          <div className={styles.container1}><Tile message="New Leads" value="1000" /></div>
          <div className={styles.container2}><Tile message="Converted Leads" value="500" /></div>
          <div className={styles.container3}><Tile message="Monthly Conversion" value="30" /></div>
        </div>
        <div className={styles.subMain}>
          <div className={styles.barChart}><Barchart /></div>
          <div className={styles.container4}><Donut /></div>
        </div>
      </div>
    </div>
  );
};
export default adminDashboard;
