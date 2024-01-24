import { ShapesType } from "../types";

export const getRandomShape = (shape: ShapesType | undefined) => {
    if (shape) return shape
    const ObjectShapes = Object.entries(ShapesType);

    const randomNumber = Math.floor(Math.random() * (ObjectShapes.length + 1));

    const EqualRandomNumeber = randomNumber === 3 ? 2 : randomNumber;


    const [, randomShape] = ObjectShapes[EqualRandomNumeber] as [string, ShapesType];
    return randomShape
}