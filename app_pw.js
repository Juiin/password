var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    res.sendFile(__dirname + '/client/password/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
 
var PORT = process.env.PORT || 11156;
serv.listen(PORT);
console.log("Server started.");

var SOCKET_LIST = {};
var DEBUG = true;

var data = ["steuer","strudel","taste","tokio","verband","washington","wirtschaft","zelle","zylinder","wind","stift","stuhl","tau","ton","verein","wasser","wolkenkratzer","zentaur","zahn","winnetou","stock","superheld","teleskop","tor","viertel","watt","wurf","zitrone","zeit","wand","strand","tafel","tempo","torte","vorsatz","weide","w√ºrfel","zoll","zwerg","wanze","stra√üe","tag","theater","turm","wald","welle","wurm","zug","umzug","tod","strau√ü","takt","toast","uhr","tanz","strom","pass","pinguin","prinzessin","rolle","saturn","schiff","schnur","spion","peitsche","pirat","punkt","riegel","rom","satz","schimmel","schokolade","shakespeare","staat","peking","pistole","pyramide","r√∂mer","schale","schirm","schotten","siegel","stadion","pension","platte","quartett","riese","rost","schalter","schlange","schuh","skelett","stamm","pferd","po","quelle","ring","roulette","scheibe","schloss","schule","soldat","stempel","pflaster","rasen","ritter","r√ºcken","schein","schnee","schuppen","spiel","stern","pilot","polizei","raute","rock","rute","schelle","schneemann","seite","spinne","krankenhaus","kunde","leim","l√∂ffel","matte","mikroskop","m√ºhle","netz","√∂l","krankheit","lager","maler","maus","million√§r","mund","new york","oper","opfer","krebs","lakritze","limousine","london","mandel","meer","mini","muschel","niete","optik","kreis","laser","linie","l√∂sung","mangel","melone","mittel","mutter","ninja","orange","kreuz","laster","linse","l√∂we","mark","messe","moos","nacht","note","osten","krieg","leben","loch","luft","maschine","messer","morgenstern","nadel","nuss","papier","krone","lehrer","loch ness","mast","mexiko","moskau","nagel","oktopus","geist","glocke","grund","hase","honig","hut","k√§fer","karte","kippe","k√∂nig","genie","gl√ºck","g√ºrtel","haupt","horn","indien","kamm","kasino","kirche","k√∂nigin","gericht","gold","gut","heide","horst","inka","kanal","kater","kiwi","konzert","geschirr","golf","hahn","hering","hotel","j√§ger","k√§nguruh","katze","knie","korb","geschoss","grad","hamburger","herz","hubschrauber","jahr","kapelle","kerze","knopf","korn","gesicht","gras","hand","himalaja","hund","jet","kapit√§n","ketchup","koch","kraft","glas","griechenland","harz","hollywood","hupe","jura","karotte","kiefer","kohle","bindung","birne","bremse","chor","dieb","eis","europa","fest","fleck","fuchs","blatt","bombe","br√∂tchen","dame","dietrich","elfenbein","fackel","figur","fliege","funken","blau","boot","bulle","daumen","dinosaurier","england","fall","film","fl√∂te","fu√ü","blinker","b√∂rse","burg","decke","doktor","ente","fallschirm","finger","fl√ºgel","futter","bl√ºte","botschaft","busch","demo","drache","erde","feder","fisch","flur","gabel","bock","boxer","chemie","deutschland","drossel","feige","fl√§che","forscher","gehalt","bogen","brause","china","drucker","dichtung","essen","fessel","flasche","frankreich","ladung","mond","leiter","wal","star","tisch","feuer","pfeife","br√ºcke","gang","gift","iris","taucher","elf","bergsteiger","tausch","bund","hexe","l√§ufer","einhorn","koks","roboter","mine","engel","lippe","satellit","schild","olymp","brand","schnabeltier","abgabe","absatz","adler","afrika","√§gypten","akt","alien","auge","amerikaner","antarktis","anwalt","apfel","arm","atlantis","atlas","auflauf","aufzug","ausdruck","australien","auto","back","bahn","ball","bande","bank","bar","b√§r","bart","batterie","bau","bauer","bayern","becken","bein","bett","TITANIC","COMPUTER","ABSTURZ","MAGAZIN","ZUFALL","CYBERSEX","KOSTENPFLICHTIG","KREDITKARTE","EISENBAHN","KRATZER","ARBEITSINSTRUMENT","AUSBLICK","NASENSCHLEIM","GANGSCHALTUNG","OPFER","REIS","ESSSTAEBCHEN","LIEGESTUHL","STROHHALM","LAWINE","WEINTRAUBE","DATENVERARBEITUNG","PORZELLAN","AKTIE","QUALLE","MARATHON","PFERDERENNEN","ORCHESTER","NATURKATASTROPHE","KAPITAL","POST","DATENBANK","PFANNE","MAUSTASTE","HANDBUCH","VITAMINE","FEUERWEHR","FUSSBALL","PROTOKOLL","KALENDER","TELEFON","ANANAS","HALLO","KILOMETER","WURSTSALAT","POLIZEI","SCHWARZMARKT","PENISOPERATION","LOEFFEL","MAISKOLBEN","KIPPE","BIER","TATSACHE","ARSCHGESICHT","EISTEE","OBERAFFENMEGAGEIL","RABE","PARANOID","SCHLAFWANDLER","BLIND","EGAL","ARZTHELFER","PFERD","KNOCHEN","BRECHEN","LACHEN","ENTSCHEIDUNG","BALLON","LIEBE","REDEN","HAUS","BAUMSTAMM","AQUARIUM","WECHSELGELD","KELLNER","WOERTERBUCH","ZEBRA","KOFFERRAUM","FLUGZEUGABSTURZ","PAPST","KATZENKLO","ZIELPUNKT","FEHLER","MATHEMATIK","MORD","WUNDER","BODEN","STRASSENBAHN","COMPUTERSPIEL","MITTERNACHT","GOLDFISCH","HAMSTER","PAPRIKA","SCHIMMEL","KASTEN","GURKE","OBSTSALAT","VORHANG","SPUELMITTEL","LATEIN","DEUTSCH","ZEICHNEN","TURNEN","BIOLOGIE","CHEMIE","PHYSIK","GEOGRAFIE","RELIGION","PSYCHOLGIE","SCHNITZEL","ALPHABET","PULLOVER","JEANS","HANDTUCH","WEIHNACHTEN","BIENE","SEESTERN","SAND","LEXIKON","WACHSEN","LESEN","DENKEN","MUEDE","BUEHNE","TISCHDECKE","UNKRAUT","TEPPICH","UMGEBUNG","ASCHENBECHER","ZIGARETTEN","FENSTER","WINTER","SONNENSCHEIN","SCHATZ","ENGEL","COMPUTER","ZWERG","KINDERWAGEN","AUTO","HINZUFUEGEN","ANZAHL","ANSCHLAG","HAMMER","VOGEL","SCHRAUBE","ROSE","HOSE","HIER","KLEIN","ALLIANZ","APFELSAFT","NOTEBOOK","BRIEFUMSCHLAG","HANDY","TASCHENTUCH","KARTON","PAPIER","STIFT","RECHTSANWALT","KABEL","WEIHNACHTSBAUM","LICHTERKETTE","LAMPE","GUMMIBAND","SCHRANK","BUEROKLAMMER","UNIVERSITAET","KOPF","BEIN","SPORT","BALL","DRAHTLOS","CHEF","PFADFINDER","FEUERMELDER","LEHRER","KLASSENZIMMER","STUHL","TOILETTE","TELEFONNUMMER","AUTOHAENDLER","WERKSTATT","WASSER","UHRZEIT","TUER","GESCHENK","HANDTASCHE","VENTILATOR","HEIZUNG","RUECKEN","ESSEN","ENERGIE","STOCKWERK","MARKT","KREUZWORTRAETSEL","INTERNET","TASSE","KUEHLSCHRANK","TELLER","GABEL","MESSER","MEDIKAMENT","FRAU","MANN","VIRUS","SCHORNSTEIN","DACH","ZIEGELSTEIN","ZIMT","ZUCKER","MARMELADE","SCHINKEN","BUTTER","MUSIK","TROMPETE","GARTEN","BUS","REIFEN","STROM","FLUSS","SEGEL","RUDER","GITTER","GEFAENGNIS","HAEFTLING","REISE","BAHN","SCHIENE","FLUGZEUG","BUNDESWEHR","ZIVILDIENST","FEIERABEND","BUCH","STERNSCHNUPPE","BOCKWURST","AUTOPILOT","LASSO","SCHATTEN","PIRATENSCHIFF","TASCHENRECHNER","STAMMBAUM","HERDE","BILDSCHIRM","JAGDHUND","FLUCH","STORCH","KLAMOTTEN","STIER","ZWILLING","JUNGE","MAEDCHEN","NASENBAER","GIROKONTO","DARSTELLUNG","EINZELSPIELER","BUSHALTESTELLE","DAMPFSCHIFFFAHRT","DATUM","HOCHZEIT","RAT","STYLIST","AZUBI","STRATEGIE","SINNLOS","CHAOS","PROFI","SPIDERMAN","COOL","GALGEN","KARTENSPIEL","TAXI","KNABBERN","GARTENZWERG","CLOWN","ASOZIAL","HENKER","ZAHNPASTA","ZAHNSCHMERZEN","STATISTIKEN","UNTERWASSERHOEHLE","KUNST","KARTEN","WASCHMASCHINE","STROMKREIS","GITARRE","ROCKBAND","SCHLAGZEUG","WAHNSINN","SCHEIBENWISCHER","SAENGER","MITTELALTER","WASSERPISTOLE","WELTMEISTERSCHAFT","BUNDESTAG","FASZINATION","MENSCH","HOFFNUNG","FREIHEIT","LIEDE","WITZ","EINFACH","BRATWURSTBRATGERAET","KOPFHOERER","LESELAMPE","BILDERRAHMEN","TENNISSCHLAEGER","SCHEISSE","LACHKRAMPF","TODESSTERN","VETO","GOOGLE","KAUGUMMI","ZIEGE","ZUCKERWATTE","BLOEDSINNN","CHAT","ERREKTION","DIEBSTAHL","LACH","GABELSTAPLER","POKER","MEISTER","HOCHWASSER","INFORMATION","ZUNEIGUNG","HASS","IMMER","KRASS","ALTER","IMPFSTOFF","KOCHSALZ","KONTAKT","SANDMAENNCHEN","MARIENKAEFER","TIER","GRILLE","SCHOKOLADENPUDDING","WOLF","APFEL","BIRNE","SCHNUPFEN"];
var PASSWORD = "";
var POINTS_TO_BE = 10;
var BLUE_SCORE = 0;
var RED_SCORE = 0;
var TURN = "blue";
var ROUND = 1;

var ROUND_TIME = 20;
var TIMER = ROUND_TIME;
var TIMER_GO = false;

var setNewPassword = function(){
    for(var i in SOCKET_LIST){
        SOCKET_LIST[i].emit('addToChat',"The Password was : " + PASSWORD);
    }
    if(data.length < 3){
        newGame();
        for(var i in SOCKET_LIST){
            SOCKET_LIST[i].emit('addToChat',"There are no more words left.");
        }
    }
    var data_id = Math.floor(Math.random() * data.length);
    PASSWORD = data[data_id].toUpperCase();
    data.splice(data_id,1);
};


//Signing In Methods
var isUsernameTaken = function(data){
    var taken = false;
        for(var i in SOCKET_LIST){
                if(SOCKET_LIST[i].username === data.username) taken = true;
        }
    return taken;
};

//Chat Methods
var refreshUserChat = function(){
    for(var i in SOCKET_LIST){
            SOCKET_LIST[i].emit("clearUserChat");
            for(var j in SOCKET_LIST){
                    var name = SOCKET_LIST[j].username;
                    SOCKET_LIST[i].emit("addToUserChat",name);
            }
    }
};

//Team Methods

var changeTeamButtonVisibility = function(color,enable){
   for(var i in SOCKET_LIST){
       SOCKET_LIST[i].emit("teamButtonVisibility",{color: color, enable : enable});
   }  
};

var getTeamNames = function(team){
        for(var i in SOCKET_LIST){
            if(SOCKET_LIST[i].team === team){
                return SOCKET_LIST[i].username;
            }
        }
    return "none";
};

var refreshTeamSheets = function(){
    for(var i in SOCKET_LIST){
        SOCKET_LIST[i].emit("refreshTeamSheets",{teamOneNameOne: getTeamNames("blueOne"),teamOneNameTwo: getTeamNames("blueTwo"),teamOneScore: BLUE_SCORE,teamTwoNameOne: getTeamNames("redOne"),teamTwoNameTwo:getTeamNames("redTwo"),teamTwoScore: RED_SCORE,turn:TURN,round:ROUND});

        for(var j = 1;j<3;j++){
            if(ROUND === j){
                var number = 0;
                if(j === 1) number = "One";
                else if(j === 2) number = "Two";
                
                if(SOCKET_LIST[i].username === getTeamNames("blue"+number) || SOCKET_LIST[i].username === getTeamNames("red"+number) ){
                    SOCKET_LIST[i].emit("displayPassword",{display:true,password:PASSWORD});
                    SOCKET_LIST[i].emit("resultButtonVisibility",true);
                }
                else{
                    SOCKET_LIST[i].emit("displayPassword",{display:false,password:PASSWORD});
                    SOCKET_LIST[i].emit("resultButtonVisibility",false);
                }
                    
                
            }
        }
        
        SOCKET_LIST[i].emit("refreshAvailablePoints",POINTS_TO_BE);
    }  
};

var modifyTeamScore = function(color,amount){
    if(color === "blue") BLUE_SCORE += amount;
    else if (color === "red") RED_SCORE += amount;
};

var awardPoints = function(turn,points){
    if(turn === "blue"){
        BLUE_SCORE += points;
        POINTS_TO_BE = 10;
    }else if(turn === "red"){
        RED_SCORE += points;
        POINTS_TO_BE = 10;
    }
};

var changeTurn = function(){
    if(TURN === "blue") TURN = "red";
    else TURN = "blue";
};

var changeRound = function(){
    if(ROUND === 1) ROUND = 2;
    else ROUND = 1;
};

var decreasePointsToBe = function(){
    POINTS_TO_BE-=2;
    if(POINTS_TO_BE <= 0){
        setNewPassword();
        changeRound();
        POINTS_TO_BE = 10;
    }
};
var newGame = function(){
    data = ["steuer","strudel","taste","tokio","verband","washington","wirtschaft","zelle","zylinder","wind","stift","stuhl","tau","ton","verein","wasser","wolkenkratzer","zentaur","zahn","winnetou","stock","superheld","teleskop","tor","viertel","watt","wurf","zitrone","zeit","wand","strand","tafel","tempo","torte","vorsatz","weide","w¸rfel","zoll","zwerg","wanze","straﬂe","tag","theater","turm","wald","welle","wurm","zug","umzug","tod","strauﬂ","takt","toast","uhr","tanz","strom","pass","pinguin","prinzessin","rolle","saturn","schiff","schnur","spion","peitsche","pirat","punkt","riegel","rom","satz","schimmel","schokolade","shakespeare","staat","peking","pistole","pyramide","rˆmer","schale","schirm","schotten","siegel","stadion","pension","platte","quartett","riese","rost","schalter","schlange","schuh","skelett","stamm","pferd","po","quelle","ring","roulette","scheibe","schloss","schule","soldat","stempel","pflaster","rasen","ritter","r¸cken","schein","schnee","schuppen","spiel","stern","pilot","polizei","raute","rock","rute","schelle","schneemann","seite","spinne","krankenhaus","kunde","leim","lˆffel","matte","mikroskop","m¸hle","netz","ˆl","krankheit","lager","maler","maus","million‰r","mund","new york","oper","opfer","krebs","lakritze","limousine","london","mandel","meer","mini","muschel","niete","optik","kreis","laser","linie","lˆsung","mangel","melone","mittel","mutter","ninja","orange","kreuz","laster","linse","lˆwe","mark","messe","moos","nacht","note","osten","krieg","leben","loch","luft","maschine","messer","morgenstern","nadel","nuss","papier","krone","lehrer","loch ness","mast","mexiko","moskau","nagel","oktopus","geist","glocke","grund","hase","honig","hut","k‰fer","karte","kippe","kˆnig","genie","gl¸ck","g¸rtel","haupt","horn","indien","kamm","kasino","kirche","kˆnigin","gericht","gold","gut","heide","horst","inka","kanal","kater","kiwi","konzert","geschirr","golf","hahn","hering","hotel","j‰ger","k‰nguruh","katze","knie","korb","geschoss","grad","hamburger","herz","hubschrauber","jahr","kapelle","kerze","knopf","korn","gesicht","gras","hand","himalaja","hund","jet","kapit‰n","ketchup","koch","kraft","glas","griechenland","harz","hollywood","hupe","jura","karotte","kiefer","kohle","bindung","birne","bremse","chor","dieb","eis","europa","fest","fleck","fuchs","blatt","bombe","brˆtchen","dame","dietrich","elfenbein","fackel","figur","fliege","funken","blau","boot","bulle","daumen","dinosaurier","england","fall","film","flˆte","fuﬂ","blinker","bˆrse","burg","decke","doktor","ente","fallschirm","finger","fl¸gel","futter","bl¸te","botschaft","busch","demo","drache","erde","feder","fisch","flur","gabel","bock","boxer","chemie","deutschland","drossel","feige","fl‰che","forscher","gehalt","bogen","brause","china","drucker","dichtung","essen","fessel","flasche","frankreich","ladung","mond","leiter","wal","star","tisch","feuer","pfeife","br¸cke","gang","gift","iris","taucher","elf","bergsteiger","tausch","bund","hexe","l‰ufer","einhorn","koks","roboter","mine","engel","lippe","satellit","schild","olymp","brand","schnabeltier","abgabe","absatz","adler","afrika","‰gypten","akt","alien","auge","amerikaner","antarktis","anwalt","apfel","arm","atlantis","atlas","auflauf","aufzug","ausdruck","australien","auto","back","bahn","ball","bande","bank","bar","b‰r","bart","batterie","bau","bauer","bayern","becken","bein","bett"];
    PASSWORD = "";
    
    setNewPassword();

    TIMER_GO = false;
    TIMER = ROUND_TIME;
    POINTS_TO_BE = 10;
    BLUE_SCORE = 0;
    RED_SCORE = 0;
    TURN = "blue";
    ROUND = 1;

    refreshTeamSheets();
};

newGame();

var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    socket.id = Math.random();
    socket.username = "";
    socket.team = "";
    SOCKET_LIST[socket.id] = socket;
    
    //Signing In/Out
    socket.on('signIn',function(data){
            if(isUsernameTaken(data)){
                socket.emit('signInResponse',{success:false});     
            } else {
                socket.username = data.username;
                socket.emit('signInResponse',{success:true});
                refreshUserChat();
                refreshTeamSheets();
                for(var i in SOCKET_LIST){
                    SOCKET_LIST[i].emit('addToChat',socket.username + " has joined!");
                }
            }
    });
    socket.on('disconnect',function(){
        delete SOCKET_LIST[socket.id];
        refreshUserChat();
        refreshTeamSheets();
        for(var i in SOCKET_LIST){
                SOCKET_LIST[i].emit("addToChat",socket.username+" has left!");
        }
    });
    
    //Chat
    socket.on("chatToEveryone",function(data){
        for(var i in SOCKET_LIST){
            SOCKET_LIST[i].emit('addToChat',socket.username + ': ' + data);
        }
    });
    
    //Teams
    socket.on("joinTeam",function(data){
        socket.team = data;
        refreshTeamSheets();
    });
    
    socket.on("turnResult",function(data){
        if(data){
            awardPoints(TURN,POINTS_TO_BE);
            changeTurn();
            changeRound();
            setNewPassword();
            refreshTeamSheets();
        }
        else{
            decreasePointsToBe();
            changeTurn();
            refreshTeamSheets();
        }
        TIMER = ROUND_TIME;
    });
    
    socket.on("newGame",function(){
        newGame();
    });
    
    //DEBUG
    socket.on('evalServer',function(data){
        if(!DEBUG)
            return;
        var res = eval(data);
        socket.emit('evalAnswer',res);     
    });
    
    //Timer
    socket.on("toggleTimer",function(){
       TIMER_GO = !TIMER_GO;
       var message = "";
       if(TIMER_GO){
           message = "Timer has been resumed";
       }else{
           message = "Timer has been stopped";
       }
       message += " by " + socket.username;
       for(var i in SOCKET_LIST){
            SOCKET_LIST[i].emit('addToChat',message);
        }
    });
    
});

setInterval(function(){
    if(TIMER_GO){
        if(TIMER > 0){
        TIMER--;
        }else
        {
            TIMER = ROUND_TIME;
            decreasePointsToBe();
            changeTurn();
            refreshTeamSheets();
        }
    }

},1000);

setInterval(function(){
    for(var i in SOCKET_LIST){
            SOCKET_LIST[i].emit('refreshTimer',TIMER);
    }
},10);