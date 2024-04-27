import React from 'react'
import '../css/Home.css'
import { IoIosSearch } from "react-icons/io";
import Sidebar from '../components/Sidebar'
import { CiBellOn } from "react-icons/ci";
import Badge from '@mui/material/Badge';
import DP from '../assets/images/DP.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import dropdown from "../assets/images/expand_circle_down.png"
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import paralogo from "../assets/images/Para.png"
import image1 from "../assets/images/image1.png"
import image2 from "../assets/images/image2.png"
import Point from "../assets/images/Point.png"

function Home() {
    return (
        <>
            <div style={{margin:"-15px",padding:"0px"}} className='container'>
                <div style={{margin:"0px",padding:"0px"}} className='sidebar'>

                    <Sidebar />

                </div>
                <div className='main'>
                    <div className='main-first'>
                        <div className='main-first-header'>
                            <div className="header-row">

                                <div className='header-row-c1'>
                                    <IoIosSearch size={40} color='#9C9C9B'/>
                                    <input
                                        width="191px"
                                        type="text"
                                        className="search-input"
                                        placeholder="Search by company name..."
                                    />
                                </div>
                                <div className='header-row-c2'>

                                </div>
                                <div className='right'>
                                    <Badge style={{borderRadius:"50%",backgroundColor:"#E8F0EB",padding:"10PX"}} badgeContent={4} color="success">
                                        <NotificationsIcon color="action" />
                                    </Badge>

                                    <img src={DP} />
                                   <div style={{display:"flex",alignItems:"flex-start",flexDirection:"column",gap:'0px'}}> 
                                    <p style={{margin:'0px',padding:'0px',fontWeight:"600"}}>Shailesh Vickram</p>
                                    <p style={{margin:'0px',padding:'0px'}}>Investor</p>
                                   </div>
                                    <img src={dropdown} />

                                </div>
                            </div>




                        </div>
                        <h1 style={{ textAlign: "left", marginLeft: "32px" }}>My portfolio</h1>
                        <div className='tags' style={{ display: "flex", marginLeft: "40px" }}>
                            <p>Dashboard</p>
                            <div style={{padding:'0px',margin:'0px'}}>
                            <p>MIS & Updates</p>
                            <div style={{width:'121px',height:'2px',backgroundColor:'#186E47'}}></div>
                            </div>
                            
                            <p>Insights</p>
                        </div>

                    </div>
                    <div style={{ display: "flex" }} className='main-second'>
                        <div>
                            <div style={{ display: "flex", gap: "8px", marginLeft: "36px", marginTop: "32px", width: "744px" }} className='main-second-left'>
                                <div style={{ width: "40%" }} className='header-row-c1'>
                                <IoIosSearch size={40} color='#9C9C9B' />
                                    <input
                                        width="191px"
                                        type="text"
                                        className="search-input"
                                        placeholder="Search by company name..."
                                    />
                                </div>

                                <div style={{ display: "flex", alignItems: "center", width: "91px", borderRadius: "8px" }} className='header-row-c1'>
                                    <FilterListIcon color='#9C9C9B' />
                                    <p>Filter</p>
                                </div>
                            </div>

                            <h1 style={{ textAlign: "left", marginLeft: "32px" }}>Activity Feed</h1>
                            <div className='contentdiv'>
                                <div className='upper'>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className='investorupdate'>
                                            Investor update
                                        </div>
                                        <MoreVertOutlinedIcon />
                                    </div>
                                    <div className='activityfeedheader'>
                                        <div className='logoimage'>
                                            <img src={paralogo} />
                                        </div>
                                        <div style={{ marginTop: "-10px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                            <h3>Ace Green Recycling</h3>
                                            <p style={{ color: "#484644", fontFamily: "Montserrat" }}>Battery Recycling | Bengaluru</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='line'>

                                </div>
                                <div className='lower'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. Lacus tincidunt dignissim risus quam diam vivamus proin volutpat.
                                        Massa ut et sed mattis tristique.
                                        Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.</p>
                                    <img src={image1} />
                                </div>
                                <div className='date'>
                                    <p>15-03-2024</p>
                                </div>
                            </div>

                            <div className='contentdiv'>
                                <div className='upper'>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div className='investorupdate'>
                                            Feature Launch
                                        </div>
                                        <MoreVertOutlinedIcon />
                                    </div>
                                    <div className='activityfeedheader'>
                                        <div className='logoimage'>
                                            <img src={paralogo} />
                                        </div>
                                        <div style={{ marginTop: "-10px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                            <h3>Ace Green Recycling</h3>
                                            <p style={{ color: "#484644", fontFamily: "Montserrat" }}>Battery Recycling | Bengaluru</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='line'>

                                </div>
                                <div className='lower'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. Lacus tincidunt dignissim risus quam diam vivamus proin volutpat.
                                        Massa ut et sed mattis tristique.
                                        Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.</p>
                                    <div className='readmore'><p>READ MORE</p></div>
                                </div>
                                <div className='date'>
                                    <p>15-03-2024</p>
                                </div>
                            </div>


                            <div className='contentdiv'>
                                <div className='upper'>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <div style={{ width: "180px" }} className='investorupdate'>
                                            Fund Investment Update
                                        </div>
                                        <div style={{ width: "100px", marginLeft: "-300px" }} className='investorupdate'>
                                            <img style={{ margin: "0px", padding: "0px", marginRight: "10px" }} src={Point} />
                                            Live deal
                                        </div>
                                        <MoreVertOutlinedIcon />
                                    </div>
                                    <div className='activityfeedheader'>

                                        <img src={paralogo} />

                                        <div style={{ marginTop: "-10px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                            <h3>Ace Green Recycling</h3>
                                            <p style={{ color: "#484644", fontFamily: "Montserrat" }}>Battery Recycling | Bengaluru</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='line'>

                                </div>
                                <div className='lower'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Nulla urna quis ipsum lectus adipiscing. Egestas et mi tortor pretium convallis. Vel eu tincidunt commodo quisque nunc sit ac vulputate orci. Tincidunt vel vel ultricies enim integer ac blandit. Vestibulum maecenas cursus feugiat vestibulum congue. Turpis sit enim tincidunt blandit. Pellentesque porttitor scelerisque ut risus facilisis dignissim in amet hendrerit. Porttitor risus netus et in. Lacus tincidunt dignissim risus quam diam vivamus proin volutpat.
                                        Massa ut et sed mattis tristique.
                                        Pulvinar vehicula tellus ut egestas leo sed. Malesuada auctor vestibulum luctus maecenas maecenas aliquam tellus viverra.</p>
                                    <img src={image2} />
                                    <div className='deal'>VIEW DEAL</div>
                                </div>
                                <div className='date'>
                                    <p>15-03-2024</p>
                                </div>

                            </div>

                        </div>
                        <div className='main-second-right'>
                            <div className='box'>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Home
