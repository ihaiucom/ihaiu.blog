import { join } from "path";

class StaticNode {
    cur!: int; // 游标
    data?: ElemType; // 数据

    Free() {
        this.data = undefined;
    }
}

/**
数组第一个和最后一个元素做特殊处理，他们的data不存放数据
第0个游标指向后面第一个空值的下标
最后一个游标指向第一个有值的下标
其他依次指向下一个下标
 */
class StaticLinkList {
    space: StaticNode[] = []; // 数组的索引为下标
    size = 100;
    length: int = 0;

    getLength() {
        var count = 0;
        var k = this.space[this.size - 1].cur;
        while (k) {
            k = this.space[k].cur;
            count++;
        }
        return count;
    }

    private emptyCur() {
        var i = this.space[0].cur;
        if (i) {
            this.space[0].cur = this.space[i].cur;
        }
        return i;
    }

    private setEmpty(k: int) {
        this.space[k].cur = this.space[0].cur;
        this.space[0].cur = k;
    }


    insert(index: int, elem: ElemType) {
        if (index < 0 || index > this.length) {
            throw new Error("insert index无效范围");
            return;
        }

        var j: int, k: int, l: int;
        k = this.size - 1;

        j = this.emptyCur();
        if (j == 0) {
            throw new Error("没有空的格子");
            return;
        }

        var node = this.space[j];
        node.data = elem;

        for (l = 1; l <= index; l++) {
            k = this.space[k].cur;
        }

        node.cur = this.space[k].cur;
        this.space[k].cur = j;

        return node
    }

    delete(index: int) {
        if (index < 0 || index > this.length) {
            throw new Error("insert index无效范围");
            return;
        }

        var j: int, k: int, l: int;
        k = this.size - 1;

        for (l = 1; l <= index; l++) {
            k = this.space[k].cur;
        }

        j = this.space[k].cur;
        this.space[k].cur = this.space[j].cur;

        var data = this.space[j].data;
        this.setEmpty(j);
        this.space[j].Free();
        return data;
    }


    get first() {
        return this.space[0];
    }

    get last() {
        return this.space[this.size - 1];
    }

    get firstEmptyCur() {
        return this.first.cur;
    }

    set firstEmptyCur(cur: int) {
        this.first.cur = cur;
    }

    get firstValueCur() {
        return this.last.cur;
    }

    set firstValueCur(cur: int) {
        this.last.cur = cur;
    }


    static Create(size: int): StaticLinkList {

        var list = new StaticLinkList();
        list.size = size;
        for (var i = 0; i < size; i++) {
            var node = new StaticNode();
            node.cur = i + 1;
            list.space[i] = node;
        }
        list.space[size - 1].cur = 0;
        list.length = 0;
        return list;
    }

    static Push(list: StaticLinkList, data: ElemType) {
        var cur = list.firstEmptyCur;
        var node = list.space[cur];
        list.firstEmptyCur = node.cur;
        node.data = data;
        if (cur == 1) {
            list.firstValueCur = cur;
        }
        list.length++;
    }


    static Pop(list: StaticLinkList): ElemType | undefined {
        if (list.length <= 0) {
            return undefined;
        }

        return this.Delete(list, list.length - 1);
    }

    static Unshift(list: StaticLinkList, data: ElemType) {
        var oldFirst = list.space[list.firstValueCur];
        var cur = list.firstEmptyCur;
        var node = list.space[cur];
        list.firstEmptyCur = node.cur;
        node.data = data;
        node.cur = oldFirst.cur;
        list.firstValueCur = cur;
        list.length++;
    }


    static Shift(list: StaticLinkList): ElemType | undefined {
        var cur = list.firstValueCur;
        if (cur == 0) {
            return undefined;
        }
        var node = list.space[cur];
        list.firstValueCur = node.cur;
        if (!list.space[list.firstValueCur].data) {
            list.firstValueCur = 0;
        }
        var data = node.data;
        node.Free();
        node.cur = list.firstEmptyCur;
        list.firstEmptyCur = cur;
        list.length--;

        return data;
    }

    static Insert(list: StaticLinkList, index: int, elem: ElemType) {
        if (list.length < index) {
            throw "Insert length<index"
            return;
        }
        var i = 0;
        var node = list.last;
        while (i <= index) {
            if (i == index) {
                var nextCur = node.cur;
                var cur = list.firstEmptyCur;
                var n = list.space[cur];
                list.firstEmptyCur = n.cur;
                n.data = elem;
                n.cur = nextCur;
                node.cur = cur;
                list.length++;
                if (i == 0) {
                    list.firstValueCur = cur;
                }

                break;
            }
            i++;
            node = list.space[node.cur];
        }

    }

    static Delete(list: StaticLinkList, index: int) {
        if (index >= list.length - 1) {
            return;
        }

        var i = 0;

        var node = list.last;
        var data: ElemType | undefined = undefined;
        while (i <= index) {
            var currCur = node.cur;
            var currNode = list.space[currCur];
            if (i == index) {
                var emptyCur = list.firstEmptyCur;
                list.firstEmptyCur = currCur;
                var data = currNode.data;
                var nextCur = currNode.cur;
                var nextNode = list.space[nextCur];
                currNode.cur = emptyCur;
                currNode.Free();
                node.cur = nextCur;
                if (nextNode.data) {
                    if (i == 0) {
                        list.firstValueCur = nextCur;
                    }
                }
                else {
                    if (i == 0) {
                        list.firstValueCur = 0;
                    }
                }
                break;

            }
            node = currNode;
            i++;
        }
        return data;
    }
}
