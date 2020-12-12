import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal() {
    const id = this.route.paramMap.pipe(
      switchMap((params) => {
        const name = params.get('name');
        console.log(name)
      })
    )
  }
}
