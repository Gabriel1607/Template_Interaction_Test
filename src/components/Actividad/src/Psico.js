import Game from "./Game";


class Psico {

    constructor(actividad){
        this.actividad = actividad;
        this.introScreen = null;
        this.scene1Screen = null;
        this.scene2Screen = null;
        this.scene3Screen = null;
        this.scene4Screen = null;
        this.scene5Screen = null;
        this.scene6Screen = null;
        this.scene7Screen = null;
        this.scene8Screen = null;
        this.scene9Screen = null;
        this.scene10Screen = null;
        this.scene11aScreen = null;
        this.scene11bScreen = null;
        this.scene11cScreen = null;
        this.scene11dScreen = null;
        this.scene12Screen = null;
        this.sceneAlertaScreen = null;
        this.sceneAnaScreen = null;
        this.sceneAndresScreen = null;
        this.sceneRubenScreen = null;
        this.sceneUsedScreen = null;
        this.AndresHL = null;
        this.AnaHL = null;
        this.RubenHL = null;
        this.AnaMov = null;
        this.AndresMov = null;
        this.RubenMov = null;
        this.pantalla = 0;
        this.winCondition = " ";
        this.lastScreen = 0;
        this.useHelp = false;
        this.pickAna = false;
        this.pickAndres = false;
        this.pickRuben = false;
        this.inocente="";
        this.culpable="";
        this.complice="";
        this.roboto = null;
        this.time= 0;
		this.seconds = 0;
        this.minutes = 0;
        this.timeLimit=0;
        this.start = 0;
        this.end=0;
        this.puntaje=0;
        this.interactionStarted = false;
        
    }

    setup(app){
    this.introScreen = app.loadImage("/PSICO/Intro.png");
    this.scene1Screen = app.loadImage("/PSICO/Escena1.png");
    this.scene2Screen = app.loadImage("/PSICO/Escena2.png");
    this.scene3Screen = app.loadImage("/PSICO/Escena3.png");
    this.scene4Screen = app.loadImage("/PSICO/Escena4.png");
    this.scene5Screen = app.loadImage("/PSICO/Escena5.png");
    this.scene6Screen = app.loadImage("/PSICO/Escena6.png");
    this.scene7Screen = app.loadImage("/PSICO/Escena7.png");
    this.scene8Screen = app.loadImage("/PSICO/Escena8.png");
    this.scene9Screen = app.loadImage("/PSICO/Escena9.png");
    this.scene10Screen = app.loadImage("/PSICO/Escena10.png");
    this.scene11aScreen = app.loadImage("/PSICO/Escena11a.png");
    this.scene11bScreen = app.loadImage("/PSICO/Escena11b.png");
    this.scene11cScreen = app.loadImage("/PSICO/Escena11c.png");
    this.scene11dScreen = app.loadImage("/PSICO/Escena11d.png");
    this.scene12Screen = app.loadImage("/PSICO/Escena12.png");
    this.sceneAlertaScreen = app.loadImage("/PSICO/Alerta.png");
    this.sceneAnaScreen = app.loadImage("/PSICO/AnaDS.png");
    this.sceneAndresScreen = app.loadImage("/PSICO/AndresDS.png");
    this.sceneRubenScreen = app.loadImage("/PSICO/RubenDS.png");
    this.sceneUsedScreen = app.loadImage("/PSICO/Used.png");
    this.AndresHL = app.loadImage("/PSICO/AndresHL.png");
    this.AnaHL = app.loadImage("/PSICO/AnaHL.png");
    this.RubenHL = app.loadImage("/PSICO/RubenHL.png");
    this.roboto = app.loadFont("/PSICO/RobotoMono.ttf")
    this.AnaMov = app.createVideo(["/PSICO/Ana.webm"]);  
    this.AnaMov.hide();
    this.AndresMov = app.createVideo(["/PSICO/Andres.webm"]);
    this.AndresMov.hide();
    this.RubenMov = app.createVideo(["/PSICO/Ruben.MOV"]);
    this.RubenMov.hide();
    this.start = app.millis();
    }
     Chrono(app) {
         if(this.interactionStarted){
        this.timeLimit=5;
        this.diff = this.end-this.start;
        this.time = (this.timeLimit*60*1000 - (app.millis() - this.diff));
        this.minutes = (this.time/(60*1000));
        this.seconds = (this.time/(1000));
        if(this.seconds<=0){
            this.winCondition="timesUp";
            this.RubenMov.stop();
            this.AnaMov.stop();
            this.AndresMov.stop();
            this.pantalla=11;
        }
    }
    
	
}
Score(app){
if(this.inocente=="ANDRES"&&this.culpable=="RUBEN"&&this.complice=="ANA"){
    this.winCondition="allCorrect";
    this.puntaje=200;
}else if(this.inocente=="ANDRES"||this.culpable=="RUBEN"||this.complice=="ANA"){
    this.winCondition="someCorrect";
    this.puntaje=100;
}else{
    this.winCondition="Wrong";
}
}

