import React, { useState, useEffect } from 'react';
// import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import '../Style/SideBar.css';

import { 
    MdOutlineDashboardCustomize,
    MdNotificationsNone,
    MdOutlineSettings
} from "react-icons/md";

import { 
    RiBankLine,
    RiBankCardLine,
    RiOrganizationChart
} from "react-icons/ri";

import { 
    TbReportSearch,
    TbFileAnalytics 
} from "react-icons/tb";

import { AiOutlineTransaction } from "react-icons/ai";

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar is initially open

    // Function to toggle sidebar
    const toggle = () => setIsOpen(!isOpen);

    // Effect to listen for window width changes and close sidebar if width is less than a threshold
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) { // You can adjust the threshold as per your requirement
                setIsOpen(false);
            }
            else{
                setIsOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menuItems = [
        {
            path:"/",
            name:"UserDashBoard",
            icon:<MdOutlineDashboardCustomize />
        },
        {
            path:"/analysis",
            name:"Analysis",
            icon:<TbFileAnalytics />
        },
        {
            path:"/bankAccount",
            name:"BankAccount",
            icon:<RiBankLine />
        },
        {
            path:"/bankCard",
            name:"BankCard",
            icon:<RiBankCardLine />
        },
        {
            path:"/notifications",
            name:"Notifications",
            icon:<MdNotificationsNone />
        },
        {
            path:"/organization",
            name:"Organization",
            icon:<RiOrganizationChart />
        },
        {
            path:"/report",
            name:"Report",
            icon:<TbReportSearch />
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<MdOutlineSettings />
        },
        {
            path:"/transactions",
            name:"Transactions",
            icon:<AiOutlineTransaction />
        }
    ];

    return (
        <div className='container_'>
            <div style={{ width: isOpen ? "250px" : "50px" }} className='side-bar'>
                <div style={{ marginTop: isOpen ? "0px" : "60px" }} className='top-section'>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>Logo</h1>
                    {/* <div style={{ marginLeft: isOpen ? "40px" : "-10px" }} className='bar'>
                        <FaBars onClick={toggle} />
                    </div> */}
                </div>
                <div style={{ paddingTop: isOpen ? "0px" : "10px" }} className='body-section'>
                    {
                        menuItems.map((item, index) => (
                            <NavLink to={item.path} key={index} style={{ paddingTop: isOpen ? "12px" : "16px", paddingBottom: isOpen ? "12px" : "16px" }} className='link' activeclassName='active'>
                                <div className='link-icon'>{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className='link-text'>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main style={{marginLeft: isOpen ? "250px" : "50px"}}>{children}</main>
        </div>
    );
}

export default SideBar;