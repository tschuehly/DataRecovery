import { Component, OnInit } from '@angular/core';
import {Category, Product} from '../../model/model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  template: `
    <div class="flex container mx-auto h-full mb-20">
      <div class="m-auto" *ngIf="!editCategory">
        <h1 class="text-2xl text-center mb-10">Produktübersicht</h1>
        <table class="border table-auto mx-auto">
          <thead>
          <th class="border px-2 py-1">ID</th>
          <th class="border px-2 py-1">Kategorie</th>
          <th class="border px-2 py-1">Titel</th>
          <th class="border px-2 py-1">Ersatz</th>
          <th class="border px-2 py-1">Edit</th>
          </thead>
          <tbody>
          <tr *ngFor="let category of categories">
            <td class="border p-2">{{category.id}}</td>
            <td class="border p-2">{{category.name}}</td>
            <td class="border p-2">{{category.title}} </td>
            <td class="border p-2">{{category.replacement ? 'Ja':'Nein'}}</td>
            <td class="border pl-2">
              <button (click)="editCategory = category">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="28" height="28"
                     viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"/>
                  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"/>
                  <line x1="16" y1="5" x2="19" y2="8"/>
                </svg>
              </button>
            </td>

          </tr>
          </tbody>
        </table>
        <div class="text-right mt-4">
          <button class="button-primary" (click)="editCategory = newCategory()">Neue Kategorie</button>
        </div>
      </div>
      <div *ngIf="editCategory" class="m-auto border shadow-xl px-14 py-10">
        <app-category-detail [category]="editCategory"
                             (editCategory)="saveCategory($event)"
                             (delete)="deleteCategory($event)"
                             (close)="editCategory = null">
        </app-category-detail>
    </div>
    </div>
  `,
  styles: [
  ]
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  editCategory: Category;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('api/category').subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  saveCategory(categoryToSave: Category): void {
    if (categoryToSave.id === null){
      this.http.post('api/category', categoryToSave).subscribe((category: Category) => {
        if (this.categories.find(c => c.id === category.id)){
          this.categories = this.categories.map( c => c.id === category.id ? category : c);
        }else {
          this.categories.push(category);
        }
      });
    }else {
      this.http.put('api/category', categoryToSave).subscribe((category: Category) => {
        this.categories = this.categories.map( c => c.id === category.id ? category : c);
      });
    }
    this.editCategory = null;
  }

  newCategory(): Category{
    const cat = {} as Category;
    cat.questions = [];
    return this.editCategory = cat;
  }

  deleteCategory(categoryToDelete: Category): void {
    this.http.delete('api/category/' + categoryToDelete.id).subscribe(_ => {
      this.categories = this.categories.filter(c => c.id !== categoryToDelete.id);
    });
    this.editCategory = null;
  }
}
