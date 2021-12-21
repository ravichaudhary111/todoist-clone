import React, { useState } from "react";

function Fun() {
    const [tStatus, settStatus] = useState(null);
    const [tType, settType] = useState(null);
    const [tDes, settDes] = useState(null);
    const [ttTime, settTime] = useState(null);
    const [flag, setFlag] = useState(false)

    const [view, setView] = useState(null);
    function addData() {
        const oData = {
            tStatus: tStatus,
            tTYpe: tType,
            tDes: tDes,
            tTime: ttTime
        };
        setView(oData);
        setFlag(true);
        settDes(null);
        settStatus(null);
    }
    function clearData() {
        setFlag(false);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="taskstatus"
                value={tStatus}
                onChange={(e) => settStatus(e.target.value)}
            />
            <input
                type="text"
                placeholder="taskType"
                value={tType}
                onChange={(e) => settType(e.target.value)}
            />
            <input
                type="text"
                placeholder="taskdes"
                value={tDes}
                onChange={(e) => settDes(e.target.value)}
            />
            <input
                type="text"
                placeholder="tasktime"
                value={ttTime}
                onChange={(e) => settTime(e.target.value)}
            />
            <button onClick={addData}>Add item</button>
            <button onClick={clearData}>Clear Data</button>


            {flag ? <ul>
                <li>{view.tStatus}</li>
                <li>{view.tStatus}</li>
                <li>{view.tTYpe}</li>
                <li>{view.tTime}</li>
            </ul> : null
            }



        </div>
    );
}
export default Fun;
