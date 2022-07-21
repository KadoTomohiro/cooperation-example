import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyHyphen'
})
export class EmptyHyphenPipe implements PipeTransform {

  transform(value: string | undefined): unknown {
    return !!value ? value : '-';
  }

}
