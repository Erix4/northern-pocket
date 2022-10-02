
import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import './index.css';

import EventbriteImg from "./assets/eventbriteLogo4.png";

//initialize analytics
import ReactGA from 'react-ga';//migrate this to ga4 with corresponding npm package later
const TRACKING_ID = "UA-59709427-2"; //tracking id
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function submitClicked(){
    ReactGA.event({
        category: 'User',
        action: 'Clicked Submit Button',
    });  
}

function eventClicked(){
    ReactGA.event({
        category: 'User',
        action: 'Clicked Eventbrite Button',
    });  
}

function FilmButton(props){
    return (
        <a className="filmButton" onClick={submitClicked} href="https://filmfreeway.com/festivals/66443?utm_campaign=The+Northern+Pocket+Film+Festival&utm_medium=External&utm_source=Submission+Button" target="_blank" rel="noopener noreferrer" title="Click to submit on FilmFreeway">
            <img className="buttonImage" src="https://storage.googleapis.com/filmfreeway-assets/submission_buttons/v2/sm_submission_btn@2x-sky-gradient.png" title="Click to submit on FilmFreeway"/>
        </a>
    );
}

function EventBriteButton(props){
    return (
        <a id="eventLink" className="filmButton" onClick={eventClicked} href="https://www.eventbrite.com/e/northern-pocket-film-festival-registration-322802469877" target="_blank" rel="noopener noreferrer" title="Click to RSVP on EventBrite">
            <img className='buttonImage' src={EventbriteImg} title="Click to RSVP on EventBrite"/>
        </a>
    );
}

function Body(props){
    return (
        <div className="txarea">
            <h3>A Minnesota Film Festival</h3>
            <p>
                The Northern Pocket is a Film Festival, hosted at the University of Minnesota, Twin Cities. <br/><br/>
                The second annual Nothern Pocket will be returning Spring 2023!
                {/*The event will be held from 4-8PM in the Toaster in the basement of Walter Library at UMN on May 12th.
                Submissions are now closed. For last minute inquiries, please message <a id='emailLink' href="mailto:northernpocket@gmail.com">northernpocket@gmail.com</a>.*/}
            </p>
            <br/>
            {/*<FilmButton/>*/}
            {/*<p>
                <br/>If you're interested in attending the event, please RSVP on Eventbrite!
            </p>
            <EventBriteButton/>*/}
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