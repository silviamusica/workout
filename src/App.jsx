// Exercise images
import img_Ab_Wheel from "./images/exercises/Ab_Wheel.jpg";
import img_Ab_Wheel_Corretto from "./images/exercises/Ab wheel corretto.jpeg";
import img_Abduzione_Laterale from "./images/exercises/Abduzione_Laterale.jpg";
import img_Addominali_Obliqui from "./images/exercises/Addominali_Obliqui.jpg";
import img_Affondi from "./images/exercises/Affondi.jpg";
import img_Alzate_Laterali from "./images/exercises/Alzate_Laterali.jpg";
import img_Arnold_Press from "./images/exercises/Arnold_Press.jpg";
import img_Clamshell from "./images/exercises/Clamshell.jpg";
import img_Croci_Manubri_a_Terra from "./images/exercises/Croci_Manubri_a_Terra.jpg";
import img_Curl_Bicipiti from "./images/exercises/Curl_Bicipiti.jpg";
import img_Curl_Concentrato from "./images/exercises/Curl_Concentrato.jpg";
import img_Curl_Martello from "./images/exercises/Curl_Martello.jpg";
import img_Dip_su_Panca from "./images/exercises/Dip_su_Panca.jpg";
import img_Fire_Hydrant from "./images/exercises/Fire_Hydrant.jpg";
import img_Floor_Press_Manubri from "./images/exercises/Floor_Press_Manubri.jpg";
import img_French_Press_Manubri from "./images/exercises/French_Press_Manubri.jpg";
import img_Front_Squat from "./images/exercises/Front_Squat.jpg";
import img_Good_Morning from "./images/exercises/Good_Morning.jpg";
import img_Hip_Thrust_Singolo from "./images/exercises/Hip_Thrust_Singolo.jpg";
import img_Hyperextension from "./images/exercises/Hyperextension.jpg";
import img_Kick_Back_Manubri from "./images/exercises/Kick_Back_Manubri.jpg";
import img_Lat_Machine from "./images/exercises/Lat machine .jpeg";
import img_Military_Press from "./images/exercises/Military_Press.jpg";
import img_Nordic_Curl from "./images/exercises/Nordic_Curl.jpg";
import img_Overhead_Extension from "./images/exercises/Overhead_Extension.jpg";
import img_Panca from "./images/exercises/Panca.jpg";
import img_Pause_Squat from "./images/exercises/Pause_Squat.jpg";
import img_Pendlay_Row from "./images/exercises/Pendlay_Row.jpg";
import img_Plank from "./images/exercises/Plank.jpg";
import img_Pulley from "./images/exercises/Pulley-basso.jpeg";
import img_Push_Press from "./images/exercises/Push_Press.jpg";
import img_Push_Up from "./images/exercises/Push_Up.jpg";
import img_Push_Up_Declino from "./images/exercises/Push_Up_Declino.jpg";
import img_Push_Up_Diamante from "./images/exercises/Push_Up_Diamante.jpg";
import img_Rematore_Bilanciere from "./images/exercises/Rematore_Bilanciere.jpg";
import img_Rematore_Manubri from "./images/exercises/Rematore_Manubri.jpg";
import img_Shoulder_Tap from "./images/exercises/Shoulder_Tap.jpg";
import img_Single_Leg_Deadlift from "./images/exercises/Single_Leg_Deadlift.jpg";
import img_Squat from "./images/exercises/Squat.jpg";
import img_Squat_Bulgaro from "./images/exercises/Squat_Bulgaro.jpg";
import img_Stacco_Rumeno from "./images/exercises/Stacco_Rumeno.jpg";
import img_Stacco_Sumo from "./images/exercises/Stacco_Sumo.jpg";
import img_Stacco_da_Terra from "./images/exercises/Stacco_da_Terra.jpg";
import img_Step_Up from "./images/exercises/Step_Up.jpg";
import img_Trazioni from "./images/exercises/Trazioni.jpg";
import img_Trazioni_Supine from "./images/exercises/Trazioni_Supine.jpg";
import img_Walking_Lunge from "./images/exercises/Walking_Lunge.jpg";
import img_Tricipiti_Cavo from "./images/exercises/cavi tricipiti.jpg";

// Warmup & Stretching images
import img_str_Dorsali from "./images/warmup_stretch/str_Dorsali.jpg";
import img_str_Femorali from "./images/warmup_stretch/str_Femorali.jpg";
import img_str_Flessori_anca from "./images/warmup_stretch/str_Flessori_anca.jpg";
import img_str_Glutei from "./images/warmup_stretch/figurefour glutei stretching.gif";
import img_str_Lombare from "./images/warmup_stretch/str_Lombare.jpg";
import img_str_Pettorali from "./images/warmup_stretch/str_Pettorali.jpg";
import img_str_Quadricipiti from "./images/warmup_stretch/str_Quadricipiti.jpg";
import img_str_Spalle from "./images/warmup_stretch/str_Spalle.jpg";
import img_str_Tricipiti from "./images/warmup_stretch/str_Tricipiti.jpg";
import img_w_Burpees from "./images/warmup_stretch/w_Burpees.jpg";
import img_w_CatCow from "./images/warmup_stretch/w_CatCow.jpg";
import img_w_Inchworm from "./images/warmup_stretch/w_Inchworm.jpg";
import img_w_JumpingJacks from "./images/warmup_stretch/w_JumpingJacks.jpg";
import img_w_MilitaryPress from "./images/warmup_stretch/w_MilitaryPress.jpg";
import img_w_SquatBL from "./images/warmup_stretch/w_SquatBL.jpg";

// Muscle map
import img_muscle_map from "./images/muscle_map.jpg";

import { useState, useEffect, useCallback, useRef } from "react";

/* === AUDIO === */
let _ac = null;
function getAC() { if (!_ac) try { _ac = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {} return _ac; }
function playTone(freq, dur, vol) { try { var c = getAC(); if (!c) return; if (c.state === "suspended") c.resume(); var o = c.createOscillator(); var g = c.createGain(); o.connect(g); g.connect(c.destination); o.frequency.value = freq; o.type = "sine"; g.gain.setValueAtTime(vol, c.currentTime); g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur); o.start(c.currentTime); o.stop(c.currentTime + dur); } catch(e) {} }
function beep30() { playTone(660, 0.18, 0.35); }
function beep60() { playTone(880, 0.15, 0.4); setTimeout(function() { playTone(880, 0.2, 0.4); }, 200); }
function beepEnd() { playTone(1047, 0.15, 0.5); setTimeout(function() { playTone(1047, 0.15, 0.5); }, 180); setTimeout(function() { playTone(1319, 0.3, 0.5); }, 360); }

/* === THEMES === */
var TH = {
  sage:    { n: "Crimson", bg: "#0D0D0F", cd: "#17171B", tx: "#F4F4F6", sub: "#B4B4BE", hd: "linear-gradient(135deg,#08080A,#151519 44%,#2A1117)", htx: "#FFF7F8", dy: ["#B91C1C","#A1A1AA","#71717A","#52525B","#7F1D1D"], ok: "#DC2626", ac: "#F59E0B", sb: "#111115", st: "#D4D4D8" },
  petal:   { n: "Petal",   bg: "#FDF5F7", cd: "#FFFBFC", tx: "#3A1F28", sub: "#B08090", hd: "linear-gradient(135deg,#C2788A,#D4929E)", htx: "#FFF0F3", dy: ["#C47A8A","#9B6EA6","#6A96B0","#C28860","#A0A0B8"], ok: "#C47A8A", ac: "#9DB87A", sb: "#FAEAEE", st: "#9B6EA6" },
  mist:    { n: "Mist",    bg: "#F2F4F8", cd: "#FAFBFD", tx: "#222B3A", sub: "#7A8FA8", hd: "linear-gradient(135deg,#3D5470,#5C7A9E)", htx: "#E8EEF6", dy: ["#5C7A9E","#6A9E8C","#7A6EA8","#9E7A5C","#6A7A8A"], ok: "#5C7A9E", ac: "#C8A86A", sb: "#E8EDF5", st: "#5C7A9E" },
  night:   { n: "Notte",   bg: "#14151F", cd: "#1E1F2E", tx: "#DDE0F0", sub: "#7880AA", hd: "linear-gradient(135deg,#0C0D1A,#1E1F2E)", htx: "#C8CCEC", dy: ["#7B8EE8","#5CC8C0","#E87898","#E8B870","#8898B8"], ok: "#7B8EE8", ac: "#5CC8C0", sb: "#1A1B2C", st: "#7B8EE8" },
  sand:    { n: "Sand",    bg: "#FAF7F2", cd: "#FFFEFB", tx: "#2E2820", sub: "#A0907A", hd: "linear-gradient(135deg,#7A6040,#A08060)", htx: "#F5EEE4", dy: ["#A07850","#8A9E6A","#6A8EA0","#B07888","#9A8A6A"], ok: "#A07850", ac: "#C0B060", sb: "#F4EFE6", st: "#8A7040" },
};


