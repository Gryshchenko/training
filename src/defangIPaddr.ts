export const defangIPaddr = (n: string): string => {
    if (!n) {
        return null;
    }
    return n.split(".").join("[.]");
};
