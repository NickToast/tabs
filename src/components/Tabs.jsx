import React, {useState} from "react";

const Tabs = (props) => {

    const {name, index, selectedTab, active} = props

    const tabStyle = {
        border: "solid black 1px",
        width: "100px",
        height: "40px",
        margin: "10px",
    }

    const activeStyle = {
        backgroundColor: "black",
        color: "white",
        width: "100px",
        height: "40px",
        margin: "10px"
    }

    const handleChange = (e) => {
        e.preventDefault();
        selectedTab(index);
    }

    return (
        <>
            <button style={active == index? activeStyle:tabStyle} onClick={handleChange}>{name}</button>
        </>
    )
}

export default Tabs