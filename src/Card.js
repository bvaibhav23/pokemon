import React, { useState } from "react";
import PokemonDetails from "./PokemonDetails";

const Card = ({ pokemon, loading }) => {
    const [showDetail, setDetail] = useState(false);
    const [pokeDex, setPokeDex] = useState();
    const [detailLoading, setDetailLoading] = useState(true);



    const PokemonDetail = (url) => {
        setDetailLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setPokeDex(res)
                // console.log(res)
            })
        setDetail(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setDetailLoading(false)
    }
    const BackHandle = () => {
        setDetail(false);
    }


    // console.log(pokemon);
    return (
        <div className="position-relative">
            {loading ? <h1 className={`text-center text-light`}>Loading...</h1> : <div className={`d-flex flex-wrap justify-content-evenly ${showDetail ? "opacity-25" : ""}`} >
                {pokemon.map((item) => {
                    return (
                        <div className="card m-2 p-2 align-items-center" key={item.url.substring(34, item.url.length - 1)} style={{ width: '18rem' }}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.url.substring(34, item.url.length - 1)}.svg`} className="card-img-top" alt={`of${item.name}`} width='100px' height='100px' />
                            <div className="card-body">
                                <h5 className="card-title">{`${item.url.substring(34, item.url.length - 1)}) ${item.name.toUpperCase()}`}</h5>
                                <p className="card-text"></p>
                                <button className="btn btn-primary" onClick={() => { PokemonDetail(item.url) }}>See Details</button>
                            </div>
                        </div>
                    )
                })
                } </div>
            }
            {showDetail && <PokemonDetails data={pokeDex} BackHandle={BackHandle} detailLoading={detailLoading} />}

        </div>
    )
}
export default Card;