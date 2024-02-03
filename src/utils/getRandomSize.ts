const getRandomSize = (size: string | undefined) => {
    if(size !== undefined) return size
    return (Math.random() * (1.5 - 0.75) + 0.75).toFixed(2);
}

export default getRandomSize