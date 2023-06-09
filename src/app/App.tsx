import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./providers/Router";
import { StoreProvider } from "./providers/Redux";

export const App = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </StoreProvider>
    );
};

