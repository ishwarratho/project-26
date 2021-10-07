class Board {
    constructor (x, y, width, height) {
        var options = {
            isStatic: ture
        };

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        this.image = loadImage("assets/board.png", options);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        Pop();
    }
}