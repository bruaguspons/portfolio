import { ShapesType } from "../types";

const getRandomOrderShapes = () => {
    const ObjectShapes = Object.entries(ShapesType);

    const randomNumber = Math.floor(Math.random() * (ObjectShapes.length + 1));

    const EqualRandomNumeber1 = randomNumber === 3 ? 2 : randomNumber;

    const ObjectShapesInd = ObjectShapes.reduce<number[]>((prev, _curr, ind) => {
        if(ind !== EqualRandomNumeber1) prev.push(ind)
        return prev
    }, [])

    const randNum = Math.random()

    const EqualRandomNumeber2 = ObjectShapesInd[randNum < 0.5? 0: 1] as number
    const EqualRandomNumeber3 = ObjectShapesInd[randNum < 0.5? 1: 0] as number

    const [,randomShape1] = ObjectShapes[EqualRandomNumeber1] as [string, ShapesType]
    const [,randomShape2] = ObjectShapes[EqualRandomNumeber2] as [string, ShapesType]
    const [,randomShape3] = ObjectShapes[EqualRandomNumeber3] as [string, ShapesType]

    return [randomShape1, randomShape2, randomShape3]
}

export default getRandomOrderShapes