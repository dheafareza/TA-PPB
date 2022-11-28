import "./Movie.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import Card from "../component/Card";
import Modal from "../component/Modal";
import { useNavigate } from "react-router-dom";


export default function Movie() {
    const navigate = useNavigate();



    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("Hello");
    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    useEffect(() => {
      const fetchData = async (query) => {
        setIsLoading(true);
        try {
          const response = await axios.get(
            "https://imdb8.p.rapidapi.com/auto-complete",
            {
              params: { q: query },
              headers: {
                'X-RapidAPI-Key': '1f667acfd0mshc9768acb57577fcp1bce33jsnf28ad0ef2fa0',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
              },
            }
          );
          if (response.status === 200) {
            console.log(response.data)
            setData(response.data);
            setisLoaded(true);
            setIsLoading(false);
          }
        } catch (err) {
          console.log(err);
          setIsLoading(false);
        }
      };
      if (!isLoaded) {
        fetchData(query);
      }
    }, [isLoaded, query]);
    const onSearch = (e) => {
      if (e.key === "Enter") {
        setisLoaded(false);
        setQuery(e.target.value);
      }
    };
    const handleClick = (item) => {
      setModalShow(!modalShow);
      setModalItem(item);
      navigate('/reservation')
    };
    return (
      <main>
        <input
          type="text"
          placeholder="Search film by name"
          onKeyDown={(e) => onSearch(e)}
        />
        <h3 className="title">Search : {query}</h3>
        {!data || isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-container">
            {data.d.map((item, index) => {
              return (
                <Card data={item} key={index} onClick={() => handleClick(item)} />
              );
            })}
          </div>
        )}
        <Modal
          data={modalItem}
          isShow={modalShow}
          onCancel={() => setModalShow(false)}
        />
      </main>
    );
  }