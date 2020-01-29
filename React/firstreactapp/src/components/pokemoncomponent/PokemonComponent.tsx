import React from 'react';

interface IPokemonState{
    allPokemon:Object[]
}

export class PokemonComponent extends React.Component<any ,IPokemonState>{
    constructor(props:any){
        super(props);
        this.state = {
            allPokemon:[]
        }
    }

    render(){
        let displayList = this.state.allPokemon.map((pokemon:any)  => {
            
        })
        return(
            <div>
                <p>//todo</p>
            </div>
        )
    }
}
