import React, { useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import './Like.css'

function Like(props) {
    const [color, setColor] = useState(<BiBookmark />);
    const [isFavorited, setIsFavorited] = useState(false);

    const handleClick = () => {
        setColor(<BsFillBookmarkFill style={{ color: "red" }} />);
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
                <BsFillBookmarkFill className="closeicon" />
            ) : (
                <BiBookmark className="icon" />
            )}
        </div>
    );
}

export default Like;