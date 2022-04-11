
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FilmButton(props){
    return (
        <a href="https://filmfreeway.com/festivals/66443?utm_campaign=The+Northern+Pocket+Film+Festival&utm_medium=External&utm_source=Submission+Button" target="_blank" title="Click to submit on FilmFreeway">
            <img className="filmButton" src="https://storage.googleapis.com/filmfreeway-assets/submission_buttons/v2/sm_submission_btn@2x-sky-gradient.png" title="Click to submit on FilmFreeway"/>
        </a>
    );
}

function Body(props){
    return (
        <div className="txarea">
            <h3>A Minnesota Film Festival</h3>
            <p>
                The Northern Pocket is a Film Festival, hosted at the University of Minnesota, Twin Cities. <br/><br/>
                The event will be held in the Toaster in the basement of Walter Library at UMN on May 12th.
                Submissions will be open until May 1st, and accepted by May 7th.
                If you're interested in submitting your film, please use the button below!
            </p>
            <FilmButton/>
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