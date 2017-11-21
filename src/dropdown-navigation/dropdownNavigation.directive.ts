import { Directive, HostBinding, HostListener, Inject, forwardRef } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

enum Key {
    ArrowUp = 38,
    ArrowDown = 40
}

export enum TypeDrop {
    Up,
    Down
}

@Directive({
    selector: '[appDropdownNavigation]'
})
export class DropdownNavigationDirective {

    constructor(
        @Inject(forwardRef(() => NgbDropdown)) public dropdown
    ) {
        // console.log(dropdown);
     }

    getTypeDrop(): TypeDrop {
        return this.dropdown._menu.placement.search('^top') !== -1 ? TypeDrop.Up : TypeDrop.Down;
    }

    getActiveElmIndex(list): number {
        let i = 0;
        let position: number = this.getTypeDrop() === TypeDrop.Up ? list.length : -1;

        for (const elm of list) {
            if (elm === document.activeElement) {
                position = i;
            }
            i++;
        }

        return position;
    }

    @HostListener('keydown', ['$event']) keyboardEvent($event): boolean {
        if ([Key.ArrowDown, Key.ArrowUp].indexOf($event.which) === -1) {
          return true;
        }

        if (!this.dropdown.isOpen()) {
            this.dropdown.open();
        }

        if (!this.dropdown._toggle) {
          return true;
        }

        const list: HTMLElement[] = this.dropdown._menu._elementRef.nativeElement.children;

        let position: number = this.getActiveElmIndex(list);

        switch ($event.which) {
          case Key.ArrowDown:
            if (position >= list.length - 1) {
                if (this.getTypeDrop() === TypeDrop.Down) {
                    position = -1;
                }else {
                    this.dropdown._toggle._elementRef.nativeElement.focus();
                    return false;
                }
            }
            position++;
            break;
          case Key.ArrowUp:
            if (position <= 0) {
                if (this.getTypeDrop() === TypeDrop.Down) {
                    this.dropdown._toggle._elementRef.nativeElement.focus();
                    return false;
                }else {
                    position = list.length;
                }
            }
            position--;
            break;
        }

        if (position >= list.length) {
          position = list.length - 1;
        }

        if (position < 0) {
          position = 0;
        }

        const elm: HTMLElement = list[position];

        if (elm) {
          elm.focus();
          return false;
        } else {
          return true;
        }
    }
}
