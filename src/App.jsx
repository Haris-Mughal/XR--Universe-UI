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
                                rocky planets, it is the largest...
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
                                The Sun orbits the Galactic Center at a distance
                                of 24,000 - 28,000 light-years. Its diameter is
                                about 109 times that of Earth...
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
                                The surface of Mars is orange-red because it is
                                covered in iron(III) oxide dust, giving it the
                                nickname &quot;the Red Planet&quot;. Mars is
                                among the brightest objects in Earth&apos;s
                                sky...
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
                    {/* <div className="info-box">
                        <div className="planet"></div>
                        <div className="left-text">
                            <h3>Moon</h3>
                            <p>
                                The Moon is Earth&apos;s one and only natural
                                satellite.
                            </p>
                            <p>Distance: 384,400 km</p>
                            <a href="#" style="color: #00b4ff;">
                                View more...
                            </a>
                        </div>
                        <div className="right-text">
                            <h3>International Space Station</h3>
                            <p>
                                The I.S.S. is a large space station assembled
                                and maintained in low Earth orbit.
                            </p>
                            <a href="#" style="color: #00b4ff;">
                                View more...
                            </a>
                        </div>
                        <div className="bottom-text">
                            <h3>Earth: Pale Blue Dot</h3>
                            <p>Distance from Sun: 149.5 million km</p>
                            <p>Temperature Range: -89.2°C to 56.7°C</p>
                            <p>Earth&apos;s Mass: 5.972 × 10²⁴ kg</p>
                            <a href="#" className="btn">
                                3D View
                            </a>
                        </div>
                    </div> */}
                </div>
                <div id="block-last">
                    <div id="top-sec">
                        <div id="water-sec">
                            <div id="water-per">Water Percentage</div>
                            <div id="circle-div">71%</div>
                        </div>
                        <div id="rectangular-div">
                            <h2>8.7 Million Estimated Species</h2>
                            <div id="chart">[Chart Content]</div>
                        </div>
                    </div>
                    <hr />
                    <div id="mid-sec">
                        <h3>Avg. Radiation</h3>
                        <p className="p-14">2.4 mSv per year</p>
                    </div>
                    <hr />
                    <div id="sound-sec">
                        <div>
                            <img src="/public/Sound Icon.png" alt="sound" />
                        </div>
                        <div className="text-red-500">
                            <div>Sound in Earth</div>
                            <div className="playing">
                                <div className="greenline line-1"></div>
                                <div className="greenline line-2"></div>
                                <div className="greenline line-3"></div>
                                <div className="greenline line-4"></div>
                                <div className="greenline line-5"></div>
                                <div className="greenline line-1"></div>
                                <div className="greenline line-2"></div>
                                <div className="greenline line-3"></div>
                                <div className="greenline line-4"></div>
                                <div className="greenline line-5"></div>
                                <div className="greenline line-1"></div>
                                <div className="greenline line-2"></div>
                                <div className="greenline line-3"></div>
                                <div className="greenline line-4"></div>
                                <div className="greenline line-5"></div>
                            </div>
                        </div>
                        <div>
                            <img src="/public/Play Icon.png" alt="sound" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
