import React from "react";

const RenderDeepChild: React.FC<{ depth: number; children: React.ReactNode }> = ({ depth, children }) => {
    const renderWrapper = Math.random() > 0.5;

    function content() {
        if (depth > 0) {
            return <RenderDeepChild depth={depth - 1}>{children}</RenderDeepChild>;
        }
        return <div className="RenderedDeepChild">{children}</div>;
    }

    if (renderWrapper) {
        return <div className="RenderedDeepChild">{content()}</div>;
    }
    return content();
};

export default RenderDeepChild;
