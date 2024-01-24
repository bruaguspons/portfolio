const getRandomDeg = (deg: number | undefined) => {
    if (deg !== undefined) return deg
    return Math.floor(Math.random() * 360);
}

export default getRandomDeg