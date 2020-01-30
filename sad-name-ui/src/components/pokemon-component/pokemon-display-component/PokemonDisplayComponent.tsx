import React from 'react';
import { CarouselItem, CarouselCaption } from 'reactstrap';


interface IPokemonDisplayProps {
    id:number
    height: number
    weight: number
    name: string
    types: string[]
}

export class PokemonDisplayComponent extends React.PureComponent<IPokemonDisplayProps> {


    render(){
        return(
            <CarouselItem>
            <CarouselCaption captionText={`id:${this.props.id} name:${this.props.name}`} 
            captionHeader={`height:${this.props.height} weight:${this.props.weight} ` +
this.props.types[1] ? `type1: ${this.props.types[0]} type2: ${this.props.types[1]}` 
: `type1: ${this.props.types[0]}` }
            ></CarouselCaption>
        </CarouselItem>
            
        )
    }
}




