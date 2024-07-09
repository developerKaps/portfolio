import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    const url = window.location.href.split('/');
    url.pop()
    window.location.href = url.join('/').concat('#home')
  } 

  activeTab: string = "home"
  isMenu: boolean = false;

  toggleBurgerMenu() {
    this.isMenu = !this.isMenu;
  }

  handleMenu(value: string){
    this.activeTab = value;
    this.toggleBurgerMenu()
  }
}
