import { toUnicode } from "punycode";
import { IList } from "./IList";

// 并集
export function ListUnio<T>(a: IList<T>, b: IList<T>) {
    for (var i = 0, length = b.Length(); i < length; i++) {
        var elem = b.Get(i);
        if (!a.Has(elem)) {
            a.Push(elem);
        }
    }
}