import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import { NavLink } from "react-router-dom";

const Search = (props) => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isLoading] = useState(false);
  const [isError] = useState(false);
  
  const [dataItem, setDataItem] = useState([]);
  const [isLoadingItem, setIsLoadingItem] = useState(false);
  const [isErrorItem, setIsErrorItem] = useState(false);
  const { history } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsErrorItem(false);
      setIsLoadingItem(true);

      try {
        const results = await axios(
          "https://my-json-server.typicode.com/PoserVirgo/animal-app/db"
        );
        setDataItem(results.data.exopet)
      } catch (err) {
        setIsErrorItem(true);
        setTimeout(() => setIsErrorItem(false), 4000);
      }
      setIsLoadingItem(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const doSearch = (e) => {
      axios
        .get(
          "https://my-json-server.typicode.com/PoserVirgo/animal-app/exopet?common_name=" +
          name
        )
        .then((results) => {
          setData(results.data);
        });
    };
    doSearch();
  }, [name]);
  console.log(data);

  const renderListItem = () => {
    return (
      <div className="item-container">
        {dataItem.map((item, index) => {
          return (
            <div class="box" key={index}>
              <NavLink
                to={`/Cardsdetails/${item.id}`}
                onClick={() =>
                  history.push(`/Cardsdetails/${item.id}`)
                }
              >
                <img class="img-list" src={item.image} alt="" />
                <p class="name">{item.common_name}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  };

  const renderList = () => {
    return (
      <main>
        <input
          className="search-input"
          type="text"
          placeholder="Search Exopet by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="item-container1">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={`/DetailSearch/${item.common_name}`}>
                  <img className="imgsearch" src={item.image} alt="" />
                  <div className="search-name">
                    <p>{item.common_name}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </main>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  const renderErrorItem = () => {
    if (isErrorItem) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  return (
    <div className="search-container">
      {renderError()}
      <h1 className="txt">
        Search <span className="span-search">Exopet</span>
      </h1>
      {isLoading ? (
        <div className="search-loading">Loading...</div>
      ) : (
        <div className="search-result">{renderList()}</div>
      )}
      {renderErrorItem()}
      {isLoadingItem ? (
        <div className="loading-state">Loading...</div>
      ) : (
        <div className="render">{renderListItem()}</div>
      )}
    </div>
  );
};

export default Search;
