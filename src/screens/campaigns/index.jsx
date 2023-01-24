import React, { useState, useEffect } from "react";
import Table from "../../components/table";
import styles from "./index.module.scss";
import SearchBar from "../../components/searchbar";
import LeadsPopup from "../../components/popup/leadsPopup";
import {
  fetchCampaigns,
  fetchLeadsByCampaign,
  fetchSalesPersons,
} from "../../api";

const Index = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [isLeadsOpen, setIsLeadsOpen] = useState(false);
  const [salesPersons, setSalesPersons] = useState([]);
  const [selectedSalesPerson, setSelectedSalesPerson] = useState("");

  const fetchAllCampaigns = async () => {
    const response = await fetchCampaigns();
    console.log(response);
    setCampaigns(response.data);
  };

  const handleCampaignSelect = async (id) => {
    console.log(id);
    const response = await fetchLeadsByCampaign(id);
    console.log(response);
    setSelectedCampaign(response.data);
    setIsLeadsOpen(true);
  };

  const fetchAllSalesPersons = async () => {
    const response = await fetchSalesPersons();
    console.log(response);
    setSalesPersons(response.data);
  };

  useEffect(() => {
    fetchAllCampaigns();
    fetchAllSalesPersons();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>

      <Table
        data={campaigns}
        type="campaigns"
        handleCampaignSelect={handleCampaignSelect}
        salesPersons={salesPersons}
        setSelectedSalesPerson={setSelectedSalesPerson}
      />

      <LeadsPopup
        data={selectedCampaign}
        isOpen={isLeadsOpen}
        onCloseHandle={() => setIsLeadsOpen(false)}
      />
    </div>
  );
};

export default Index;
