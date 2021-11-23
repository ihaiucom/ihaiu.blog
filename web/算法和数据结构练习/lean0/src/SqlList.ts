const MAXSIZE = 20;
type ElemType = int | null;
class SqlList {
    data!: ElemType[];
    length!: int;
}

function GetElem(list: SqlList, index: int) {
    if (list.length == 0 || index >= list.length) {
        return null;
    }
    return list.data[index];
}

function ListInsert(list: SqlList, index: int, elem: ElemType) {
    if (list.length == MAXSIZE) {
        throw "插入元素时，列表空间不足"
    }

    if (index < 0) {
        throw "插入元素时，index小于0"
    }

    for (var i = list.length - 1; i >= index; i--) {
        list.data[i + 1] = list.data[i];
    }
    list.data[index] = elem;
    list.length++;
}

function ListDelete(list: SqlList, index: int): ElemType {
    if (index >= list.length) {
        throw "插入元素时，index大于或等于 list.length"
    }

    if (index < 0) {
        throw "删除元素时，index小于0"
    }

    var elem = list.data[index];
    for (var i = index; i < list.length; i++) {
        list.data[i] = list.data[i + 1];
    }
    list.data[list.length - 1] = null;
    list.length--;
    return elem;
}