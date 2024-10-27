import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10,
    transformaciones: 3
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter

  // onDeleteId = Index value : number

  onDeleteChacarter(id?: string):void {

    if ( !id ) return;

    this,this.onDelete.emit( id )
  }

}
