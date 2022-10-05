import React from "react";

export type ApplicationContext = {
    isLoading: boolean;
    showLoading(): void;
    hideLoading(): void;
};

export const initialAppContext: ApplicationContext = {
    isLoading: false,
    showLoading() {},
    hideLoading() {},
};

export const AppContext = React.createContext<ApplicationContext>(initialAppContext);