import React from "react";
import CustomPopup from "../customPopup";
import Table from "../../table";

const Index = ({ isOpen, onCloseHandle, data }) => {
  console.log(data);
  if (data && data.length) {
    return (
      <div>
        <CustomPopup isOpen={isOpen} onCloseHandle={onCloseHandle}>
          <Table data={data} type="leads" />
        </CustomPopup>
      </div>
    );
  }
};

export default Index;