    draw(app) {
       this.changeScreen(app);
       if(this.winCondition!="timesUp"){
        this.Chrono(app);
       }
        console.log(app.mouseX+" "+app.mouseY);
        //console.log(this.puntaje);
        
    }
    changeScreen(app){
        
        switch(this.pantalla){
            case 0:
                app.image(this.introScreen,0,0);
                
                break;
            case 1:
                app.image(this.scene1Screen,0,0);
                app.textSize(28);
                app.fill(255);
                app.textAlign(app.LEFT);
                app.text(parseInt(this.minutes.toString()) + ":" + parseInt((this.seconds%60).toString()), 920, 162);
                break;
            case 2:
                app.image(this.scene2Screen,0,0);
                break;
            case 3:
                    app.image(this.scene3Screen,0,0);
                    break;
            case 4:
                        app.image(this.scene4Screen,0,0);
                        break;
                        case 5:
                            app.image(this.scene5Screen,0,0);
                            app.image(this.RubenMov, 351, 201,792,374);
                            break;
                        case 6:
                                app.image(this.scene6Screen,0,0);
                                app.image(this.AnaMov, 351, 201,792,374);
                                break;
                        case 7:
                                    app.image(this.scene7Screen,0,0);
                                    app.image(this.AndresMov, 351, 201,792,374);
                                    break;
                                    case 8:
                                        app.image(this.scene8Screen,0,0);
                                        app.textFont(this.roboto);
                                        app.textSize(28);
                                        app.fill(255);
                                        app.textAlign(app.LEFT);
                                        app.text(parseInt(this.minutes.toString()) + ":" + parseInt((this.seconds%60).toString()), 1092, 86);
                                                app.textSize(28);
                                                app.fill(255);
                                                app.textAlign(app.CENTER);
                                        switch(this.culpable){
                                            case "ANDRES":
                                                app.text("Andrés",474,616);
                                            break;
                                            case "ANA":
                                                app.text("Ana",474,616);
                                                break;
                                                case "RUBEN":
                                                   
                                                app.text("Rubén",474,616);
                                                    break;
                                            }
                                       
                                        break;
                                    case 9:
                                        app.image(this.scene9Screen,0,0);
                                        app.textFont(this.roboto);
                                        app.textSize(28);
                                        app.fill(255);
                                        app.textAlign(app.LEFT);
                                        app.text(parseInt(this.minutes.toString()) + ":" + parseInt((this.seconds%60).toString()), 1092, 86);
                                                app.textSize(28);
                                                app.fill(255);
                                                app.textAlign(app.CENTER);
                                        switch(this.inocente){
                                            case "ANDRES":
                                                
                                                app.text("Andrés",474,616);
                                            break;
                                            case "ANA":
                                                
                                                app.text("Ana",474,616);
                                                break;
                                                case "RUBEN":
                                                 
                                                app.text("Rubén",474,616);
                                                    break;
                                            }
                                        break;
                                    case 10:
                                    app.image(this.scene10Screen,0,0);
                                    app.textFont(this.roboto);
                                    app.textSize(28);
                                    app.fill(255);
                                    app.textAlign(app.LEFT);
                                    app.text(parseInt(this.minutes.toString()) + ":" + parseInt((this.seconds%60).toString()), 1092, 86);
                                            app.textSize(28);
                                            app.fill(255);
                                            app.textAlign(app.CENTER);
                                    switch(this.complice){
                                        case "ANDRES":
                                            
                                            app.text("Andrés",474,616);
                                        break;  
                                        case "ANA":
                                           
                                            app.text("Ana",474,616);
                                            break;
                                            case "RUBEN":
                                           
                                            app.text("Rubén",474,616);
                                                break;
                                        }
                                        break;
                                    case 11:
                                        switch(this.winCondition){
                                        case "allCorrect":
                                            app.image(this.scene11bScreen,0,0);
                                            break;
                                        case "someCorrect":
                                            app.image(this.scene11dScreen,0,0);
                                            break;
                                        case "timesUp":
                                            app.image(this.scene11cScreen,0,0);
                                            break;
                                        default:
                                            app.image(this.scene11aScreen,0,0);
                                        }
                                       
                                       break;
                                    case 12:
                                        app.image(this.scene12Screen,0,0);
                                        break;
        }
        //DESACTIVAR CIERTOS BOTONES
        if(this.pantalla==8||this.pantalla==9||this.pantalla==10){
            if(this.useHelp){
                app.image(this.sceneUsedScreen,0,0);
                }
            if(this.pickAna){
                app.image(this.sceneAnaScreen,0,0);
            }
            if(this.pickAndres){
                app.image(this.sceneAndresScreen,0,0);
            }
            if(this.pickRuben){
                app.image(this.sceneRubenScreen,0,0);
            }
         //ANDRES GOMEZ
         if ((this.pickAndres==false)&&(134< app.mouseX && app.mouseX <319) && (434 < app.mouseY && app.mouseY < 491)) {
            app.image(this.AndresHL,0,0);
            }
             //ANA VASQUEZ
             if ((this.pickAna==false)&&(702< app.mouseX && app.mouseX <886) && (434 < app.mouseY && app.mouseY < 491)) {
                app.image(this.AnaHL,0,0);
                }
                 //RUBEN PELAEZ
            if ((this.pickRuben==false)&&(425< app.mouseX && app.mouseX <609) && (434 < app.mouseY && app.mouseY < 491)) {
                app.image(this.RubenHL,0,0);
                }
        }
    }

