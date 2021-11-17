import { type } from "os"

type ElemType = any;
class Node {
    data: ElemType;
    next?: Node;
}

class LinkList {
    head: Node = new Node();
    last: Node;
    length: int = 0;
    constructor() {
        this.last = this.head;
    }
}

function GetPreNode(list: LinkList, e: Node) {
    var result: Node | null = null;
    var node = list.head;
    while (node) {
        if (!node.next) break;
        if (node.next == e) {
            result = node
            break;
        }
        node = node.next;
    }
    return result;
}

function GetNodeIndex(list: LinkList, e: Node) {
    var i = -1;
    var node = list.head.next;
    while (node) {
        i++;
        if (node == e) {
            break;
        }
        node = node.next;
    }
    return i;
}

function GetNode(list: LinkList, i: int): Node | null {
    if (list.length == 0) {
        return null;
    }

    var result: Node | null = null;
    var k = -1;
    var node = list.head.next;
    while (node) {
        k++;
        if (k == i) {
            result = node;
            break;
        }
        node = node.next;
    }
    return result;
}

function InsertNode(list: LinkList, i: int, node: Node) {
    if (i < 0 || i > list.length) {
        throw "链表插入元素，i超出范围"
    }
    let pre: Node;
    if (list.length == 0) {
        pre = list.head;
    }
    else {
        pre = GetNode(list, i - 1) as Node;
    }

    var next = pre.next;
    pre.next = node;
    node.next = next;
    if (next == null) {
        list.last = node;
    }

    list.length++;
}

function PushNode(list: LinkList, node: Node) {
    var last = list.last;
    last.next = node;
    list.last = node;
    list.length++;
}

function UnshiftNode(list: LinkList, node: Node) {
    var next = list.head.next;
    list.head.next = node;
    node.next = next;
    if (next == null) {
        list.last = node;
    }
    list.length++;
}

function DeleteNode(list: LinkList, node: Node) {
    var pre = GetPreNode(list, node);
    if (!pre) {
        throw "该节点不在链表中"
    }

    pre.next = node.next;
    node.next = undefined;
    if (list.last == node) {
        list.last = pre
    }
    list.length--;
}

function Delete(list: LinkList, index: int) {
    var i = -1;
    var pre = list.head;
    var result: Node | null = null;
    while (pre) {
        var node = pre.next;
        if (!node) break;
        if (i + 1 == index) {
            pre.next = node.next;
            node.next = undefined;
            list.length--;
            result = node;
            break;
        }
        i++;
        pre = node;
    }

    return result;
}