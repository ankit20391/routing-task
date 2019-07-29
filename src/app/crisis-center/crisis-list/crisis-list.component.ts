import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  selectedCrisis: Crisis;

  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(private crisisService: CrisisService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
      })
    );
    /* this.getHeroes(); */
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
  }

}
