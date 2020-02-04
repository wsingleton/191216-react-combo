import React from 'react';
import { getMultiplePokemon, getPokemonByUrl } from '../../remote/poke-api-clients/get-pokemon';
import { PokemonDisplayComponent } from './pokemon-display-component/PokemonDisplayComponent';
import { CardColumns, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Redirect } from 'react-router';

interface IPokemonState {
    limit:number,
    offset:number
}

interface IPokemonProps {
    user:any,
    allPokemon: any[],
    getAllPokemon:(i:number, o:number) => void
}

export class PokemonComponent extends React.Component<any, IPokemonState> {
    constructor(props: any) {
        super(props)
        this.state = {
            limit:18,
            offset:0
        }
    }


    async componentDidMount() {
        if(this.props.user) {
            if(this.props.allPokemon.length == 0) {
            this.props.getAllPokemon(this.state.limit, this.state.offset)
            }
        }
    }

    pageTurnForward = () => {this
        let newOffset = this.state.offset + this.state.limit
    }

    pageTurnBackward = () => {

    }



    render() {
        
        const displayList: PokemonDisplayComponent[] = this.state.props.map<any>((pokemon: any) => {
            return <PokemonDisplayComponent id={pokemon.id}
                name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.weight}
                types={[pokemon.types[0].type.name, pokemon.types[1] && pokemon.types[1].type.name]}
                key={pokemon.id}
            />
        })

        if (this.props.user) {

            return (
                <>
                    <h3> Welcome Trainer</h3>
                    <CardColumns>
                        {displayList}
                    </CardColumns>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled={!this.state.offset}>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                    </Pagination>
                </>
            )
        } else {
            return (
                <Redirect to='/login' />
            )
        }
    }

}