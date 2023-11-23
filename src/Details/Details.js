import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Details.css"

export default function Details() {
  const [data, setData] = useState();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios(
                    "https://my-json-server.typicode.com/myoktariansyah/exopet-app/db"
                );
                setData(results.data.exopet[id-1])
            } catch (err) {
            
            }  
        };

        fetchData();
    }, [id]);
    console.log(data);

  return (
    <div className="distance">
      <p className="detail-title">Infor<span className="span-detail">mation</span></p>
      {data === undefined
        ? (<div className="loading-state">Loading...</div>)
        :
        <div className="detail">
          <img className="img" src={data.image} alt="detail-img"/>
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
      }
    </div>
  );
}
