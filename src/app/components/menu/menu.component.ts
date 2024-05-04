import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  sideBarVisible = false;

  mostrarSideBar() {
    this.sideBarVisible = true;
  }

  fecharSideBar() {
    this.sideBarVisible = false;
  }

}
