import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {
  @Input() text!: string;
  checked = true;
  result = 'cheked';
  value = 'Clear me';

  doCheked() {
    if(this.checked) {
      this.result = 'cheked';
    } else {
      this.result = 'not checed';
    }
  }

}
