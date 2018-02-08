export interface ViewModelInterface {
    _templateUuid: string;
    uuid: string;
    model: string;
    type: TypesFilterEnum;
    inputType: string;
    position: number;
    label: string;
    required: boolean;
    multiple: any;
    date: boolean;
    domain: Array<Object>;
    suggestions: any;
    domains: any;
    operators: Object;
    'operators-from': Object;
    'operators-to': Object;
    'labels-from': string;
    'labels-to': string;
    value: any;
    mask: MaskInterface;
    formatModelValue:Function;
    formatModelViewValue:Function;
    bindLabel:any;
    bindValue:any;

}

export interface MaskInterface {
    mask: any;
    specialCharacters:any;
    patterns:any;
    dropSpecialCharacters:boolean;
    clearIfNotMatch:boolean;
}

export enum TypesFilterEnum {
    OPERATORS = 'OPERATORS',
    INPUT = 'INPUT'
}