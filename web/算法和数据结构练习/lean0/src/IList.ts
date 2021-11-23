export interface IList<T> {
    // 数量
    Length(): int;
    // 查找元素所在位置
    IndexOf(elem: T): int;
    // 是否存在
    Has(elem: T): boolean;
    // 插入元素
    Insert(index: int, elem: T): IList<T>;
    // 删除元素
    Delete(eleam: T): IList<T>;
    // 删除元素，用索引
    DeleteIndex(index: int): IList<T>;
    // 获取元素, 用索引
    Get(index: int): T;
    // 设置值
    Set(index: int, elem: T): IList<T>;
    // 向尾部添加元素
    Push(elem: T): IList<T>;
    // 从尾部删除并取出元素
    Pop(): T;

    // 从头部删除并取出元素
    Shift(): T;
    // 将元素添加到头部
    Unshift(elem: T): IList<T>;

    // 并集 b的元素如果在a中没有就添加到a
    Union(b: IList<T>): IList<T>;
}
