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
  forest: { n: "Forest", bg: "#F5F2EB", cd: "#FFF", tx: "#1a1a1a", sub: "#888", hd: "linear-gradient(135deg,#1a1a1a,#2d2d2d)", htx: "#F5F2EB", dy: ["#2D6A4F","#1B4965","#6B3FA0","#A4243B","#78909C"], ok: "#2D6A4F", ac: "#E9C46A", sb: "#faf8f4", st: "#B8860B" },
  ocean: { n: "Ocean", bg: "#EBF2FA", cd: "#FFF", tx: "#102A43", sub: "#627D98", hd: "linear-gradient(135deg,#0A1628,#1B3A5C)", htx: "#E0E8F0", dy: ["#1565C0","#00838F","#5E35B1","#C62828","#607D8B"], ok: "#1565C0", ac: "#FF8F00", sb: "#E8F0FE", st: "#1565C0" },
  ember: { n: "Ember", bg: "#FFF8F0", cd: "#FFF", tx: "#2C1810", sub: "#A1887F", hd: "linear-gradient(135deg,#2C1810,#5D3520)", htx: "#FFE0C8", dy: ["#BF360C","#E65100","#6D4C41","#AD1457","#8D6E63"], ok: "#BF360C", ac: "#F9A825", sb: "#FFF3E0", st: "#E65100" },
  night: { n: "Notte", bg: "#12121F", cd: "#1A1A30", tx: "#E0E0F0", sub: "#7878AA", hd: "linear-gradient(135deg,#08081A,#1A1A30)", htx: "#C8C8F0", dy: ["#7B68EE","#26C6DA","#EC407A","#FFA726","#78909C"], ok: "#7B68EE", ac: "#26C6DA", sb: "#20203A", st: "#7B68EE" },
  rose: { n: "Rose", bg: "#FDF2F4", cd: "#FFF", tx: "#3D1428", sub: "#B39DDB", hd: "linear-gradient(135deg,#3D1428,#880E4F)", htx: "#FFD6E0", dy: ["#C2185B","#7B1FA2","#00838F","#E65100","#9E9E9E"], ok: "#C2185B", ac: "#7CB342", sb: "#FCE4EC", st: "#C2185B" }
};


