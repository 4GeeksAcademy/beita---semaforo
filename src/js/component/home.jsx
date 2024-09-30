import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
const Home = () => {
    const [color, setColor] = useState("red");
    const [hasPurple, setHasPurple] = useState(false); // Estado para manejar si hay un color púrpura

    const colors = ["red", "yellow", "green"];

    const toggleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length; // Cicla entre los colores
        setColor(colors[nextIndex]);
    };

    const addPurple = () => {
        setHasPurple(true); 
        setColor("purple"); 
    };

    return (
        <div className="traffic-container">
            <div className="traffic-light">
                <div 
                    className={`light red ${color === "red" ? "selected" : ""}`} 
                    onClick={() => setColor("red")}
                ></div>
                <div 
                    className={`light yellow ${color === "yellow" ? "selected" : ""}`} 
                    onClick={() => setColor("yellow")}
                ></div>
                <div 
                    className={`light green ${color === "green" ? "selected" : ""}`} 
                    onClick={() => setColor("green")}
                ></div>

                {hasPurple && (
                    <div 
                        className={`light purple ${color === "purple" ? "selected" : ""}`} 
                        onClick={() => setColor("purple")}
                    ></div>
                )}
            </div>

            <div className="button-container">
                <button onClick={toggleColor}>Toggle Color</button>
                <button onClick={addPurple}>Add Purple</button>
            </div>
        </div>
    );
};

export default Home;
