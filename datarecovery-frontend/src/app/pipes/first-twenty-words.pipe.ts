import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'First40Words' })
export class First40WordsPipe implements PipeTransform {
  transform(value: String, ...args): any {
    let array = value.split(' ', 40);
    let returnString = array.join(' ');
    if (value.split(' ').length > 40) {
      returnString += ' ...';
    }
    return returnString;
  }
}
