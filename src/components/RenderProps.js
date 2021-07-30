import React from "react";

const RenderProps = ({ children }) => {
    return <div>Result: {children(5)}</div>
}

export default RenderProps;