import React from "react";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";

const App = () => {
    return (
        <div>
            <LocalClock />
            <ClockList />
        </div>
    );
};

export default App;
