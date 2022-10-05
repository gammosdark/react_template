import React from "react";
import { useMemo, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "redux";
import { History } from "history";
import { AppContext, ApplicationContext, initialAppContext } from "./app/context";
import { routes } from "./routes";
import { State } from "./server/state";

export const Root = ({store, history}: {store: Store<State>, history: History}) => {
    const context = {...initialAppContext, showLoading: showLoading, hideLoading: hideLoading};
    const [ctx, setCtx] = useState<ApplicationContext>(context);

    const memoised = useMemo(
        () => (
            <React.Fragment>
                <Provider store={store}>
                    <BrowserRouter>
                        {routes}
                    </BrowserRouter>
                </Provider>
            </React.Fragment>
        ),
        [store, history],
    );

    return <AppContext.Provider value={ctx}>{memoised}</AppContext.Provider>

    function showLoading() {
        ctx.isLoading = true;
        setCtx({ ...ctx, isLoading: true });
    }
    function hideLoading() {
        ctx.isLoading = false;
        setCtx({ ...ctx, isLoading: false });
    }
}