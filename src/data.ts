import {Node} from "./Stack";

export const treeNode: Node<number> = {
    val: 10,
    right:  {
        val: 15,
        right: {
            val: 18,
            right: null, left: null,
        },
        left: {
            val: 20,
            right: null, left: null,
        }
    },
    left:  {
        val: 5,
        right: {
            val: 7,
            right: null,
            left: null,

        },
        left: {
            val: 3,
            right: null,
            left: null,
        }
    },
}

export const treeNode1: Node<number> = {
    val: 0,
    right:  {
        val: 20,
        right: {
            val: 7,
            right: null,
            left: null,
        },
        left: {
            val: 15,
            right: null,
            left: null,
        },
    },
    left:  {
        val: 9,
        right: {
            val: 4,
            right: null,
            left: null,

        },
        left: null,
    },
}
export const treeNode2: Node<number> = {
    val: 3,
    right: {
        val: 20,
        right: {
            val: 7,
            right: null,
            left: null,
        },
        left: {
            val: 15,
            right: null,
            left: null,
        },
    },
    left:  {
        val: 9,
        right: null,
        left: null,
    },
}
export const treeNode3: Node<number> = {
    val: 1,
    right: {
        val: 2,
        right: {
            val: 3,
            right: null,
            left: null,
        },
        left: {
            val: 4,
            right: null,
            left: null,
        },
    },
    left:  {
        val: 2,
        right: {
            val: 4,
            right: null,
            left: null,
        },
        left: {
            val: 3,
            right: null,
            left: null,
        },
    },
}
export const treeNode4: Node<number> = {
    val: 1,
    right: {
        val: 2,
        right: {
            val: 3,
            right: null,
            left: {
                val: 2, right: null, left: null
            },
        },
        left: {val: 2,
            right: null,
            left: { val: 2, right: null, left: null }
        }
    },
    left:  {
        val: 2,
        right: null,
        left: {
            val: 2,
            right: null,
            left: null,
        },
    },
}
export const treeNode5: Node<number> = {
    val: 1,
    right: {
        val: 3,
        right: null,
        left: null,
    },
    left:  {
        val: 2,
        right: null,
        left: null,
    },
}
export const treeNode6: Node<number> = {
    val: 5,
    right: {
        val: 8,
        right: {
            val: 4,
            right: {
                val: 1,
                left: null,
                right: null,
            },
            left: null,
        },
        left: {
            val: 13,
            right: null,
            left: null,
        },
    },
    left:  {
        val: 4,
        right: null,
        left: {
            val: 11,
            right: {
                val: 2,
                right: null,
                left: null,
            },
            left: {
                val: 7,
                right: null,
                left: null,
            },
        },
    },
}
