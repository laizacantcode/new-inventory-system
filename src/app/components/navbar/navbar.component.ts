import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  formState!: boolean;
  @Output() openForm = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  openModal() {
    this.formState = true;
    this.openForm.emit(this.formState);
  }
}