var EX = {"Ab Wheel": {"g": "Core/Addominali", "c": "Inginocchiata, rotella in mano. Rotola avanti, torna contraendo.", "p": "Ginocchia a terra, core contratto, glutei attivi, schiena neutra.", "t": ["Range ridotto all'inizio", "Glutei stretti per la lombare", "Espira tornando indietro"], "lk": "https://www.youtube.com/watch?v=kISuoI7QCYk"}, "Trazioni": {"g": "Dorsali/Bicipiti", "c": "Presa prona oltre le spalle. Tira su, mento sopra, scendi controllando.", "p": "Scapole depresse e addotte. Core attivo. Niente slancio.", "t": ["Negativa: sali con salto, scendi in 5s", "Gomiti verso il basso", "Evita il kipping"], "lk": "https://www.youtube.com/results?search_query=pull+up+tutorial+form"}, "Push-Up": {"g": "Pettorali/Tricipiti/Deltoidi", "c": "Mani poco piu larghe delle spalle, corpo in linea. Scendi col petto, spingi su.", "p": "Core contratto, gomiti a 45 gradi, bacino non cade e non sale.", "t": ["Bacino scende col petto", "Ginocchia a terra se difficile", "Eccentrica lenta = piu stimolo"], "lk": "https://www.youtube.com/results?search_query=push+up+tutorial+form"}, "Rematore Manubri": {"g": "Dorsali/Romboidi/Bicipiti", "c": "Ginocchio e mano su panca, l'altra col manubrio. Tira verso il fianco.", "p": "Schiena parallela e neutra. Busto fermo.", "t": ["Gomito guida, non la mano", "1s in alto stringendo la scapola", "Senza panca: mano su sedia"], "lk": "https://www.youtube.com/results?search_query=dumbbell+row+tutorial"}, "Nordic Curl": {"g": "Femorali/Glutei", "c": "In ginocchio, piedi bloccati. Scendi controllando, mani ammortizzano, spingi su.", "p": "Anche estese, core e glutei contratti.", "t": ["Anche 20-30 gradi di discesa va bene", "Forza sulla negativa", "Alt: leg curl con manubrio tra i piedi"], "lk": "https://www.youtube.com/results?search_query=nordic+curl+tutorial"}, "Good Morning": {"g": "Erettori/Glutei/Femorali", "c": "Bilanciere sulle spalle. Piega avanti spingendo bacino indietro, ginocchia flesse.", "p": "Schiena NEUTRA sempre. Scendi fino a tensione femorali.", "t": ["Chiudi una porta col sedere", "Inizia con bilanciere scarico"], "lk": "https://www.youtube.com/results?search_query=good+morning+barbell+tutorial"}, "Hyperextension": {"g": "Erettori/Glutei/Femorali", "c": "Panca 45 gradi, piedi bloccati. Scendi col busto, risali contraendo glutei e erettori.", "p": "Schiena neutra, non iperestendere.", "t": ["Contrai glutei in alto 1s", "Disco al petto per piu carico"], "lk": "https://www.youtube.com/results?search_query=hyperextension+tutorial"}, "Addominali Obliqui": {"g": "Obliqui", "c": "Crunch laterale o russian twist (piedi sollevati, ruota il busto).", "p": "Lombare a terra nei crunch.", "t": ["Rotazione dal busto", "Espira quando ruoti"], "lk": "https://www.youtube.com/results?search_query=russian+twist+tutorial"}, "Plank": {"g": "Core completo", "c": "Avambracci a terra, gomiti sotto spalle, corpo in linea.", "p": "Glutei contratti, addome in dentro, collo neutro.", "t": ["Tira gomiti verso piedi senza muoverti", "Se tremi e normale"], "lk": "https://www.youtube.com/results?search_query=plank+esecuzione+corretta"}, "Squat": {"g": "Quadricipiti/Glutei/Core", "c": "Bilanciere sulle spalle, piedi larghezza spalle. Scendi al parallelo, spingi su.", "p": "Petto fuori, schiena neutra, ginocchia seguono le punte.", "t": ["Inspira e blocca core prima di scendere", "Ginocchia oltre le punte = fisiologico"], "lk": "https://www.youtube.com/results?search_query=barbell+squat+tutorial"}, "Military Press": {"g": "Deltoidi/Tricipiti/Core", "c": "Bilanciere alle clavicole. Spingi sopra la testa, scendi controllando.", "p": "Piedi larghezza spalle, glutei e core contratti.", "t": ["Glutei stretti per stabilizzare", "Se lombare inarca: riduci carico"], "lk": "https://www.youtube.com/results?search_query=military+press+tutorial"}, "Trazioni Supine": {"g": "Dorsali/Bicipiti/Romboidi", "c": "Presa supina (palmi verso di te). Tira su, mento sopra, scendi.", "p": "Scapole depresse. Core attivo.", "t": ["Supina = piu bicipiti", "Elastico per assistenza"], "lk": "https://www.youtube.com/results?search_query=chin+up+tutorial"}, "Curl Bicipiti": {"g": "Bicipiti/Brachiale", "c": "Manubri ai lati, presa supina. Fletti verso spalle, scendi.", "p": "Gomiti fissi ai lati. Niente dondolio.", "t": ["Se dondoli: peso troppo", "Eccentrica 3s = piu stimolo"], "lk": "https://www.youtube.com/results?search_query=bicep+curl+tutorial"}, "French Press Manubri": {"g": "Tricipiti", "c": "Su panca, manubri sopra. Fletti gomiti verso tempie, estendi.", "p": "Gomiti verso soffitto, fermi. Presa neutra.", "t": ["Gomiti paralleli", "Leggermente dietro la testa"], "lk": "https://www.youtube.com/results?search_query=french+press+dumbbell+tutorial"}, "Dip su Panca": {"g": "Tricipiti/Pettorali inf.", "c": "Mani su panca dietro. Scendi a 90 gradi gomiti, spingi su.", "p": "Gomiti indietro. Schiena vicina alla panca.", "t": ["Gambe tese = piu difficile", "Non sotto 90 gradi"], "lk": "https://www.youtube.com/results?search_query=bench+dip+tutorial"}, "Squat Bulgaro": {"g": "Quadricipiti/Glutei/Femorali", "c": "Piede posteriore su panca. Scendi a 90 gradi, spingi su.", "p": "Busto eretto. Ginocchio in linea con punta.", "t": ["Busto avanti = piu glutei", "Manubri ai lati per carico"], "lk": "https://www.youtube.com/results?search_query=bulgarian+split+squat+tutorial"}, "Panca": {"g": "Pettorali/Tricipiti/Deltoidi", "c": "Su panca, bilanciere dal rack. Scendi al petto, spingi su.", "p": "Scapole addotte, arco toracico, piedi a terra.", "t": ["Scapole retratte sempre", "Tocca petto, non rimbalza"], "lk": "https://www.youtube.com/results?search_query=bench+press+tutorial"}, "Stacco da Terra": {"g": "Catena posteriore completa", "c": "Piedi sotto sbarra. Petto fuori, schiena neutra, spingi pavimento.", "p": "Schiena NEUTRA sempre. Bilanciere rasente gambe.", "t": ["Spinta di gambe, non di schiena", "Bilanciere non si allontana MAI"], "lk": "https://www.youtube.com/results?search_query=deadlift+tutorial"}, "Rematore Bilanciere": {"g": "Dorsali/Trapezi/Bicipiti", "c": "Busto a 45 gradi, ginocchia flesse. Tira all'addome, scendi.", "p": "Schiena neutra e rigida, busto fermo.", "t": ["Se busto si alza: peso troppo", "Scapole strette 1s in alto"], "lk": "https://www.youtube.com/results?search_query=barbell+row+tutorial"}, "Shoulder Tap": {"g": "Core/Deltoidi/Stabilizzatori", "c": "Push-up position. Tocca spalla opposta alternando.", "p": "Piedi larghi. Core contrattissimo.", "t": ["Piedi stretti = piu difficile", "Lento e controllato"], "lk": "https://www.youtube.com/results?search_query=shoulder+tap+tutorial"}, "Affondi": {"g": "Quadricipiti/Glutei/Femorali", "c": "Passo avanti, scendi a 90 gradi, ginocchio posteriore sfiora terra.", "p": "Busto eretto, core contratto.", "t": ["Busto avanti = piu glutei", "Indietro = meno stress ginocchio"], "lk": "https://www.youtube.com/results?search_query=lunge+tutorial"}, "Clamshell": {"g": "Gluteo medio/Piccolo gluteo", "c": "Su un fianco, ginocchia 90 gradi. Apri ginocchio superiore, chiudi.", "p": "Bacino stabile. Core attivo.", "t": ["2s in apertura massima", "Elastico per piu carico"], "lk": "https://www.youtube.com/results?search_query=clamshell+exercise+tutorial"}, "Abduzione Laterale": {"g": "Gluteo medio/Tensore", "c": "Su un fianco, gamba superiore tesa. Alza a 45 gradi, scendi.", "p": "Corpo in linea. Tallone verso soffitto.", "t": ["45 gradi bastano", "Cavigliera per piu carico"], "lk": "https://www.youtube.com/results?search_query=side+lying+leg+raise+tutorial"}, "Croci Manubri a Terra": {"g": "Pettorali/Deltoidi", "c": "Sdraiata, manubri sopra. Apri lateralmente ad arco, chiudi.", "p": "Scapole addotte. Gomiti con stessa flessione.", "t": ["Arco, non linea retta", "Peso moderato"], "lk": "https://www.youtube.com/results?search_query=dumbbell+fly+floor+tutorial"}, "Arnold Press": {"g": "Deltoidi (3 fasci)/Tricipiti", "c": "Manubri al mento, palmi verso di te. Spingi ruotando i polsi.", "p": "Schiena dritta, core contratto.", "t": ["Rotazione = tutti i fasci", "Niente slancio"], "lk": "https://www.youtube.com/results?search_query=arnold+press+tutorial"}, "Step Up": {"g": "Quadricipiti/Glutei", "c": "Piede su gradino, spingi per salire. Scendi controllando.", "p": "Busto eretto, core attivo.", "t": ["Forza dal piede sullo step", "Piu alto = piu glutei"], "lk": "https://www.youtube.com/results?search_query=step+up+tutorial"}, "Floor Press Manubri": {"g": "Pettorali/Tricipiti", "c": "A terra, manubri sopra. Scendi fino a gomiti a terra, spingi.", "p": "Scapole addotte.", "t": ["Pausa 1s a terra"], "lk": "https://www.youtube.com/results?search_query=floor+press+dumbbell+tutorial"}, "Push-Up Declino": {"g": "Pettorali sup./Tricipiti", "c": "Push-up con piedi su panca. Scendi col petto, spingi.", "p": "Corpo in linea. Core contratto.", "t": ["Gomiti a 45 gradi"], "lk": "https://www.youtube.com/results?search_query=decline+push+up+tutorial"}, "Stacco Rumeno": {"g": "Femorali/Glutei/Erettori", "c": "Bilanciere davanti, spingi bacino indietro lungo gambe. Risali.", "p": "Schiena neutra. Ginocchia poco flesse.", "t": ["Senti allungamento femorali"], "lk": "https://www.youtube.com/results?search_query=romanian+deadlift+tutorial"}, "Front Squat": {"g": "Quadricipiti/Core/Glutei", "c": "Bilanciere clavicole, gomiti alti. Scendi, busto verticale.", "p": "Gomiti alti, petto fuori.", "t": ["Piu quadricipiti, meno schiena"], "lk": "https://www.youtube.com/results?search_query=front+squat+tutorial"}, "Pause Squat": {"g": "Quadricipiti/Glutei", "c": "Squat con 2-3s fermo in buca, poi esplosione.", "p": "Come squat classico.", "t": ["15-20% meno carico"], "lk": "https://www.youtube.com/results?search_query=pause+squat+tutorial"}, "Push Press": {"g": "Deltoidi/Tricipiti/Gambe", "c": "Military press con leggera spinta esplosiva delle gambe.", "p": "Dip breve, esplosivo.", "t": ["Piu carico del military"], "lk": "https://www.youtube.com/results?search_query=push+press+tutorial"}, "Curl Martello": {"g": "Brachiale/Brachioradiale", "c": "Curl con presa neutra (palmi uno verso l'altro).", "p": "Gomiti fissi.", "t": ["Da spessore al braccio"], "lk": "https://www.youtube.com/results?search_query=hammer+curl+tutorial"}, "Curl Concentrato": {"g": "Bicipiti (picco)", "c": "Seduta, gomito su coscia. Fletti manubrio.", "p": "Gomito fermo, braccio isolato.", "t": ["Lento, senza slancio"], "lk": "https://www.youtube.com/results?search_query=concentration+curl+tutorial"}, "Kick Back Manubri": {"g": "Tricipiti", "c": "Piegata avanti, gomito 90 gradi. Estendi indietro.", "p": "Gomito fermo, busto stabile.", "t": ["1s in estensione completa"], "lk": "https://www.youtube.com/results?search_query=tricep+kickback+tutorial"}, "Overhead Extension": {"g": "Tricipiti (capo lungo)", "c": "Un manubrio 2 mani sopra testa. Fletti dietro, estendi.", "p": "Gomiti vicini orecchie.", "t": ["Enfasi capo lungo"], "lk": "https://www.youtube.com/results?search_query=overhead+tricep+extension+tutorial"}, "Push-Up Diamante": {"g": "Tricipiti/Pettorali int.", "c": "Push-up con mani a diamante. Scendi, spingi.", "p": "Gomiti vicini al corpo.", "t": ["Ginocchia a terra se difficile"], "lk": "https://www.youtube.com/results?search_query=diamond+push+up+tutorial"}, "Stacco Sumo": {"g": "Quadricipiti/Glutei/Adduttori", "c": "Piedi molto larghi, punte fuori. Presa stretta.", "p": "Busto piu verticale.", "t": ["Meno stress lombare"], "lk": "https://www.youtube.com/results?search_query=sumo+deadlift+tutorial"}, "Pendlay Row": {"g": "Dorsali/Trapezi", "c": "Rematore ma bilanciere parte da terra ogni rip.", "p": "Busto parallelo.", "t": ["Esplosione, appoggio controllato"], "lk": "https://www.youtube.com/results?search_query=pendlay+row+tutorial"}, "Walking Lunge": {"g": "Quadricipiti/Glutei", "c": "Affondo camminando avanti.", "p": "Come affondo classico.", "t": ["Piu impegnativo per stabilita"], "lk": "https://www.youtube.com/results?search_query=walking+lunge+tutorial"}, "Alzate Laterali": {"g": "Deltoide laterale", "c": "Manubri ai lati. Alza lateralmente fino a parallele.", "p": "Gomiti flessi. Non alzare spalle.", "t": ["Peso leggero - isolamento"], "lk": "https://www.youtube.com/results?search_query=lateral+raise+tutorial"}, "Fire Hydrant": {"g": "Gluteo medio", "c": "Quattro zampe, alza ginocchio lateralmente.", "p": "Ginocchio 90 gradi. Bacino fermo.", "t": ["20 rip/lato, lento"], "lk": "https://www.youtube.com/results?search_query=fire+hydrant+tutorial"}, "Hip Thrust Singolo": {"g": "Grande gluteo", "c": "Schiena su panca, un piede a terra. Spingi anca su.", "p": "Spalle sulla panca, mento al petto.", "t": ["Gluteo stretto 1s in alto"], "lk": "https://www.youtube.com/results?search_query=single+leg+hip+thrust+tutorial"}, "Single Leg Deadlift": {"g": "Femorali/Glutei/Equilibrio", "c": "Su una gamba, manubrio in mano opposta. Piegati avanti.", "p": "Schiena neutra, anca livellata.", "t": ["Tocca piede se perdi equilibrio"], "lk": "https://www.youtube.com/results?search_query=single+leg+deadlift+tutorial"}, "Pulley": {"g": "Dorsali/Tirata upper", "c": "Seduta davanti alla carrucola BASSA. Afferra la barra/maniglie, tira verso lo sterno portando i gomiti indietro e le scapole insieme. Controlla il ritorno. Richiede carrucola bassa — senza, usa Rematore Manubri.", "p": "Schiena dritta, petto fuori, piedi ben piantati. Non inarcare la lombare.", "t": ["Tira con i dorsali, non con le braccia", "Le scapole si devono avvicinare alla fine del movimento", "Controlla la fase eccentrica: 2-3 secondi per tornare su"], "lk": "https://www.youtube.com/watch?v=-wVifByDoe4"}, "Lat Machine": {"g": "Dorsali/Tirata upper", "c": "Seduta alla carrucola alta con barra larga. Tira la barra verso il petto alto, portando i gomiti verso il basso e indietro. Controlla il ritorno sopra la testa.", "p": "Petto fuori, schiena leggermente inclinata indietro (non troppo). Presa poco piu larga delle spalle.", "t": ["Non tirare dietro la nuca: sempre davanti al petto", "Immagina di spingere i gomiti verso il pavimento", "Contrai i dorsali in basso, poi controlla la risalita"], "lk": "https://www.youtube.com/results?search_query=lat+pulldown+tutorial"}, "Tricipiti Cavo": {"g": "Tricipiti/Spinta upper", "c": "In piedi davanti alla carrucola alta, afferra la corda o la barra. Gomiti fermi ai fianchi, estendi le braccia verso il basso fino a blocco. Torna su controllando.", "p": "Busto leggermente inclinato avanti, gomiti incollati ai fianchi. Non oscillare con il corpo.", "t": ["Solo gli avambracci si muovono, il resto e fermo", "Stringi i tricipiti a fine estensione per 1 secondo", "Se usi la corda, apri le mani ai lati a fine movimento"], "lk": "https://www.youtube.com/results?search_query=tricep+pushdown+cable+tutorial"}};

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
  var [tab, setTab] = useState("workout");
  var [dayIdx, setDayIdx] = useState(0);
  var [month, setMonth] = useState(1);
  var [theme, setTheme] = useState("forest");
  var [themeOpen, setThemeOpen] = useState(false);
  var [rpeOpen, setRpeOpen] = useState(false);
  var [glossOpen, setGlossOpen] = useState(false);
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

  useEffect(function() { try { var stored = localStorage.getItem(SK); if (stored) setLogs(JSON.parse(stored)); } catch(e) {} setReady(true); }, []);
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
            <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 4 }}>Come si esegue</div>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: T.sub, margin: "0 0 10px" }}>{db.c}</p>
            <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 4 }}>Posizione</div>
            <p style={{ fontSize: 12, lineHeight: 1.5, color: T.sub, margin: "0 0 10px" }}>{db.p}</p>
            <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 4 }}>Trucchi</div>
            {db.t.map(function(tip, ti) { return <div key={ti} style={{ fontSize: 12, lineHeight: 1.4, color: T.sub, paddingLeft: 14, position: "relative", marginBottom: 3 }}><span style={{ position: "absolute", left: 0, color: dc }}>→</span>{tip}</div>; })}
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
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", background: T.bg, minHeight: "100vh", color: T.tx }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <ExPopup />

      {/* RPE Modal */}
      {rpeOpen && <div onClick={function() { setRpeOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, padding: 24, maxWidth: 380, width: "100%", color: T.tx }}>
          <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 800 }}>RPE</h3>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 14px", color: T.sub }}>Rate of Perceived Exertion. Quante ripetizioni hai in riserva alla fine della serie.</p>
          {[["6","Altre 4+ in riserva"],["7","Altre 3"],["8","Altre 2"],["9","Altra 1"],["10","Massimale"]].map(function(item) { return <div key={item[0]} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0", borderBottom: "1px solid " + T.bg }}><div style={{ width: 32, height: 32, borderRadius: 8, background: dc, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{item[0]}</div><span style={{ fontSize: 13 }}>{item[1]}</span></div>; })}
          <button onClick={function() { setRpeOpen(false); }} style={{ marginTop: 16, width: "100%", padding: 10, border: "none", borderRadius: 10, background: dc, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>OK</button>
        </div>
      </div>}

      {/* Glossary Modal */}
      {glossOpen && <div onClick={function() { setGlossOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, padding: 20, maxWidth: 440, width: "100%", color: T.tx, maxHeight: "85vh", overflowY: "auto" }}>
          <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 800 }}>Glossario</h3>
          <p style={{ fontSize: 12, color: T.sub, margin: "0 0 14px" }}>Concetti fondamentali. Tap per espandere.</p>
          {GLOSS.map(function(g, gi) { return <details key={gi} style={{ marginBottom: 4, borderRadius: 8, overflow: "hidden", background: T.sb }}><summary style={{ padding: "10px 12px", cursor: "pointer", fontSize: 13, fontWeight: 700, color: dc }}>{g.t}</summary><div style={{ padding: "0 12px 12px", fontSize: 12, lineHeight: 1.6, color: T.sub }}>{g.d}</div></details>; })}
          <button onClick={function() { setGlossOpen(false); }} style={{ marginTop: 12, width: "100%", padding: 10, border: "none", borderRadius: 10, background: dc, color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Chiudi</button>
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

      {/* Theme Modal */}
      {themeOpen && <div onClick={function() { setThemeOpen(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 200, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 80 }}>
        <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.cd, borderRadius: 16, padding: 20, maxWidth: 320, width: "100%" }}>
          <h3 style={{ margin: "0 0 14px", fontSize: 16, fontWeight: 800, color: T.tx }}>Tema</h3>
          {Object.keys(TH).map(function(k) { var v = TH[k]; return <button key={k} onClick={function() { setTheme(k); setThemeOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 10, padding: 10, border: theme === k ? "2px solid " + v.dy[0] : "2px solid transparent", borderRadius: 10, background: v.bg, cursor: "pointer", width: "100%", marginBottom: 4 }}><div style={{ display: "flex", gap: 3 }}>{v.dy.slice(0,4).map(function(c,i) { return <div key={i} style={{ width: 16, height: 16, borderRadius: 4, background: c }} />; })}</div><span style={{ fontSize: 13, fontWeight: 600, color: v.tx }}>{v.n}</span></button>; })}
        </div>
      </div>}

      {/* HEADER */}
      <div style={{ background: T.hd, padding: "18px 16px 10px", color: T.htx }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 600, margin: "0 auto" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>Workout Tracker</div>
            <div style={{ fontSize: 11, opacity: 0.5, marginTop: 2 }}>Home Gym — Mese {month}</div>
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            <button onClick={function() { setGlossOpen(true); }} style={{ background: "rgba(255,255,255,0.12)", border: "none", color: T.htx, padding: "0 8px", height: 32, borderRadius: 8, cursor: "pointer", fontSize: 10, fontWeight: 700 }}>&#128214;</button>
            <button onClick={function() { setThemeOpen(true); }} style={{ background: "rgba(255,255,255,0.12)", border: "none", color: T.htx, width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 15 }}>&#127912;</button>
            <button onClick={function() { exportData(); }} style={{ background: "rgba(255,255,255,0.12)", border: "none", color: T.htx, padding: "0 8px", height: 32, borderRadius: 8, cursor: "pointer", fontSize: 10, fontWeight: 700 }}>⬇️</button>
            <button onClick={function() { importData(); }} style={{ background: "rgba(255,255,255,0.12)", border: "none", color: T.htx, padding: "0 8px", height: 32, borderRadius: 8, cursor: "pointer", fontSize: 10, fontWeight: 700 }}>⬆️</button>
            <button onClick={function() { setResetOpen(true); }} style={{ background: "rgba(255,255,255,0.06)", border: "none", color: T.htx, padding: "0 8px", height: 32, borderRadius: 8, cursor: "pointer", fontSize: 10, opacity: 0.5 }}>Reset</button>
          </div>
        </div>
        {/* Month tabs */}
        <div style={{ display: "flex", gap: 4, maxWidth: 600, margin: "8px auto 0" }}>
          {[1,2,3,4].map(function(m) { return <button key={m} onClick={function() { setMonth(m); }} style={{ flex: 1, padding: "5px 0", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 11, fontWeight: month === m ? 700 : 500, background: month === m ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)", color: month === m ? "#fff" : "rgba(255,255,255,0.4)" }}>{"Mese " + m}</button>; })}
        </div>
        {/* View tabs */}
        <div style={{ display: "flex", gap: 4, maxWidth: 600, margin: "6px auto 0" }}>
          {["Scheda", "Muscoli", "Esercizi"].map(function(t) { var keys = {"Scheda":"workout","Muscoli":"muscles","Esercizi":"exercises"}; var active = tab === keys[t]; return <button key={t} onClick={function() { setTab(keys[t]); }} style={{ flex: 1, padding: "6px 0", border: "none", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: active ? 700 : 500, background: active ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.04)", color: active ? "#fff" : "rgba(255,255,255,0.35)" }}>{t}</button>; })}
        </div>
      </div>

      {/* === MUSCLES TAB === */}
      {tab === "muscles" && <div style={{ maxWidth: 600, margin: "0 auto", padding: "12px 12px 100px" }}>
        <div style={{ background: T.cd, borderRadius: 12, padding: 12, marginBottom: 10, textAlign: "center" }}>
          <img src={MUSCLE_IMG} alt="Muscoli" style={{ width: "100%", maxWidth: 420, borderRadius: 8, marginBottom: 8 }} />
          <div style={{ fontSize: 11, color: T.sub, fontStyle: "italic" }}>Tap su ogni muscolo per dettagli e esercizi</div>
        </div>
        {MUSC.map(function(m, mi) { var isO = openMuscle === mi; return <div key={mi} style={{ background: T.cd, borderRadius: 10, marginBottom: 4, overflow: "hidden" }}>
          <div onClick={function() { setOpenMuscle(isO ? null : mi); }} style={{ padding: "12px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: dc + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: dc }}>{mi+1}</div>
            <div style={{ flex: 1 }}><div style={{ fontWeight: 700, fontSize: 13 }}>{m.n}</div><div style={{ fontSize: 11, color: T.sub }}>{m.z}</div></div>
            <div style={{ fontSize: 14, color: T.sub, transform: isO ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>&#9662;</div>
          </div>
          {isO && <div style={{ padding: "0 14px 14px" }}>
            <div style={{ background: T.sb, borderRadius: 8, padding: 12, marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 4 }}>Dove</div>
              <p style={{ fontSize: 12, lineHeight: 1.5, color: T.sub, margin: "0 0 8px" }}>{m.w}</p>
              <div style={{ fontSize: 11, fontWeight: 700, color: dc, marginBottom: 4 }}>Perche allenarlo</div>
              <p style={{ fontSize: 12, lineHeight: 1.5, color: T.sub, margin: 0 }}>{m.y}</p>
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
                  <div style={{ fontSize: 11, lineHeight: 1.5, color: T.sub }}>{w.d}</div>
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
                <div style={{ fontSize: 11, lineHeight: 1.5, color: T.sub }}>{sd.h}</div>
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
              <div style={{ fontSize: 13, lineHeight: 1.6, color: T.tx, fontStyle: "italic" }}>{dayData.intro}</div>
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
                    return <div key={pi} onClick={function() { setShowImg(showImg === "pr" + pi ? null : "pr" + pi); }} style={{ background: T.sb, borderRadius: 8, padding: "8px 12px", cursor: "pointer" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: T.tx }}>{pr.t}</span>
                        <span style={{ fontSize: 11, color: T.sub }}>{showImg === "pr" + pi ? "\u25B4" : "\u25BE"}</span>
                      </div>
                      {showImg === "pr" + pi && <div style={{ fontSize: 12, lineHeight: 1.5, color: T.sub, marginTop: 6 }}>{pr.d}</div>}
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
                        <div style={{ fontSize: 11, lineHeight: 1.5, color: T.sub }}>{w.d}</div>
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
                  <div style={{ fontSize: 11, lineHeight: 1.5, color: T.sub, marginBottom: 8 }}>{db.c}</div>
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
                  <div style={{ fontSize: 11, lineHeight: 1.5, color: T.sub, marginBottom: 4 }}>{sd.h}</div>
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
