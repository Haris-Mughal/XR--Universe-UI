import "./App.css";

function App() {
    return (
        <div id="container">
            <div id="top">
                <img id="solar" src="/public/Solar System.png" />
            </div>
            <div id="cards">
                <div id="menu">
                    <img id="icons" src="/public/Notification Icon.png" />
                    <img id="icons" src="/public/Planet Icon.png" />
                    <img id="icons" src="/public/Star Icon.png" />
                    <img id="icons" src="/public/Friends Icon.png" />
                    <img id="icons" src="/public/AI Icon.png" />
                    <img id="icons" src="/public/Headset Icon.png" />
                    <img id="icons" src="/public/Settings Icon.png" />
                </div>
                <div id="block-first">
                    <div id="card1">
                        <div id="content-one">
                            <div
                                id="title-one"
                                // className="text-blue-500 text-[24px] bg-black"
                            >
                                Earth
                            </div>
                            <div id="desc-one">
                                Earth is rounded into an ellipsoid with a
                                circumference of about 40,000 km. It is the
                                densest planet in the Solar System. Of the four
                                rocky planets, it is the largest and most
                                massive...
                            </div>
                            <div id="button-one">Explore</div>
                        </div>
                        <div>
                            <img
                                id="planet_small-one"
                                src="/public/Planet-Earth.png"
                            />
                        </div>
                    </div>
                    <div id="card2">
                        <div id="content-two">
                            <div
                                id="title-two"
                                // className="text-blue-500 text-[24px] bg-black"
                            >
                                Sun
                            </div>
                            <div id="desc-two">
                                Earth is rounded into an ellipsoid with a
                                circumference of about 40,000 km. It is the
                                densest planet in the Solar System. Of the four
                                rocky planets, it is the largest and most
                                massive...
                            </div>
                            <div id="button-two">Explore</div>
                        </div>
                        <div>
                            <img id="planet_small-two" src="/public/Sun.png" />
                        </div>
                    </div>
                    <div id="card3">
                        <div id="content-three">
                            <div
                                id="title-three"
                                // className="text-blue-500 text-[24px] bg-black"
                            >
                                Mars
                            </div>
                            <div id="desc-three">
                                Earth is rounded into an ellipsoid with a
                                circumference of about 40,000 km. It is the
                                densest planet in the Solar System. Of the four
                                rocky planets, it is the largest and most
                                massive...
                            </div>
                            <div id="button-three">Explore</div>
                        </div>
                        <div>
                            <img
                                id="planet_small-three"
                                src="/public/Mars.png"
                            />
                        </div>
                    </div>
                    {/* <div id="card2">hi</div>
                <div id="card3">hi</div> */}
                </div>
                <div id="block-mid">
                    <img id="earth" src="/public/Planet-Earth.png" />
                    {/* <div id="box1">hi</div>
            <div id="box2">hi</div>
            <div id="box3">hi</div>
            <div id="box4">hi</div> */}
                </div>
                <div id="block-last">
                    <div id="top-sec">
                        <div id="circle-div">71%</div>
                        <div id="rectangular-div">
                            <h2>8.7 Million Estimated Species</h2>
                            <div id="chart">[Chart Content]</div>
                        </div>
                    </div>
                    <hr />
                    <div id="mid-sec">
                        <h3>Avg. Radiation</h3>
                        <p>2.4 mSv per year</p>
                    </div>
                    <hr />
                    <div id="bottom-sec">
                        <div id="bottom-div">Earths Sounds: Waves</div>
                        <div id="bottom-div">Earths Sounds: Nature</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
