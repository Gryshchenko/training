const getSmallest = <T>(array: T[]): number => {
    let smallestIndex: number = 0;
    let smallestElement: T = array[smallestIndex];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};
export const selectionSort = <T>(array: T[]): T[] => {
    if (!array || array.length === 0) {
        return array;
    }
    const inWork: T[] = array;
    const length: number = array.length;
    const sortedArray: T[] = [];
    for (let i = 0; i < length; i++) {
        const smallest = getSmallest<T>(inWork);
        sortedArray.push(inWork.splice(smallest, 1)[0]);
    }
    return sortedArray;
};
