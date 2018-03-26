import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{ getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    
    </ul>
    `//html markup to render in this component
})

export class CoursesComponent{
    //define a field to hold title of the page
    title = "List of courses";
    
    //define a method to get some value
    // getTitle(){
    //     return this.title;
    // }

    //list of courses
    courses = ["course1", "course2", "course3"];
}