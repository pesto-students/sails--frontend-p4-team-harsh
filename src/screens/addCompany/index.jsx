import React, { useState, useEffect } from "react";
import AddCompanyForm from "../../components/addCompanyForm";
import { registerCompany } from "../../api";
import styles from "./index.module.scss";

const initState = {
  name: "",
  //   apiKey: "ADSLKFJOWAEJFLAKJSDKLFDJF234243234",
  //   validity: true,
  userCount: 0,
};

const Index = () => {
  const [state, setState] = useState(initState);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting...");
    const response = await registerCompany(state);
    console.log(response);
  };

  const handleChange = (name, value) => {
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  useEffect(() => console.log(state), [state]);

  return (
    <div className={styles.container}>
      <AddCompanyForm
        onSubmit={onSubmit}
        data={state}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Index;
