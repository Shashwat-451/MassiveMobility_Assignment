import React from 'react'
import { IoIosTrendingUp } from "react-icons/io"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from "../assets/images/Logo.png"
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';


import '../css/Home.css'
function Sidebar() {
    return (
        <>
            <div style={{marginTop:"0px",padding:"0px"}} className='sidebar-container'>
                <div className='heading'>
                    <img src={Logo} />
                </div>
                <div className='list-elements'>

                    <div style={{backgroundColor:"black"}} className='element'>
                        <div style={{padding:"2px",backgroundColor:"#E8E8E8"}}>
                            <TrendingUpIcon/>
                        </div>
                       
                        {/* <img src={Component1} /> */}
                        <p style={{color:"#E8E8E8"}}> Portfolio</p>
                    </div>
                    <div className='element'>
                      <CurrencyRupeeIcon/>
                        <p>Invest</p>
                         <div style={{justifyContent:"flex-end",marginLeft:"95px"}}>
                               <KeyboardArrowDownIcon/>
                            </div>
                        
                    </div>
                    <div className='element'>
                        {/* <img src={Component3} /> */}
                        <GroupsIcon/>
                        <p>Syndicates</p>
                    </div>
                    <div className='element'>
                        <ListAltOutlinedIcon/>
                        <p>Ledger</p>
                    </div>
                    <div className='element'>
                        <SmsOutlinedIcon />
                        <p>Messages</p>
                    </div>
                    <div className='element'>
                        <CalendarMonthOutlinedIcon/>
                        <p>Events</p>
                    </div>
                    <div className='element'>
                        <DescriptionOutlinedIcon/>
                        <p>News & Blogs</p>
                    </div>
                    <div className='element'>
                        <HelpOutlineOutlinedIcon color='white'/>
                        <p>Help & Support</p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Sidebar
