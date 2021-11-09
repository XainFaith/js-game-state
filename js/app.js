class TestBedApp
{
    static instance = null;
    app;

    state;

    constructor(app)
    {
        
        app.ticker.add(this.tick);

        if(TestBedApp.instance == null)
        {
            TestBedApp.instance = this;
        }

        this.app = app;

        this.state = new StartState(this.app);
        this.state.addedToStage(this.app.stage);
    }

    tick(delta)
    {
        delta = TestBedApp.instance.app.ticker.elapsedMS;
        TestBedApp.instance.update(delta);
    }

    update(delta)
    {
        //If the result returned is not defined then its the next state to switch too
        let resultState = this.state.update(delta);
        if(resultState !== undefined && resultState !== null)
        {
            this.state.removedFromStage(this.app.stage);    //Switching to a new state let the old state know its being removed from stage
            resultState.addedToStage(this.app.stage);       //let the new state know its being added to the stage
            this.state = resultState;                       //Update the current state to be the new state
        }
    }
}


window.onload = function()
{

    // Use the native window resolution as the default resolution
    // will support high-density displays when rendering
    PIXI.settings.RESOLUTION = window.devicePixelRatio;

    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application({width: 1024, height: 800, backgroundColor: 0xdbdbdb});
    


    // The application will create a canvas element for you that you
    // can then insert into the DOM
    document.body.appendChild(app.view);

    window.testBedApp = new TestBedApp(app);
}