import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imageserver'
})
export class ImageserverPipe implements PipeTransform {

  transform( img:string, userId: string ): string {
    return `${environment.url}/posts/image/${userId}/${img}`;
  }

}
