import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./providers/Router";

export const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

