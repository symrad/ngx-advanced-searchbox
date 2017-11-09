export interface FilterInterface {
    onFocus(prevNext: any): void;
    onBlur(): void;
    onInternalStep?(): void;
    add?(flag: any): void;
    remove?(): void;
    removeEmpty?(model: Array<any>): void;
    modelToView?(): void;
    viewToModel?(): void;
}
