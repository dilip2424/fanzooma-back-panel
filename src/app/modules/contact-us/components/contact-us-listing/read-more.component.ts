import { Component, Input, ElementRef, OnChanges } from "@angular/core";

@Component({
  selector: "app-read-more",
  template: `
    <div>
      {{ currentText }}
      <a class="text-warning" [class.hidden]="hideToggle" (click)="toggleView()"
        >[Read {{ isCollapsed ? "more]" : "less]" }}</a
      >
    </div>
  `,
  styles: [
    `
      div: {
        display: inline;
      }
      a {
        color: blue;
      }
      a.hidden {
        display: none;
      }
    `,
  ],
})
export class ReadMoreComponent implements OnChanges {
  @Input() text: string;
  @Input() maxLength: number = 100;
  currentText: string;
  hideToggle: boolean = true;

  public isCollapsed: boolean = true;

  constructor(private elementRef: ElementRef) {
  }

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  determineView() {
    if (!this.text || this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
    }

    this.hideToggle = false;
    if (this.isCollapsed) {
      this.currentText = this.text.substring(0, this.maxLength) + "...";
    } else {
      this.currentText = this.text;
    }
  }

  ngOnChanges() {
    this.isCollapsed = true;
    this.determineView();
  }
}
