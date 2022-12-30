import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  formState!: boolean;
  @Output() openForm = new EventEmitter<boolean>;

  constructor(private modal: MatDialog) { }

  ngOnInit(): void {}
  openModal(){
      this.formState = true
      this.openForm.emit(this.formState)
      console.log(this.formState)
  }

}
