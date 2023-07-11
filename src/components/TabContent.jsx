import React from 'react'

const TabContent = (props) => {

    const {tab} = props

    const tabContent = [
        'Tab 1 - Content',
        'Tab 2 - Content',
        'Tab 3 - Content'
    ]

    const contentStyle = {
        border: "solid black 1px",
        width: "600px",
        height: "300px",
        marginLeft: "10px"
    }

    return (
        <div style={contentStyle}>
            {tabContent[tab]}
        </div>
    )
}

export default TabContent