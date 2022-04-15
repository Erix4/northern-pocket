
import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import './index.css';

//initialize analytics
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-59709427-2"; //tracking id
ReactGA.initialize(TRACKING_ID);

function submitClicked(){
    ReactGA.event({
        category: 'User',
        action: 'Clicked Submit Button',
    });  
}

function FilmButton(props){
    return (
        <a onClick={submitClicked} href="https://filmfreeway.com/festivals/66443?utm_campaign=The+Northern+Pocket+Film+Festival&utm_medium=External&utm_source=Submission+Button" target="_blank" title="Click to submit on FilmFreeway">
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <html lang="en-US"></html>
                    <meta name="author" content="Eric Patton" />
                    <title>Northern Pocket</title>
                    <meta
                        name="description"
                        content="The Northern Pocket is a film festival based at the University of Minnesota, Twin Cities.
                        You can find out more and enter your submission here!"
                    />
                    {/*<meta property="og:image" content="https://developer.mozilla.org/static/img/opengraph-logo.png"/>*/}
                    <meta property="og:description" content="The Northern Pocket is a film festival based at the University of Minnesota, Twin Cities.
                        You can find out more and enter your submission here!"/>
                    <meta property="og:title" content="The Northern Pocket Film Festival"/>
                    <meta name="twitter:title" content="The Northern Pocket Film Festival"/>
                </Helmet>
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

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("favicon").href = "/faviconW.ico";//adjust icon if browser is in dark mode
}