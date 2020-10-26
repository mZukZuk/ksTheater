import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    const [ _, hours, mins] = value.match(/(?:(\d+)h)?(?:(\d+)m)?/);
    return [hours || 0, mins || 0].map( (val: string) => {
      if (val.length < 2) {
        return '0' + val;
      }
      return val;
    }).join(':');
  }
}
