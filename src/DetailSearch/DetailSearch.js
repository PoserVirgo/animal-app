import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./DetailSearch.css"

export default function DetailSearch() {

  const [data, setData] = useState();
  const { name } = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/myoktariansyah/exopet-app/exopet?common_name=${name}`
    )
      .then((res) => res.json())
      .then((cats) => {
        setData(cats[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  console.log(data);

  return (
    <div className="distance">
      <h1 className="txt"><span className="span1">Infor</span>mation</h1>
      {data === undefined ? (<div className="loading-state">Loading...</div>)
       : (
        <div className="detail">
          <img className="img" src={data.image} alt="detail-img" />
          <div className="detail-item">
            <p className="infoname">Name : {data.common_name}</p>
            <p>Species : {data.scientific_name}</p>
            <p>Family : {data.family}</p>
            <p>Order : {data.order}</p>
            <p>Kingdom : {data.kingdom}</p>
            <p>Genus : {data.category}</p>
            <p>{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}