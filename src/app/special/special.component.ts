import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherComponent } from "../another/another.component";

@Component({
    selector: 'app-special',
    standalone: true,
    templateUrl: './special.component.html',
    styleUrls: ['./special.component.scss'],
    imports: [CommonModule, AnotherComponent]
})
export class SpecialComponent {

}
