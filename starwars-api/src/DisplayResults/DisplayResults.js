import React from 'react';

export default class DisplayResults extends React.Component{


    
    resultsList=()=>{
        return this.props.results.map((item, key) => (
            <li key={key}>
                <h3>{item.name || item.title}</h3>
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