var EX = {"Ab Wheel": {"g": "Core/Addominali", "c": "Inginocchiata, rotella in mano. Rotola avanti, torna contraendo.", "p": "Ginocchia a terra, core contratto, glutei attivi, schiena neutra.", "t": ["Range ridotto all'inizio", "Glutei stretti per la lombare", "Espira tornando indietro"], "lk": "https://www.youtube.com/watch?v=kISuoI7QCYk", "deep": [
  {"type":"p","content":"Inizia sempre da in ginocchio. Braccia e gambe vanno tenute sempre ben tese durante tutto il movimento."},
  {"type":"p","content":"Il segreto e tenere il bacino in retroversione (portato ben in avanti) e i glutei contratti: senza questo, se inarchi la schiena, l'esercizio diventa dannoso per la lombare. Tieni la schiena compatta e il mento basso per formare un blocco unico con tutto il tronco."},
  {"type":"p","content":"Avanza fino ad avere le braccia distese e il viso a pochi centimetri dal suolo, poi torna indietro in modo controllato."},
  {"type":"p","content":"Progressione consigliata: usa un muro davanti per limitare la corsa. Appoggia la rotella al muro a distanza progressivamente maggiore ogni settimana."}
]}, "Trazioni": {"g": "Dorsali/Bicipiti", "c": "Presa prona oltre le spalle. Tira su, mento sopra, scendi controllando.", "p": "Scapole depresse e addotte. Core attivo. Niente slancio.", "t": ["Negativa: sali con salto, scendi in 5s", "Gomiti verso il basso", "Evita il kipping"], "lk": "https://www.youtube.com/results?search_query=pull+up+tutorial+form", "deep": [
  {"type":"p","content":"Inizia da una posizione di sospensione attiva (active hang): abbassa le spalle deprimendo le scapole prima ancora di tirare. Prediligi la presa prona (palmi in avanti) o neutra per la salute delle articolazioni nel lungo periodo."},
  {"type":"p","content":"Inizia la tirata portando il petto verso la sbarra, con il torso leggermente inclinato in diagonale — non tirare dritto verso l'alto. Punta i gomiti verso il basso: le mani fungono solo da ganci, il lavoro lo fanno i dorsali. Supera la sbarra col mento."},
  {"type":"p","content":"Se non riesci ancora a fare trazioni complete, usa la negativa assistita:"},
  {"type":"ul","content":["Sali con un salto o con un elastico","Scendi lentissima in 5 secondi","E' la tecnica piu efficace per costruire la forza necessaria"]}
]}, "Push-Up": {"g": "Pettorali/Tricipiti/Deltoidi", "c": "Mani poco piu larghe delle spalle, corpo in linea. Scendi col petto, spingi su.", "p": "Core contratto, gomiti a 45 gradi, bacino non cade e non sale.", "t": ["Bacino scende col petto", "Ginocchia a terra se difficile", "Eccentrica lenta = piu stimolo"], "lk": "https://www.youtube.com/results?search_query=push+up+tutorial+form", "deep": [
  {"type":"p","content":"Tieni il bacino in retroversione come nel plank: annulla la curva lombare contraendo gli addominali."},
  {"type":"ul","content":["Mani larghe circa il 150% delle spalle — troppo larghe stressano i polsi, troppo strette diventano un esercizio per tricipiti","Gomiti a 45 gradi rispetto al busto, mai aperti a 90 gradi (comprime la spalla)","Scendi fino a sfiorare terra con il petto — massima ampiezza = massimo stimolo"]},
  {"type":"p","content":"Se non riesci a completare le rip in forma pulita, metti le ginocchia a terra: meglio 10 rip corrette in ginocchio che 5 storte sulle punte."}
]}, "Rematore Manubri": {"g": "Dorsali/Romboidi/Bicipiti", "c": "Ginocchio e mano su panca, l'altra col manubrio. Tira verso il fianco.", "p": "Schiena parallela e neutra. Busto fermo.", "t": ["Gomito guida, non la mano", "1s in alto stringendo la scapola", "Senza panca: mano su sedia"], "lk": "https://www.youtube.com/results?search_query=dumbbell+row+tutorial"}, "Nordic Curl": {"g": "Femorali/Glutei", "c": "In ginocchio, piedi bloccati. Scendi controllando, mani ammortizzano, spingi su.", "p": "Anche estese, core e glutei contratti.", "t": ["Anche 20-30 gradi di discesa va bene", "Forza sulla negativa", "Alt: leg curl con manubrio tra i piedi"], "lk": "https://www.youtube.com/results?search_query=nordic+curl+tutorial", "deep": [
  {"type":"p","content":"Il Nordic Curl isola i femorali in modo eccellente senza sovraccaricare il sistema nervoso centrale come fanno i grandi multiarticolari."},
  {"type":"p","content":"La chiave e il tempo sotto tensione: rallenta la fase eccentrica (la discesa) quanto piu possibile — anche solo 20-30 gradi di discesa controllata hanno un impatto enorme sull'ipertrofia dei femorali."},
  {"type":"ul","content":["Le mani servono ad ammortizzare la caduta finale, non a spingerti su","Mantieni i femorali sempre in tensione senza rilassarli in cima (tensione continua)","Nel tempo, scendi sempre piu vicino al pavimento mantenendo il controllo"]}
]}, "Good Morning": {"g": "Erettori/Glutei/Femorali", "c": "Bilanciere sulle spalle. Piega avanti spingendo bacino indietro, ginocchia flesse.", "p": "Schiena NEUTRA sempre. Scendi fino a tensione femorali.", "t": ["Chiudi una porta col sedere", "Inizia con bilanciere scarico"], "lk": "https://www.youtube.com/results?search_query=good+morning+barbell+tutorial", "deep": [
  {"type":"p","content":"Il Good Morning e un esercizio di preparazione specifica per migliorare Squat e Stacco da terra. E un movimento Hip Dominant: il motore e il bacino che si spinge indietro, non la schiena che si piega."},
  {"type":"ul","content":["Mantieni le curve fisiologiche della colonna — non perdere mai la lordosi lombare","Inizia con bilanciere scarico o leggerissimo per imparare lo schema motorio","Questo esercizio rinforza i punti deboli (lombari e femorali) nel punto critico di squat e stacco"]},
  {"type":"p","content":"Manovra di Valsalva: inspira profondamente, blocca il respiro e gonfia la pancia prima di eseguire il movimento. Crea pressione intra-addominale che protegge le vertebre lombari sotto carico."}
]}, "Hyperextension": {"g": "Erettori/Glutei/Femorali", "c": "Panca 45 gradi, piedi bloccati. Scendi col busto, risali contraendo glutei e erettori.", "p": "Schiena neutra, non iperestendere.", "t": ["Contrai glutei in alto 1s", "Disco al petto per piu carico"], "lk": "https://www.youtube.com/results?search_query=hyperextension+tutorial"}, "Addominali Obliqui": {"g": "Obliqui", "c": "Crunch laterale o russian twist (piedi sollevati, ruota il busto).", "p": "Lombare a terra nei crunch.", "t": ["Rotazione dal busto", "Espira quando ruoti"], "lk": "https://www.youtube.com/results?search_query=russian+twist+tutorial", "deep": [
  {"type":"p","content":"Regola base: retroversione del bacino. Da sdraiata, annulla lo spazio tra la schiena e il pavimento prima di iniziare. Evita che i flessori dell'anca (ileopsoas) tirino la bassa schiena."},
  {"type":"p","content":"Varianti principali:"},
  {"type":"ul","content":["Plank laterale: gomito e avambraccio a terra, corpo in linea da testa a piedi — opponiti alla gravita impedendo al bacino di cedere verso il basso","Crunch incrociato: porta il gomito verso il ginocchio opposto — la rotazione parte dal busto, non dalle braccia","Russian twist: piedi sollevati = piu difficile; mantieni le braccia tese e ruota lentamente"]}
]}, "Plank": {"g": "Core completo", "c": "Avambracci a terra, gomiti sotto spalle, corpo in linea.", "p": "Glutei contratti, addome in dentro, collo neutro.", "t": ["Tira gomiti verso piedi senza muoverti", "Se tremi e normale"], "lk": "https://www.youtube.com/results?search_query=plank+esecuzione+corretta", "deep": [
  {"type":"p","content":"L'assetto corretto si chiama Hollow: spalle protratte e depresse (spinte in avanti e verso il basso). Immagina di doverti allontanare costantemente dal pavimento con gli avambracci."},
  {"type":"ul","content":["Bacino in retroversione: annulla la curva lombare","Glutei contratti: sono il pilastro della stabilita","Tensione attiva: tira mentalmente i gomiti verso i piedi senza muoverti"]},
  {"type":"p","content":"Se tremi, e normale: stai lavorando. Se la schiena cede o il sedere si alza, fermati e riparti."}
]}, "Squat": {"g": "Quadricipiti/Glutei/Core", "c": "Bilanciere sulle spalle, piedi larghezza spalle. Scendi al parallelo, spingi su.", "p": "Petto fuori, schiena neutra, ginocchia seguono le punte.", "t": ["Inspira e blocca core prima di scendere", "Ginocchia oltre le punte = fisiologico"], "lk": "https://www.youtube.com/results?search_query=barbell+squat+tutorial", "deep": [
  {"type":"p","content":"Guarda dritto o leggermente sopra, schiena con curve fisiologiche, sedere spinto indietro."},
  {"type":"ul","content":["Piedi poco piu larghi delle spalle, punte a circa 30 gradi verso fuori","Ginocchia spinte fuori durante tutta la discesa — non lasciarle collassare","Talloni sempre ancorati a terra","Scendi sotto il parallelo: sedere sotto il livello delle ginocchia"]},
  {"type":"p","content":"Nella risalita, mantieni la coordinazione testa-busto-sedere: non inclinare troppo il busto in avanti (togli lavoro ai glutei e lo carichi sulla schiena)."},
  {"type":"p","content":"Manovra di Valsalva: inspira profondo, blocca il respiro e gonfia la pancia prima di scendere. Espira solo dopo aver superato il punto critico della risalita."}
]}, "Military Press": {"g": "Deltoidi/Tricipiti/Core", "c": "Bilanciere alle clavicole. Spingi sopra la testa, scendi controllando.", "p": "Piedi larghezza spalle, glutei e core contratti.", "t": ["Glutei stretti per stabilizzare", "Se lombare inarca: riduci carico"], "lk": "https://www.youtube.com/results?search_query=military+press+tutorial"}, "Trazioni Supine": {"g": "Dorsali/Bicipiti/Romboidi", "c": "Presa supina (palmi verso di te). Tira su, mento sopra, scendi.", "p": "Scapole depresse. Core attivo.", "t": ["Supina = piu bicipiti", "Elastico per assistenza"], "lk": "https://www.youtube.com/results?search_query=chin+up+tutorial"}, "Curl Bicipiti": {"g": "Bicipiti/Brachiale", "c": "Manubri ai lati, presa supina. Fletti verso spalle, scendi.", "p": "Gomiti fissi ai lati. Niente dondolio.", "t": ["Se dondoli: peso troppo", "Eccentrica 3s = piu stimolo"], "lk": "https://www.youtube.com/results?search_query=bicep+curl+tutorial"}, "French Press Manubri": {"g": "Tricipiti", "c": "Su panca, manubri sopra. Fletti gomiti verso tempie, estendi.", "p": "Gomiti verso soffitto, fermi. Presa neutra.", "t": ["Gomiti paralleli", "Leggermente dietro la testa"], "lk": "https://www.youtube.com/results?search_query=french+press+dumbbell+tutorial"}, "Dip su Panca": {"g": "Tricipiti/Pettorali inf.", "c": "Mani su panca dietro. Scendi a 90 gradi gomiti, spingi su.", "p": "Gomiti indietro. Schiena vicina alla panca.", "t": ["Gambe tese = piu difficile", "Non sotto 90 gradi"], "lk": "https://www.youtube.com/results?search_query=bench+dip+tutorial"}, "Squat Bulgaro": {"g": "Quadricipiti/Glutei/Femorali", "c": "Piede posteriore su panca. Scendi a 90 gradi, spingi su.", "p": "Busto eretto. Ginocchio in linea con punta.", "t": ["Busto avanti = piu glutei", "Manubri ai lati per carico"], "lk": "https://www.youtube.com/results?search_query=bulgarian+split+squat+tutorial", "deep": [
  {"type":"p","content":"Variante dell'affondo con il piede posteriore poggiato su un rialzo (panca, step, sedia). Valgono le stesse regole degli affondi: ginocchio posteriore sfiora terra senza urtarla."},
  {"type":"p","content":"Gestisci il focus muscolare:"},
  {"type":"ul","content":["Passo corto + busto verticale = piu quadricipiti","Passo piu lungo + busto inclinato = piu glutei e femorali","Ginocchio anteriore sempre allineato con il piede — non collassare verso l'interno"]},
  {"type":"p","content":"Richiede piu equilibrio dello squat classico. Inizia senza peso e aggiungi i manubri solo quando la forma e stabile."}
]}, "Panca": {"g": "Pettorali/Tricipiti/Deltoidi", "c": "Su panca, bilanciere dal rack. Scendi al petto, spingi su.", "p": "Scapole addotte, arco toracico, piedi a terra.", "t": ["Scapole retratte sempre", "Tocca petto, non rimbalza"], "lk": "https://www.youtube.com/results?search_query=bench+press+tutorial"}, "Stacco da Terra": {"g": "Catena posteriore completa", "c": "Piedi sotto sbarra. Petto fuori, schiena neutra, spingi pavimento.", "p": "Schiena NEUTRA sempre. Bilanciere rasente gambe.", "t": ["Spinta di gambe, non di schiena", "Bilanciere non si allontana MAI"], "lk": "https://www.youtube.com/results?search_query=deadlift+tutorial", "deep": [
  {"type":"p","content":"Manovra di Valsalva: prima di staccare, inspira profondo, blocca il respiro e gonfia la pancia. Crea pressione intra-addominale che protegge le vertebre lombari dalle forze di taglio."},
  {"type":"ul","content":["Il bilanciere non si allontana MAI dalle gambe: rasenta tibie e cosce durante tutta la salita","La schiena mantiene le sue curve fisiologiche per tutta la durata — schiena tonda = pericolo","Non tirare con la schiena: spingi il pavimento via con i piedi"]},
  {"type":"p","content":"Se la schiena si arrotonda, il peso e troppo alto. Riduci e riparti con tecnica corretta."}
]}, "Rematore Bilanciere": {"g": "Dorsali/Trapezi/Bicipiti", "c": "Busto a 45 gradi, ginocchia flesse. Tira all'addome, scendi.", "p": "Schiena neutra e rigida, busto fermo.", "t": ["Se busto si alza: peso troppo", "Scapole strette 1s in alto"], "lk": "https://www.youtube.com/results?search_query=barbell+row+tutorial"}, "Shoulder Tap": {"g": "Core/Deltoidi/Stabilizzatori", "c": "Push-up position. Tocca spalla opposta alternando.", "p": "Piedi larghi. Core contrattissimo.", "t": ["Piedi stretti = piu difficile", "Lento e controllato"], "lk": "https://www.youtube.com/results?search_query=shoulder+tap+tutorial", "deep": [
  {"type":"p","content":"Variante dinamica del plank. Mantieni spalle protratte (spingi via il pavimento) e bacino in retroversione come nel plank classico."},
  {"type":"p","content":"Principio fondamentale: anti-rotazione. Quando stacchi una mano, il tronco e il bacino NON devono inclinarsi o ruotare. Addominali e obliqui si contraggono in isometria."},
  {"type":"ul","content":["Piedi larghi = piu facile (base piu ampia)","Piedi stretti = piu difficile","Esegui lento e controllato: la velocita azzera il beneficio"]}
]}, "Affondi": {"g": "Quadricipiti/Glutei/Femorali", "c": "Passo avanti, scendi a 90 gradi, ginocchio posteriore sfiora terra.", "p": "Busto eretto, core contratto.", "t": ["Busto avanti = piu glutei", "Indietro = meno stress ginocchio"], "lk": "https://www.youtube.com/results?search_query=lunge+tutorial", "deep": [
  {"type":"p","content":"Il ginocchio posteriore deve sfiorare la terra senza mai urtarla — il controllo della discesa e parte del lavoro muscolare."},
  {"type":"p","content":"Gestisci il focus muscolare con la posizione del corpo:"},
  {"type":"ul","content":["Passo corto + busto dritto = piu quadricipiti","Passo ampio + busto leggermente inclinato = piu glutei e femorali","Ginocchio anteriore sempre allineato con il piede — non lasciarlo collassare verso l'interno"]},
  {"type":"p","content":"Walking Lunge: avanza passo dopo passo — piu coordinazione rispetto all'affondo statico, ottimo per aumentare difficolta senza aggiungere peso."}
]}, "Clamshell": {"g": "Gluteo medio/Piccolo gluteo", "c": "Su un fianco, ginocchia 90 gradi. Apri ginocchio superiore, chiudi.", "p": "Bacino stabile. Core attivo.", "t": ["2s in apertura massima", "Elastico per piu carico"], "lk": "https://www.youtube.com/results?search_query=clamshell+exercise+tutorial", "deep": [
  {"type":"p","content":"Il Clamshell isola il gluteo medio con abduzione e rotazione esterna dell'anca. Il punto di forza non e il carico ma la tensione continua ad alta densita."},
  {"type":"ul","content":["Apertura rapida (concentrica esplosiva) + pausa isometrica 2-3s nel punto di massima apertura","Il bacino NON deve ruotare all'indietro: se si muove, stai compensando con i flessori dell'anca","Esegui ad alte ripetizioni (15-20) o con elastico per stress metabolico locale"]},
  {"type":"p","content":"E' un esercizio di attivazione e isolamento, non di forza massimale. Non affatica il sistema nervoso: perfetto per chiudere la seduta."}
]}, "Abduzione Laterale": {"g": "Gluteo medio/Tensore", "c": "Su un fianco, gamba superiore tesa. Alza a 45 gradi, scendi.", "p": "Corpo in linea. Tallone verso soffitto.", "t": ["45 gradi bastano", "Cavigliera per piu carico"], "lk": "https://www.youtube.com/results?search_query=side+lying+leg+raise+tutorial"}, "Croci Manubri a Terra": {"g": "Pettorali/Deltoidi", "c": "Sdraiata, manubri sopra. Apri lateralmente ad arco, chiudi.", "p": "Scapole addotte. Gomiti con stessa flessione.", "t": ["Arco, non linea retta", "Peso moderato"], "lk": "https://www.youtube.com/results?search_query=dumbbell+fly+floor+tutorial"}, "Arnold Press": {"g": "Deltoidi (3 fasci)/Tricipiti", "c": "Manubri al mento, palmi verso di te. Spingi ruotando i polsi.", "p": "Schiena dritta, core contratto.", "t": ["Rotazione = tutti i fasci", "Niente slancio"], "lk": "https://www.youtube.com/results?search_query=arnold+press+tutorial"}, "Step Up": {"g": "Quadricipiti/Glutei", "c": "Piede su gradino, spingi per salire. Scendi controllando.", "p": "Busto eretto, core attivo.", "t": ["Forza dal piede sullo step", "Piu alto = piu glutei"], "lk": "https://www.youtube.com/results?search_query=step+up+tutorial", "deep": [
  {"type":"p","content":"Usa un supporto alto circa come il tuo ginocchio — troppo basso non da stimolo, troppo alto mette a rischio il ginocchio."},
  {"type":"ul","content":["Rimani il piu verticale possibile e spingiti verso l'alto dalla gamba sullo step","Porta anche il secondo piede sul supporto prima di scendere","Controlla la discesa: la fase eccentrica e dove avviene gran parte del lavoro muscolare","Rialzo piu alto = piu glutei; rialzo piu basso = piu quadricipiti"]},
  {"type":"p","content":"Richiede meno equilibrio rispetto agli affondi: ottimo per costruire confidenza con il lavoro su singola gamba. Aggiungi i manubri solo a forma perfetta."}
]}, "Floor Press Manubri": {"g": "Pettorali/Tricipiti", "c": "A terra, manubri sopra. Scendi fino a gomiti a terra, spingi.", "p": "Scapole addotte.", "t": ["Pausa 1s a terra"], "lk": "https://www.youtube.com/results?search_query=floor+press+dumbbell+tutorial"}, "Push-Up Declino": {"g": "Pettorali sup./Tricipiti", "c": "Push-up con piedi su panca. Scendi col petto, spingi.", "p": "Corpo in linea. Core contratto.", "t": ["Gomiti a 45 gradi"], "lk": "https://www.youtube.com/results?search_query=decline+push+up+tutorial"}, "Stacco Rumeno": {"g": "Femorali/Glutei/Erettori", "c": "Bilanciere davanti, spingi bacino indietro lungo gambe. Risali.", "p": "Schiena neutra. Ginocchia poco flesse.", "t": ["Senti allungamento femorali"], "lk": "https://www.youtube.com/results?search_query=romanian+deadlift+tutorial"}, "Front Squat": {"g": "Quadricipiti/Core/Glutei", "c": "Bilanciere clavicole, gomiti alti. Scendi, busto verticale.", "p": "Gomiti alti, petto fuori.", "t": ["Piu quadricipiti, meno schiena"], "lk": "https://www.youtube.com/results?search_query=front+squat+tutorial"}, "Pause Squat": {"g": "Quadricipiti/Glutei", "c": "Squat con 2-3s fermo in buca, poi esplosione.", "p": "Come squat classico.", "t": ["15-20% meno carico"], "lk": "https://www.youtube.com/results?search_query=pause+squat+tutorial"}, "Push Press": {"g": "Deltoidi/Tricipiti/Gambe", "c": "Military press con leggera spinta esplosiva delle gambe.", "p": "Dip breve, esplosivo.", "t": ["Piu carico del military"], "lk": "https://www.youtube.com/results?search_query=push+press+tutorial"}, "Curl Martello": {"g": "Brachiale/Brachioradiale", "c": "Curl con presa neutra (palmi uno verso l'altro).", "p": "Gomiti fissi.", "t": ["Da spessore al braccio"], "lk": "https://www.youtube.com/results?search_query=hammer+curl+tutorial"}, "Curl Concentrato": {"g": "Bicipiti (picco)", "c": "Seduta, gomito su coscia. Fletti manubrio.", "p": "Gomito fermo, braccio isolato.", "t": ["Lento, senza slancio"], "lk": "https://www.youtube.com/results?search_query=concentration+curl+tutorial"}, "Kick Back Manubri": {"g": "Tricipiti", "c": "Piegata avanti, gomito 90 gradi. Estendi indietro.", "p": "Gomito fermo, busto stabile.", "t": ["1s in estensione completa"], "lk": "https://www.youtube.com/results?search_query=tricep+kickback+tutorial"}, "Overhead Extension": {"g": "Tricipiti (capo lungo)", "c": "Un manubrio 2 mani sopra testa. Fletti dietro, estendi.", "p": "Gomiti vicini orecchie.", "t": ["Enfasi capo lungo"], "lk": "https://www.youtube.com/results?search_query=overhead+tricep+extension+tutorial"}, "Push-Up Diamante": {"g": "Tricipiti/Pettorali int.", "c": "Push-up con mani a diamante. Scendi, spingi.", "p": "Gomiti vicini al corpo.", "t": ["Ginocchia a terra se difficile"], "lk": "https://www.youtube.com/results?search_query=diamond+push+up+tutorial"}, "Stacco Sumo": {"g": "Quadricipiti/Glutei/Adduttori", "c": "Piedi molto larghi, punte fuori. Presa stretta.", "p": "Busto piu verticale.", "t": ["Meno stress lombare"], "lk": "https://www.youtube.com/results?search_query=sumo+deadlift+tutorial"}, "Pendlay Row": {"g": "Dorsali/Trapezi", "c": "Rematore ma bilanciere parte da terra ogni rip.", "p": "Busto parallelo.", "t": ["Esplosione, appoggio controllato"], "lk": "https://www.youtube.com/results?search_query=pendlay+row+tutorial"}, "Walking Lunge": {"g": "Quadricipiti/Glutei", "c": "Affondo camminando avanti.", "p": "Come affondo classico.", "t": ["Piu impegnativo per stabilita"], "lk": "https://www.youtube.com/results?search_query=walking+lunge+tutorial"}, "Alzate Laterali": {"g": "Deltoide laterale", "c": "Manubri ai lati. Alza lateralmente fino a parallele.", "p": "Gomiti flessi. Non alzare spalle.", "t": ["Peso leggero - isolamento"], "lk": "https://www.youtube.com/results?search_query=lateral+raise+tutorial"}, "Fire Hydrant": {"g": "Gluteo medio", "c": "Quattro zampe, alza ginocchio lateralmente.", "p": "Ginocchio 90 gradi. Bacino fermo.", "t": ["20 rip/lato, lento"], "lk": "https://www.youtube.com/results?search_query=fire+hydrant+tutorial"}, "Hip Thrust Singolo": {"g": "Grande gluteo", "c": "Schiena su panca, un piede a terra. Spingi anca su.", "p": "Spalle sulla panca, mento al petto.", "t": ["Gluteo stretto 1s in alto"], "lk": "https://www.youtube.com/results?search_query=single+leg+hip+thrust+tutorial"}, "Single Leg Deadlift": {"g": "Femorali/Glutei/Equilibrio", "c": "Su una gamba, manubrio in mano opposta. Piegati avanti.", "p": "Schiena neutra, anca livellata.", "t": ["Tocca piede se perdi equilibrio"], "lk": "https://www.youtube.com/results?search_query=single+leg+deadlift+tutorial"}, "Pulley": {"g": "Dorsali/Tirata upper", "c": "Seduta davanti alla carrucola BASSA. Afferra la barra/maniglie, tira verso lo sterno portando i gomiti indietro e le scapole insieme. Controlla il ritorno. Richiede carrucola bassa — senza, usa Rematore Manubri.", "p": "Schiena dritta, petto fuori, piedi ben piantati. Non inarcare la lombare.", "t": ["Tira con i dorsali, non con le braccia", "Le scapole si devono avvicinare alla fine del movimento", "Controlla la fase eccentrica: 2-3 secondi per tornare su"], "lk": "https://www.youtube.com/watch?v=-wVifByDoe4"}, "Lat Machine": {"g": "Dorsali/Tirata upper", "c": "Seduta alla carrucola alta con barra larga. Tira la barra verso il petto alto, portando i gomiti verso il basso e indietro. Controlla il ritorno sopra la testa.", "p": "Petto fuori, schiena leggermente inclinata indietro (non troppo). Presa poco piu larga delle spalle.", "t": ["Non tirare dietro la nuca: sempre davanti al petto", "Immagina di spingere i gomiti verso il pavimento", "Contrai i dorsali in basso, poi controlla la risalita"], "lk": "https://www.youtube.com/results?search_query=lat+pulldown+tutorial"}, "Tricipiti Cavo": {"g": "Tricipiti/Spinta upper", "c": "In piedi davanti alla carrucola alta, afferra la corda o la barra. Gomiti fermi ai fianchi, estendi le braccia verso il basso fino a blocco. Torna su controllando.", "p": "Busto leggermente inclinato avanti, gomiti incollati ai fianchi. Non oscillare con il corpo.", "t": ["Solo gli avambracci si muovono, il resto e fermo", "Stringi i tricipiti a fine estensione per 1 secondo", "Se usi la corda, apri le mani ai lati a fine movimento"], "lk": "https://www.youtube.com/results?search_query=tricep+pushdown+cable+tutorial"}};

var MUSCLE_IMG = img_muscle_map;


/* === GLOSSARY === */
var GLOSS = [
  { t: "Concentrica (positiva)", d: "Fase in cui il muscolo si accorcia contro la resistenza. Salire nello squat, spingere in panca, tirare nelle trazioni." },
  { t: "Eccentrica (negativa)", d: "Fase in cui il muscolo si allunga sotto carico frenando il peso. Scendere nello squat, abbassare il bilanciere. Genera piu stimolo della concentrica. Le negative lente (3-5s) sono una tecnica avanzata." },
  { t: "Isometrica", d: "Contrazione senza movimento: il muscolo lavora ma non cambia lunghezza. Plank, pausa in buca nel pause squat. Costruisce forza nel punto specifico." },
  { t: "RPE (Rate of Perceived Exertion)", d: "Scala 1-10 dello sforzo percepito. RPE 8 = potresti fare altre 2 rip. RPE 9 = ne potresti fare 1. RPE 10 = massimale." },
  { t: "Serie e ripetizione", d: "Una ripetizione = un movimento completo. Una serie = un blocco di ripetizioni. 4x8 = 4 serie da 8 rip con recupero tra serie." },
  { t: "Multiarticolare (compound)", d: "Coinvolge piu articolazioni: squat, stacco, panca, trazioni, military press. Vanno fatti PRIMA nella seduta quando sei fresca." },
  { t: "Monoarticolare (isolamento)", d: "Una sola articolazione: curl, croci, alzate laterali. Per rifinire dopo i compound." },
  { t: "Catena posteriore", d: "Glutei + femorali + erettori + dorsali. Stacco e good morning li allenano insieme." },
  { t: "Sovraccarico progressivo", d: "Per crescere devi aumentare gradualmente lo stimolo: piu peso, piu ripetizioni, meno recupero, o tecnica piu difficile." },
  { t: "Deload", d: "Settimana con carico ridotto (50-60%) per recupero. Ogni 4-6 settimane." },
  { t: "Tempo sotto tensione (TUT)", d: "Tempo totale del muscolo sotto carico in una serie. Piu TUT = piu stimolo. Si aumenta rallentando." },
  { t: "Range of Motion (ROM)", d: "Ampiezza del movimento. Squat profondo = piu ROM = piu muscolo coinvolto." },
  { t: "Presa prona", d: "Palmi in avanti (via da te). Trazioni prone = piu dorsali." },
  { t: "Presa supina", d: "Palmi verso di te. Trazioni supine = piu bicipiti." },
  { t: "Presa neutra", d: "Palmi uno verso l'altro. Meno stress su polsi e gomiti." },
];