    mousePressed(app){
       switch(this.pantalla){
           //Intro a Escena 1
        case 0:
            if ((110 < app.mouseX && app.mouseX < 374) && (497 < app.mouseY && app.mouseY < 566)) {
                this.end = app.millis();
                this.interactionStarted=true;
                this.pantalla = 1;
            }
                
             
            break;
        case 1:
            //Escena 1 a Escena 2
            if ((544 < app.mouseX && app.mouseX < 688) && (429 < app.mouseY && app.mouseY < 498)) {
                this.pantalla = 2;
            }
            break;
            case 2:
                //Esc.2 a Esc.3(MICROEXPRESIONES)
                if ((483 < app.mouseX && app.mouseX < 748) && (429 < app.mouseY && app.mouseY < 498)) {
                    this.lastScreen=0;
                    this.pantalla = 3;
                }
                break;
                case 3:
                    //Esc.3 a Esc.4
                    if ((977 < app.mouseX && app.mouseX < 1122) && (542 < app.mouseY && app.mouseY < 613)) {
                        switch(this.lastScreen){
                            case 0:
                                this.pantalla = 4;
                                break;
                                case 1:
                                    this.pantalla = 8;
                                    break;
                                    case 2:
                                this.pantalla = 9;
                                break;
                                case 3:
                                this.pantalla = 10;
                                break;
                            }
                        
                    }
                    break;
                    case 4:
                        //Esc.4 a PRIMER SOSPECHOSO
                        if ((483 < app.mouseX && app.mouseX < 748) && (429 < app.mouseY && app.mouseY < 498)) {
                            this.pantalla = 5;
                        }
                        break;
                        case 5:
                            // PRIMER SOSPECHOSO a SOSPECHOSO 2
                            if ((1037 < app.mouseX && app.mouseX < 1142) && (589 < app.mouseY && app.mouseY < 641)) {
                                this.pantalla = 6;
                                this.RubenMov.stop();
                            }
                            // REPRODUCIR PRIMER VIDEO
                            if ((730 < app.mouseX && app.mouseX < 772) && (361 < app.mouseY && app.mouseY < 410)) {
                                this.RubenMov.play();
                            }
                            break;
                            case 6:
                                // PRIMER SOSPECHOSO2 a SOSPECHOSO 3
                                if ((1037 < app.mouseX && app.mouseX < 1142) && (589 < app.mouseY && app.mouseY < 641)) {
                                    this.pantalla = 7;
                                    this.AnaMov.stop();
                                }
                                // REPRODUCIR 2do VIDEO
                                if ((730 < app.mouseX && app.mouseX < 772) && (361 < app.mouseY && app.mouseY < 410)) {
                                    this.AnaMov.play();
                                }
                                break;
                                case 7:
                                    // SOSPECHOSO 3 a culpable
                                    if ((850 < app.mouseX && app.mouseX < 1142) && (589 < app.mouseY && app.mouseY < 641)) {
                                        this.pantalla = 8;
                                        this.AndresMov.stop();
                                    }
                                    // REPRODUCIR 3er VIDEO
                                    if ((730 < app.mouseX && app.mouseX < 772) && (361 < app.mouseY && app.mouseY < 410)) {
                                        this.AndresMov.play();
                                    }
                                    break;
                                    case 8:
                                        //CULPABLE A INOCENTE
                                        if ((1008< app.mouseX && app.mouseX <1112) && (578 < app.mouseY && app.mouseY < 631)) {
                                            switch(this.culpable){
                                            case "ANDRES":
                                            this.pickAndres=true;
                                            break;
                                            case "ANA":
                                                this.pickAna=true;
                                                break;
                                                case "RUBEN":
                                                    this.pickRuben=true;
                                                    break;
                                                default:
                                                return;
                                            }
                                            this.pantalla = 9;
                                        }
                                        //CULPABLE A MICROEXP.
                                        if ((!this.useHelp)&&(1044< app.mouseX && app.mouseX <1170) && (421 < app.mouseY && app.mouseY < 466)) {
                                            this.lastScreen=1;
                                            this.useHelp = true;
                                            this.pantalla = 3;
                                        }
                                        //ANDRES GOMEZ
                                        if ((this.pickAndres==false)&&(134< app.mouseX && app.mouseX <319) && (434 < app.mouseY && app.mouseY < 491)) {
                                        this.culpable = "ANDRES";
                                        }
                                         //ANA VASQUEZ
                                         if ((this.pickAna==false)&&(702< app.mouseX && app.mouseX <886) && (434 < app.mouseY && app.mouseY < 491)) {
                                            this.culpable = "ANA";
                                            }
                                             //RUBEN PELAEZ
                                        if ((this.pickRuben==false)&&(425< app.mouseX && app.mouseX <609) && (434 < app.mouseY && app.mouseY < 491)) {
                                            this.culpable = "RUBEN";
                                            }
                                        break;
                                        case 9:
                                            //INOCENTE A CÓMPLICE
                                            if ((1008< app.mouseX && app.mouseX <1112) && (578 < app.mouseY && app.mouseY < 631)) {
                                                switch(this.inocente){
                                                    case "ANDRES":
                                                    this.pickAndres=true;
                                                    break;
                                                    case "ANA":
                                                        this.pickAna=true;
                                                        break;
                                                        case "RUBEN":
                                                            this.pickRuben=true;
                                                            break;
                                                        default:
                                                        return;
                                                    }
                                                this.pantalla = 10;
                                            }
                                            //INOCENTE A MICROEXP.
                                        if ((!this.useHelp)&&(1044< app.mouseX && app.mouseX <1170) && (421 < app.mouseY && app.mouseY < 466)) {
                                            this.lastScreen=2;
                                            this.useHelp = true;
                                            this.pantalla = 3;
                                        }
                                         //ANDRES GOMEZ
                                         if ((this.pickAndres==false)&&(134< app.mouseX && app.mouseX <319) && (434 < app.mouseY && app.mouseY < 491)) {
                                            this.inocente = "ANDRES";
                                            }
                                             //ANA VASQUEZ
                                             if ((this.pickAna==false)&&(702< app.mouseX && app.mouseX <886) && (434 < app.mouseY && app.mouseY < 491)) {
                                                this.inocente = "ANA";
                                                }
                                                 //RUBEN PELAEZ
                                            if ((this.pickRuben==false)&&(425< app.mouseX && app.mouseX <609) && (434 < app.mouseY && app.mouseY < 491)) {
                                                this.inocente = "RUBEN";
                                                }
                                            break;
                                            case 10:
                                                //COMPLICE A VEREDICTO
                                                if ((902< app.mouseX && app.mouseX <1167) && (569 < app.mouseY && app.mouseY < 641)) {
                                                    switch(this.complice){
                                                        case "ANDRES":
                                                        this.pickAndres=true;
                                                        break;
                                                        case "ANA":
                                                            this.pickAna=true;
                                                            break;
                                                            case "RUBEN":
                                                                this.pickRuben=true;
                                                                break;
                                                            default:
                                                            return;
                                                        }
                                                    this.interactionStarted=false;
                                                    this.Score(app);
                                                    this.pantalla = 11;
                                                }
                                                //COMPLICE A MICROEXP.
                                        if ((!this.useHelp)&&(1044< app.mouseX && app.mouseX <1170) && (421 < app.mouseY && app.mouseY < 466)) {
                                            this.lastScreen=3;
                                            this.useHelp = true;
                                            this.pantalla = 3;
                                        }   
                                        //ANDRES GOMEZ
                                        if ((this.pickAndres==false)&&(134< app.mouseX && app.mouseX <319) && (434 < app.mouseY && app.mouseY < 491)) {
                                            this.complice = "ANDRES";
                                            }
                                             //ANA VASQUEZ
                                             if ((this.pickAna==false)&&(702< app.mouseX && app.mouseX <886) && (434 < app.mouseY && app.mouseY < 491)) {
                                                this.complice = "ANA";
                                                }
                                                 //RUBEN PELAEZ
                                            if ((this.pickRuben==false)&&(425< app.mouseX && app.mouseX <609) && (434 < app.mouseY && app.mouseY < 491)) {
                                                this.complice = "RUBEN";
                                                }
                                                break;
                                                case 11:
                                                    //Escena 11 a RESULTADOS
                                                    if ((544 < app.mouseX && app.mouseX < 688) && (429 < app.mouseY && app.mouseY < 498)) {
                                                        this.pantalla = 12;
                                                    }
                                                    break;
                                                    case 12:
                                                        //FINALIZAR INTERACCION
                                                        if ((386 < app.mouseX && app.mouseX < 652) && (622 < app.mouseY && app.mouseY < 689)) {
                                                            this.actividad.addResult([{id:"PSICOLOGIA",value:this.puntaje}])
                                                             this.actividad.finish();
                                                        }
                                                        break;
                                    
       }
    }

}

export default Psico;