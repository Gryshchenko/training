
export class HashTable<T> {
    protected table: Array<T> = []
    public constructor() {
        this.table  = new Array<T>(1000000);
    }
    public add(key: number, value: T): void {
        if (key === null || key == undefined) {
            return ;
        }
        this.table[key] = value;
    }
    public get(key: number): any {
        if (key === null || key == undefined) {
            return ;
        }
        return this.table[key] === null || this.table[key] === undefined ? -1 : this.table[key];
    }
    public contains(key: number): boolean {
        return this.table[key] === null || this.table[key] === undefined ? false : true;
    }
    public remove(key: number): void {
        if (key === null || key == undefined) {
            return ;
        }
        this.table[key] = null;
    }
}
export var MyHashSet = function() {
    this.table  = new Array(1000000);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (key === null || key == undefined) {
        return null;
    }
    this.table[key] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (key === null || key == undefined) {
        return null;
    }

    this.table[key] = null;
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (key === null || key == undefined) {
        return false;
    }
    return this.table.includes(key) ? true : false;
};
// export class HashTable<T> {
//     protected table: Array<T> = []
//     public constructor() {
//         this.table  = new Array<T>(1000000);
//     }
//     protected hash(value: string): number {
//         let hash: any = null;
//         let i: number = 0;
//         let chr: number = null;
//         if (value.length === 0) return hash;
//         for (i = 0; i < value.length; i++) {
//             chr   = value.charCodeAt(i);
//             hash  = ((hash << 5) - hash) + chr;
//             hash |= 0; // Convert to 32bit integer
//         }
//         return hash;
//     }
//     public add(key: string, value: T): void {
//         if (key === null || key == undefined) {
//             return ;
//         }
//         const hashKey: number = this.hash(key);
//         this.table[hashKey] = value;
//     }
//     public get(key: string): any {
//         if (key === null || key == undefined) {
//             return ;
//         }
//         const hashKey: number = this.hash(key);
//         return this.table[hashKey] === null || this.table[hashKey] === undefined ? -1 : this.table[hashKey];
//     }
//     public contains(key: string): boolean {
//         const hashKey: number = this.hash(key);
//         return this.table[hashKey] === null || this.table[hashKey] === undefined ? false : true;
//     }
//     public remove(key: string): void {
//         if (key === null || key == undefined) {
//             return ;
//         }
//         const hashKey: number = this.hash(key);
//         this.table[hashKey] = null;
//     }
// }
