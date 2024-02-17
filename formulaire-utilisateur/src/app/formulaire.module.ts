import { NgModule } from '@angular/core';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ApiService } from './service/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [FormulaireComponent],
  providers: [ApiService],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatButtonModule,
    ],
  exports: [FormulaireComponent],
})
export class FormulaireComponentModule {}
