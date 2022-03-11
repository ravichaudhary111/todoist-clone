import React from 'react';
import { FaInbox, FaRegCalendarAlt, FaRegCalendarCheck } from 'react-icons/fa';

const Sidebar = ({ selectedTab, setselectedTab }) => {
    console.log({ selectedTab });
    return (
        <div className='sidebar'>
            <div className={selectedTab === "INBOX" ? "active" : ""}
                onClick={() => setselectedTab("INBOX")}>
                <  FaInbox className="icon" />
                Inbox
            </div>
            <div className={selectedTab === "TODAY" ? "active" : ""}
                onClick={() => setselectedTab("TODAY")} >
                <FaRegCalendarCheck className="icon" />
                Today
            </div>
            <div className={selectedTab === "NEXT_7" ? "active" : ""}
                onClick={() => setselectedTab("NEXT_7")}>
                <FaRegCalendarAlt className="icon" />
                Next 7 days
            </div>

        </div>
    )
}
export default Sidebar;