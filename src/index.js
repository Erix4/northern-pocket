
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Body(props){
    return (
        <div className="txarea">
            <h3>A Minnesota Film Festival</h3>
            <p>
                Thanks for your interest in the Northern Pocket Film Festival, hosted at the University of Minnesota, Twin Cities. <br/><br/>
                This website is currently under construction. Please come back soon for more information or to submit your film!
            </p>
        </div>
    )
}

function HeadB(props){
    return (
        <div className="headB">
            <h2>{props.tx}</h2>
        </div>
    );
}

class App extends React.Component{
    constructor(props){
        super(props);
    }
    //
    render(){
        return (
            <div className="App">
                <div id="header">
                    <h1>The Northern Pocket</h1>
                    {/*<HeadB tx="About"/>
                    <HeadB tx="Submit"></HeadB>
                    <HeadB tx="Meet us!"></HeadB>*/}
                </div>
                <div id="lowerRegion">
                    <Body/>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);