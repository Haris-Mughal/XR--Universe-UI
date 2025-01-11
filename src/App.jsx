import { useState } from "react";
import "./App.css";
import PlanetsFirst from "./components/planets/PlanetFirst";
import PlanetsMid from "./components/planets/PlanetMid";
import PlanetsLast from "./components/planets/PlanetLast";
import FeedFirst from "./components/feed/FeedFirst";
import FeedMid from "./components/feed/FeedMid";
import FeedLast from "./components/feed/FeedLast";

function App() {
    const [activeComponent, setActiveComponent] = useState("Planets");

    const blocks = () => {
        if (activeComponent === "Planets") {
            return (
                <>
                    <div className="block-first">
                        <PlanetsFirst />
                    </div>
                    <div className="block-mid">
                        <PlanetsMid />
                    </div>
                    <div className="block-last">
                        <PlanetsLast />
                    </div>
                </>
            );
        } else if (activeComponent === "Feed") {
            return (
                <>
                    <div className="feed-block-first">
                        <FeedFirst />
                    </div>
                    <div className="feed-block-mid">
                        <FeedMid />
                    </div>
                    <div className="feed-block-last">
                        <FeedLast />
                    </div>
                </>
            );
        }
    };

    return (
        <div id="container">
            <div id="top">
                <img
                    id="solar"
                    src="/Solar System.png"
                    alt="Solar System"
                />
            </div>
            <div id="cards">
                <div id="menu">
                    <img
                        id="icons"
                        src="/Notification Icon.png"
                        alt="Notification"
                    />
                    <img
                        id="icons"
                        src="/Planet Icon.png"
                        alt="Planets"
                        onClick={() => setActiveComponent("Planets")}
                    />
                    <img id="icons" src="/Star Icon.png" alt="Star" />
                    <img
                        id="icons"
                        src="/Friends Icon.png"
                        alt="Feed"
                        onClick={() => setActiveComponent("Feed")}
                    />
                    <img id="icons" src="/AI Icon.png" alt="AI" />
                    <img
                        id="icons"
                        src="/Headset Icon.png"
                        alt="Headset"
                    />
                    <img
                        id="icons"
                        src="/Settings Icon.png"
                        alt="Settings"
                    />
                </div>
                {blocks()}
            </div>
        </div>
    );
}

export default App;
