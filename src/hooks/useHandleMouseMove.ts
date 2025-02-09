import { useState } from "react";


interface Position {
    x: number;
    y: number;
}

/* Hook personalizado para recibir el movimiento del mouse y proporcionar animaciones a objetos
    el return devuelve un objeto con la posición del mouse en x y y
*/

export const useHandleMouseMove = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const offsetX = ((clientX - left) / width - 0.5) * 20;
        const offsetY = ((clientY - top) / height - 0.5) * 20;

        setPosition({ x: offsetX, y: offsetY });
    };

    const resetPosition = () => setPosition({ x: 0, y: 0 });

    return { position, handleMouseMove, resetPosition}
}