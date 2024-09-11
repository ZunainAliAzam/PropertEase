import React from "react";
import "./listPage.scss";
import { listData } from "../../lib/dummyData";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="list">
        <div className="wrapper">
          
        </div>
      </div>
      <div className="map">Map container</div>
    </div>
  );
};

export default ListPage;
