class Form {
    constructor(){
        this.title = createElement('h1');
       this.input = createInput('Enter Your Name');
       this.button = createButton('START') 
       this.instructions = createElement('textarea');
       this.image = loadImage("IMAGES/mainbackground.png");
    }

display(){
    background(this.image);
    //image(this.image, 0, 0, displayWidth, displayHeight);
    this.title.html("CHEST COLLECTOR");
    this.title.position(displayWidth/2 - 130, 0);

    this.instructions.html(" INSTRUCTIONS :  W - UP , D - RIGHT , A - LEFT , S - DOWN , E - PICK , F - OPEN THE DOOR");
    this.instructions.position(displayWidth/2 - 200 , displayHeight - 200 );

    this.input.position(displayWidth/2 - 50,displayHeight/2-150);
    this.input.size(200);
    this.button.position(displayWidth/2 + 1,displayHeight/2 -100);
}

}