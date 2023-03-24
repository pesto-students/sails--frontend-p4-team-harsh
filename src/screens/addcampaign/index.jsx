import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { createCampaign } from "../../api";

const initState = {
  title: "",
  source: "",
  description: "",
  courseCode: "",
  price: "",
  companyId: "",
};

const Index = () => {
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleCreateCampaignSubmit = async (e) => {
    e.preventDefault();
    const companyId = localStorage.getItem("companyId");
    const payload = { ...state, companyId };
    const response = await createCampaign(payload);
    console.log(response);
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <p>Add Campaign</p>
      </div>
      <div>
        <form className={styles.form} onSubmit={handleCreateCampaignSubmit}>
          <label className={styles.label}>
            Title
            <br />
            <input
              className={styles.input}
              name="title"
              type="text"
              placeholder=""
              value={state.title}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className={styles.label}>
            Source
            <br />
            <input
              className={styles.input}
              name="source"
              type="text"
              placeholder=""
              value={state.source}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className={styles.label}>
            Description
            <br />
            <input
              className={styles.input}
              name="description"
              type="text"
              placeholder=""
              value={state.description}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className={styles.label}>
            Course Code
            <br />
            <input
              className={styles.input}
              name="courseCode"
              type="text"
              placeholder=""
              value={state.courseCode}
              onChange={handleChange}
            />
          </label>
          <br />

          <label className={styles.label}>
            Price
            <br />
            <input
              className={styles.input}
              name="price"
              type="text"
              placeholder=""
              value={state.price}
              onChange={handleChange}
            />
          </label>
          <br />

          <div className={styles.buttonDiv}>
            <button
              className={styles.submit}
              onClick={handleCreateCampaignSubmit}
            >
              Submit
            </button>
            <button className={styles.cancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
