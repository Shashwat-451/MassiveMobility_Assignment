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
// import { IoIosTrendingUp } from "react-icons/io";
// import { LiaRupeeSignSolid } from "react-icons/lia";
// import { MdOutlineGroups } from "react-icons/md";
// import { RiFundsBoxLine } from "react-icons/ri";
// import { MdInbox } from "react-icons/md";
// import { LuCalendarDays } from "react-icons/lu";
// import { LuNewspaper } from "react-icons/lu";
// import { IoHelp } from "react-icons/io5";
// import { IoIosHelpCircleOutline } from "react-icons/io";
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Logo from "../assets/images/Logo.png"
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import Component1 from "../assets/images/Component8.png"
import Component2 from "../assets/images/Component1.png"
import Component3 from "../assets/images/Component2.png"
import Component4 from "../assets/images/Component3.png"
import Component5 from "../assets/images/Component4.png"
import Component6 from "../assets/images/Component5.png"
import Component7 from "../assets/images/Component6.png"
import Component8 from "../assets/images/Component7.png"


import '../css/Home.css'
function Sidebar() {
    return (
        <>

            <div style={{margin:"0px",padding:"0px"}} className='sidebar-container'>
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
                         <div style={{justifyContent:"flex-end",alignContent:"flex-end"}}>
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
