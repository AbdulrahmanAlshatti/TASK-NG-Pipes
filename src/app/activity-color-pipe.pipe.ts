import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityColorPipe',
  standalone: true
})
export class ActivityColorPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    if(value == 'active') return 'green';
    if(value == 'inactive') return 'yellow';
    if(value == 'banned') return 'red';
    
    return 'black';


  }

}
