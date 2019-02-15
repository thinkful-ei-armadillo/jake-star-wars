import React from 'react';

export default class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state ={
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return{hasError: true};
    }

    render(){
        if(this.state.hasError){
            return(
                <h2>We have encountered an error. Please try your search again.</h2>
            )
        }
        return this.props.children
    }
}