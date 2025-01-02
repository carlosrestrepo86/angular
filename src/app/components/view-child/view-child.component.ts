import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit{
  @ViewChild('textArea') texrArea: ElementRef;
  @ViewChild('input') input: ElementRef;
  @Input() message !: string;
  @Output() output = new EventEmitter();

  private inputText = '';

  constructor() { }

  ngOnInit(): void {
  }

  viewName() {
    this.inputText = this.input.nativeElement.value;
    this.texrArea.nativeElement.value = this.inputText;
    this.output.emit({'text': this.inputText});
    this.inputText = '';
  }
}
