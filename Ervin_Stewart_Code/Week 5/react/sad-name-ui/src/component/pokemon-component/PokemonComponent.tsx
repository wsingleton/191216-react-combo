import React from 'react';
import { PokemonDisplayComponent } from './pokemon-display-component/PokemonDisplayComponent';
import { UncontrolledCarousel } from 'reactstrap';

interface IPokemonState{
    allPokemon:object[]
}

export class PokemonComponent extends React.Component<any, IPokemonState>{

    constructor(props:any){
        super(props)
        this.state = {allPokemon:[]
        activeIndex
        }
    }


    async componentDidMount(){
        let pokeList = await getMultiplePokemon(6,0)
        let pokemon = await Promise
    }

render() {
    let displayList = this.state.allPokemon.map((Pokemon)=>{<PokemonDisplayComponent id={pokemon.id} 
    name={pokemon.name}
    height={pokemon.height}    
    weight={pokemon.weights}
    types={pokemon.types}
    
    >})

    return(
        <div>
<C
            <UncontrolledCarousel items={displayList}/>

        </div>
    )
}







}