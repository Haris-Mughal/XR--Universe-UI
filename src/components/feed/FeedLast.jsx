function FeedLast() {
    return (
        <>
            <img
                className="top-earth-shadow"
                src="/public/Shadow Planet.png"
                alt=""
            />
            <div className="posts-block">
                <div className="bio-data">
                    <img
                        className="profile-pic"
                        src="/public/Profile.png"
                        alt=""
                    />
                    <div className="profile-name">Haris Mughal</div>
                    <div className="username">@iamharisahsan</div>
                    <div className="intro">
                        Hello world! I&apos;m Haris (2004), pakistani astronaut
                        and software engineer. Also the first man to walk on the
                        moon!
                    </div>
                    <img className="social" src="/public/Socials.png" alt="" />
                </div>
                <hr />
                <div className="feed-posts-block">
                    <div className="inline-posts">
                        <img
                            className="feed-posts"
                            src="/public/image 1.png"
                            alt=""
                        />
                        <img
                            className="feed-posts"
                            src="/public/image 2.png"
                            alt=""
                        />
                        <img
                            className="feed-posts"
                            src="/public/image 3.png"
                            alt=""
                        />
                    </div>
                    <div className="inline-posts">
                        <img
                            className="feed-posts"
                            src="/public/image 4.png"
                            alt=""
                        />
                        <img
                            className="feed-posts"
                            src="/public/image 5.png"
                            alt=""
                        />
                        <img
                            className="feed-posts"
                            src="/public/image 6.png"
                            alt=""
                        />
                    </div>
                    <div className="inline-posts">
                        <img
                            className="feed-posts"
                            src="/public/image 7.png"
                            alt=""
                        />
                        <img
                            className="feed-posts"
                            src="/public/image 8.png"
                            alt=""
                        />
                        <img
                            className="feed-posts"
                            src="/public/image 9.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeedLast;
