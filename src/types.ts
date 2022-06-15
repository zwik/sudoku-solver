export type ArrayOfLength<T, Length extends number, Acc extends T[] = []> = Acc['length'] extends Length ? Acc : ArrayOfLength<T, Length, [T, ...Acc]>;
export type SudokuBoard = ArrayOfLength<ArrayOfLength<number, 9>, 9>;
