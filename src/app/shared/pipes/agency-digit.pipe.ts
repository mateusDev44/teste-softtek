import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agencyDigit',
})
export class AgencyDigitPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const LgthString = value.length;
    const result = value.substr(0, LgthString) + '-' + value.substr(-1);
    return result;
  }
}
