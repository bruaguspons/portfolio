const getRandomSize = (size: string | undefined) => {
    if(size !== undefined) return size
    return (Math.random() * (1.5 - 0.5) + 0.5).toFixed(2);
}

export default getRandomSize