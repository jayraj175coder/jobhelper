import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-landing',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {} 