
class LoopLinkNode {
    data?: ElemType;
    next!: LoopLinkNode;
}

class LoopLinkList {
    head?: LoopLinkNode;
    length: int = 0;
    constructor() {
    }

    static Init(list: LoopLinkList, ...elems: ElemType[]) {
        for (var elem of elems) {
            var node = new LoopLinkNode();
            node.data = elem;
            if (list.head == null) {
                list.head = node;
                node.next = list.head;
                list.length++;
            }
            else {
                var target: LoopLinkNode;
                for (target = list.head; target.next != list.head; target = target.next) {

                }

                node.next = target.next;
                target.next = node;
                list.length++;
            }
        }

    }

    static Insert(list: LoopLinkList, index: int, elem: ElemType) {

        if (!list.head) {
            throw new Error("没有初始化链表");
            return;
        }

        var node = new LoopLinkNode();
        node.data = elem;

        var target: LoopLinkNode;
        if (index == 0) {
            for (target = list.head; target.next != list.head; target = target.next) {

            }

            node.next = list.head;
            target.next = node;
            list.head = node;
        }
        else {
            target = list.head;
            for (var j = 0; j < index - 1; j++) {
                target = target.next;
            }

            node.next = target.next;
            target.next = node;

        }
        list.length++;
    }

    static Delete(list: LoopLinkList, index: int) {
        if (!list.head) {
            throw new Error("没有初始化链表");
            return;
        }

        if (index < 0 || index >= list.length) {
            throw new Error("删除索引不在范围");

            return;
        }
        if (index == 0) {
            var node = list.head;

            var last: LoopLinkNode;
            for (last = list.head; last.next != list.head; last = last.next) {

            }

            node.data = undefined;
            if (node == last) {
                list.head = undefined;
            }
            else {
                last.next = node.next;
                list.head == node.next;
            }
            node.next = <any>null;
            list.length--;

        }
        else {
            var pre: LoopLinkNode = list.head;
            for (var j = 0; j < index - 1; j++) {
                pre = pre.next;
            }

            var node = pre.next;
            pre.next = node.next;
            node.data = undefined;
            node.next = <any>null;

            list.length--;
        }
    }

    static GetIndex(list: LoopLinkList, elem: ElemType) {
        if (!list.head) {
            throw new Error("没有初始化链表");
            return;
        }
        var i = 0;
        var target = list.head;
        for (target = list.head; target.data != elem && target.next != list.head; ++i) {
            target = target.next;
        }

        if (target.next == list.head) {
            i = -1;
        }
        return i;
    }


    static GetIndex2(list: LoopLinkList, elem: ElemType) {
        if (!list.head) {
            throw new Error("没有初始化链表");
            return;
        }
        var i = 0;
        var target = list.head;
        while (1) {
            if (target.data == elem) {
                break;
            }
            if (target.next == list.head) {
                break;
            }
            target = target.next;
            ++i
        }

        if (target.data != elem) {
            i = -1;
        }
        return i;
    }
}