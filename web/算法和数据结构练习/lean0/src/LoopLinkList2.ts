import { type } from "os";

type ElemType = number;
type int = number;
class LoopLinkNode {
    data?: ElemType;
    next!: LoopLinkNode;
}

class LoopLinkList {
    rear!: LoopLinkNode;

    Free() {
        this.rear = <any>null;
    }

    static Connect(a: LoopLinkList, b: LoopLinkList) {
        var aHead = a.rear.next;
        a.rear.next = b.rear.next; //a.last->b.head
        b.rear.next = aHead; //b.last->aHead
        a.rear = b.rear; //替换a的last

    }

    static IsLoop(head: LoopLinkNode) {
        var p: LoopLinkNode = head;
        var q: LoopLinkNode = head;
        var pIndex = 0;
        var qIndex = 0;
        var isLoop = false;
        var i = 0;
        while (p) {
            q = head;
            for (var qIndex = 0; qIndex <= pIndex; qIndex++) {
                i++;
                console.log(i, pIndex, qIndex, p.data + "--" + q.data);
                if (p == q && qIndex != pIndex) {
                    console.log("环的位置的 pIndex=", pIndex, ", qIndex=", qIndex, "data=", p.data);
                    isLoop = true;
                    break;
                }
                q = q.next;
            }
            if (isLoop) {
                break;
            }
            p = p.next;
            pIndex++;
        }
        return isLoop;
    }


    static IsLoop1(head: LoopLinkNode) {
        var p: LoopLinkNode = head;
        var q: LoopLinkNode = head;
        var pIndex = 0;
        var qIndex = 0;
        var isLoop = false;
        var i = 0;
        while (p) {
            q = head;
            qIndex = 0;
            while (q) {
                i++;
                console.log(i, pIndex, qIndex, p.data + "--" + q.data);
                if (p == q) {
                    if (qIndex != pIndex) {
                        console.log("环的位置的 pIndex=", pIndex, ", qIndex=", qIndex, "data=", p.data);
                        isLoop = true;
                        break;
                    }
                    break;
                }

                q = q.next;
                qIndex++
            }
            if (isLoop) {
                break;
            }
            p = p.next;
            pIndex++;
        }
        return isLoop;
    }

    static IsLoop2(head: LoopLinkNode) {
        var p = head;
        var q = head;
        var isLoop = false;
        var i = 1;
        while (p && q && q.next) {
            p = p.next;
            if (q.next) {
                q = q.next.next;
            }
            console.log(i, p.data + "--" + q.data);
            i++;
            if (p == q) {
                isLoop = true;
                console.log(i, "循环位置在 p=", p.data, ", q=", q.data);
                break;
            }
        }

        return isLoop;
    }



    static Init(list: LoopLinkList, ...elems: ElemType[]) {
        for (var elem of elems) {
            var node = new LoopLinkNode();
            node.data = elem;
            if (list.rear == null) {
                list.rear = node;
                node.next = list.rear;
            }
            else {
                node.next = list.rear.next;
                list.rear.next = node;
                list.rear = node;
            }
        }

    }


    static Print(list: LoopLinkList) {

        if (!list.rear) {
            throw new Error("没有初始化链表");
            return;
        }


        var i = 1;
        var node = list.rear.next;
        var arr = [];
        while (true) {
            // console.log(`[${i}]=${node.data}`);
            arr.push(node.data);
            i++;
            node = node.next;
            if (node == list.rear.next) {
                break;
            }
        }
        console.log(arr.join(', '));

    }

}


var list = new LoopLinkList();
var elems: ElemType[] = [];
for (var i = 1; i <= 6; i++) {
    elems.push(i);
}

LoopLinkList.Init(list, ...elems);

list.rear.next = list.rear.next.next.next;
LoopLinkList.Print(list);
LoopLinkList.IsLoop(list.rear.next);
LoopLinkList.IsLoop1(list.rear.next);
LoopLinkList.IsLoop2(list.rear.next);