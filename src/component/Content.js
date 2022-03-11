import React from 'react';
import { useState } from "react";
import Sidebar from './Sidebar';
import Tasks from './Tasks';

const Content = () => {
    const [selectedTab, setselectedTab] = useState("INBOX")
    return (
        <section class="content">

            <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
            <Tasks selectedTab={selectedTab} />
        </section>
    )
}
export default Content;