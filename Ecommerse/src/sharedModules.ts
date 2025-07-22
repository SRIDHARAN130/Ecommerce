import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {  MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatDialogModule } from '@angular/material/dialog'; // ✅ Module, not service
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from "@angular/material/radio";



export const shareImports = [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    RouterLink,
    RouterOutlet,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
]