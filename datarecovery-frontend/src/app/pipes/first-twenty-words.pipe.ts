import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'First40Words' })
export class First40WordsPipe implements PipeTransform {
  transform(value: String, ...args): any {
    let array = value.split(' ', 80);
    let returnString = array.join(' ');
    if (value.split(' ').length > 80) {
      returnString += ' ...';
    }
    return returnString;
  }
}
