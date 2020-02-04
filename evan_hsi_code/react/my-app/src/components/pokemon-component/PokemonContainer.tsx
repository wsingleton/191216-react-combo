import {connect} from "react-redux";
import {PokemonComponent} from "./PokemonComponent";
import {IState } from "../../reducers";
import {getAllPokemon} from '../../action-mappers/pokemon-actions'

const mapStateToProps = (state:IState) => {
    return {
        user:state.userState.currentUser,
        allPokemon:state.pokemonState.allPokemon
    }
}

const mapDispatchToProps = {
    getAllPokemon

}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonComponent)