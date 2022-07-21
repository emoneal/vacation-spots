import React from "react"

export default function Header() {
    return (
        <>
            <div className="header--container">
                <img 
                    src="https://tabizine.jp/wp-content/uploads/2022/04/461470-06.jpg"
                    alt= "headerimg"
                    className="header--image"
                />
                <div className="header--titletext">
                    <h1>Vacation Spots</h1>
                </div>
            </div>
        </>
    )
}