export const binary_search = (list: number[], item: number) => {
    let low: number = 0;
    let height: number = list.length - 1;
    while (low <= height) {
        const middle = Math.round((low + height) / 2);
        const guss = list[middle];
        if (guss === item) {
            return middle;
        } else if (guss > item) {
            height = middle - 1;
        } else {
            low = middle + 1;
        }
    }
    return null;
};
