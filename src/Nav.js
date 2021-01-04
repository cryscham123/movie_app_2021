import React from 'react';

function Nav() {
    return <div className="nav">
        <div className="profile">
            <span className="title">WatchMovies</span>
            <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/08/woman-portrait-smile-dimples-1296x728-body2-affiliative-1296x728.jpg?w=1155&h=1528"/>
            <p>Tom Kim</p>
        </div>
        <div className="Main">
            <span className="borderText">Main</span>
            <ul className="menu">
                <li className="discover">
                    <button onClick="" className="Btn">
                        <i className="far fa-eye"></i>
                        <span>Discover</span>
                    </button>
                </li>
                <li className="trending">
                <button onClick="" className="Btn">
                    <i className="fas fa-chart-line"></i>
                    <span>Trending</span>
                </button>
                </li>
                <li className="newRelease">
                    <button onClick="" className="Btn">
                        <i className="far fa-newspaper"></i>
                        <span>New Releases</span>
                    </button>
                </li>
                <li className="activity">
                    <button onClick="" className="Btn">
                        <i className="far fa-bell"></i>
                        <span>Activity</span>
                    </button>
                </li>
            </ul>
        </div>
        <div className="labels">
            <span className="borderText except">Labels</span>
            <div className="labels__content">
                <div className="content">
                    <div className="A circle"></div>
                    <span>See with Bobbie</span>
                </div>
                <div className="content">
                    <div className="B circle"></div>
                    <span>Just for fun</span>
                </div>
                <div className="content">
                    <div className="C circle"></div>
                    <span>Motivation</span>
                </div>
            </div>
        </div>

    </div>
}

export default Nav;