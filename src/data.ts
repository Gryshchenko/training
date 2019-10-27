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
