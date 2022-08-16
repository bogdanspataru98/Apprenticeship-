function countElementsInDocument(document, elementName) {
    return handleArray(document.body.children, elementName)
}

function handleArray(array, elementName) {
    if (array == undefined || array == NaN) {
        return 0;
    }

    if (array instanceof HTMLCollection && array.length != 0) {
        var count = 0;
        for (let index = 0; index < array.length; index++) {
            count += handleArray(array[index], elementName)
            count += handleArray(array[index].children, elementName)

        }
        return count;
    }
    if (isElement(array, elementName)) {
        return 1;
    }
    return 0;
}

function isElement(element, elementName) {
    return element.tagName == elementName.toString().toUpperCase()
}

console.log(countElementsInDocument(document, "div"))