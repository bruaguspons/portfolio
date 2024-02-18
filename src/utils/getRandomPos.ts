const getRandomPos = () => {
    // Generar un número entero aleatorio que esté en el rango [0-30] o [70-100]
    let ramdomPositionX = 0;
    let ramdomPositionY = 0;
    
    if (Math.random() < 0.5) {
        // Rango [0-30]
        ramdomPositionX = Math.floor(Math.random() * 31) -10; // Multiplicar por 31 + 10 para obtener números hasta 40
    } else {
        // Rango [70-100]
        ramdomPositionX = Math.floor(Math.random() * 31) + 80; // Sumar 80 para obtener números entre 80 y 110
    }
    if (Math.random() < 0.5) {
        // Rango [0-30]
        ramdomPositionY = Math.floor(Math.random() * 31) -10; // Multiplicar por 31 + 10 para obtener números hasta 40
    } else {
        // Rango [70-100]
        ramdomPositionY = Math.floor(Math.random() * 31) + 80; // Sumar 80 para obtener números entre 80 y 110
    }
    return [ramdomPositionX, ramdomPositionY]
    
    

}

export default getRandomPos