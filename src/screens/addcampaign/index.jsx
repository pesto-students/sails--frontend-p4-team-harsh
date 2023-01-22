import React from 'react';
import styles from "./index.module.scss"

const Index = () => {
    return (
        <div className={styles.main}>
            <div className={styles.title}><p>Add Campaign</p></div>
            <div>
                <form className={styles.form}>

                    <label className={styles.label}>
                        Title
                        <br />
                        <input className={styles.input} name="title" type="text" placeholder="" />
                    </label>
                    <br />

                    <label className={styles.label}>
                        Source
                        <br />
                        <input className={styles.input} name="source" type="text" placeholder="" />
                    </label>
                    <br />

                    <label className={styles.label}>
                        Description
                        <br />
                        <input className={styles.input} name="description" type="text" placeholder="" />
                    </label>
                    <br />

                    <label className={styles.label}>
                        Course Code
                        <br />
                        <input className={styles.input} name="courseCode" type="text" placeholder="" />
                    </label>
                    <br />

                    <label className={styles.label}>
                        Price
                        <br />
                        <input className={styles.input} name="price" type="text" placeholder="" />
                    </label>
                    <br />


                    <div className={styles.buttonDiv}>
                        <button className={styles.submit}>Submit</button>
                        <button className={styles.cancel}>Cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Index;