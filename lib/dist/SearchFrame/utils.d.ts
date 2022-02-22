import { IAutoComplete } from './AutoComplete';
declare type FormatDateToOptions = 'DD/MM/YYYY' | 'DDMMYYYY' | 'YYMMDD' | 'YY/MM/DD' | 'YYYY-MM-DD';
/** This function concatenates every params on the current page, and if there is a duplicate info
 * It will be replaced by the param specified on the url, (url param is priority)
 */
export declare function PersistAndReplaceUrlParams(currentParams: string): string;
export declare function FormatDateTo(DateString: Date, format: FormatDateToOptions): string;
declare type suggestion = {
    value: string;
    label: string;
    isDisabled?: boolean;
};
export declare function RequestSuggestionsPassagem(term: string): Promise<suggestion[]>;
declare type ElquartoApi = ElquartoApiValue[];
export declare type ElquartoApiValue = {
    type: 'City' | 'Hotel' | 'Neighborhood' | 'Country' | 'Airport';
    name: {
        'pt-BR': string;
        en: string;
    };
    countryId: string;
    hotelId: number;
    destinationId: number;
};
export declare function GroupOptionsType(optionsApi: ElquartoApi): IAutoComplete.CategoryOptions[];
declare type collectDataProps = {
    category: string;
    action: string;
    label: string;
};
export declare function collectData(props: collectDataProps): void;
export {};
