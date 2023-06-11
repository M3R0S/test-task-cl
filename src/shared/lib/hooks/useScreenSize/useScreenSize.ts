import { useEffect, useState } from "react";

import { useDebounce } from "../useDebounce";

export const useScreenSize = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0);
    const [screenHeight, setScreenHeight] = useState<number>(0);

    const resize = useDebounce(() => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    }, 200);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [resize]);

    return { screenWidth, screenHeight };
};
