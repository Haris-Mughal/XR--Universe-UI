function FeedMid() {
    window.addEventListener("load", () => {
        const container = document.querySelector(".feed-block-mid");
        container.scrollTop = 0;
    });

    return (
        <>
            <img className="feedPerson" src="/public/Feed Person.png" />
            <img className="feeds" src="/public/Debate Post.png" />
            <img className="feeds" src="/public/Debate Post 2.png" />
            <img className="feeds" src="/public/Debate Post.png" />
        </>
    );
}

export default FeedMid;
