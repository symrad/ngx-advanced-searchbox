import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, switchMap, map} from 'rxjs/operators';
import { AsConfigService } from 'projects/ngx-advanced-searchbox/src/public_api';

@Injectable()
export class AppConfigService extends AsConfigService {

    constructor(_http: HttpClient) {
        super(_http);
        this.customDomainsAsyncFn['youtube'] = (observable, viewModel, model) => {
            return observable.pipe(
            switchMap((term) => {
                return _http.get('https://www.googleapis.com/youtube/v3/search', {params: {
                    q: term,
                    key: 'AIzaSyBafKFrisguQvT3WC20Q972uxS1cZfPvg8',
                    type: 'video',
                    maxResults: '12',
                    part: 'id,snippet'
                    }}).pipe(
                    catchError(() => []),
                    map((response: any) => {
                        const newResponse = {response: [], term: ''};
                        newResponse.response = response.items.map((item) => {
                            return {label: item.snippet.title};
                        });
                        newResponse.term = term;
                        return newResponse;
                    }));
                }
            ));
        };

        this.customSuggestionsAsyncFn['gmap'] = this.customDomainsAsyncFn['youtube'];

        this.formatModelValue = {
            'youtube': function(val) {
                if (val) {
                    return val.label;
                }
                return val;
            },
            'birth.to': function(val) {
                const newVal = Object.assign({}, val);
                if  (val.value) {
                    const daySplitted = val.value.split('-');
                    newVal.value = new Date(
                        parseInt(daySplitted[2], 10),
                        parseInt(daySplitted[1], 10) - 1,
                        parseInt(daySplitted[0], 10), 12);
                }
                return newVal;
            },
            'birth.from': function(val) {
                const newVal = Object.assign({}, val);
                if  (val.value) {
                    const daySplitted = val.value.split('-');
                    newVal.value = new Date(
                        parseInt(daySplitted[2], 10),
                        parseInt(daySplitted[1], 10) - 1,
                        parseInt(daySplitted[0], 10), 12);
                }
                return newVal;
            },
            'city': function(val) {
                if (val) {
                  return val.value;
                }
                return val;
            }
        };

        this.formatModelViewValue = {
            'youtube': function(val) {
                if (typeof val === 'string') {
                    return {label: val};
                }
                return val;
            },
            'birth.to': function(val) {
                const newVal = Object.assign({}, val);
                if  (val.value) {
                    newVal.value = new Date(val.value);
                    newVal.value = `${newVal.value.getDate()} - ${(newVal.value.getMonth() + 1)} - ${newVal.value.getFullYear()}`;
                }
                return newVal;
            },
            'birth.from': function(val) {
                const newVal = Object.assign({}, val);
                if  (val.value) {
                    newVal.value = new Date(val.value);
                    newVal.value = `${newVal.value.getDate()} - ${(newVal.value.getMonth() + 1)} - ${newVal.value.getFullYear()}`;
                }
                return newVal;
            },
            'city': function(val, template) {
                const domainsFiltered = template.domains.filter((par) => {
                  return par.value === val;
                });
                if (domainsFiltered.length > 0) {
                  return domainsFiltered[0];
                }
                return val;
            },
            'test': function(val, template) {
                const domainsFiltered = template.domains.filter((par) => {
                  return par.label === val.value;
                });
                if (domainsFiltered.length > 0) {
                  return domainsFiltered[0].value.id;
                }
                if (val.value) {
                    return val.value;
                }
                return val;
            }
        };

        this.customDomainsModelFormatter = {
            'test': function(viewModel, val) {
                const current = viewModel.domains.filter((item) => {
                    if (typeof val === 'object') {
                        return item.id === val.id;
                    }
                    return item.id === val;
                });
                if (current.length > 0) {
                    return current[0].label;
                }
                return val;
            }
        };

        this.customDomainsFormatter = {
            'test': function(viewModel, val) {
                const current = viewModel.domains.filter((item) => {
                    if (typeof val === 'object') {
                        return item.id === val.value;
                    }
                    return item.id === val;
                });
                if (current.length > 0) {
                    return current[0].label;
                }
                return val;
            }
        };
    }
}
