import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Product } from '../../model/model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-detail',
  template: `
    <div>
      <h1 class="text-center text-2xl mb-5">Category: {{ category.name }}</h1>
      <div class="grid grid-cols-1 text-lg gap-4">
        <form
          [formGroup]="editCategoryForm"
          class="mx-auto text-center grid grid-cols-2 gap-2 justify-items-center"
        >
          <label
            >Name:
            <input
              type="text"
              formControlName="name"
              class="mt-1 mb-2 block pl-3"
            />
          </label>
          <label
            >Titel:
            <textarea
              type="text"
              formControlName="title"
              class="mt-1 mb-2 block pl-3"
            ></textarea>
          </label>
          <label
            >Sequenznummer:
            <input
              type="number"
              formControlName="sequenceId"
              class="mt-1 mb-2 block pl-3"
            />
          </label>
          <label
            >Ersatz:
            <div class="block p-2">
              <input
                type="radio"
                value="true"
                formControlName="replacement"
                class="mx-2"
              />Ja
              <input
                type="radio"
                value="false"
                formControlName="replacement"
                class="mx-2"
              />Nein
            </div>
          </label>
          <label class="col-span-2 w-full"
            >Beschreibung:
            <textarea
              type="text"
              formControlName="description"
              class="mt-1 mb-2 block pl-3 w-full"
            ></textarea>
          </label>
          <label
            >Vorhandene Fragen:
            <table class="table-auto border">
              <tr class="border" *ngFor="let question of category.questions">
                <td class="p-2">
                  {{ question }}
                </td>
              </tr>
            </table>
          </label>
          <label
            >Neue Frage
            <input class="block mt-4" type="text" #question />
            <button
              (click)="addQuestion(question.value)"
              class=" my-4 border-2 rounded-md p-2 border-black"
            >
              Neue Frage hinzufügen
            </button>
          </label>
        </form>
        <div class="flex justify-between mt-6">
          <button
            (click)="saveCategory()"
            class="border-2 rounded-md p-2 border-black"
          >
            Speichern
          </button>
          <button
            (click)="showConfirm = true"
            class="border-2 rounded-md p-2 bg-red-500 border-black"
          >
            Kategorie löschen
          </button>
          <button
            (click)="close.emit()"
            class="border-2 rounded-md p-2 border-black"
          >
            Schließen
          </button>
        </div>
        <div
          class="grid grid-cols-1 gap-4 text-center justify-center mt-6"
          *ngIf="showConfirm"
        >
          Bist du dir sicher das du die Kategorie löschen willst?
          <button
            (click)="delete.emit(category)"
            class="border-2 rounded-md p-2 bg-red-500 border-black"
          >
            Ja lösche die Kategorie
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;
  @Output() editCategory: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() delete: EventEmitter<Category> = new EventEmitter<Category>();
  editCategoryForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  showConfirm = false;
  ngOnInit(): void {
    this.editCategoryForm = this.fb.group({
      id: [this.category.id],
      name: [this.category.name],
      title: [this.category.title],
      description: [this.category.description],
      replacement: [this.category.replacement],
      questions: this.fb.array(this.category.questions),
      sequenceId: [this.category.sequenceId],
    });
  }

  saveCategory(): void {
    this.category = this.editCategoryForm.getRawValue() as Category;
    console.log(this.category);
    this.editCategory.emit(this.category);
  }

  addQuestion(value: string): void {
    this.category.questions.push(value);
    (this.editCategoryForm.get('questions') as FormArray).push(
      this.fb.control(value)
    );
  }
}
