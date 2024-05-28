import { Pipe, PipeTransform } from '@angular/core';
import * as messages from '../messages/messages.json';

@Pipe({
  name: 'trans',
  standalone: true
})
export class TransPipe implements PipeTransform {

  readonly messages: { [key: string]: string } = messages;

  transform(value: any): string {
    return typeof value === 'string' ? this.messages[value] || value : value;
  }

}
