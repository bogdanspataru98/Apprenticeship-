import { Animal } from "../models/Animal";

export function PresentAllAnimals(){
    var animals = [ new Animal("dog"), new Animal("cat"), new Animal("cow")];
    const animalsMap = animals.map(animal => {
        return <p>{animal.introduce()}</p>
    });

    console.log(animalsMap)
    return animalsMap;
}