import { AnimationEvent } from "react";

export type HandleAnimationEnd = (animationName: string) => (e: AnimationEvent) => void;

export interface UseMountedReturns {
    isMounted: boolean;
    unmounted: VoidFunction;
    handleAnimationEnd: HandleAnimationEnd;
}

