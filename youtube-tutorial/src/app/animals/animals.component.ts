import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[];

  constructor(private animalsService: AnimalsService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalsService.getAnimals()
      .subscribe((animals) => {
        console.log(animals)
        this.animals = animals
      });
  }

}