var GLOSS_LINKS = [
  { match: "concentrica", term: "Concentrica (positiva)" },
  { match: "eccentrica", term: "Eccentrica (negativa)" },
  { match: "isometrica", term: "Isometrica" },
  { match: "rpe", term: "RPE (Rate of Perceived Exertion)" },
  { match: "serie e ripetizione", term: "Serie e ripetizione" },
  { match: "ripetizione", term: "Serie e ripetizione" },
  { match: "multiarticolare", term: "Multiarticolare (compound)" },
  { match: "compound", term: "Multiarticolare (compound)" },
  { match: "monoarticolare", term: "Monoarticolare (isolamento)" },
  { match: "isolamento", term: "Monoarticolare (isolamento)" },
  { match: "catena posteriore", term: "Catena posteriore" },
  { match: "sovraccarico progressivo", term: "Sovraccarico progressivo" },
  { match: "deload", term: "Deload" },
  { match: "tempo sotto tensione", term: "Tempo sotto tensione (TUT)" },
  { match: "tut", term: "Tempo sotto tensione (TUT)" },
  { match: "range of motion", term: "Range of Motion (ROM)" },
  { match: "rom", term: "Range of Motion (ROM)" },
  { match: "presa prona", term: "Presa prona" },
  { match: "presa supina", term: "Presa supina" },
  { match: "presa neutra", term: "Presa neutra" },
];

/* === TRAINING PRINCIPLES === */
var PRINCIPLES_DEEP = [
  { t: "Volume, Intensita e Densita: i Fantastici 3", d: [
    {type:"p", content:"Ogni scheda si basa sull'equilibrio di tre parametri. Non si possono massimizzare tutti insieme: ogni programma fa una scelta su quale privilegiare."},
    {type:"bold-list", content:[
      ["Volume", "mole di lavoro totale (serie × rip × kg). E il parametro con la maggiore correlazione ai guadagni ipertrofici."],
      ["Intensita", "carico sul bilanciere o percezione dello sforzo. Sopra l'80% del massimale garantisce il massimo reclutamento delle fibre dalla prima rip."],
      ["Densita", "legame tra tempo sotto tensione e durata: recuperi piu brevi aumentano lo stress metabolico, recuperi piu ampi permettono carichi maggiori."]
    ]}
  ]},
  { t: "Sovraccarico progressivo", d: [
    {type:"p", content:"Il corpo segue la Legge dell'accomodamento: la risposta biologica a uno stimolo costante diminuisce nel tempo. Se fai sempre la stessa cosa, smetti di migliorare."},
    {type:"p", content:"Lo stimolo deve aumentare di settimana in settimana o mese in mese. Come?"},
    {type:"ul", content:["Piu carico","Piu ripetizioni","Piu serie","Recuperi piu brevi"]},
    {type:"p", content:"La progressione mensile di questa scheda (varianti M1→M4) e costruita esattamente su questo principio."}
  ]},
  { t: "Lavorare a buffer, non a cedimento", d: [
    {type:"p", content:"Il cedimento muscolare (impossibilita di completare una rip) non e sempre necessario e, se abusato, sovraccarica il Sistema Nervoso Centrale allungando i tempi di recupero."},
    {type:"p", content:"L'approccio migliore, soprattutto per la forza, e il buffer: se puoi fare 10 rip, fermati a 8 (buffer di 2). Questo permette di accumulare piu volume nella settimana con tecnica sempre pulita."},
    {type:"ul", content:["Buffer di 2 rip → RPE 8","Buffer di 1 rip → RPE 9","Cedimento = RPE 10: usalo solo con carichi leggeri (sotto il 60%) per forzare il reclutamento di tutte le fibre"]}
  ]},
  { t: "Multifrequenza: allena ogni muscolo 2-3 volte a settimana", d: [
    {type:"p", content:"Allenare un muscolo una sola volta a settimana (monofrequenza) e un approccio superato. La sintesi proteica dura 36-72 ore: dopo, il muscolo e pronto a ricevere un nuovo stimolo."},
    {type:"p", content:"La multifrequenza (2-3 sessioni a settimana per muscolo) permette di:"},
    {type:"ul", content:["Stimolare la sintesi proteica piu volte a settimana","Imparare meglio gli schemi motori","Migliorare coordinazione e tecnica piu rapidamente"]}
  ]},
  { t: "Priorita agli esercizi multiarticolari", d: [
    {type:"p", content:"Un buon programma si basa sui fondamentali: Squat, Panca, Stacco, Trazioni, Military Press, Rematore. Coinvolgono ampie catene cinetiche e garantiscono il miglior impatto sistemico."},
    {type:"ul", content:["Multiarticolari prima: all'inizio della seduta quando sei fresca e il SNC e riposato","Isolamento dopo: curl, alzate laterali, clamshell hanno un ruolo di assistenza e rifinimento","Mai invertire l'ordine: un isolamento pre-affaticato brucia il muscolo prima del compound"]}
  ]},
  { t: "Misurare i progressi", d: [
    {type:"p", content:"Non ci si allena a sensazione. Se non misuri, non sai se il piano sta funzionando."},
    {type:"p", content:"Tieni traccia di:"},
    {type:"ul", content:["Carichi sollevati serie per serie","Ripetizioni eseguite","RPE percepito"]},
    {type:"p", content:"Solo con i dati puoi capire quando aumentare il carico, quando scaricare e quando e il momento di cambiare scheda."}
  ]},
  { t: "Gestione della fatica e settimana di scarico", d: [
    {type:"p", content:"L'allenamento crea danno muscolare (stress). Il corpo si ricostruisce piu forte durante il riposo: questa fase si chiama supercompensazione."},
    {type:"p", content:"Se lo stress e continuo senza recupero si va in overtraining:"},
    {type:"ul", content:["Infortuni","Stagnazione dei progressi","Calo delle performance"]},
    {type:"p", content:"Ogni 4-8 settimane inserisci una settimana di scarico: dimezza il volume o abbassa i carichi. Muscoli, tendini e sistema nervoso possono dissipare la fatica accumulata."}
  ]},
  { t: "Sistema Nervoso Centrale (SNC) e fatica", d: [
    {type:"p", content:"Non e solo il muscolo a stancarsi: i grandi esercizi pesanti tassano anche il Sistema Nervoso Centrale."},
    {type:"bold-list", content:[
      ["Alto impatto sul SNC", "squat, stacco, panca, military press — vanno messi all'inizio della seduta"],
      ["Basso impatto sul SNC", "curl, clamshell, nordic curl, isolamenti — possono stare alla fine"]
    ]},
    {type:"p", content:"Non accumulare volume eccessivo sui compound: la fatica del SNC compromette la tecnica e aumenta il rischio di infortuni."}
  ]},
  { t: "Manovra di Valsalva", d: [
    {type:"p", content:"Tecnica respiratoria fondamentale per tutti i grandi esercizi sotto carico: squat, stacco, good morning."},
    {type:"p", content:"Come si fa:"},
    {type:"ul", content:["Inspira profondamente a polmoni pieni","Blocca il respiro e gonfia la pancia","Esegui il movimento","Espira solo dopo aver superato il punto critico"]},
    {type:"p", content:"Questo crea pressione intra-addominale che forma un cuscinetto attorno alle vertebre lombari, proteggendole dalle forze di taglio che si generano sotto carico."}
  ]},
  { t: "Retroversione del bacino", d: [
    {type:"p", content:"Il segreto per un core sicuro ed efficace. Da sdraiata o in plank, annulla lo spazio tra la schiena e il pavimento appiattendo la curva lombare."},
    {type:"p", content:"Senza questo, i flessori dell'anca (ileopsoas) tirano la bassa schiena: causa principale di dolori lombari negli esercizi di core."},
    {type:"ul", content:["Plank: bacino in retroversione, glutei stretti","Ab wheel: glutei contratti prima ancora di muoversi","Crunch: schiena incollata al pavimento durante tutto il movimento"]}
  ]},
  { t: "Assetto Hollow (scapolare)", d: [
    {type:"p", content:"Usato in plank, push-up e trazioni. Le spalle devono essere protratte (spinte in avanti) e depresse (verso il basso) — non tirate su verso le orecchie."},
    {type:"p", content:"Come ottenerlo: immagina di doverti allontanare costantemente dal pavimento con le mani o gli avambracci."},
    {type:"ul", content:["Crea stabilita dell'articolazione scapolo-toracica","Riduce il rischio di impingement alla spalla","Attiva correttamente il dentato anteriore e il gran dorsale"]}
  ]},
  { t: "Hip Dominant vs Knee Dominant", d: [
    {type:"p", content:"Due grandi categorie di movimenti compound, con muscoli e meccanica diversa."},
    {type:"bold-list", content:[
      ["Hip Dominant", "anca che spinge indietro, busto che si inclina → glutei, femorali, erettori. Esempi: stacco, good morning, stacco rumeno, hip thrust."],
      ["Knee Dominant", "ginocchio che flette, busto verticale → quadricipiti. Esempi: squat, affondi, step up."]
    ]},
    {type:"p", content:"La maggior parte degli esercizi compound include entrambi, con enfasi diversa in base alla posizione del busto e alla lunghezza del passo."}
  ]},
  { t: "Focus muscolare: cambiare target senza cambiare esercizio", d: [
    {type:"p", content:"Puoi spostare il lavoro muscolare senza cambiare esercizio: basta modificare la posizione del corpo."},
    {type:"bold-list", content:[
      ["Passo corto + busto verticale", "piu quadricipiti (squat bulgaro, affondi, walking lunge)"],
      ["Passo piu lungo + busto inclinato", "piu glutei e femorali"],
      ["Squat con sedere indietro", "piu glutei; squat con busto verticale = piu quadricipiti"]
    ]}
  ]},
  { t: "Tempo sotto tensione (TUT) e tensione continua", d: [
    {type:"p", content:"Negli esercizi di isolamento il TUT e spesso piu importante del carico massimo."},
    {type:"ul", content:["Rallenta la fase eccentrica di 3-5 secondi: massimizza il danno muscolare e l'ipertrofia","Tensione continua: non rilasciare il muscolo a fine movimento, mantienilo sempre sotto carico","Nei compound pesanti invece il TUT si mantiene moderato per non sovraccaricare il SNC"]},
    {type:"p", content:"Esempi: nordic curl con negativa 5s, curl bicipiti con discesa lenta, clamshell con pausa isometrica."}
  ]},
  { t: "Picco di contrazione isometrica", d: [
    {type:"p", content:"Negli esercizi di isolamento per i glutei, il lavoro ottimale non si basa su carichi massimali ma sulla pausa nel punto di massima contrazione."},
    {type:"ul", content:["Clamshell, abduzione, hip thrust: 2-3 secondi ferma al massimo sforzo","Trazioni: 1 secondo sopra la sbarra con scapole strette","Rematore: 1 secondo con gomito indietro e scapola addotta"]},
    {type:"p", content:"2-3 secondi di pausa isometrica moltiplicano lo stimolo al muscolo bersaglio piu che aggiungere peso."}
  ]},
  { t: "Sticking point e esercizi complementari", d: [
    {type:"p", content:"Lo sticking point e il punto piu debole di un'alzata: dove il movimento rallenta o si blocca sotto fatica. Gli esercizi complementari servono a rinforzare esattamente quell'anello debole."},
    {type:"ul", content:["Good morning → rinforza lombari e femorali per squat e stacco","Trazioni → rafforzano i dorsali per il rematore","Nordic curl → protegge il crociato e rinforza i femorali per tutti i movimenti con le gambe"]},
    {type:"p", content:"Regola aurea: ogni esercizio complementare deve avere uno scopo preciso. Se non rinforza un punto debole, non costruisce massa in un distretto specifico e non previene squilibri — non farlo."}
  ]},
];

/* === MUSCLES === */
var MUSC = [
  { n: "Grande pettorale", z: "Anteriore", w: "Petto, dalla clavicola all'omero", y: "Spinta orizzontale e adduzione braccio.", ex: ["Panca","Push-Up","Croci Manubri a Terra","Floor Press Manubri"] },
  { n: "Deltoide", z: "Anteriore/Laterale", w: "Spalla - tre fasci", y: "Stabilizza e muove la spalla. Ogni spinta sopra la testa.", ex: ["Military Press","Arnold Press","Push Press","Alzate Laterali"] },
  { n: "Trapezio", z: "Posteriore", w: "Dal cranio a meta schiena", y: "Stabilizza scapole e postura.", ex: ["Stacco da Terra","Rematore Bilanciere","Trazioni"] },
  { n: "Grande dorsale", z: "Posteriore", w: "Dalla zona lombare all'omero", y: "Il muscolo piu grande della schiena. Forma la V.", ex: ["Trazioni","Trazioni Supine","Rematore Bilanciere","Rematore Manubri"] },
  { n: "Erettori spinali", z: "Posteriore", w: "Due colonne lungo la colonna vertebrale", y: "Schiena eretta. Senza erettori forti ogni carico diventa pericoloso.", ex: ["Stacco da Terra","Good Morning","Hyperextension","Stacco Rumeno"] },
  { n: "Retto addominale", z: "Anteriore", w: "Dal pube allo sterno", y: "Stabilizzatore core. Protegge la colonna.", ex: ["Ab Wheel","Plank","Shoulder Tap"] },
  { n: "Obliqui", z: "Laterale", w: "Ai lati dell'addome", y: "Rotazione e anti-rotazione del tronco.", ex: ["Addominali Obliqui","Plank","Shoulder Tap"] },
  { n: "Bicipite braccio", z: "Anteriore", w: "Parte anteriore braccio", y: "Flessione gomito. Coinvolto in ogni tirata.", ex: ["Curl Bicipiti","Curl Martello","Trazioni Supine","Rematore Manubri"] },
  { n: "Tricipite braccio", z: "Posteriore", w: "Parte posteriore braccio - 3 capi", y: "Estensione gomito. 2/3 del volume del braccio.", ex: ["French Press Manubri","Dip su Panca","Push-Up Diamante","Panca","Military Press"] },
  { n: "Quadricipite", z: "Anteriore", w: "Parte anteriore coscia - 4 capi", y: "Estensione ginocchio. Motore di squat, affondi, scale.", ex: ["Squat","Front Squat","Squat Bulgaro","Affondi","Step Up"] },
  { n: "Bicipite femorale", z: "Posteriore", w: "Parte posteriore coscia", y: "Flessione ginocchio. Protegge il crociato.", ex: ["Nordic Curl","Stacco da Terra","Stacco Rumeno","Good Morning"] },
  { n: "Grande gluteo", z: "Posteriore", w: "Massa principale del sedere", y: "Il muscolo piu potente del corpo. Postura, corsa, salto.", ex: ["Squat","Stacco da Terra","Affondi","Hip Thrust Singolo","Good Morning","Hyperextension"] },
  { n: "Medio gluteo", z: "Laterale", w: "Lato esterno anca", y: "Abduzione e stabilizzazione anca. Previene collasso ginocchio.", ex: ["Clamshell","Abduzione Laterale","Fire Hydrant","Affondi"] },
  { n: "Soleo/Gemelli", z: "Posteriore", w: "Polpaccio", y: "Flessione plantare. Stabilita in squat e camminata.", ex: ["Squat","Affondi","Step Up"] },
];

/* === STRETCHING === */
var STR = {
  "Dorsali": { img: "str_Dorsali", d: "Posizione del bambino", h: "In ginocchio, siediti sui talloni. Allunga le braccia il piu avanti possibile sul pavimento, fronte a terra. Spingi il bacino verso i talloni mentre le mani scivolano avanti. Per enfatizzare un lato, sposta entrambe le mani verso destra (allunghi il dorsale sinistro) e viceversa.", t: "30s per lato, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=child+pose+lat+stretch", tm: 30 },
  "Femorali": { img: "str_Femorali", d: "Allungamento posteriore coscia", h: "Seduta a terra, una gamba tesa davanti a te, l'altra piegata con la pianta del piede contro l'interno coscia. Piegati in avanti DALLA VITA (non dalla schiena) verso il piede della gamba tesa. Non serve toccare il piede: fermati dove senti la tensione dietro la coscia. Mantieni la schiena dritta.", t: "30s per gamba, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=seated+hamstring+stretch", tm: 30 },
  "Lombare": { img: "str_Lombare", d: "Ginocchia al petto", h: "Sdraiata supina, porta entrambe le ginocchia al petto e abbraccia con le braccia. Tira dolcemente verso di te. Oscilla leggermente a destra e sinistra per massaggiare tutta la zona lombare. Respira profondamente e rilassa la schiena a terra ad ogni espirazione.", t: "30s, ripeti 3 volte", lk: "https://www.youtube.com/results?search_query=knees+to+chest+lower+back+stretch", tm: 30 },
  "Pettorali": { img: "str_Pettorali", d: "Allungamento al muro", h: "In piedi accanto a uno stipite o angolo del muro. Appoggia l'avambraccio con il gomito a 90 gradi contro il muro (gomito all'altezza della spalla). Ruota lentamente il busto dalla parte opposta fino a sentire l'allungamento nella parte anteriore del petto. Il braccio resta fermo, ruota solo il tronco.", t: "30s per lato, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=doorway+chest+stretch+pectoralis", tm: 30 },
  "Quadricipiti": { img: "str_Quadricipiti", d: "Tallone al gluteo", h: "In piedi (appoggiati al muro se serve equilibrio), afferra la caviglia dietro di te e porta il tallone verso il gluteo. Le ginocchia restano unite e parallele. Spingi leggermente l'anca in avanti per aumentare l'allungamento. Non inarcare la schiena.", t: "30s per gamba, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=standing+quad+stretch", tm: 30 },
  "Flessori anca": { img: "str_Flessori anca", d: "Affondo basso", h: "Posizione di affondo con il ginocchio posteriore appoggiato a terra (usa un tappetino). Il ginocchio anteriore a 90 gradi. Spingi l'anca del lato posteriore in avanti e in basso. Sentirai l'allungamento nella parte anteriore della coscia e dell'anca della gamba dietro. Mantieni il busto eretto.", t: "30s per lato, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=hip+flexor+stretch+kneeling", tm: 30 },
  "Spalle": { img: "str_Spalle", d: "Braccio davanti al petto", h: "Porta un braccio teso orizzontalmente davanti al petto. Con l'altro braccio, premi SOPRA il gomito (non sotto) avvicinando il braccio teso al corpo. Tieni la spalla bassa, non alzarla verso l'orecchio. Sentirai l'allungamento nella parte posteriore della spalla.", t: "20s per lato, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=cross+body+shoulder+stretch", tm: 20 },
  "Tricipiti": { img: "str_Tricipiti", d: "Braccio dietro la testa", h: "Porta un braccio sopra la testa e piega il gomito, lasciando cadere la mano dietro la schiena tra le scapole. Con l'altra mano, afferra il gomito e spingi dolcemente verso il basso/dietro. Sentirai l'allungamento lungo la parte posteriore del braccio.", t: "20s per lato, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=overhead+tricep+stretch", tm: 20 },
  "Glutei": { img: "str_Glutei", d: "Figura a 4 (piriforme)", h: "Sdraiata supina, incrocia una caviglia sul ginocchio opposto formando un 4. Afferra con entrambe le mani la coscia della gamba che sta a terra e tirala verso il petto. Sentirai un allungamento profondo nel gluteo della gamba incrociata. Se non arrivi con le mani, usa un asciugamano.", t: "30s per lato, ripeti 2 volte", lk: "https://www.youtube.com/results?search_query=figure+four+piriformis+stretch", tm: 30 },
  "Cat-Cow": { img: "w_CatCow", d: "Gatto-mucca (mobilita colonna)", h: "A quattro zampe, mani sotto le spalle, ginocchia sotto le anche. INSPIRA: inarca la schiena lasciando cadere la pancia verso il pavimento, testa su, coccige su (mucca). ESPIRA: arrotonda la schiena verso il soffitto, mento al petto, coccige in dentro (gatto). Alterna lentamente, sincronizzando col respiro.", t: "10 ripetizioni lente", lk: "https://www.youtube.com/results?search_query=cat+cow+stretch+tutorial", tm: 60 },
};

