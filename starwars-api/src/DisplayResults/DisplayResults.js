import React from 'react';

export default class DisplayResults extends React.Component{


    
    resultsList=()=>{
        return this.props.results.map((item, key) => (
            <li key={key}>
                <h3>{item.name}</h3>
                <p>Gender: {item.gender}</p>
                <p>Birth Year: {item.birth_year}</p>
            </li>
        ));
    }

    render(){

        return(
            <div>
                <ul>
                    {this.resultsList()}
                </ul>
            </div>
        )
    }
}