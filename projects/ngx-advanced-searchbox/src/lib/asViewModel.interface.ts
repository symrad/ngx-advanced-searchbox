import { OperatorsEnum } from "./as.component";

export interface ViewModelInterface extends TemplateModelInterface{
    value: any;
    uuid: string;
}

export interface TemplateModelInterface {
    _templateUuid: string;
    bindLabel: any;
    bindValue: any;
    model: string;
    type: TypesFilterEnum;
    inputType: string;
    position: number;
    label: string;
    multiple: any;
    date: boolean;
    suggestions: any;
    domains: any;
    operators: OperatorsEnum[];
    mask: MaskInterface;
    formatModelValue: object;
    formatModelViewValue: object;
}

export interface MaskInterface {
    mask: any;
    specialCharacters: any;
    patterns: any;
    dropSpecialCharacters: boolean;
    clearIfNotMatch: boolean;
}

export enum TypesFilterEnum {
    OPERATORS = 'OPERATORS',
    INPUT = 'INPUT'
}