/* === WORKOUT PLAN WITH MONTHS === */
var DAYS = [
  { name: "Lunedi", focus: "Tirata upper + core + catena posteriore", dur: "8-10min", tEst: 70,
    intro: "Oggi lavori sulla schiena: la muscolatura che ti tiene dritta e ti da potenza. Trazioni e rematore costruiscono dorsali e romboidi; il core con l'ab wheel protegge la colonna; hyperextension e good morning blindano la catena posteriore. Ogni tirata che fai oggi migliora la tua postura di domani.",
    warmup: [
      { n: "Corsa sul posto o jumping jacks", img: "w_JumpingJacks", d: "5 minuti continui a intensita moderata. Obiettivo: alzare la frequenza cardiaca e la temperatura muscolare.", lk: "https://www.youtube.com/results?search_query=jumping+jacks+tutorial", tm: 300 },
      { n: "Cerchi con le braccia", d: "In piedi, braccia tese ai lati. Fai cerchi ampi in avanti per 10 rip, poi 10 indietro. Scalda la cuffia dei rotatori e le spalle.", lk: "https://www.youtube.com/results?search_query=arm+circles+warmup" },
      { n: "Cat-Cow", img: "w_CatCow", d: "A quattro zampe: inspira e inarca (pancia giu, testa su), espira e arrotonda (mento al petto, schiena su). 10 ripetizioni lente. Mobilizza tutta la colonna.", lk: "https://www.youtube.com/results?search_query=cat+cow+warmup" },
      { n: "Inchworm", img: "w_Inchworm", d: "In piedi, piegati e cammina avanti con le mani fino al plank. Push-up facoltativo, poi torna indietro. 2 serie da 5. Attiva core, spalle e femorali.", lk: "https://www.youtube.com/results?search_query=inchworm+exercise+warmup" },
    ],
    ex: [
      { n: "Ab Wheel", s: "8x4", rpe: "", note: "8 serie da 4 rip" },
      { n: "Trazioni", s: "4xmax", rpe: "", note: "Sett.1: 1 completa. Negativa se serve", v2: { n: "Rematore Bilanciere", s: "4x8-6-6-5" }, v3: { n: "Trazioni", s: "4xmax", note: "Presa larga" }, v4: { n: "Trazioni", s: "4x6-5-4-4", note: "Zavorrate" } },
      { n: "Push-Up", s: "4xmax", rpe: "", note: "Tecnica: bacino che scende", v2: { n: "Floor Press Manubri", s: "4x10-8-8-6" }, v3: { n: "Push-Up Declino", s: "4xmax" }, v4: { n: "Push-Up", s: "4xmax", note: "Pausa 2s in basso" } },
      { n: "Rematore Manubri", s: "4x12-10-8-8", rpe: "9", note: "35-35-40-40 sett.1", defaultFree: true, cable: { n: "Pulley", s: "4x12-10-8-8", rpe: "9", note: "35-35-40-40 sett.1" }, free: { n: "Rematore Manubri", s: "4x12-10-8-8", rpe: "9", note: "35-35-40-40 sett.1" }, v2: { n: "Rematore Bilanciere", s: "4x12-10-8-8" }, v3: { n: "Rematore Manubri", s: "4x8-6-6-5", note: "Pesante" }, v4: { n: "Pendlay Row", s: "4x8-6-6-5" } },
      { n: "Nordic Curl", s: "4x12-10-8-8", rpe: "9", note: "Sost. leg curl. Sett.1: 9-9-10-11kg", v2: { n: "Single Leg Deadlift", s: "4x10" }, v3: { n: "Nordic Curl", s: "4x8-6-6-5", note: "Negativa 5s" }, v4: { n: "Nordic Curl", s: "4x6-5-5-4", note: "Negativa 5s" } },
      { n: "Hyperextension", s: "4x15", rpe: "9", note: "5kg", v2: { n: "Stacco Rumeno", s: "4x10-8-8-6" }, v3: { n: "Hyperextension", s: "4x12", note: "10kg" }, v4: { n: "Hyperextension", s: "4x12", note: "15kg" } },
      { n: "Good Morning", s: "3x12", rpe: "8", note: "Aggiunta. Bilanciere leggero" },
    ], str: ["Dorsali","Femorali","Lombare","Pettorali"] },
  { name: "Martedi", focus: "Spinta lower + upper + braccia", dur: "8-10min", tEst: 80,
    intro: "La giornata piu completa: squat per costruire gambe solide, military press per spalle forti, braccia con curl e french press. Core in apertura per attivare la stabilita. Ogni muscolo che spingi oggi reagisce crescendo nei giorni di riposo. Fidati del processo.",
    warmup: [
      { n: "Burpees leggeri o skip sul posto", img: "w_Burpees", d: "5 minuti. Burpees: scendi in squat, mani a terra, salta in plank, torna su. Skip: corri sul posto ginocchia al petto. Ritmo moderato.", lk: "https://www.youtube.com/results?search_query=beginner+burpees+tutorial", tm: 300 },
      { n: "Squat a corpo libero", img: "w_SquatBL", d: "2 serie da 8. Lento, concentrati sulla profondita e busto eretto. Prepara quadricipiti e glutei.", lk: "https://www.youtube.com/results?search_query=bodyweight+squat+warmup" },
      { n: "Military press con bilanciere scarico", img: "w_MilitaryPress", d: "2 serie da 8. Bilanciere vuoto o bastone. Movimento completo: clavicole a sopra la testa. Scalda deltoidi e stabilizzatori.", lk: "https://www.youtube.com/results?search_query=overhead+press+empty+bar+warmup" },
      { n: "Plank", d: "30 secondi. Attiva il core prima di caricare.", lk: "https://www.youtube.com/results?search_query=plank+warmup", tm: 30 },
    ],
    ex: [
      { n: "Addominali Obliqui", s: "3x15", rpe: "", note: "Russian twist o crunch laterale" },
      { n: "Plank", s: "3x45s", rpe: "", note: "" },
      { n: "Squat", s: "4x8-6-6-5", rpe: "8", note: "", v2: { n: "Front Squat", s: "4x8-6-6-5" }, v3: { n: "Pause Squat", s: "4x6-5-5-4" }, v4: { n: "Squat", s: "4x5-4-4-3", note: "Pesante" } },
      { n: "Military Press", s: "4x8-6-6-5", rpe: "8", note: "", v2: { n: "Push Press", s: "4x6-5-5-4" }, v3: { n: "Military Press", s: "4x10-8-8-6", note: "Manubri" }, v4: { n: "Military Press", s: "4x5-4-4-3", note: "Pesante" } },
      { n: "Lat Machine", s: "4x12-10-8-8", rpe: "9", note: "Sett.1: 30-30-35-35", cable: { n: "Lat Machine", s: "4x12-10-8-8", rpe: "9", note: "Sett.1: 30-30-35-35" }, free: { n: "Trazioni Supine", s: "4x12-10-8-8", rpe: "9", note: "Sost. lat machine" }, v2: { n: "Rematore Bilanciere", s: "4x10-8-8-6" }, v3: { n: "Rematore Manubri", s: "4x10-8-8-6" }, v4: { n: "Trazioni Supine", s: "4xmax", note: "Negativa 5s" } },
      { n: "Curl Bicipiti", s: "4x12", rpe: "9", note: "Manubri", v2: { n: "Curl Martello", s: "4x12" }, v3: { n: "Curl Concentrato", s: "4x10" }, v4: { n: "Curl Bicipiti", s: "4x8", note: "Pesante" } },
      { n: "French Press Manubri", s: "4x12", rpe: "9", note: "Presa neutra. Sost. french press bil.", v2: { n: "Kick Back Manubri", s: "4x12" }, v3: { n: "Overhead Extension", s: "4x12" }, v4: { n: "French Press Manubri", s: "4x8", note: "Pesante" } },
      { n: "Tricipiti Cavo", s: "3x12", rpe: "8", note: "Carrucola alta", cable: { n: "Tricipiti Cavo", s: "3x12", rpe: "8", note: "Carrucola alta" }, free: { n: "Dip su Panca", s: "3x12", rpe: "8", note: "Sost. tricipiti cavo" }, v2: { n: "Push-Up Diamante", s: "3xmax" }, v3: { n: "Dip su Panca", s: "3xmax", note: "Piedi su rialzo" }, v4: { n: "Dip su Panca", s: "3xmax", note: "Disco sulle gambe" } },
      { n: "Squat Bulgaro", s: "3x10", rpe: "8", note: "Per gamba. Sost. leg extension", v2: { n: "Step Up", s: "3x12" }, v3: { n: "Squat Bulgaro", s: "3x8", note: "Manubri pesanti" }, v4: { n: "Walking Lunge", s: "3x10" } },
    ], str: ["Quadricipiti","Flessori anca","Spalle","Tricipiti"] },
  { name: "Mercoledi", focus: "Spinta upper + lower + tirata", dur: "8-10min", tEst: 55,
    intro: "Casa, bilanciere, essenziale. Panca per il petto, stacco per tutta la catena posteriore, rematore per la schiena, squat leggero per chiudere. Pochi esercizi, tutti fondamentali: oggi costruisci le fondamenta della forza reale.",
    warmup: [
      { n: "Cat-Cow", img: "w_CatCow", d: "10 ripetizioni lente. Mobilizza la colonna prima di caricarla con stacco e panca.", lk: "https://www.youtube.com/results?search_query=cat+cow+warmup" },
      { n: "World's Greatest Stretch", d: "5 per lato. Parti in affondo, mano a terra, ruota il busto aprendo l'altro braccio verso il soffitto. Allunga flessori anca, torace, anche, femorali.", lk: "https://www.youtube.com/results?search_query=worlds+greatest+stretch+tutorial" },
      { n: "Stacco con bilanciere scarico", d: "2 serie da 5. Bilanciere vuoto. Simula lo schema motorio, attiva la catena posteriore.", lk: "https://www.youtube.com/results?search_query=deadlift+warmup+light+weight" },
      { n: "Plank", d: "30 secondi. Core attivo prima di caricare.", lk: "https://www.youtube.com/results?search_query=plank+warmup", tm: 30 },
    ],
    ex: [
      { n: "Plank", s: "3x45s", rpe: "", note: "" },
      { n: "Panca", s: "4x8-6-6-5", rpe: "8", note: "Sett.1: 5kg", v2: { n: "Floor Press Manubri", s: "4x10-8-8-6" }, v3: { n: "Panca", s: "4x6-5-5-4", note: "Pausa al petto" }, v4: { n: "Panca", s: "4x5-4-3-3", note: "Pesante" } },
      { n: "Stacco da Terra", s: "4x8-6-6-5", rpe: "8", note: "Sett.1: 15-20-20kg", v2: { n: "Stacco Sumo", s: "4x8-6-6-5" }, v3: { n: "Stacco da Terra", s: "4x6-5-5-4", note: "Pausa sotto ginocchio" }, v4: { n: "Stacco da Terra", s: "4x5-4-3-3", note: "Pesante" } },
      { n: "Rematore Bilanciere", s: "4x8-8-6-6", rpe: "9", note: "", v2: { n: "Rematore Bilanciere", s: "4x8-8-6-6", note: "Presa supina" }, v3: { n: "Pendlay Row", s: "4x8-6-6-5" }, v4: { n: "Rematore Bilanciere", s: "5x5", note: "Pesante" } },
      { n: "Squat", s: "3x10", rpe: "7", note: "A terra, ginocchia larghe. Con kb o bil. (5+2.5kg)" },
    ], str: ["Pettorali","Femorali","Lombare","Cat-Cow","Dorsali"] },
  { name: "Giovedi", focus: "Spinta lower + glutei + upper isolamento", dur: "8-10min", tEst: 70,
    intro: "Glutei, gambe, spalle: oggi il corpo lavora dal basso verso l'alto. Affondi e clamshell scolpiscono glutei e stabilizzatori dell'anca; croci e arnold press rifiniscono petto e deltoidi. Alto volume, brucia, ma e qui che cambia la forma.",
    warmup: [
      { n: "Marcia con ginocchia alte", d: "5 minuti. Ginocchia al petto ad ogni passo. Ritmo sostenuto. Scalda flessori anca e quadricipiti.", lk: "https://www.youtube.com/results?search_query=high+knees+march+warmup", tm: 300 },
      { n: "Clamshell a corpo libero", d: "10 per lato. Su un fianco, ginocchia piegate, apri il ginocchio superiore. Attiva gluteo medio prima degli affondi.", lk: "https://www.youtube.com/results?search_query=clamshell+warmup+glute+activation" },
      { n: "Affondi a corpo libero", d: "10 totali (5 per gamba). Lenti, senza peso. Prepara quadricipiti e glutei.", lk: "https://www.youtube.com/results?search_query=bodyweight+lunge+warmup" },
      { n: "Good morning senza peso", d: "10 ripetizioni. Mani dietro la testa, piega avanti spingendo il bacino indietro. Attiva erettori e femorali.", lk: "https://www.youtube.com/results?search_query=good+morning+bodyweight+warmup" },
    ],
    ex: [
      { n: "Addominali Obliqui", s: "3x15", rpe: "", note: "" },
      { n: "Shoulder Tap", s: "1x33", rpe: "", note: "" },
      { n: "Hyperextension", s: "3x15", rpe: "9", note: "10kg", v2: { n: "Stacco Rumeno", s: "3x10" }, v3: { n: "Hyperextension", s: "3x12", note: "15kg" }, v4: { n: "Hyperextension", s: "3x10", note: "20kg" } },
      { n: "Affondi", s: "5x15", rpe: "9", note: "Manubri ai lati", v2: { n: "Walking Lunge", s: "4x12" }, v3: { n: "Affondi", s: "5x12", note: "Indietro" }, v4: { n: "Squat Bulgaro", s: "4x10", note: "Pesante" } },
      { n: "Clamshell", s: "5x15", rpe: "9", note: "Per lato. Sost. abductor (40kg)", v2: { n: "Fire Hydrant", s: "5x15" }, v3: { n: "Clamshell", s: "5x15", note: "Con elastico" }, v4: { n: "Abduzione Laterale", s: "5x15", note: "Con cavigliera" } },
      { n: "Croci Manubri a Terra", s: "4x12", rpe: "9", note: "8kg. Usa fitball come panca inclinata", v2: { n: "Push-Up Declino", s: "4xmax" }, v3: { n: "Floor Press Manubri", s: "4x10" }, v4: { n: "Croci Manubri a Terra", s: "4x10", note: "Pausa 2s in basso" } },
      { n: "Arnold Press", s: "4x12", rpe: "9", note: "8kg", v2: { n: "Alzate Laterali", s: "4x15" }, v3: { n: "Push Press", s: "4x8" }, v4: { n: "Arnold Press", s: "4x8", note: "Pesante" } },
    ], str: ["Glutei","Flessori anca","Quadricipiti","Pettorali","Spalle"] },
  { name: "Giorno 5-6", focus: "Richiamo braccia + core + gambe", dur: "5min", tEst: 45,
    intro: "Sessione opzionale, a casa, senza pressione. Richiami braccia, core e gambe con volume leggero. Non serve spingere al limite: l'obiettivo e mantenere attivo il corpo e consolidare il lavoro della settimana. Se sei stanca, salta. Se hai energia, falla.",
    warmup: [
      { n: "Corsa sul posto", img: "w_JumpingJacks", d: "2 minuti a ritmo leggero. Sessione opzionale.", lk: "https://www.youtube.com/results?search_query=jogging+in+place+warmup", tm: 120 },
      { n: "Jumping jacks", img: "w_JumpingJacks", d: "10 ripetizioni. Alza la frequenza cardiaca.", lk: "https://www.youtube.com/results?search_query=jumping+jacks+tutorial" },
      { n: "Squat a corpo libero", img: "w_SquatBL", d: "10 ripetizioni lente.", lk: "https://www.youtube.com/results?search_query=bodyweight+squat+warmup" },
    ],
    ex: [
      { n: "Curl Bicipiti", s: "3x12", rpe: "", note: "" },
      { n: "Dip su Panca", s: "3xmax", rpe: "", note: "Tricipiti" },
      { n: "Addominali Obliqui", s: "3x15", rpe: "", note: "" },
      { n: "Step Up", s: "3x12", rpe: "", note: "Per gamba" },
      { n: "Trazioni", s: "3xmax", rpe: "", note: "" },
      { n: "Push-Up", s: "3xmax", rpe: "", note: "" },
      { n: "Affondi", s: "3x12", rpe: "", note: "Corpo libero o manubri" },
    ], str: ["Femorali","Quadricipiti","Pettorali","Dorsali","Lombare"] },
];

var PRINCIPLES = [
  { t: "Piramidale ascendente (4x8-6-6-5)", d: "La prima serie da 8 rip e il riscaldamento specifico col carico di lavoro. Le serie da 6 e 5 sono il lavoro vero: meno ripetizioni, piu carico, piu stimolo di forza. Il peso sale serie dopo serie. Si usa nei compound pesanti (squat, stacco, panca, military)." },
  { t: "Volume decrescente (4x12-10-8-8)", d: "Piu ripetizioni = piu volume = piu crescita muscolare. La discesa da 12 a 8 permette di aumentare il peso restando in un range produttivo. Si usa negli accessori (rematore, curl, french press, lat machine)." },
  { t: "RPE (Rate of Perceived Exertion)", d: "Scala da 1 a 10 che misura quanto sei vicina al cedimento. RPE 8 = ti restano 2 rip in riserva; RPE 9 = 1 sola rip in riserva. I compound pesanti stanno a RPE 8 per proteggere articolazioni e sistema nervoso. Gli accessori a RPE 9 perche sono meno tassanti." },
  { t: "Alto volume (5x15)", d: "Tante serie, tante ripetizioni. Si usa per glutei e gambe (affondi, clamshell). Lavoro metabolico intenso: brucia, ma costruisce resistenza muscolare e ipertrofia." },
  { t: "Tante serie, poche rip (8x4)", d: "L'ab wheel e tecnicamente impegnativo e affatica velocemente. 4 rip per serie permettono di mantenere la forma perfetta per tutte le 8 serie senza compromettere la lombare." },
  { t: "Recupero tra le serie", d: "Compound pesanti: 2 min. Accessori medi: 90s. Isolamento: 60s. Core: 30s. Rispettare i recuperi e tanto importante quanto l'esercizio: il muscolo ha bisogno di ricaricare ATP per dare il massimo nella serie successiva." },
  { t: "Progressione mensile", d: "Ogni mese le varianti cambiano: piu carico, angoli diversi, tempi sotto tensione piu lunghi. Il corpo si adatta rapidamente: la progressione lo costringe a continuare a migliorare." },
];


var EX_IMG = {
  "Ab Wheel": img_Ab_Wheel,
  "Abduzione Laterale": img_Abduzione_Laterale,
  "Addominali Obliqui": img_Addominali_Obliqui,
  "Affondi": img_Affondi,
  "Alzate Laterali": img_Alzate_Laterali,
  "Arnold Press": img_Arnold_Press,
  "Clamshell": img_Clamshell,
  "Croci Manubri a Terra": img_Croci_Manubri_a_Terra,
  "Curl Bicipiti": img_Curl_Bicipiti,
  "Curl Concentrato": img_Curl_Concentrato,
  "Curl Martello": img_Curl_Martello,
  "Dip su Panca": img_Dip_su_Panca,
  "Fire Hydrant": img_Fire_Hydrant,
  "Floor Press Manubri": img_Floor_Press_Manubri,
  "French Press Manubri": img_French_Press_Manubri,
  "Front Squat": img_Front_Squat,
  "Good Morning": img_Good_Morning,
  "Hip Thrust Singolo": img_Hip_Thrust_Singolo,
  "Hyperextension": img_Hyperextension,
  "Kick Back Manubri": img_Kick_Back_Manubri,
  "Lat Machine": img_Lat_Machine,
  "Military Press": img_Military_Press,
  "Nordic Curl": img_Nordic_Curl,
  "Overhead Extension": img_Overhead_Extension,
  "Panca": img_Panca,
  "Pause Squat": img_Pause_Squat,
  "Pendlay Row": img_Pendlay_Row,
  "Plank": img_Plank,
  "Pulley": img_Pulley,
  "Push Press": img_Push_Press,
  "Push-Up": img_Push_Up,
  "Push-Up Declino": img_Push_Up_Declino,
  "Push-Up Diamante": img_Push_Up_Diamante,
  "Rematore Bilanciere": img_Rematore_Bilanciere,
  "Rematore Manubri": img_Rematore_Manubri,
  "Shoulder Tap": img_Shoulder_Tap,
  "Single Leg Deadlift": img_Single_Leg_Deadlift,
  "Squat": img_Squat,
  "Squat Bulgaro": img_Squat_Bulgaro,
  "Stacco Rumeno": img_Stacco_Rumeno,
  "Stacco Sumo": img_Stacco_Sumo,
  "Stacco da Terra": img_Stacco_da_Terra,
  "Step Up": img_Step_Up,
  "Trazioni": img_Trazioni,
  "Trazioni Supine": img_Trazioni_Supine,
  "Tricipiti Cavo": img_Tricipiti_Cavo,
  "Walking Lunge": img_Walking_Lunge,
};

