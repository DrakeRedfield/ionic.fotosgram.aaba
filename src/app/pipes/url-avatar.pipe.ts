import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlAvatar'
})
export class UrlAvatarPipe implements PipeTransform {

  transform( avatar: string ): string {
    return `/assets/avatars/${avatar}`;
  }

}
