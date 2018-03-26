import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: '<h2>{{ getTitle() }}</h2>'//html markup to render in this component
})

export class CoursesComponent{
    //define a field to hold title of the page
    title = "List of courses";
    
    //define a method to get some value
    getTitle(){
        return this.title;
    }
}