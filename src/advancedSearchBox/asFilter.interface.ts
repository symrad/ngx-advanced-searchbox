import { Subject } from 'rxjs/Subject';
import { AsInputAbstract } from './input/asInput.abstract';
export interface FilterInterface {
    inputInstance:AsInputAbstract;
    onFocus(prevNext: any): void;
    onBlur(): void;
    onInternalStep?(): void;
    add?(flag: any): void;
    remove?(): void;
    removeEmpty?(model: Array<any>): void;
    modelToView?(): void;
    viewToModel?(): void;
}
