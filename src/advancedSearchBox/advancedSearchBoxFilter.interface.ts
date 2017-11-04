export interface FilterInterface {
    onFocus(prevNext: any): void;
    onBlur(): void;
    onInternalStep(): void;
    add?(flag: any): void;
    remove?(): void;
    removeEmpty?(): void;
    modelToView?(): void;
    viewToModel?(): void;
}
