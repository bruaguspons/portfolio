import { PosShapesType } from "../types";

const getRandomPos = (pos: PosShapesType | undefined) => {
    if (pos === PosShapesType.NO){
        // Rango [0-30]
        const ramdomPositionX = Math.floor(Math.random() * 31); // Multiplicar por 31 para obtener números hasta 30
        // Rango [0-30]
        const ramdomPositionY = Math.floor(Math.random() * 31); // Multiplicar por 31 para obtener números hasta 30
        return [ramdomPositionX, ramdomPositionY] 

    }
    if (pos === PosShapesType.NE){
        // Rango [70-100]
        const ramdomPositionX = Math.floor(Math.random() * 31) + 70; // Sumar 70 para obtener números entre 70 y 100
        // Rango [0-30]
        const ramdomPositionY = Math.floor(Math.random() * 31); // Multiplicar por 31 para obtener números hasta 30
        return [ramdomPositionX, ramdomPositionY] 

    }
    if (pos === PosShapesType.SO){
        // Rango [0-30]
        const ramdomPositionX = Math.floor(Math.random() * 31); // Multiplicar por 31 para obtener números hasta 30
        // Rango [70-100]
        const ramdomPositionY = Math.floor(Math.random() * 31) + 70; // Sumar 70 para obtener números entre 70 y 100
        return [ramdomPositionX, ramdomPositionY] 

    }
    if (pos === PosShapesType.SE){
        // Rango [70-100]
        const ramdomPositionX = Math.floor(Math.random() * 31) + 70; // Sumar 70 para obtener números entre 70 y 100
        // Rango [70-100]
        const ramdomPositionY = Math.floor(Math.random() * 31) + 70; // Sumar 70 para obtener números entre 70 y 100
        return [ramdomPositionX, ramdomPositionY] 

    }

    // Generar un número entero aleatorio que esté en el rango [0-30] o [70-100]
    let ramdomPositionX = 0;
    let ramdomPositionY = 0;
    
    if (Math.random() < 0.5) {
        // Rango [0-30]
        ramdomPositionX = Math.floor(Math.random() * 31); // Multiplicar por 31 para obtener números hasta 30
    } else {
        // Rango [70-100]
        ramdomPositionX = Math.floor(Math.random() * 31) + 70; // Sumar 70 para obtener números entre 70 y 100
    }
    if (Math.random() < 0.5) {
        // Rango [0-30]
        ramdomPositionY = Math.floor(Math.random() * 31); // Multiplicar por 31 para obtener números hasta 30
    } else {
        // Rango [70-100]
        ramdomPositionY = Math.floor(Math.random() * 31) + 70; // Sumar 70 para obtener números entre 70 y 100
    }
    return [ramdomPositionX, ramdomPositionY]
    
    

}

export default getRandomPos