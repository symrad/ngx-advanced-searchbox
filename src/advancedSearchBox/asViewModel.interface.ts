export interface ViewModelInterface {
    _templateUuid: string;
    uuid: string;
    model: string;
    type: string;
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

}

export interface MaskInterface {
    mask: any;
    specialCharacters:any;
    patterns:any;
    dropSpecialCharacters:boolean;
    clearIfNotMatch:boolean;
}