var WS_IMG = {
  "str_Dorsali": img_str_Dorsali,
  "str_Femorali": img_str_Femorali,
  "str_Flessori anca": img_str_Flessori_anca,
  "str_Glutei": img_str_Glutei,
  "str_Lombare": img_str_Lombare,
  "str_Pettorali": img_str_Pettorali,
  "str_Quadricipiti": img_str_Quadricipiti,
  "str_Spalle": img_str_Spalle,
  "str_Tricipiti": img_str_Tricipiti,
  "w_Burpees": img_w_Burpees,
  "w_CatCow": img_w_CatCow,
  "w_Inchworm": img_w_Inchworm,
  "w_JumpingJacks": img_w_JumpingJacks,
  "w_MilitaryPress": img_w_MilitaryPress,
  "w_SquatBL": img_w_SquatBL,
};
var SK = "wt-v5";

var EX_EXTRA_IMG = {
  "Ab Wheel": [img_Ab_Wheel_Corretto],
};

function exImgs(name) {
  var base = EX_IMG[name] ? [EX_IMG[name]] : [];
  var extra = EX_EXTRA_IMG[name] || [];
  return base.concat(extra);
}

function ytEmbedUrl(url) {
  if (!url) return null;
  var m = url.match(/youtube\.com\/watch\?v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/);
  return m ? "https://www.youtube.com/embed/" + m[1] : null;
}


function parseSerie(str) {
  if (!str) return { sets: 3, reps: ["12"] };
  var m = str.replace(/\s/g, "").match(/(\d+)[xX](.+)/);
  if (!m) return { sets: 3, reps: ["12"] };
  return { sets: parseInt(m[1]), reps: m[2] === "max" ? Array(parseInt(m[1])).fill("max") : m[2].split("-") };
}
function todayStr() { return new Date().toISOString().split("T")[0]; }
function fmtTime(ms) { var s = Math.floor(ms / 1000); return (Math.floor(s/60) < 10 ? "0" : "") + Math.floor(s/60) + ":" + (s%60 < 10 ? "0" : "") + s%60 + "." + (Math.floor((ms%1000)/10) < 10 ? "0" : "") + Math.floor((ms%1000)/10); }

