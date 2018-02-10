export class LikeComponent{

    //set the initial value
    constructor(public likesCount: number, public isSelected: boolean){
        
    }
    //method, check to see unselected or not
    onClick(){
        // if (this.isSelected){
            //if it's selected then decrease num of likes
        //     this.likesCount--;
            //and set isSelected to false
        //     this.isSelected = false;
        // }
        // else{
            //otherwise if button isn't selected then increase likesCount
        //     this.likesCount++;
        //     this.isSelected = true; //and set isSelected to true

        // }
        //these two lines summarizes the above logic into two lines
        //a cleaner implementation
        this.likesCount += (this.isSelected)? -1: +1;
        this.isSelected = !this.isSelected;

    }
}