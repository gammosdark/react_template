import React, { ReactNode } from "react";

export const App = ({id, className, children}: {id?: string | undefined; className?: string | undefined; children: ReactNode;}) => (
    <div id={id} className={className}>
        {children}
    </div>
);