export default function App() {
  var [tab, setTab] = useState("teoria");
  var [dayIdx, setDayIdx] = useState(0);
  var [month, setMonth] = useState(1);
  var [theme, setTheme] = useState("sage");
  var [themeOpen, setThemeOpen] = useState(false);
  var [rpeOpen, setRpeOpen] = useState(false);
  var [glossOpen, setGlossOpen] = useState(false);
  var [glossTermOpen, setGlossTermOpen] = useState(null);
  var [glossTab, setGlossTab] = useState("principi");
  var [resetOpen, setResetOpen] = useState(false);
  var [exInfoOpen, setExInfoOpen] = useState(null);
  var [openEx, setOpenEx] = useState(null);
  var [openMuscle, setOpenMuscle] = useState(null);
  var [showIntro, setShowIntro] = useState(false);
  var [showStr, setShowStr] = useState(false);
  var [showImg, setShowImg] = useState(null);
  var [showExSection, setShowExSection] = useState(false);
  var [showPrinciples, setShowPrinciples] = useState(false);
  var [showReg, setShowReg] = useState(null);
  var [catSec, setCatSec] = useState(null);
  var [logs, setLogs] = useState({});
  var [editing, setEditing] = useState(null);
  var [tmpW, setTmpW] = useState("");
  var [tmpR, setTmpR] = useState("");
  var [histIdx, setHistIdx] = useState(null);
  var [cableMode, setCableMode] = useState({});
  var [fontScale, setFontScale] = useState(1.1);
  var [settingsOpen, setSettingsOpen] = useState(false);
  var [userName, setUserName] = useState("");
  var [userPhoto, setUserPhoto] = useState(null);
  var [imgZoomOpen, setImgZoomOpen] = useState(false);
  var [ready, setReady] = useState(false);
  var [tMode, setTMode] = useState("stopwatch");
  var [tRunning, setTRunning] = useState(false);
  var [tMs, setTMs] = useState(0);
  var [tTarget, setTTarget] = useState(90);
  var [tFull, setTFull] = useState(false);
  var [tFlash, setTFlash] = useState(false);
  var [tPanel, setTPanel] = useState(false);
  var intv = useRef(null);
  var tStart = useRef(null);
  var tAcc = useRef(0);
  var lastSnd = useRef(-1);

  var T = TH[theme];
  var dayData = DAYS[dayIdx];
  var dc = T.dy[dayIdx] || T.dy[0];

  function getExForMonth(raw) {
    if (month === 1) return { n: raw.n, s: raw.s, rpe: raw.rpe, note: raw.note || "" };
    var v = raw["v" + month];
    if (v) return { n: v.n, s: v.s || raw.s, rpe: v.rpe || raw.rpe, note: v.note || "" };
    return { n: raw.n, s: raw.s, rpe: raw.rpe, note: raw.note || "" };
  }

  useEffect(function() {
    try { var stored = localStorage.getItem(SK); if (stored) setLogs(JSON.parse(stored)); } catch(e) {}
    try { var n = localStorage.getItem("wt-username"); if (n) setUserName(n); } catch(e) {}
    try { var p = localStorage.getItem("wt-userphoto"); if (p) setUserPhoto(p); } catch(e) {}
    try { var th = localStorage.getItem("wt-theme"); if (th && TH[th]) setTheme(th); else localStorage.removeItem("wt-theme"); } catch(e) {}
    try { var fs = parseFloat(localStorage.getItem("wt-fontscale")); if (fs >= 0.9 && fs <= 1.5) setFontScale(fs); } catch(e) {}
    setReady(true);
  }, []);
  var saveData = useCallback(function(nl) { setLogs(nl); try { localStorage.setItem(SK, JSON.stringify(nl)); } catch(e) {} }, []);

  function checkSound(ms, mode) { var el = mode === "stopwatch" ? Math.floor(ms/1000) : Math.floor((tTarget*1000 - ms)/1000); if (el <= 0 || el === lastSnd.current) return; var prev = lastSnd.current; lastSnd.current = el; if (prev < 0) return; var pB = Math.floor(prev/30), cB = Math.floor(el/30); if (cB > pB && cB > 0) { (cB*30)%60 === 0 ? beep60() : beep30(); } }

  useEffect(function() { if (tRunning) { tStart.current = Date.now(); intv.current = setInterval(function() { var el = Date.now() - tStart.current + tAcc.current; if (tMode === "countdown") { var rem = tTarget*1000 - el; if (rem <= 0) { setTMs(0); setTRunning(false); tAcc.current = 0; setTFlash(true); beepEnd(); setTimeout(function() { setTFlash(false); }, 3000); clearInterval(intv.current); } else { setTMs(rem); checkSound(rem, "countdown"); } } else { setTMs(el); checkSound(el, "stopwatch"); } }, 50); } else { clearInterval(intv.current); } return function() { clearInterval(intv.current); }; }, [tRunning, tMode, tTarget]);

  function timerGo() { try { var c = getAC(); if (c && c.state === "suspended") c.resume(); } catch(e) {} if (tMode === "countdown" && tMs === 0 && !tRunning) { tAcc.current = 0; setTMs(tTarget * 1000); } lastSnd.current = tMode === "countdown" ? 0 : Math.floor(tMs/1000); tStart.current = Date.now(); setTRunning(true); setTFlash(false); setTFull(true); }
  function timerPause() { setTRunning(false); tAcc.current = tMode === "stopwatch" ? tMs : tTarget*1000 - tMs; }
  function timerReset() { setTRunning(false); tAcc.current = 0; lastSnd.current = -1; setTMs(tMode === "countdown" ? tTarget*1000 : 0); setTFlash(false); setTFull(false); }
  function timerSwitch(m) { setTRunning(false); tAcc.current = 0; lastSnd.current = -1; setTMode(m); setTMs(m === "countdown" ? tTarget*1000 : 0); setTFlash(false); }
  function timerSetTarget(s) { setTTarget(s); if (!tRunning) { tAcc.current = 0; lastSnd.current = -1; setTMs(s * 1000); } }

  function quickTimer(secs) {
    try { var c = getAC(); if (c && c.state === "suspended") c.resume(); } catch(e) {}
    setTRunning(false);
    clearInterval(intv.current);
    tAcc.current = 0;
    lastSnd.current = 0;
    setTMode("countdown");
    setTTarget(secs);
    setTMs(secs * 1000);
    setTFlash(false);
    setTimeout(function() {
      tStart.current = Date.now();
      tAcc.current = 0;
      lastSnd.current = 0;
      setTRunning(true);
      setTFull(true);
    }, 50);
  }

  function quickStopwatch() {
    try { var c = getAC(); if (c && c.state === "suspended") c.resume(); } catch(e) {}
    setTRunning(false);
    clearInterval(intv.current);
    tAcc.current = 0;
    lastSnd.current = -1;
    setTMode("stopwatch");
    setTMs(0);
    setTFlash(false);
    setTimeout(function() {
      tStart.current = Date.now();
      tAcc.current = 0;
      lastSnd.current = 0;
      setTRunning(true);
      setTFull(true);
    }, 50);
  }

  function fmtLabel(secs) {
    if (secs >= 60 && secs % 60 === 0) return (secs / 60) + " min";
    if (secs >= 60) return Math.floor(secs / 60) + "min " + (secs % 60) + "s";
    return secs + "s";
  }

  function fmtSerie(str) {
    if (!str) return "";
    var m = str.replace(/\s/g, "").match(/(\d+)[xX](.+)/);
    if (!m) return str;
    var sets = m[1];
    var reps = m[2];
    if (reps === "max") return sets + " serie al massimo delle ripetizioni";
    if (reps.indexOf("s") >= 0) return sets + " serie da " + reps + " ciascuna";
    var parts = reps.split("-");
    if (parts.length === 1) return sets + " serie da " + parts[0] + " ripetizioni";
    return sets + " serie: " + parts.join(", ") + " rip (peso crescente)";
  }

  function textChunks(text) {
    if (!text) return [];
    return text
      .split(/\n+/)
      .flatMap(function(block) {
        return block
          .split(/(?<=[.!?])\s+(?=[A-Z0-9])/)
          .map(function(part) { return part.trim(); })
          .filter(Boolean);
      });
  }

  function DetailText(props) {
    var items = textChunks(props.text);
    var accentColor = props.accent || dc;
    var size = props.size || 12;
    var gap = props.gap || 6;
    if (!items.length) return null;
    return <div style={{ display: "grid", gap: gap }}>
      {items.map(function(item, idx) {
        return <div key={idx} style={{ display: "flex", gap: 8, alignItems: "flex-start", background: props.soft ? accentColor + "08" : "transparent", border: props.soft ? "1px solid " + accentColor + "12" : "none", borderRadius: props.soft ? 8 : 0, padding: props.soft ? "8px 10px" : 0 }}>
          <span style={{ color: accentColor, fontSize: size - 1, lineHeight: 1.6, marginTop: 1 }}>•</span>
          <span style={{ fontSize: size, lineHeight: 1.6, color: T.sub }}>{renderGlossaryText(item, accentColor)}</span>
        </div>;
      })}
    </div>;
  }

  function RichBlocks(props) {
    var blocks = props.blocks;
    var ac = props.accent || dc;
    if (!blocks || !Array.isArray(blocks)) return <DetailText text={blocks} accent={ac} soft={props.soft} />;
    return <div style={{ display: "grid", gap: 10 }}>
      {blocks.map(function(block, bi) {
        if (block.type === "p") {
          return <p key={bi} style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: T.sub }}>{block.content}</p>;
        }
        if (block.type === "ul") {
          return <ul key={bi} style={{ margin: "0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 5 }}>
            {block.content.map(function(item, ii) {
              return <li key={ii} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: ac, fontWeight: 700, fontSize: 13, lineHeight: 1.5, flexShrink: 0, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 12, lineHeight: 1.6, color: T.sub }}>{item}</span>
              </li>;
            })}
          </ul>;
        }
        if (block.type === "bold-list") {
          return <div key={bi} style={{ display: "grid", gap: 7 }}>
            {block.content.map(function(item, ii) {
              return <div key={ii} style={{ display: "flex", gap: 0, flexDirection: "column", background: ac + "0A", border: "1px solid " + ac + "18", borderRadius: 8, padding: "8px 11px" }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: ac, marginBottom: 2 }}>{item[0]}</span>
                <span style={{ fontSize: 12, lineHeight: 1.6, color: T.sub }}>{item[1]}</span>
              </div>;
            })}
          </div>;
        }
        return null;
      })}
    </div>;
  }

  function PrincipleText(props) {
    var items = textChunks(props.text);
    var ac = props.accent || dc;
    if (!items.length) return null;
    var lead = items[0];
    var rest = items.slice(1);
    return <div style={{ display: "grid", gap: 10 }}>
      <div style={{ background: T.sb, borderLeft: "3px solid " + ac, borderRadius: 10, padding: "10px 12px" }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 0.7, textTransform: "uppercase", color: ac, marginBottom: 5 }}>Idea Chiave</div>
        <div style={{ fontSize: 13, lineHeight: 1.75, color: "#CFCFD6", fontWeight: 600 }}>{renderGlossaryText(lead, ac)}</div>
      </div>
      {rest.length > 0 && <div style={{ display: "grid", gap: 8 }}>
        {rest.map(function(item, idx) {
          return <div key={idx} style={{ display: "flex", gap: 9, alignItems: "flex-start", background: "#141418", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "9px 11px" }}>
            <span style={{ width: 22, height: 22, borderRadius: 999, background: "rgba(255,255,255,0.06)", color: ac, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, flexShrink: 0 }}>{idx + 1}</span>
            <span style={{ fontSize: 12, lineHeight: 1.78, color: "#B7B7C0" }}>{renderGlossaryText(item, ac)}</span>
          </div>;
        })}
      </div>}
    </div>;
  }

  function getGlossByTerm(term) {
    return GLOSS.find(function(g) { return g.t === term; }) || null;
  }

  function findGlossMatch(text) {
    var lower = text.toLowerCase();
    var best = null;
    GLOSS_LINKS.forEach(function(entry) {
      var idx = lower.indexOf(entry.match.toLowerCase());
      if (idx === -1) return;
      if (!best || idx < best.idx || (idx === best.idx && entry.match.length > best.match.length)) {
        best = { idx: idx, match: entry.match, term: entry.term };
      }
    });
    return best;
  }

  function renderGlossaryText(text, accentColor) {
    var match = findGlossMatch(text);
    if (!match) return text;
    var start = match.idx;
    var end = start + match.match.length;
    var gloss = getGlossByTerm(match.term);
    if (!gloss) return text;
    return <>
      {text.slice(0, start)}
      <span
        onClick={function(e) { e.stopPropagation(); setGlossTermOpen(gloss); }}
        style={{ color: accentColor, fontWeight: 700, textDecoration: "underline dotted", textUnderlineOffset: 2, cursor: "pointer" }}
      >
        {text.slice(start, end)}
      </span>
      {renderGlossaryText(text.slice(end), accentColor)}
    </>;
  }

  function getRestTime(exName, rpe) {
    var heavy = ["Squat","Stacco da Terra","Panca","Military Press","Trazioni","Trazioni Supine","Front Squat","Pause Squat","Push Press","Stacco Sumo","Stacco Rumeno"];
    var medium = ["Rematore Bilanciere","Rematore Manubri","Nordic Curl","Good Morning","Hyperextension","Affondi","Squat Bulgaro","Pendlay Row","Walking Lunge","Push-Up","Floor Press Manubri","Push-Up Declino"];
    var core = ["Plank","Ab Wheel","Addominali Obliqui","Shoulder Tap"];
    if (core.indexOf(exName) >= 0) return exName === "Plank" ? null : 30;
    if (heavy.indexOf(exName) >= 0) return 120;
    if (medium.indexOf(exName) >= 0) return 90;
    return 60;
  }

  function getWorkTime(exName, serie) {
    if (exName === "Plank" && serie && serie.indexOf("45s") >= 0) return 45;
    if (exName === "Plank") return 30;
    return null;
  }

  function logSet(en, di, si, w, r) { var t = todayStr(); var k = t + "_d" + di + "_m" + month + "_" + en; var nl = Object.assign({}, logs); if (!nl[k]) nl[k] = { date: t, day: di, month: month, exercise: en, sets: [] }; var x = nl[k].sets.findIndex(function(s) { return s.si === si; }); var entry = { si: si, w: parseFloat(w) || 0, r: r === "max" ? r : (parseInt(r) || 0) }; if (x >= 0) nl[k].sets[x] = entry; else nl[k].sets.push(entry); saveData(nl); setEditing(null); setTmpW(""); setTmpR(""); }
  function getLog(en, di) { return logs[todayStr() + "_d" + di + "_m" + month + "_" + en]; }
  function getHist(en) { return Object.values(logs).filter(function(l) { return l.exercise === en; }).sort(function(a,b) { return b.date.localeCompare(a.date); }).slice(0, 10); }


  function exportData() {
    var dataStr = JSON.stringify(logs, null, 2);
    var dataBlob = new Blob([dataStr], {type: 'application/json'});
    var url = URL.createObjectURL(dataBlob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'workout-backup-' + todayStr() + '.json';
    link.click();
    URL.revokeObjectURL(url);
  }

  function importData() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(evt) {
        try {
          var imported = JSON.parse(evt.target.result);
          setLogs(imported);
          try { localStorage.setItem(SK, JSON.stringify(imported)); } catch(e2) {}
          alert('Dati importati con successo!');
        } catch(e) {
          alert('Errore: file non valido');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }
  if (!ready) return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Caricamento...</div>;

  // Timer preset buttons helper
  function timerBtns(big) {
    return [30,60,90,120,180].map(function(s) {
      return <button key={s} onClick={function() { timerSetTarget(s); }} style={{ flex: big ? "none" : 1, padding: big ? "10px 16px" : "7px 0", border: "none", borderRadius: big ? 10 : 7, cursor: "pointer", fontSize: big ? 14 : 11, fontWeight: 700, background: tTarget === s ? dc : "rgba(255,255,255,0.07)", color: tTarget === s ? "#fff" : "rgba(255,255,255,0.5)" }}>{fmtLabel(s)}</button>;
    });
  }

  // Exercise info popup (shared)
  function ExPopup() {
    if (!exInfoOpen) return null;
    var db = EX[exInfoOpen];
    if (!db) return null;
    var imgs = exImgs(exInfoOpen);
    var embed = ytEmbedUrl(db.lk);
    return (
      <div onClick={function() { setExInfoOpen(null); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 250, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, padding: 20, maxWidth: 420, width: "100%", color: T.tx, maxHeight: "80vh", overflowY: "auto" }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 17, fontWeight: 800 }}>{exInfoOpen}</h3>
          <div style={{ fontSize: 12, color: dc, fontWeight: 600, marginBottom: 12 }}>{db.g}</div>
          {imgs.map(function(src, ii) { return <img key={ii} src={src} style={{ width: "100%", borderRadius: 10, marginBottom: 12 }} />; })}
          <div style={{ background: T.sb, borderRadius: 10, padding: 12, marginBottom: 10 }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: dc, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.6 }}>Come si esegue</div>
            <DetailText text={db.c} accent={dc} soft={true} />
            <div style={{ fontSize: 11, fontWeight: 800, color: dc, margin: "12px 0 6px", textTransform: "uppercase", letterSpacing: 0.6 }}>Posizione</div>
            <DetailText text={db.p} accent={dc} soft={true} />
            <div style={{ fontSize: 11, fontWeight: 800, color: dc, margin: "12px 0 6px", textTransform: "uppercase", letterSpacing: 0.6 }}>Trucchi</div>
            <div style={{ display: "grid", gap: 6 }}>
              {db.t.map(function(tip, ti) { return <div key={ti} style={{ display: "flex", gap: 8, alignItems: "flex-start", background: dc + "08", border: "1px solid " + dc + "12", borderRadius: 8, padding: "8px 10px" }}><span style={{ color: dc, fontSize: 11, lineHeight: 1.5 }}>→</span><span style={{ fontSize: 12, lineHeight: 1.5, color: T.sub }}>{tip}</span></div>; })}
            </div>
          </div>
          {embed && <div style={{ marginBottom: 12, borderRadius: 10, overflow: "hidden", background: "#000" }}>
            <iframe
              src={embed}
              title={exInfoOpen + " video"}
              style={{ width: "100%", aspectRatio: "16 / 9", border: "none", display: "block" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>}
          {db.lk && <a href={db.lk} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", fontSize: 12, color: dc, fontWeight: 600, textDecoration: "none", padding: "6px 12px", background: dc + "15", borderRadius: 8, marginBottom: 12 }}>Video tutorial</a>}
          <button onClick={function() { setExInfoOpen(null); }} style={{ width: "100%", padding: 10, border: "none", borderRadius: 10, background: dc, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", marginTop: 4 }}>Chiudi</button>
        </div>
      </div>
    );
  }

  // Clickable exercise name
  function ExName(props) {
    return <span onClick={function(e) { e.stopPropagation(); setExInfoOpen(props.name); }} style={{ cursor: "pointer", textDecoration: "underline", textDecorationStyle: "dotted", textDecorationColor: dc + "60", textUnderlineOffset: 2 }}>{props.name}</span>;
  }

  // === FULLSCREEN TIMER ===
  if (tFull) return (
    <div style={{ position: "fixed", inset: 0, zIndex: 999, background: tFlash ? "linear-gradient(135deg,#C62828,#E53935)" : T.hd, color: T.htx, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans',sans-serif", transition: "background 0.3s" }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div style={{ fontSize: 11, opacity: 0.5, marginBottom: 8, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{tMode === "countdown" ? "Timer recupero" : "Cronometro"}</div>
      <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: 2, fontVariantNumeric: "tabular-nums", marginBottom: 24 }}>{fmtTime(tMs)}</div>
      {tFlash && <div style={{ fontSize: 16, fontWeight: 700, color: T.ac, marginBottom: 20 }}>Tempo scaduto</div>}
      <div style={{ display: "flex", gap: 12, marginBottom: 30 }}>
        {!tRunning ? <button onClick={timerGo} style={{ width: 64, height: 64, borderRadius: 20, border: "none", background: T.ok, color: "#fff", fontSize: 28, cursor: "pointer" }}>&#9654;</button> : <button onClick={timerPause} style={{ width: 64, height: 64, borderRadius: 20, border: "none", background: T.ac, color: "#000", fontSize: 22, fontWeight: 800, cursor: "pointer" }}>&#9646;&#9646;</button>}
        <button onClick={timerReset} style={{ width: 64, height: 64, borderRadius: 20, border: "none", background: "rgba(255,255,255,0.12)", color: T.htx, fontSize: 20, cursor: "pointer" }}>&#8634;</button>
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {["stopwatch", "countdown"].map(function(m) { return <button key={m} onClick={function() { timerSwitch(m); }} style={{ padding: "8px 18px", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: tMode === m ? 700 : 500, background: tMode === m ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)", color: tMode === m ? "#fff" : "rgba(255,255,255,0.4)" }}>{m === "stopwatch" ? "Cronometro" : "Recupero"}</button>; })}
      </div>
      {tMode === "countdown" && <div style={{ display: "flex", gap: 8 }}>{timerBtns(true)}</div>}
      <button onClick={function() { setTFull(false); }} style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.1)", border: "none", color: T.htx, width: 40, height: 40, borderRadius: 10, cursor: "pointer", fontSize: 18 }}>&#10005;</button>
    </div>
  );

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", background: T.bg, minHeight: "100vh", color: T.tx, zoom: fontScale }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <ExPopup />

      {glossTermOpen && <div onClick={function() { setGlossTermOpen(null); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 240, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, padding: 18, maxWidth: 380, width: "100%", color: T.tx, boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: dc, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>Glossario</div>
          <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800 }}>{glossTermOpen.t}</h3>
          <DetailText text={glossTermOpen.d} accent={dc} soft={true} />
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <button onClick={function() { setGlossTermOpen(null); }} style={{ flex: 1, padding: 10, border: "none", borderRadius: 10, background: dc, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Chiudi</button>
            <button onClick={function() { setGlossTermOpen(null); setGlossOpen(true); setGlossTab("termini"); }} style={{ flex: 1, padding: 10, border: "1px solid " + dc + "24", borderRadius: 10, background: dc + "10", color: dc, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Apri glossario</button>
          </div>
        </div>
      </div>}

      {/* RPE Modal */}
      {rpeOpen && <div onClick={function() { setRpeOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, padding: 24, maxWidth: 380, width: "100%", color: T.tx }}>
          <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 800 }}>RPE</h3>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 14px", color: T.sub }}>Rate of Perceived Exertion. Quante ripetizioni hai in riserva alla fine della serie.</p>
          {[["6","Altre 4+ in riserva"],["7","Altre 3"],["8","Altre 2"],["9","Altra 1"],["10","Massimale"]].map(function(item) { return <div key={item[0]} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0", borderBottom: "1px solid " + T.bg }}><div style={{ width: 32, height: 32, borderRadius: 8, background: dc, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{item[0]}</div><span style={{ fontSize: 13 }}>{item[1]}</span></div>; })}
          <button onClick={function() { setRpeOpen(false); }} style={{ marginTop: 16, width: "100%", padding: 10, border: "none", borderRadius: 10, background: dc, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>OK</button>
        </div>
      </div>}

      {/* Theory & Glossary Modal */}
      {glossOpen && <div onClick={function() { setGlossOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, maxWidth: 440, width: "100%", color: T.tx, maxHeight: "88vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Header fisso */}
          <div style={{ padding: "18px 20px 0", flexShrink: 0 }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 800 }}>📚 Teoria e Glossario</h3>
            <div style={{ display: "flex", gap: 0, borderRadius: 10, overflow: "hidden", border: "1px solid " + dc + "30", marginBottom: 14 }}>
              <button onClick={function() { setGlossTab("principi"); }} style={{ flex: 1, padding: "9px 0", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", background: glossTab === "principi" ? dc : "transparent", color: glossTab === "principi" ? "#fff" : T.sub, transition: "background 0.15s" }}>Principi</button>
              <button onClick={function() { setGlossTab("termini"); }} style={{ flex: 1, padding: "9px 0", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", background: glossTab === "termini" ? dc : "transparent", color: glossTab === "termini" ? "#fff" : T.sub, transition: "background 0.15s" }}>Termini base</button>
            </div>
          </div>
          {/* Body scrollabile */}
          <div style={{ overflowY: "auto", flex: 1, padding: "0 20px" }}>
            {glossTab === "principi" && <div>
              {/* Intro narrativa a blocchi */}
              {[
                { emoji: "⚙️", title: "Come funziona l'allenamento", text: ["Ogni scheda bilancia tre variabili: ", "pd0", "Volume, Intensità e Densità", ". Per crescere nel tempo devi applicare il ", "pd1", "Sovraccarico progressivo", " — lo stimolo deve sempre aumentare, altrimenti il corpo si adatta e smette di rispondere."] },
                { emoji: "📅", title: "Come strutturare la settimana", text: ["Allena ogni muscolo almeno 2-3 volte a settimana: è la ", "pd3", "multifrequenza", ", il principio più importante per la crescita. Lavora sempre a ", "pd2", "buffer", " (non a cedimento) per accumulare più volume senza esaurirti."] },
                { emoji: "🏋️", title: "Come strutturare ogni seduta", text: ["Prima gli ", "pd4", "esercizi multiarticolari", " (squat, stacco, panca, trazioni) quando sei fresca. Poi gli isolamenti. Misura sempre ", "pd5", "kg, ripetizioni e RPE", " — senza dati non sai se stai progredendo."] },
                { emoji: "😴", title: "Il recupero è parte dell'allenamento", text: ["Il corpo cresce nel riposo, non durante l'esercizio. Ogni 4-8 settimane inserisci una ", "pd6", "settimana di scarico", " per dissipare la fatica del ", "pd7", "Sistema Nervoso Centrale", "."] },
                { emoji: "🦴", title: "Tecnica: proteggiti sotto carico", text: ["Nei carichi pesanti usa la ", "pd8", "Manovra di Valsalva", " per proteggere la colonna. In core e plank mantieni la ", "pd9", "retroversione del bacino", ". In trazioni e push-up usa l'", "pd10", "Assetto Hollow", "."] },
                { emoji: "🎯", title: "Scegli il muscolo giusto", text: ["Ogni esercizio può lavorare muscoli diversi in base all'esecuzione: capire la differenza tra ", "pd11", "Hip Dominant e Knee Dominant", " e come ", "pd12", "cambiare il target", " senza cambiare esercizio ti dà un vantaggio enorme."] },
                { emoji: "🔬", title: "Massimizza gli isolamenti", text: ["Negli esercizi di isolamento conta più il ", "pd13", "Tempo sotto tensione", " che il peso. Aggiungi un ", "pd14", "picco isometrico", " di 2-3s al massimo sforzo. Scegli gli esercizi complementari per rinforzare i tuoi ", "pd15", "punti deboli", "."] },
              ].map(function(block, bi) {
                var parts = block.text;
                var rendered = [];
                for (var pi = 0; pi < parts.length; pi++) {
                  if (pi + 2 < parts.length && typeof parts[pi+1] === "string" && parts[pi+1].startsWith("pd")) {
                    rendered.push(<span key={pi}>{parts[pi]}</span>);
                    var pid = parts[pi+1]; var label = parts[pi+2];
                    rendered.push(<span key={pi+"l"} onClick={(function(id) { return function() { var el = document.getElementById(id); if (el) { el.setAttribute("open",""); el.scrollIntoView({behavior:"smooth",block:"center"}); } }; })(pid)} style={{ color: dc, fontWeight: 700, cursor: "pointer", textDecoration: "underline dotted", textUnderlineOffset: 2 }}>{label}</span>);
                    pi += 2;
                  } else {
                    rendered.push(<span key={pi}>{parts[pi]}</span>);
                  }
                }
                return <div key={bi} style={{ background: T.sb, borderRadius: 10, padding: "10px 14px", marginBottom: 8 }}>
                  <div style={{ fontWeight: 800, fontSize: 12, color: T.tx, marginBottom: 4 }}>{block.emoji + " " + block.title}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.7, color: T.sub }}>{rendered}</div>
                </div>;
              })}
              {PRINCIPLES_DEEP.map(function(g, gi) { return <details id={"pd" + gi} key={gi} style={{ marginBottom: 8, borderRadius: 12, overflow: "hidden", background: T.sb, border: "1px solid " + dc + "14" }}><summary style={{ padding: "12px 13px", cursor: "pointer", fontSize: 13, fontWeight: 700, color: dc, listStyle: "none", display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 10, color: "#fff", minWidth: 20, height: 20, borderRadius: 999, background: dc, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{gi + 1}</span>{g.t}</summary><div style={{ padding: "10px 12px 14px" }}><RichBlocks blocks={g.d} accent={dc} /></div></details>; })}
            </div>}
            {glossTab === "termini" && <div>
              {GLOSS.map(function(g, gi) { return <details key={gi} style={{ marginBottom: 6, borderRadius: 10, overflow: "hidden", background: T.sb, border: "1px solid " + dc + "12" }}><summary style={{ padding: "10px 12px", cursor: "pointer", fontSize: 13, fontWeight: 700, color: dc, listStyle: "none" }}>{g.t}</summary><div style={{ padding: "0 12px 12px" }}><DetailText text={g.d} accent={dc} soft={true} /></div></details>; })}
            </div>}
          </div>
          {/* Footer fisso */}
          <div style={{ padding: "12px 20px", flexShrink: 0 }}>
            <button onClick={function() { setGlossOpen(false); }} style={{ width: "100%", padding: 10, border: "none", borderRadius: 10, background: dc, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Chiudi</button>
          </div>
        </div>
      </div>}

      {/* Reset Confirm */}
      {resetOpen && <div onClick={function() { setResetOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, padding: 24, maxWidth: 340, width: "100%", color: T.tx, textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>&#9888;&#65039;</div>
          <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 800 }}>Sei sicura?</h3>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 20px", color: T.sub }}>Tutti i dati verranno cancellati: serie, pesi, ripetizioni.</p>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={function() { setResetOpen(false); }} style={{ flex: 1, padding: 12, border: "1px solid " + T.sub + "30", borderRadius: 10, background: "transparent", color: T.tx, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Annulla</button>
            <button onClick={function() { setLogs({}); try { localStorage.removeItem(SK); } catch(e) {} setResetOpen(false); }} style={{ flex: 1, padding: 12, border: "none", borderRadius: 10, background: "#C62828", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Cancella tutto</button>
          </div>
        </div>
      </div>}

      {/* Settings Modal */}
      {settingsOpen && <div onClick={function() { setSettingsOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 250, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, maxWidth: 400, width: "100%", color: T.tx, maxHeight: "88vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ padding: "18px 20px 0", flexShrink: 0 }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 18, fontWeight: 800 }}>⚙️ Impostazioni</h3>
          </div>
          <div style={{ overflowY: "auto", flex: 1, padding: "0 20px" }}>
            {/* Profilo */}
            <div style={{ fontSize: 11, fontWeight: 800, color: T.sub, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Profilo</div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, background: T.sb, borderRadius: 12, padding: "12px 14px", marginBottom: 6 }}>
              <div onClick={function() { var input = document.createElement("input"); input.type = "file"; input.accept = "image/*"; input.onchange = function(e) { var file = e.target.files[0]; if (!file) return; var reader = new FileReader(); reader.onload = function(ev) { setUserPhoto(ev.target.result); try { localStorage.setItem("wt-userphoto", ev.target.result); } catch(e2) {} }; reader.readAsDataURL(file); }; input.click(); }} style={{ width: 52, height: 52, borderRadius: "50%", background: userPhoto ? "transparent" : dc + "20", border: "2px dashed " + dc + "60", overflow: "hidden", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                {userPhoto ? <img src={userPhoto} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "📷"}
              </div>
              <div style={{ flex: 1 }}>
                <input value={userName} onChange={function(e) { setUserName(e.target.value); try { localStorage.setItem("wt-username", e.target.value); } catch(err) {} }} placeholder="Il tuo nome" style={{ width: "100%", padding: "8px 10px", border: "1px solid " + T.bg, borderRadius: 8, fontSize: 14, fontWeight: 600, background: T.cd, color: T.tx, boxSizing: "border-box" }} />
                <div style={{ fontSize: 10, color: T.sub, marginTop: 4 }}>Tap sulla foto per cambiarla</div>
              </div>
            </div>
            {/* Tema */}
            <div style={{ fontSize: 11, fontWeight: 800, color: T.sub, textTransform: "uppercase", letterSpacing: 1, margin: "16px 0 8px" }}>Tema</div>
            {Object.keys(TH).map(function(k) { var v = TH[k]; return <button key={k} onClick={function() { setTheme(k); try { localStorage.setItem("wt-theme", k); } catch(e) {} }} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", border: theme === k ? "2px solid " + v.dy[0] : "2px solid transparent", borderRadius: 10, background: v.bg, cursor: "pointer", width: "100%", marginBottom: 4 }}><div style={{ display: "flex", gap: 3 }}>{v.dy.slice(0,5).map(function(c,i) { return <div key={i} style={{ width: 14, height: 14, borderRadius: 4, background: c }} />; })}</div><span style={{ fontSize: 13, fontWeight: 600, color: v.tx }}>{v.n}</span>{theme === k && <span style={{ marginLeft: "auto", fontSize: 11, color: v.dy[0], fontWeight: 700 }}>✓ attivo</span>}</button>; })}
            {/* Dimensione testo */}
            <div style={{ fontSize: 11, fontWeight: 800, color: T.sub, textTransform: "uppercase", letterSpacing: 1, margin: "16px 0 8px" }}>Dimensione testo</div>
            <div style={{ display: "flex", gap: 0, borderRadius: 10, overflow: "hidden", border: "1px solid " + T.bg, marginBottom: 6 }}>
              {[["A", 0.95, "Piccolo"], ["A", 1.1, "Normale"], ["A", 1.25, "Grande"], ["A", 1.4, "Molto grande"]].map(function(item) {
                var active = Math.abs(fontScale - item[1]) < 0.05;
                return <button key={item[1]} onClick={function() { setFontScale(item[1]); try { localStorage.setItem("wt-fontscale", item[1]); } catch(e) {} }} style={{ flex: 1, padding: "10px 0", border: "none", background: active ? dc : "transparent", color: active ? "#fff" : T.sub, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, transition: "background 0.15s" }}>
                  <span style={{ fontSize: item[1] * 14, fontWeight: 800, lineHeight: 1 }}>{item[0]}</span>
                  <span style={{ fontSize: 9, fontWeight: 600, opacity: 0.8 }}>{item[2]}</span>
                </button>;
              })}
            </div>
            {/* Dati */}
            <div style={{ fontSize: 11, fontWeight: 800, color: T.sub, textTransform: "uppercase", letterSpacing: 1, margin: "16px 0 8px" }}>Dati</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 8 }}>
              <button onClick={function() { exportData(); }} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 10, border: "1px solid " + T.bg, background: T.sb, cursor: "pointer", fontSize: 13, fontWeight: 600, color: T.tx }}><span>⬇️</span> Esporta dati (backup JSON)</button>
              <button onClick={function() { importData(); }} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 10, border: "1px solid " + T.bg, background: T.sb, cursor: "pointer", fontSize: 13, fontWeight: 600, color: T.tx }}><span>⬆️</span> Importa dati (ripristino JSON)</button>
              <button onClick={function() { setResetOpen(true); setSettingsOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 10, border: "1px solid #C6282820", background: "#C6282808", cursor: "pointer", fontSize: 13, fontWeight: 600, color: "#C62828" }}><span>🗑️</span> Cancella tutti i dati</button>
            </div>
          </div>
          <div style={{ padding: "12px 20px", flexShrink: 0 }}>
            <button onClick={function() { setSettingsOpen(false); }} style={{ width: "100%", padding: 10, border: "none", borderRadius: 10, background: dc, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Chiudi</button>
          </div>
        </div>
      </div>}

      {/* HEADER */}
      <div style={{ background: T.hd, padding: "18px 16px 10px", color: T.htx }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 600, margin: "0 auto" }}>
          {/* Nome e foto utente */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div onClick={function() { setSettingsOpen(true); }} style={{ width: 38, height: 38, borderRadius: "50%", background: userPhoto ? "transparent" : "rgba(255,255,255,0.18)", border: "2px solid rgba(255,255,255,0.3)", overflow: "hidden", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
              {userPhoto ? <img src={userPhoto} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : "👤"}
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>{userName ? "Ciao, " + userName + "!" : "Workout Tracker"}</div>
              <div style={{ fontSize: 11, opacity: 0.5, marginTop: 1 }}>Home Gym — Mese {month}</div>
            </div>
          </div>
          {/* Rotellina impostazioni */}
          <button onClick={function() { setSettingsOpen(true); }} style={{ background: "rgba(255,255,255,0.12)", border: "none", color: T.htx, width: 36, height: 36, borderRadius: 10, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>⚙️</button>
        </div>
        {/* Month tabs */}
        <div style={{ display: "flex", gap: 4, maxWidth: 600, margin: "10px auto 0" }}>
          {[1,2,3,4].map(function(m) { return <button key={m} onClick={function() { setMonth(m); }} style={{ flex: 1, padding: "5px 0", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 11, fontWeight: month === m ? 700 : 500, background: month === m ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)", color: month === m ? "#fff" : "rgba(255,255,255,0.4)" }}>{"Mese " + m}</button>; })}
        </div>
        {/* View tabs */}
        <div style={{ display: "flex", gap: 4, maxWidth: 600, margin: "6px auto 0" }}>
          {["Teoria", "Scheda", "Muscoli", "Esercizi"].map(function(t) { var keys = {"Teoria":"teoria","Scheda":"workout","Muscoli":"muscles","Esercizi":"exercises"}; var active = tab === keys[t]; return <button key={t} onClick={function() { setTab(keys[t]); }} style={{ flex: 1, padding: "6px 0", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: active ? 700 : 500, background: active ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.04)", color: active ? "#fff" : "rgba(255,255,255,0.35)" }}>{t}</button>; })}
        </div>
      </div>

      {/* === TEORIA TAB === */}
      {tab === "teoria" && <div style={{ maxWidth: 600, margin: "0 auto", padding: "12px 12px 100px" }}>
        <div style={{ background: T.cd, borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
          <div style={{ padding: "14px 16px 10px", borderBottom: "1px solid " + T.bg }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: T.tx, marginBottom: 2 }}>📚 Teoria e Glossario</div>
            <div style={{ fontSize: 12, color: T.sub }}>Principi di allenamento e termini tecnici</div>
          </div>
          {/* Tab interna Principi / Termini */}
          <div style={{ padding: "10px 16px 0" }}>
            <div style={{ display: "flex", gap: 0, borderRadius: 8, overflow: "hidden", border: "1px solid " + dc + "30", marginBottom: 14 }}>
              <button onClick={function() { setGlossTab("principi"); }} style={{ flex: 1, padding: "8px 0", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", background: glossTab === "principi" ? dc : "transparent", color: glossTab === "principi" ? "#fff" : T.sub, transition: "background 0.15s" }}>Principi</button>
              <button onClick={function() { setGlossTab("termini"); }} style={{ flex: 1, padding: "8px 0", border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", background: glossTab === "termini" ? dc : "transparent", color: glossTab === "termini" ? "#fff" : T.sub, transition: "background 0.15s" }}>Termini base</button>
            </div>
          </div>
          <div style={{ padding: "0 16px 16px" }}>
            {glossTab === "principi" && <div>
              {[
                { emoji: "⚙️", title: "Come funziona l'allenamento", text: ["Ogni scheda bilancia tre variabili: ", "pd0", "Volume, Intensità e Densità", ". Per crescere nel tempo devi applicare il ", "pd1", "Sovraccarico progressivo", " — lo stimolo deve sempre aumentare, altrimenti il corpo si adatta e smette di rispondere."] },
                { emoji: "📅", title: "Come strutturare la settimana", text: ["Allena ogni muscolo almeno 2-3 volte a settimana: è la ", "pd3", "multifrequenza", ", il principio più importante per la crescita. Lavora sempre a ", "pd2", "buffer", " (non a cedimento) per accumulare più volume senza esaurirti."] },
                { emoji: "🏋️", title: "Come strutturare ogni seduta", text: ["Prima gli ", "pd4", "esercizi multiarticolari", " (squat, stacco, panca, trazioni) quando sei fresca. Poi gli isolamenti. Misura sempre ", "pd5", "kg, ripetizioni e RPE", " — senza dati non sai se stai progredendo."] },
                { emoji: "😴", title: "Il recupero è parte dell'allenamento", text: ["Il corpo cresce nel riposo, non durante l'esercizio. Ogni 4-8 settimane inserisci una ", "pd6", "settimana di scarico", " per dissipare la fatica del ", "pd7", "Sistema Nervoso Centrale", "."] },
                { emoji: "🦴", title: "Tecnica: proteggiti sotto carico", text: ["Nei carichi pesanti usa la ", "pd8", "Manovra di Valsalva", " per proteggere la colonna. In core e plank mantieni la ", "pd9", "retroversione del bacino", ". In trazioni e push-up usa l'", "pd10", "Assetto Hollow", "."] },
                { emoji: "🎯", title: "Scegli il muscolo giusto", text: ["Capire la differenza tra ", "pd11", "Hip Dominant e Knee Dominant", " e come ", "pd12", "cambiare il target", " senza cambiare esercizio ti dà un vantaggio enorme."] },
                { emoji: "🔬", title: "Massimizza gli isolamenti", text: ["Conta più il ", "pd13", "Tempo sotto tensione", " che il peso. Aggiungi un ", "pd14", "picco isometrico", " di 2-3s. Scegli gli esercizi complementari per i tuoi ", "pd15", "punti deboli", "."] },
              ].map(function(block, bi) {
                var parts = block.text; var rendered = [];
                for (var pi = 0; pi < parts.length; pi++) {
                  if (pi + 2 < parts.length && typeof parts[pi+1] === "string" && parts[pi+1].startsWith("pd")) {
                    rendered.push(<span key={pi}>{parts[pi]}</span>);
                    var pid = parts[pi+1]; var label = parts[pi+2];
                    rendered.push(<span key={pi+"l"} onClick={(function(id) { return function() { setGlossTab("principi"); var el = document.getElementById(id + "t"); if (el) { el.setAttribute("open",""); el.scrollIntoView({behavior:"smooth",block:"center"}); } }; })(pid)} style={{ color: dc, fontWeight: 700, cursor: "pointer", textDecoration: "underline dotted", textUnderlineOffset: 2 }}>{label}</span>);
                    pi += 2;
                  } else { rendered.push(<span key={pi}>{parts[pi]}</span>); }
                }
                return <div key={bi} style={{ background: T.sb, borderRadius: 12, padding: "12px 14px", marginBottom: 10, border: "1px solid " + dc + "10" }}>
                  <div style={{ fontWeight: 800, fontSize: 12, color: T.tx, marginBottom: 6 }}>{block.emoji + " " + block.title}</div>
                  <div style={{ fontSize: 12, lineHeight: 1.85, color: T.sub }}>{rendered}</div>
                </div>;
              })}
              <div style={{ fontSize: 11, color: T.sub, textAlign: "center", margin: "4px 0 8px", opacity: 0.7 }}>Tap su ogni principio per il dettaglio completo</div>
              {PRINCIPLES_DEEP.map(function(g, gi) { return <details id={"pd" + gi + "t"} key={gi} style={{ marginBottom: 8, borderRadius: 12, overflow: "hidden", background: T.sb, border: "1px solid " + dc + "14" }}><summary style={{ padding: "12px 13px", cursor: "pointer", fontSize: 13, fontWeight: 700, color: dc, listStyle: "none", display: "flex", alignItems: "center", gap: 8 }}><span style={{ fontSize: 10, color: "#fff", minWidth: 20, height: 20, borderRadius: 999, background: dc, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{gi + 1}</span>{g.t}</summary><div style={{ padding: "10px 12px 14px" }}><RichBlocks blocks={g.d} accent={dc} /></div></details>; })}
            </div>}
            {glossTab === "termini" && <div>
              {GLOSS.map(function(g, gi) { return <details key={gi} style={{ marginBottom: 6, borderRadius: 10, overflow: "hidden", background: T.sb, border: "1px solid " + dc + "12" }}><summary style={{ padding: "10px 12px", cursor: "pointer", fontSize: 13, fontWeight: 700, color: dc, listStyle: "none" }}>{g.t}</summary><div style={{ padding: "0 12px 12px" }}><DetailText text={g.d} accent={dc} soft={true} /></div></details>; })}
            </div>}
          </div>
        </div>
      </div>}

      {/* === MUSCLES TAB === */}
      {tab === "muscles" && <div style={{ maxWidth: 600, margin: "0 auto", padding: "12px 12px 100px" }}>
        <div style={{ background: T.cd, borderRadius: 12, padding: 12, marginBottom: 10, textAlign: "center" }}>
          <img onClick={function() { setImgZoomOpen(true); }} src={MUSCLE_IMG} alt="Muscoli" style={{ width: "100%", maxWidth: 420, borderRadius: 8, marginBottom: 8, cursor: "zoom-in" }} />
          <div style={{ fontSize: 11, color: T.sub, fontStyle: "italic" }}>Tap per ingrandire · scorri per dettagli muscoli</div>
        </div>
        {imgZoomOpen && <div onClick={function() { setImgZoomOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: 8, cursor: "zoom-out" }}>
          <img src={MUSCLE_IMG} alt="Muscoli" style={{ maxWidth: "100%", maxHeight: "95vh", borderRadius: 10, objectFit: "contain" }} />
        </div>}
        {MUSC.map(function(m, mi) { var isO = openMuscle === mi; return <div key={mi} style={{ background: T.cd, borderRadius: 10, marginBottom: 4, overflow: "hidden" }}>
          <div onClick={function() { setOpenMuscle(isO ? null : mi); }} style={{ padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: dc + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: dc }}>{mi+1}</div>
            <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 13 }}>{m.n}</div><div style={{ fontSize: 11, color: T.sub }}>{m.z}</div></div>
            <div style={{ fontSize: 14, color: T.sub, transform: isO ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</div>
          </div>
          {isO && <div style={{ padding: "0 14px 14px" }}>
            <div style={{ background: T.sb, borderRadius: 8, padding: 12, marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 4 }}>Dove</div>
              <DetailText text={m.w} accent={dc} />
              <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 4 }}>Perche allenarlo</div>
              <DetailText text={m.y} accent={dc} />
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 6 }}>Esercizi (tap per dettagli)</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {m.ex.map(function(e, ei) { return <span key={ei} onClick={function() { setExInfoOpen(e); }} style={{ fontSize: 11, background: dc + "12", color: dc, padding: "4px 10px", borderRadius: 6, fontWeight: 600, cursor: "pointer", textDecoration: "underline dotted", textDecorationColor: dc + "50" }}>{e}</span>; })}
            </div>
          </div>}
        </div>; })}
      </div>}

      {/* === WORKOUT TAB === */}
      {/* === EXERCISES TAB === */}
      {tab === "exercises" && <div style={{ maxWidth: 600, margin: "0 auto", padding: "12px 12px 100px" }}>

        {/* Esercizi header */}
        <div onClick={function() { setCatSec(catSec === "ex" ? null : "ex"); }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: "12px 14px", background: T.cd, borderRadius: 10, marginBottom: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>{"\uD83D\uDCAA"}</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: dc }}>{"Esercizi (" + Object.keys(EX).length + ")"}</span>
          </div>
          <div style={{ fontSize: 14, color: T.sub, transform: catSec === "ex" ? "rotate(180deg)" : "none" }}>&#9662;</div>
        </div>
        {catSec === "ex" && <div style={{ marginBottom: 12 }}>
          {Object.keys(EX).sort().map(function(name, ei) {
            var db = EX[name];
            var hasImg = !!EX_IMG[name];
            return <div key={ei} onClick={function() { setExInfoOpen(name); }} style={{ background: T.cd, borderRadius: 8, marginBottom: 2, overflow: "hidden", cursor: "pointer", display: "flex", alignItems: "center" }}>
              {hasImg && <img src={EX_IMG[name]} style={{ width: 48, height: 48, objectFit: "cover", flexShrink: 0 }} />}
              {!hasImg && <div style={{ width: 48, height: 48, background: dc + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, color: dc }}>?</div>}
              <div style={{ padding: "6px 10px", flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 12 }}>{name}</div>
                <div style={{ fontSize: 10, color: T.sub }}>{db.g}</div>
              </div>
              <div style={{ paddingRight: 12, color: T.sub, fontSize: 12 }}>&#8250;</div>
            </div>;
          })}
        </div>}

        {/* Riscaldamento header */}
        <div onClick={function() { setCatSec(catSec === "wu" ? null : "wu"); }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: "12px 14px", background: T.cd, borderRadius: 10, marginBottom: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>&#128293;</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: dc }}>Riscaldamento</span>
          </div>
          <div style={{ fontSize: 14, color: T.sub, transform: catSec === "wu" ? "rotate(180deg)" : "none" }}>&#9662;</div>
        </div>
        {catSec === "wu" && <div style={{ marginBottom: 12 }}>
          {(function() {
            var seen = {};
            var items = [];
            DAYS.forEach(function(d) { d.warmup.forEach(function(w) { if (!seen[w.n]) { seen[w.n] = true; items.push(w); } }); });
            return items.map(function(w, wi) {
              var hasImg = w.img && WS_IMG[w.img];
              return <div key={wi} style={{ background: T.cd, borderRadius: 8, marginBottom: 2, overflow: "hidden" }}>
                <div onClick={function() { setShowImg(showImg === "wl" + wi ? null : "wl" + wi); }} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                  {hasImg && <img src={WS_IMG[w.img]} style={{ width: 48, height: 48, objectFit: "cover", flexShrink: 0 }} />}
                  {!hasImg && <div style={{ width: 48, height: 48, background: dc + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, color: dc }}>&#128293;</div>}
                  <div style={{ padding: "6px 10px", flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 12 }}>{w.n}</div>
                    <div style={{ fontSize: 10, color: T.sub }}>{w.d.substring(0, 60) + (w.d.length > 60 ? "..." : "")}</div>
                  </div>
                  <div style={{ paddingRight: 12, color: T.sub, fontSize: 12 }}>&#9662;</div>
                </div>
                {showImg === "wl" + wi && <div style={{ padding: "0 10px 10px" }}>
                  {hasImg && <img src={WS_IMG[w.img]} style={{ width: "100%", borderRadius: 8, marginBottom: 6 }} />}
                  <DetailText text={w.d} accent={dc} size={11} soft={true} />
                  {w.lk && <a href={w.lk} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 4, fontSize: 10, color: dc, fontWeight: 600, textDecoration: "none", padding: "3px 8px", background: dc + "15", borderRadius: 5 }}>Video</a>}
                </div>}
              </div>;
            });
          })()}
        </div>}

        {/* Stretching header */}
        <div onClick={function() { setCatSec(catSec === "st" ? null : "st"); }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: "12px 14px", background: T.cd, borderRadius: 10, marginBottom: 4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>&#129495;</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: T.st }}>{"Stretching (" + Object.keys(STR).length + ")"}</span>
          </div>
          <div style={{ fontSize: 14, color: T.sub, transform: catSec === "st" ? "rotate(180deg)" : "none" }}>&#9662;</div>
        </div>
        {catSec === "st" && <div style={{ marginBottom: 12 }}>
          {Object.keys(STR).map(function(sn, si) {
            var sd = STR[sn];
            var hasImg = sd.img && WS_IMG[sd.img];
            return <div key={si} style={{ background: T.cd, borderRadius: 8, marginBottom: 2, overflow: "hidden" }}>
              <div onClick={function() { setShowImg(showImg === "sl" + si ? null : "sl" + si); }} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                {hasImg && <img src={WS_IMG[sd.img]} style={{ width: 48, height: 48, objectFit: "cover", flexShrink: 0 }} />}
                {!hasImg && <div style={{ width: 48, height: 48, background: T.st + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, color: T.st }}>&#129495;</div>}
                <div style={{ padding: "6px 10px", flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>{sn}</div>
                  <div style={{ fontSize: 10, color: T.st }}>{sd.d}</div>
                </div>
                <div style={{ paddingRight: 12, color: T.sub, fontSize: 12 }}>&#9662;</div>
              </div>
              {showImg === "sl" + si && <div style={{ padding: "0 10px 10px" }}>
                {hasImg && <img src={WS_IMG[sd.img]} style={{ width: "100%", maxWidth: 280, borderRadius: 8, marginBottom: 6 }} />}
                <DetailText text={sd.h} accent={T.st} size={11} soft={true} />
                <div style={{ fontSize: 10, color: T.sub, fontStyle: "italic", marginTop: 4 }}>{sd.t}</div>
                {sd.lk && <a href={sd.lk} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 4, fontSize: 10, color: T.st, fontWeight: 600, textDecoration: "none", padding: "3px 8px", background: T.st + "15", borderRadius: 5 }}>Video</a>}
              </div>}
            </div>;
          })}
        </div>}

      </div>}

      {/* === WORKOUT TAB === */}
      {tab === "workout" && <div>
        <div style={{ display: "flex", gap: 5, padding: "10px 12px 0", overflowX: "auto", maxWidth: 624, margin: "0 auto" }}>
          {DAYS.map(function(d, i) { var active = dayIdx === i; return <button key={i} onClick={function() { setDayIdx(i); setOpenEx(null); setEditing(null); setHistIdx(null); setShowIntro(false); setShowStr(false); setShowExSection(false); setShowPrinciples(false); setShowImg(null); }} style={{ flex: i < 4 ? 1 : "none", padding: "9px 10px", border: "none", borderRadius: "8px 8px 0 0", cursor: "pointer", fontSize: 12, fontWeight: active ? 700 : 500, background: active ? T.dy[i] : T.tx + "08", color: active ? "#fff" : T.sub, whiteSpace: "nowrap" }}>{d.name}</button>; })}
        </div>

        <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 12px 24px", paddingBottom: tPanel ? 200 : 100 }}>
          <div style={{ background: T.cd, borderRadius: "0 0 14px 14px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", overflow: "hidden" }}>

            {/* Motivational intro */}
            <div style={{ padding: "14px 14px 10px", borderBottom: "1px solid " + T.bg }}>
              <DetailText text={dayData.intro} accent={dc} size={13} soft={true} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: dc }}>{dayData.focus}</span>
                <span style={{ fontSize: 11, color: T.sub, fontWeight: 600 }}>~{dayData.tEst} min</span>
              </div>
            </div>

            {/* Principles */}
            <div style={{ borderBottom: "1px solid " + T.bg }}>
              <div onClick={function() { setShowPrinciples(!showPrinciples); }} style={{ padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, background: showPrinciples ? T.tx + "05" : "transparent" }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: T.tx + "12", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>&#128218;</div>
                <div style={{ flex: 1, fontWeight: 600, fontSize: 12, color: T.sub }}>Principi dell'allenamento</div>
                <div style={{ fontSize: 12, color: T.sub, transform: showPrinciples ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</div>
              </div>
              {showPrinciples && <div style={{ padding: "0 14px 14px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {PRINCIPLES.map(function(pr, pi) {
                    return <div key={pi} onClick={function() { setShowImg(showImg === "pr" + pi ? null : "pr" + pi); }} style={{ background: T.sb, borderRadius: 10, padding: "10px 12px", cursor: "pointer", border: "1px solid " + dc + "12" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: T.tx }}>{pr.t}</span>
                        <span style={{ fontSize: 11, color: T.sub }}>{showImg === "pr" + pi ? "\u25B4" : "\u25BE"}</span>
                      </div>
                      {showImg === "pr" + pi && <div style={{ marginTop: 8 }}><DetailText text={pr.d} accent={dc} soft={true} /></div>}
                    </div>;
                  })}
                </div>
              </div>}
            </div>

            {/* Warmup - collapsed */}
            <div style={{ borderBottom: "1px solid " + T.bg }}>
              <div onClick={function() { setShowIntro(!showIntro); }} style={{ padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, background: showIntro ? dc + "08" : "transparent" }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: dc, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, color: "#fff", flexShrink: 0 }}>&#128293;</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 13, color: dc }}>Riscaldamento</div><div style={{ fontSize: 11, color: T.sub }}>{dayData.warmup.length + " esercizi · " + dayData.dur}</div></div>
                <div style={{ fontSize: 14, color: T.sub, transform: showIntro ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</div>
              </div>
              {showIntro && <div style={{ padding: "0 14px 14px" }}><div style={{ background: T.sb, borderRadius: 10, padding: 12 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {dayData.warmup.map(function(w, wi) {
                    return <div key={wi} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: dc + "20", color: dc, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{wi + 1}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: T.tx, marginBottom: 2 }}>{w.n}</div>
                        {w.img && WS_IMG[w.img] && <div>
                          <button onClick={function() { setShowImg(showImg === "w" + wi ? null : "w" + wi); }} style={{ fontSize: 10, color: dc, fontWeight: 600, background: "none", border: "1px solid " + dc + "30", borderRadius: 5, padding: "2px 8px", cursor: "pointer", marginBottom: 4 }}>{showImg === "w" + wi ? "nascondi" : "vedi foto"}</button>
                          {showImg === "w" + wi && <img src={WS_IMG[w.img]} style={{ width: "100%", borderRadius: 8, marginBottom: 6 }} />}
                        </div>}
                        <DetailText text={w.d} accent={dc} size={11} soft={true} />
                        <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 4 }}>
                          {w.lk && <a href={w.lk} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: dc, fontWeight: 600, textDecoration: "none" }}>video &rarr;</a>}
                          {w.tm && w.tm >= 120 ? <button onClick={function() { quickStopwatch(); }} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 10px", border: "none", borderRadius: 6, background: dc, color: "#fff", fontSize: 10, fontWeight: 700, cursor: "pointer" }}>{"\u25B6 " + fmtLabel(w.tm)}</button> : null}
                          {w.tm && w.tm < 120 ? <button onClick={function() { quickTimer(w.tm); }} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 10px", border: "none", borderRadius: 6, background: dc, color: "#fff", fontSize: 10, fontWeight: 700, cursor: "pointer" }}>{"\u23F1 " + fmtLabel(w.tm)}</button> : null}
                        </div>
                      </div>
                    </div>;
                  })}
                </div>
              </div></div>}
            </div>

            {/* Exercises - collapsed */}
            <div style={{ borderBottom: "1px solid " + T.bg }}>
              <div onClick={function() { setShowExSection(!showExSection); }} style={{ padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, background: showExSection ? dc + "08" : "transparent" }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: dc + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>&#128170;</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 13 }}>Esercizi</div><div style={{ fontSize: 11, color: T.sub }}>{dayData.ex.length + " esercizi"}</div></div>
                <div style={{ fontSize: 14, color: T.sub, transform: showExSection ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</div>
              </div>
            {showExSection && <div>
            {/* Exercises list */}
            {dayData.ex.map(function(rawEx, i) {
              var cableKey = dayIdx + "_" + i;
              var hasCableToggle = rawEx.cable && rawEx.free;
              var isCable = hasCableToggle ? (cableKey in cableMode ? cableMode[cableKey] : !rawEx.defaultFree) : false;
              var baseEx = hasCableToggle ? (isCable ? rawEx.cable : rawEx.free) : rawEx;
              var mergedEx = Object.assign({}, rawEx, baseEx);
              var ex = getExForMonth(mergedEx);
              var db = EX[ex.n];
              var isX = openEx === i;
              var tLog = getLog(ex.n, dayIdx);
              var p = parseSerie(ex.s);
              var sc = p.sets;
              var isH = histIdx === i;
              var hData = isH ? getHist(ex.n) : [];
              var hasV = month > 1 && rawEx["v" + month];
              var restSec = getRestTime(ex.n, ex.rpe);
              var workSec = getWorkTime(ex.n, ex.s);
              var showTimerBtns = restSec || workSec;

              return <div key={i} style={{ borderBottom: "1px solid " + T.bg }}>
                <div onClick={function(e) { var y = window.scrollY; setOpenEx(isX ? null : i); setHistIdx(null); setEditing(null); setShowReg(null); requestAnimationFrame(function() { window.scrollTo(0, y); }); }} style={{ padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, background: isX ? T.sb : "transparent" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: dc + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: dc, flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, display: "flex", alignItems: "center", gap: 4 }}>
                      <ExName name={ex.n} />
                      {hasV && <span style={{ fontSize: 9, background: dc + "20", color: dc, padding: "1px 5px", borderRadius: 4, fontWeight: 700 }}>{"M" + month}</span>}
                      {hasCableToggle && <span style={{ fontSize: 9, background: isCable ? dc + "20" : T.sub + "20", color: isCable ? dc : T.sub, padding: "1px 5px", borderRadius: 4, fontWeight: 700 }}>{isCable ? "🔌" : "💪"}</span>}
                    </div>
                    <div style={{ fontSize: 11, color: T.sub, marginTop: 1 }}>{db ? db.g : ""}{ex.s ? " · " + ex.s : ""}{ex.rpe ? <span onClick={function(e) { e.stopPropagation(); setRpeOpen(true); }} style={{ cursor: "pointer", color: dc, fontWeight: 600, textDecoration: "underline dotted", textDecorationColor: dc + "60", textUnderlineOffset: 2 }}>{" · RPE " + ex.rpe}</span> : ""}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {tLog && tLog.sets.length > 0 && <div style={{ background: T.ok, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 8 }}>{tLog.sets.length + "/" + sc}</div>}
                    <div style={{ fontSize: 14, color: T.sub, transform: isX ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</div>
                  </div>
                </div>
                {isX && db && <div style={{ padding: "0 14px 14px" }}>
                  {hasCableToggle && <div style={{ display: "flex", gap: 0, marginBottom: 10, borderRadius: 8, overflow: "hidden", border: "1px solid " + dc + "40", alignSelf: "flex-start", width: "fit-content" }} onClick={function(e) { e.stopPropagation(); }}>
                    <button onClick={function() { setCableMode(function(prev) { var n = Object.assign({}, prev); n[cableKey] = true; return n; }); }} style={{ padding: "5px 12px", border: "none", fontSize: 11, fontWeight: 700, cursor: "pointer", background: isCable ? dc : "transparent", color: isCable ? "#fff" : T.sub, transition: "background 0.15s" }}>🔌 Cavi</button>
                    <button onClick={function() { setCableMode(function(prev) { var n = Object.assign({}, prev); n[cableKey] = false; return n; }); }} style={{ padding: "5px 12px", border: "none", fontSize: 11, fontWeight: 700, cursor: "pointer", background: !isCable ? dc : "transparent", color: !isCable ? "#fff" : T.sub, transition: "background 0.15s" }}>💪 Libero</button>
                  </div>}
                  {ex.s && <div style={{ fontSize: 12, color: dc, fontWeight: 600, marginBottom: 6 }}>{fmtSerie(ex.s)}{ex.rpe ? " — RPE " + ex.rpe : ""}</div>}
                  {ex.note && <div style={{ fontSize: 11, color: T.sub, marginBottom: 6, fontStyle: "italic" }}>{ex.note}</div>}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                    {EX_IMG[ex.n] && <button onClick={function() { setShowImg(showImg === "ex" + i ? null : "ex" + i); }} style={{ fontSize: 10, color: dc, fontWeight: 600, background: "none", border: "1px solid " + dc + "30", borderRadius: 5, padding: "3px 8px", cursor: "pointer" }}>{showImg === "ex" + i ? "nascondi foto" : "foto"}</button>}
                    {db.lk && <a href={db.lk} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: dc, fontWeight: 600, textDecoration: "none", border: "1px solid " + dc + "30", borderRadius: 5, padding: "3px 8px" }}>video</a>}
                    {workSec ? <button onClick={function() { quickTimer(workSec); }} style={{ fontSize: 10, border: "none", borderRadius: 5, padding: "3px 8px", background: dc, color: "#fff", fontWeight: 700, cursor: "pointer" }}>{"\u25B6 " + fmtLabel(workSec)}</button> : null}
                    {restSec ? <button onClick={function() { quickTimer(restSec); }} style={{ fontSize: 10, border: "none", borderRadius: 5, padding: "3px 8px", background: T.ok + "20", color: T.ok, fontWeight: 700, cursor: "pointer" }}>{"\u23F1 " + fmtLabel(restSec)}</button> : null}
                    {restSec && restSec > 60 ? <button onClick={function() { quickTimer(60); }} style={{ fontSize: 10, border: "1px solid " + T.sub + "30", borderRadius: 5, padding: "3px 8px", background: "transparent", color: T.sub, fontWeight: 600, cursor: "pointer" }}>{fmtLabel(60)}</button> : null}
                  </div>
                  {showImg === "ex" + i && exImgs(ex.n).map(function(src, si) { return <img key={si} src={src} style={{ width: "100%", borderRadius: 8, marginBottom: 8 }} />; })}
                  <DetailText text={db.c} accent={dc} size={11} soft={true} />
                  {db.deep && <details style={{ marginBottom: 8, borderRadius: 8, overflow: "hidden", background: T.bg }}>
                    <summary style={{ padding: "8px 12px", cursor: "pointer", fontSize: 11, fontWeight: 700, color: T.sub, listStyle: "none", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 13 }}>📖</span> Approfondimento tecnico
                    </summary>
                    <div style={{ padding: "8px 12px 12px" }}>
                      {Array.isArray(db.deep) ? db.deep.map(function(block, bi) {
                        if (block.type === "ul") return <div key={bi} style={{ display: "grid", gap: 6, marginBottom: 8 }}>{block.content.map(function(item, ii) { return <div key={ii} style={{ display: "flex", gap: 8, alignItems: "flex-start", background: dc + "08", border: "1px solid " + dc + "12", borderRadius: 8, padding: "8px 10px" }}><span style={{ color: dc, fontSize: 10, lineHeight: 1.6 }}>•</span><span style={{ fontSize: 11, lineHeight: 1.6, color: T.sub }}>{item}</span></div>; })}</div>;
                        return <DetailText key={bi} text={block.content} accent={dc} size={11} soft={true} />;
                      }) : <DetailText text={db.deep} accent={dc} size={11} soft={true} />}
                    </div>
                  </details>}
                  {/* Registra - collapsible */}
                  <div onClick={function() { setShowReg(showReg === i ? null : i); }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", padding: "6px 0", borderTop: "1px solid " + T.bg }}>
                    <div style={{ fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                      {"Registra — " + todayStr()}
                      {tLog && tLog.sets.length > 0 && <span style={{ fontSize: 10, color: T.ok, fontWeight: 700 }}>{tLog.sets.length + "/" + sc}</span>}
                    </div>
                    <div style={{ fontSize: 12, color: T.sub, transform: showReg === i ? "rotate(180deg)" : "none" }}>&#9662;</div>
                  </div>
                  {showReg === i && <div style={{ display: "flex", flexDirection: "column", gap: 3, marginTop: 4 }}>
                    {Array.from({ length: sc }).map(function(_, si) {
                      var lg = tLog ? tLog.sets.find(function(s) { return s.si === si; }) : null;
                      var isE = editing === i + "-" + si;
                      var tgt = p.reps[si] || p.reps[p.reps.length - 1];
                      return <div key={si} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderRadius: 6, background: lg ? T.ok + "12" : T.sb, border: "1px solid " + (lg ? T.ok + "30" : T.bg) }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: lg ? T.ok : T.tx + "20", color: lg ? "#fff" : T.sub, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700, flexShrink: 0 }}>{si + 1}</div>
                        <div style={{ fontSize: 10, color: T.sub, minWidth: 36 }}>{tgt}</div>
                        {isE ? <div style={{ display: "flex", gap: 3, flex: 1, alignItems: "center" }}>
                          <input type="number" placeholder="kg" value={tmpW} onChange={function(e) { setTmpW(e.target.value); }} style={{ width: 44, padding: "3px 4px", border: "1px solid " + T.bg, borderRadius: 5, fontSize: 11, textAlign: "center", background: T.cd, color: T.tx }} autoFocus />
                          <span style={{ fontSize: 9, color: T.sub }}>kg</span>
                          <input type={tgt === "max" ? "text" : "number"} placeholder="rip" value={tmpR} onChange={function(e) { setTmpR(e.target.value); }} style={{ width: 44, padding: "3px 4px", border: "1px solid " + T.bg, borderRadius: 5, fontSize: 11, textAlign: "center", background: T.cd, color: T.tx }} />
                          <button onClick={function() { logSet(ex.n, dayIdx, si, tmpW, tmpR); }} style={{ background: dc, color: "#fff", border: "none", borderRadius: 5, padding: "3px 7px", fontSize: 10, cursor: "pointer", fontWeight: 700 }}>&#10003;</button>
                          <button onClick={function() { setEditing(null); setTmpW(""); setTmpR(""); }} style={{ background: T.bg, color: T.sub, border: "none", borderRadius: 5, padding: "3px 5px", fontSize: 10, cursor: "pointer" }}>&#10005;</button>
                        </div> : lg ? <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: T.ok }}>{lg.w + "kg x " + lg.r}</span>
                          <button onClick={function() { setEditing(i + "-" + si); setTmpW(String(lg.w)); setTmpR(String(lg.r)); }} style={{ background: "none", border: "none", fontSize: 10, color: T.sub, cursor: "pointer" }}>modifica</button>
                        </div> : <button onClick={function() { setEditing(i + "-" + si); setTmpW(""); setTmpR(""); }} style={{ flex: 1, background: "none", border: "1px dashed " + T.sub + "40", borderRadius: 5, padding: "3px 6px", fontSize: 10, color: T.sub, cursor: "pointer", textAlign: "left" }}>+ registra</button>}
                      </div>;
                    })}
                  </div>}
                  <button onClick={function() { setHistIdx(isH ? null : i); }} style={{ background: "none", border: "none", color: dc, fontSize: 11, cursor: "pointer", marginTop: 6, padding: 0, fontWeight: 600 }}>{isH ? "Nascondi storico" : "Storico"}</button>
                  {isH && <div style={{ marginTop: 6 }}>{hData.length === 0 ? <div style={{ fontSize: 11, color: T.sub }}>Nessun dato.</div> :
                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>{hData.map(function(h, hi) { return <div key={hi} style={{ fontSize: 11, color: T.sub, padding: "4px 6px", background: T.sb, borderRadius: 5 }}><span style={{ fontWeight: 700, marginRight: 6 }}>{h.date}</span>{h.month && <span style={{ fontSize: 9, marginRight: 6, opacity: 0.6 }}>{"M" + h.month}</span>}{h.sets.sort(function(a,b) { return a.si - b.si; }).map(function(s, si) { return <span key={si} style={{ marginRight: 6 }}>{"S" + (s.si+1) + ":" + s.w + "kg x" + s.r}</span>; })}</div>; })}</div>}
                  </div>}
                </div>}
              </div>;
            })}
            </div>}
            </div>

            {/* Stretching */}
            <div>
              <div onClick={function() { setShowStr(!showStr); }} style={{ padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, background: showStr ? T.st + "08" : "transparent" }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: T.ac + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>&#129495;</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 13, color: T.st }}>Stretching finale</div><div style={{ fontSize: 11, color: T.sub }}>{dayData.str.length + " esercizi · 5-8 min"}</div></div>
                <div style={{ fontSize: 14, color: T.sub, transform: showStr ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</div>
              </div>
              {showStr && <div style={{ padding: "0 14px 14px" }}><div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {dayData.str.map(function(sn, si) { var sd = STR[sn]; if (!sd) return null; return <div key={si} style={{ background: T.sb, borderRadius: 8, padding: 12, marginBottom: 2 }}>
                  <div style={{ fontWeight: 700, fontSize: 12, color: T.st, marginBottom: 2 }}>{sn}</div>
                  <div style={{ fontSize: 11, color: dc, fontWeight: 600, marginBottom: 4 }}>{sd.d}</div>
                  {sd.img && WS_IMG[sd.img] && <div>
                    <button onClick={function() { setShowImg(showImg === "s" + si ? null : "s" + si); }} style={{ fontSize: 10, color: T.st, fontWeight: 600, background: "none", border: "1px solid " + T.st + "30", borderRadius: 5, padding: "2px 8px", cursor: "pointer", marginBottom: 4 }}>{showImg === "s" + si ? "nascondi" : "vedi foto"}</button>
                    {showImg === "s" + si && <img src={WS_IMG[sd.img]} style={{ width: "100%", maxWidth: 280, borderRadius: 8, marginBottom: 6 }} />}
                  </div>}
                  <DetailText text={sd.h} accent={T.st} size={11} soft={true} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 10, color: T.sub, fontStyle: "italic" }}>{sd.t}</span>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      {sd.lk && <a href={sd.lk} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: dc, fontWeight: 600, textDecoration: "none" }}>video &rarr;</a>}
                      {sd.tm && <button onClick={function() { quickTimer(sd.tm); }} style={{ display: "flex", alignItems: "center", gap: 3, padding: "3px 10px", border: "none", borderRadius: 6, background: T.st, color: "#fff", fontSize: 10, fontWeight: 700, cursor: "pointer" }}>{"\u23F1 " + fmtLabel(sd.tm)}</button>}
                    </div>
                  </div>
                </div>; })}
              </div></div>}
            </div>
          </div>
        </div>
      </div>}

      {/* TIMER BAR */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, background: T.hd, color: T.htx, boxShadow: "0 -4px 20px rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "8px 14px", gap: 8, maxWidth: 600, margin: "0 auto" }}>
          <button onClick={function() { setTPanel(!tPanel); }} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: T.htx, width: 30, height: 30, borderRadius: 7, cursor: "pointer", fontSize: 13 }}>{tPanel ? "\u25BE" : "\u25B4"}</button>
          <div onClick={function() { setTFull(true); }} style={{ fontVariantNumeric: "tabular-nums", fontSize: 24, fontWeight: 800, letterSpacing: "0.5px", flex: 1, textAlign: "center", cursor: "pointer" }}>{fmtTime(tMs)}</div>
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            {!tRunning ? <button onClick={timerGo} style={{ background: T.ok, border: "none", color: "#fff", width: 36, height: 36, borderRadius: 9, cursor: "pointer", fontSize: 16 }}>&#9654;</button> : <button onClick={timerPause} style={{ background: T.ac, border: "none", color: "#000", width: 36, height: 36, borderRadius: 9, cursor: "pointer", fontSize: 13, fontWeight: 800 }}>&#9646;&#9646;</button>}
            <button onClick={timerReset} style={{ background: "rgba(255,255,255,0.1)", border: "none", color: T.htx, width: 36, height: 36, borderRadius: 9, cursor: "pointer", fontSize: 12 }}>&#8634;</button>
          </div>
        </div>
        {tPanel && <div style={{ padding: "0 14px 12px", maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
            {["stopwatch","countdown"].map(function(m) { return <button key={m} onClick={function() { timerSwitch(m); }} style={{ flex: 1, padding: "7px 0", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 12, fontWeight: tMode === m ? 700 : 500, background: tMode === m ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)", color: tMode === m ? "#fff" : "rgba(255,255,255,0.5)" }}>{m === "stopwatch" ? "Cronometro" : "Recupero"}</button>; })}
          </div>
          {tMode === "countdown" && <div style={{ display: "flex", gap: 5 }}>{timerBtns(false)}</div>}
        </div>}
      </div>

    </div>
  );
}
