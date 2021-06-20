import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subcategory } from '../../model/subcategory';
import { SubcategoryService } from '../../service/subcategory.service';

@Component({
  selector: 'app-subcategory-add',
  templateUrl: './subcategory-add.component.html',
  styleUrls: ['./subcategory-add.component.css']
})
export class SubcategoryAddComponent implements OnInit {

  submitted = false;

  subcatAddForm = new FormGroup({
    id: new FormControl(""),
    name: new FormControl("", Validators.required),
    description: new FormControl("", [
      Validators.required,
      Validators.maxLength(300)
    ])
  });

  constructor(private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
  }

  saveSubcat() {
    const subcat:Subcategory = this.subcatAddForm.value;
      this.subcategoryService.addNewSubCat(subcat);
      this.submitted = true;
      console.log("Saved subcat", subcat);
      this.subcatAddForm.reset();
  }

}
