import { PosShapesType } from "@/types";

const getRandomPosFromSector = (pos: PosShapesType | undefined) => {
    if (pos === PosShapesType.NO){
        // Rango [-10-20]
        const ramdomPositionX = Math.floor(Math.random() * 31) -10; // Multiplicar por 31 + 10 para obtener números hasta 40
        // Rango [-10-20]
        const ramdomPositionY = Math.floor(Math.random() * 31) -10; // Multiplicar por 31 + 10 para obtener números hasta 40
        return [ramdomPositionX, ramdomPositionY] 

    }
    if (pos === PosShapesType.NE){
        // Rango [80-110]
        const ramdomPositionX = Math.floor(Math.random() * 31) + 80; // Sumar 80 para obtener números entre 80 y 110
        // Rango [0-30]
        const ramdomPositionY = Math.floor(Math.random() * 31) -10; // Multiplicar por 31 + 10 para obtener números hasta 40
        return [ramdomPositionX, ramdomPositionY] 

    }
    if (pos === PosShapesType.SO){
        // Rango [0-30]
        const ramdomPositionX = Math.floor(Math.random() * 31) -10; // Multiplicar por 31 + 10 para obtener números hasta 40
        // Rango [70-100]
        const ramdomPositionY = Math.floor(Math.random() * 31) + 80; // Sumar 80 para obtener números entre 80 y 110
        return [ramdomPositionX, ramdomPositionY] 

    }
    if (pos === PosShapesType.SE){
        // Rango [70-100]
        const ramdomPositionX = Math.floor(Math.random() * 31) + 80; // Sumar 80 para obtener números entre 80 y 110
        // Rango [70-100]
        const ramdomPositionY = Math.floor(Math.random() * 31) + 80; // Sumar 80 para obtener números entre 80 y 110
        return [ramdomPositionX, ramdomPositionY] 

    }
    return ['', '']
}

export default getRandomPosFromSector