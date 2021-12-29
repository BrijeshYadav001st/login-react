import React from "react";
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="body">
        <div className="wrapper">
            <div className="grid-header">
                Hii Everyone ...👋
            </div>
            <div className="first">
                <div className="logo-image">LOGO</div>
                <ul className="navigation">
                    <li className="home">
                        <a href="!#">Home</a>
                    </li>
                    <li className="booking">
                        <a href="!#">Booking</a>
                    </li>
                    <li className="profile">
                        <a href="!#">Profile</a>
                    </li>
                    <li className="setting">
                        <a href="!#">Settings</a>
                    </li>
                    <li className="About Us">
                        <a href="!#">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="second">
                <div className="second-header">
                    <span className="current-booking">Current Bookings</span>
                    <span className="class-num"> Class 
                        <select className="class-types">
                            <option >1st</option>
                            <option >2nd</option>
                            <option >3rd</option>
                        </select>
                    </span>
                </div>
                <ul className="second-list-body">
                    <li className="list-header">
                        <div>Name</div>
                        <div>Date Of Submission</div>
                        <div> Status</div>
                    </li>
                    <li className="list-one">
                        <div>Person 1</div>
                        <div>Dec 27 , 2021</div>
                        <div> 
                            <button className="active">Active</button>
                            </div>
                    </li>
                    <li className="list-two">
                        <div>Person 2</div>
                        <div>Dec 28,2021</div>
                        <div> 
                        <button className="active">Active</button>
                        </div>
                    </li>
                    <li className="list-three">
                        <div>Person 3</div>
                        <div>Dec 29,2021</div>
                        <div>
                            <button className="opended">Opended</button></div>
                    </li>
                    <li className="list-four">
                        <div>Person 4</div>
                        <div>Dec 30,2021</div>
                        <div>
                            <button className="completed">Completed</button></div>
                    </li>
                </ul>
            </div>
            <div className="third">
                <ul className="information" >
                    <li className="profile-info">
                        <div className="profile-pic"> DP
                            {/* <input type="file"></input>    */}
                        </div>
                        <div className="profile-bio">
                            <div className="profile-name">
                                _Name.
                            </div>
                            <div className="profile-profession">
                                Profession
                            </div>
                        </div> 
                    </li>
                    <li className="calender">
                            <input type="date"></input> 
                    </li>
                </ul>
            </div>
            <div className="fourth">
                <textarea placeholder=" Rules..."></textarea>
            </div>
        </div>    
    </div>

  );
}
export default Dashboard;