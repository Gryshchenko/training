
const getMediaOf3 = (list: number[]): number => {
    const first = list[0];
    const middle = list[Math.round(list.length / 2)];
    const last = list[list.length - 1];
    const max = Math.max(Math.max(first,middle), last);
    const min = Math.min(Math.min(first,middle), last);
     return  first + middle + last - (min + max);
};
export const quickSort = (list: number[]): number[] => {
    if (!list || list.length < 2) {
        return list;
    }
    const pivot = getMediaOf3(list);
    const lessPivot: number[] = [];
    const greatPivot: number[] = [];
    list.forEach((num: number) => {
       if (num <= pivot) {
           lessPivot.push(num);
       } else if (num > pivot) {
           greatPivot.push(num);
       }
    });
    return [...quickSort(lessPivot), ...quickSort(greatPivot)];
};
