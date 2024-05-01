import { useState } from "react";

import React from "react";

const ToggleChildDisplay: React.FC<{ children: React.ReactNode; text: string }> = ({ children, text }) => {
    const [showChild, setShowChild] = useState(false);

    return (
        <>
            <button onClick={() => setShowChild(!showChild)}>
                {showChild ? "Hide" : "Show"} {text}
            </button>
            {showChild && children}
        </>
    );
};

export default ToggleChildDisplay;
