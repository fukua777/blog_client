import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentPipe'
})

export class MomentPipe implements PipeTransform {
    transform(value, args = 'YYYY.MM.DD HH:mm:ss') {
        return moment().format(args);
    }
}
