import React from "react";

const PokemonDetails = ({ data, BackHandle, detailLoading }) => {

    return (
        <div className="shadow p-1 rounded w-75  text-center bg-light  position-absolute  mt-5 top-0 start-50  translate-middle-x">
            {
                detailLoading || !data ? "Loading..." : (
                    <>
                        <h1>{data.name.toUpperCase()}</h1>
                        <img src={data.sprites.front_shiny} alt="sprites front_shiny" width="100px" height="100px" />
                        <img src={data.sprites.front_default} alt="sprites front_default" width="100px" height="100px" />
                        <img src={data.sprites.back_shiny} alt="sprites back_shiny" width="100px" height="100px" />
                        <img src={data.sprites.back_default} alt="sprites back_default" width="100px" height="100px" />
                        <p>Abilities: {data.abilities.map(poke => { return <span key={poke.ability.name} className="p-1">{poke.ability.name.toUpperCase()}</span> })}</p>
                        <p>Experience:{data.base_experience}</p>
                        <p>Height:{data.height}</p>
                        <p>Moves:{data.moves.length}</p>
                        <p>Weight:{data.weight}</p>
                        <button className="btn btn-primary" onClick={() => BackHandle()}>Back</button>
                    </>
                )
            }

        </div>
    )
}
export default PokemonDetails