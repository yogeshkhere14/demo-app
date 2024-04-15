import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(number: string) {
    if(number == undefined || number == null) return '';
    const phone: string = "+1" + number;
    const countryCodeStr: string  = phone.slice(0,2);
    const areaCodeStr: string  = phone.slice(2,5);
    const midSectionStr: string  = phone.slice(5,8);
    const lastSectionStr: string  = phone.slice(8);
    return `${countryCodeStr} (${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
  }

}
