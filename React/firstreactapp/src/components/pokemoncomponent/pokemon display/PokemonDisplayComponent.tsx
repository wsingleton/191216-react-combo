import React from 'react';
import { CarouselItem } from 'reactstrap';

interface IPokemonDisplayProps{
    id:number,
    height:number,
    weight:number,
    name:string,
    type:string
}
export class PokemonDisplayComponent extends React.Component<any,IPokemonDisplayProps> {
    constructor(props:any) {
        super(props);

    }

    render(){
        return(
            <CarouselItem>
                <CarouselCaption captionText />
            </CarouselItem>
        )
    }
}






