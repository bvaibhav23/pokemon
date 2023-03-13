import './App.css';
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from './Pagination';

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const pokeFun = async () => {
    setLoading(true)
    let response = await fetch(url);
    let res = await response.json();
    // console.log(res)
    setNextUrl(res.next);
    setPrevUrl(res.previous);
    setPokeData(res.results)
    setLoading(false)
  }

  const PaginationHandle = (nav) => {
    if (nav === "next") {
      setPokeData([])
      setUrl(nextUrl)
    }
    if (nav === "prev") {
      setPokeData([])
      setUrl(prevUrl)
    }
  }

  useEffect(() => {
    pokeFun();
  },
    // eslint-disable-next-line
    [url])

  return (
    <div className="container bg-dark">
      <h1 className='text-center text-light'>Pokemon</h1>
      <Card pokemon={pokeData} loading={loading} />
      <Pagination PaginationHandle={PaginationHandle} nextUrl={nextUrl} prevUrl={prevUrl} />
    </div>
  )
}
export default App;
