import React from "react";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import UseClock from "./hooks/useClock";

const App = () => {
    const { clock: local } = UseClock("IST");
    const { clock: est } = UseClock("EST");
    const { clock: pst } = UseClock("PST");
    const { clock: pakistan } = UseClock("pakistan", -5 * 60);

    console.log("local date", local.date);
    console.log("EST", est.date);
    console.log("PST", pst.date);
    console.log("Pakistan", pakistan.date);
    return (
        <div>
            <LocalClock />
            <ClockList />
        </div>
    );
};

export default App;
