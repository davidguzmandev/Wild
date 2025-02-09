import { useState } from "react";

interface Positions {
    [key: string]: {
        x: number;
        y: number;
    };
}

export const useHandleMouseMove = () => {
    const [position, setPosition] = useState<Positions>({});

    const handleMouseMove = (elementId: string) => (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        
        const offsetX = ((clientX - left) / width - 0.5) * 2;
        const offsetY = ((clientY - top) / height - 0.5) * -2;

        setPosition(prev => ({
            ...prev,
            [elementId]: { x: offsetX, y: offsetY }
        }));
    };

    const resetPosition = (elementId: string) => {
        setPosition(prev => ({
            ...prev,
            [elementId]: { x: 0, y: 0 }
        }));
    };

    return { position, handleMouseMove, resetPosition };
};