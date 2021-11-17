import { IList } from "./IList";

export function ListInsert<T>(list: IList<T>, index: int, elem: T) {
    for (var i = list.Length() - 1; i >= index; i--) {
        list.Set(i + 1, list.Get(i));
    }
    list.Set(index, elem);
}