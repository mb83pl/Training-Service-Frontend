import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subcategory } from '../../model/subcategory';
import { SubcategoryService } from '../../service/subcategory.service';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.css']
})
export class SubcategoryListComponent implements OnInit {

  subcat: Subcategory[] = [];

  constructor(private subcategoryService: SubcategoryService, private router: Router) { }

  ngOnInit(): void {
     this.subcategoryService.getSubcategoryList().subscribe((data) => this.subcat = data);
  }

}
