import React from 'react';
import { PokemonDisplayComponent } from './pokemon-display-component/PokemonDisplayComponent';
import { getMultiplePokemon, getPokemonByUrl } from '../../remote/poke-api-clients/get-pokemon';
import { CardDeck, CardColumns } from 'reactstrap';
import { Redirect } from 'react-router';

interface IPokemonState {
    allPokemon: any[],
    activeIndex: number
}

export class PokemonComponent extends React.Component<any, IPokemonState> {
    constructor(props: any) {
        super(props)
        this.state = {
            allPokemon: [],
            activeIndex: 0
        }
    }


    async componentDidMount() {

        let pokeLinks: any = await getMultiplePokemon(18, 0)

        console.log(pokeLinks);
        let pokemon = await Promise.all(pokeLinks.results.map((objects: any) => {
            return getPokemonByUrl(objects.url)
        }))
        console.log(pokemon);

        this.setState({
            ...this.state,
            allPokemon: pokemon
        })
    }

    next = () => {
        this.setState({
            ...this.state,
            activeIndex: (this.state.activeIndex + 1) % this.state.allPokemon.length
        })
    }

    previous = () => {
        let index = this.state.activeIndex === 0 ? this.state.allPokemon.length - 1 : this.state.activeIndex - 1
        this.setState({
            ...this.state,
            activeIndex: index
        })
    }


    render() {

        const displayList: PokemonDisplayComponent[] = this.state.allPokemon.map<any>((pokemon: any) => {
            return <PokemonDisplayComponent id={pokemon.id}
                name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.weight}
                types={[pokemon.types[0].type.name, pokemon.types[1] && pokemon.types[1].type.name]}
            />
        })

        if(this.props.user){
            return (
                <>
                    <h3>Welcome Trainer {this.props.user && this.props.user.name}</h3>
                    <CardColumns>
                        {displayList}
                    </CardColumns>
                </>
    
            )
        }else {
            return (
                <Redirect to='/state/login'/>
            )
        }

        
    }

}