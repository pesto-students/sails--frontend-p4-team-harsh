import React, { useState } from 'react';
import styles from "./index.module.scss";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const CoversionRate = () => {
    const [selectedDate, SetSelectedDate] = useState(null)
    return (
        <div>
            <div className={styles.conversionRate}>
                {/* <div className={styles.container}> */}
                <div className={styles.main}>
                    <p className={styles.title}>Conversion Rate</p>
                    <DatePicker className={styles.datepicker} selected={selectedDate}
                        onChange={date => SetSelectedDate(date)} />
                </div>
                <p className={styles.value}>100%</p>
                {/* </div> */}
            </div>
        </div>
    )
}

export default CoversionRate