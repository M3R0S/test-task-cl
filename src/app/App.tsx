import { BrowserRouter } from "react-router-dom";

import cl from "./App.module.scss";
import { AppRouter } from "./providers/Router";
import { StoreProvider } from "./providers/Redux";

export const App = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <div className={cl.app}>
                    <AppRouter />
                </div>
            </BrowserRouter>
        </StoreProvider>
    );
};

