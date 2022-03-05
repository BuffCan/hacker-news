import './App.css';
import Searchbar from "./components/Searchbar"
import axios from 'axios';
import NewsList from "./components/News-List";
import React, {useEffect, useState} from "react";
import Navigation from './components/Navigation';
//import ReactPagination from "react-pagination";

function App() {
  const [hits, setHits] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const[emptySearch, setEmptySearch] = useState(false);
  console.log(input)

  async function loadData(){
    let url = "https://hn.algolia.com/api/v1/search?query=React&hitsPerPage=30";
    setIsLoading(true);
    setEmptySearch(false);
    axios.get(url)
      .then(res => {
        setHits(res.data.hits);
        setIsLoading(false);
      });
    
  }
  async function getData(txt=""){
   setIsLoading(true);
    if(txt.trim() === ""){
      alert("Please enter a Searchtopic")
      setEmptySearch(true);
    } else{
      setEmptySearch(false);
    let url = "https://hn.algolia.com/api/v1/search?query="+txt+"&hitsPerPage=30";
    axios.get(url)
      .then(res => {
         const arr = res.data;
        setHits(arr.hits);
        setIsLoading(false);
      })
    }
  }
  useEffect(()=>{
    loadData()
    console.log("loadGotCalled")
  },[]);
 
  return (
    <div className="App">

          <div>
            <Navigation />
            {isLoading ? (emptySearch ? (<p id = "msg">No Results Found</p>):(<p id = "msg">Loading ...</p>)):(<NewsList newsArr={hits}/>)}
            <Searchbar input={input} getData={getData} setInput={setInput} />
         </div>

    </div>
  );
}

 export default App;