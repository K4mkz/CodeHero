import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnInit, OnChanges {
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() size: string = '';
  @Input() maxWidth: string = '';
  @Input() height: string = '';
  @Input() width: string = '';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    if (this.size) {
      this.height = this.size;
      this.width = this.size;
    }

    this.matIconRegistry.addSvgIcon(
      this.icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/' + this.icon + '.svg'
      )
    );
  }

  ngOnChanges() {
    this.matIconRegistry.addSvgIcon(
      this.icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/' + this.icon + '.svg'
      )
    );
  }
}
