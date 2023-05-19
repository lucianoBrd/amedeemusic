import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language.interface';
import { TextService } from '../../service/text.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
  public language: Language;
  
  constructor() {
    this.language = TextService.getTextByLocal(); 
  }

  ngOnInit() { }

}
