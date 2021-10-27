class Game {

    constructor(actividad) {
        this.actividad = actividad;
        console.log("CLASE GAME CARGADA")
    }

    draw(app){
        app.text("ESTE ES EL JUEGO", 100, 100)
        app.rect(100,200, 100,100)
    }

    mousePressed(){
        this.actividad.goName("JUEGO")
    }
}

export default Game;