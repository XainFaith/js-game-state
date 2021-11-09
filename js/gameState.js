/*
/   Base Class for extending to make differnt Game States,
/   A Game state can be seperate screens or even animations of a given sprite etc
*/
class GameState
{
    app;

    constructor(app)
    {
        this.app = app;
    }

    addedToStage(stage)
    {

    }

    removedFromStage(stage)
    {

    }

    update(delta)
    {

    }
}

//Very basic example state
class StartState extends GameState
{
    //Used to keep track of elasped ms
    deltaCount = 0;

    constructor(app)
    {
        super(app);
    }

    //Called when the State is first switched too, can be used to added sprites to the stage etc
    addedToStage(stage)
    {
        console.log("Start State Added to stage");
        this.app.renderer.backgroundColor = 0x0000FF;
    }

    //Called when a new state is being switched to, can be used to remove sprites, gui etc
    removedFromStage(stage)
    {
        console.log("Start State removed from stage");
    }

    //Update loop do updates the state requires, return the next state to be used when done with this state
    update(delta)
    {
        this.deltaCount += delta;

        if(this.deltaCount >= 2000)
        {
            return new MiddleState(this.app);
        }
    }

}

//Very basic example state
class MiddleState extends GameState
{
    //Used to keep track of elasped ms
    deltaCount = 0;

    constructor(app)
    {
        super(app);
    }

    //Called when the State is first switched too, can be used to added sprites to the stage etc
    addedToStage(stage)
    {
        console.log("Middle State Added to stage");
        this.app.renderer.backgroundColor = 0xFF0000;
    }

    //Called when a new state is being switched to, can be used to remove sprites, gui etc
    removedFromStage(stage)
    {
        console.log("Middle State removed from stage");
    }

    //Update loop do updates the state requires, return the next state to be used when done with this state
    update(delta)
    {
        this.deltaCount += delta;

        if(this.deltaCount >= 2000)
        {

            return new EndState(this.app);
        }
    }
}

//Very basic example state
class EndState extends GameState
{
    //Used to keep track of elasped ms
    deltaCount = 0;

    constructor(app)
    {
        super(app);
    }

    //Called when the State is first switched too, can be used to added sprites to the stage etc
    addedToStage(stage)
    {
        console.log("End State Added to stage");
        this.app.renderer.backgroundColor = 0x00FF00;
    }

    //Called when a new state is being switched to, can be used to remove sprites, gui etc
    removedFromStage(stage)
    {
        console.log("End State removed from stage");
    }

    //Update loop do updates the state requires, return the next state to be used when done with this state
    update(delta)
    {
        this.deltaCount += delta;

        if(this.deltaCount >= 2000)
        {
            return new StartState(this.app);
        }
    }
}