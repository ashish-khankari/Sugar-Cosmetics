import React, { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import './Like.css'

function Like() {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleClick = () => {
        setIsFavorited(!isFavorited);
    };
    return (
        <div
            onClick={handleClick}
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            {isFavorited ? (
                //    localStorage.setItem("icons",JSON.stringify(<BsFillBookmarkFill className="closeicon" />)) 
                <BsFillBookmarkFill className="closeicon" />
            ) : (
                <BiBookmark className="icon" />
            )}
        </div>
    );
}
export default Like;