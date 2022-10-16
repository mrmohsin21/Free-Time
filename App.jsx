import React from "react";

// import Heading from "./Heading";
// import List from "./List";
// import Para from "./Para";


function App() {
    let curDate = new Date(2022, 10, 12, 12);
    curDate = curDate.getHours();
    let greeting = '';
    const cssStyle = {};
    if (curDate >= 1 && curDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = "green";
    } else if (curDate >= 12 && curDate < 20) {
        greeting = 'Good Afternoon';
        cssStyle.color = "orange";
    } else {
        greeting = 'Good Night';
        cssStyle.color = "blue";
    }
    return (
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>,
            </div>
        </>
    )

}
export default App;
