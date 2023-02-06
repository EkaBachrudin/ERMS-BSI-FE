import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFIlterpipe implements PipeTransform {
  transform(items: any, term: any, prop: string): any {
    if (!term || !prop) return items;

    return items.filter((item) =>
      item[prop].toString().toLowerCase().includes(term.toLowerCase())
    );
  }
}

@Pipe({
  name: 'searchFilterMulti',
})
export class SearchFIlterpipeMulti implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }
}

