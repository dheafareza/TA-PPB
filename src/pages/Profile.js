import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CardProfile from "../component/CP";
import "./Profile.css";

export default function Profile() {
  const [data, setData] = useState([]);
  const githubUsernameList = [
    "dheafareza"
  ];  
  
  useEffect(()=>{
    const githubDataTemp = [];
    async function fetchData() {
      for(let i=0;i<githubUsernameList.length;i++){
        await axios
        .get("https://api.github.com/users/" + githubUsernameList[i])
        .then((res) => {
          githubDataTemp.push(res.data)
        })
        .catch((err) => {
          throw `gagal ${err.message}`; 
        });
      }
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      )
      .catch(err=>alert(err));
  },[]);


    return (
      <>      
        <div className="containerTitle">
          <h1 className="textTitle">About Me!</h1>
        </div>
        <div className="containerProfileContent">
       {data.map((item) => (
          <Fragment key={item.id}>
            <CardProfile
              avatar={item.avatar_url}
              username={item.login}
              email={item.email}
              name={item.name}
              public_repos={item.public_repos}
              company={item.company}
              location={item.location}
            />
          </Fragment>
        ))}
          
        </div>
      </>

    );
  }
  