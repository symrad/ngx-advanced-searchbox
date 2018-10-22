import { Subject } from 'rxjs';
import { AsInputAbstract } from './input/asInput.abstract';
export interface FilterInterface {
    inputComponent:AsInputAbstract;
    onFocus(prevNext: any): void;
    onBlur(): void;
    onInternalStep?(): void;
    add?(flag: any): void;
    remove?(): void;
    removeEmpty?(model: any[]): void;
    modelToView?(): void;
    viewToModel?(): void;
}
