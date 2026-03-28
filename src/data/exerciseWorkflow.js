import rawExerciseGuidePatches from "./exerciseGuidePatches.json";
import rawExerciseGuidePatchesGobletBird from "./exerciseGuidePatchesGobletBird.json";

export var EXERCISE_CARD_STATUS = {
  TODO: "da_creare",
  DRAFT: "bozza",
  READY: "pronta",
};

export var EXERCISE_PHOTO_STATUS = {
  MISSING: "mancante",
  PARTIAL: "parziale",
  READY: "pronta",
};

export var EXERCISE_VIDEO_STATUS = {
  MISSING: "mancante",
  LINKED: "linkato",
  VERIFIED: "verificato",
};

export var EXERCISE_PATTERN_LABELS = {
  squat: "Squat",
  hinge: "Hinge",
  spinta: "Spinta",
  tirata: "Tirata",
  core: "Core",
  affondo_unilaterale: "Affondo / unilaterale",
};

export var EXERCISE_GEAR_LABELS = {
  all: "Tutti",
  trx: "TRX",
  cavi: "Cavi",
  fitball: "Fitball",
  manubri: "Manubri",
  bilanciere: "Bilanciere",
  sbarra: "Sbarra",
  elastico: "Elastico",
  panca: "Panca",
  panca_romana: "Panca romana",
  corpo_libero: "Corpo libero",
};

export function slugifyExerciseName(name) {
  return String(name || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function blankCues() {
  return {
    mani: "",
    piedi: "",
    gomiti: "",
    bacino: "",
    colonna: "",
    scapole: "",
  };
}

function listToText(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join("\n");
  return value || "";
}

function normalizeGuidePatch(input) {
  return {
    name: input.name,
    obiettivo: input.obiettivo || "",
    setup: listToText(input.setup),
    esecuzione: listToText(input.esecuzione),
    cueTecnici: {
      mani: input.cue_tecnici && input.cue_tecnici.mani || "",
      piedi: input.cue_tecnici && input.cue_tecnici.piedi || "",
      gomiti: input.cue_tecnici && input.cue_tecnici.gomiti || "",
      bacino: input.cue_tecnici && input.cue_tecnici.bacino || "",
      colonna: input.cue_tecnici && input.cue_tecnici.colonna || "",
      scapole: input.cue_tecnici && input.cue_tecnici.scapole || "",
    },
    erroriComuni: Array.isArray(input.errori_comuni) ? input.errori_comuni.filter(Boolean) : [],
    regressione: input.regressione || "",
    alternativa: input.alternativa || "",
    progressione: input.progressione || "",
    competenzePreliminari: Array.isArray(input.competenze_preliminari_collegate) ? input.competenze_preliminari_collegate.filter(Boolean) : [],
    note: input.note || "",
    statoSchedaConsigliato: input.stato_scheda_consigliato || "",
  };
}

var ALL_EXERCISE_GUIDE_PATCHES = rawExerciseGuidePatches.concat(rawExerciseGuidePatchesGobletBird);

var GUIDE_PATCH_BY_NAME = ALL_EXERCISE_GUIDE_PATCHES.reduce(function(acc, patch) {
  if (!patch || !patch.name) return acc;
  acc[patch.name] = normalizeGuidePatch(patch);
  return acc;
}, {});

function seedExercise(input) {
  return {
    name: input.name,
    slug: input.slug || slugifyExerciseName(input.name),
    attrezzi: input.attrezzi || [],
    pattern: input.pattern || "",
    obiettivo: "",
    setup: "",
    esecuzione: "",
    cueTecnici: blankCues(),
    erroriComuni: [],
    regressione: "",
    alternativa: "",
    progressione: "",
    competenzePreliminari: input.competenzePreliminari || [],
    fotoSetup: "",
    fotoFinale: "",
    fotoIntermedia: "",
    videoUrl: input.videoUrl || "",
    priorita: input.priorita,
    statoScheda: input.statoScheda || EXERCISE_CARD_STATUS.TODO,
    statoFoto: input.statoFoto || EXERCISE_PHOTO_STATUS.MISSING,
    statoVideo: input.statoVideo || EXERCISE_VIDEO_STATUS.MISSING,
    note: input.note || "",
    seedGroup: "new_priority",
  };
}

function mergeSeedWithGuidePatch(seed) {
  var patch = GUIDE_PATCH_BY_NAME[seed.name];
  if (!patch) return seed;
  var nextStatus = patch.statoSchedaConsigliato === "pronta"
    ? EXERCISE_CARD_STATUS.READY
    : patch.statoSchedaConsigliato === "bozza"
      ? EXERCISE_CARD_STATUS.DRAFT
      : seed.statoScheda;
  return Object.assign({}, seed, {
    obiettivo: patch.obiettivo || seed.obiettivo,
    setup: patch.setup || seed.setup,
    esecuzione: patch.esecuzione || seed.esecuzione,
    cueTecnici: Object.assign({}, seed.cueTecnici || blankCues(), patch.cueTecnici || {}),
    erroriComuni: patch.erroriComuni && patch.erroriComuni.length ? patch.erroriComuni : seed.erroriComuni,
    regressione: patch.regressione || seed.regressione,
    alternativa: patch.alternativa || seed.alternativa,
    progressione: patch.progressione || seed.progressione,
    competenzePreliminari: patch.competenzePreliminari && patch.competenzePreliminari.length ? patch.competenzePreliminari : seed.competenzePreliminari,
    note: patch.note || seed.note,
    statoScheda: nextStatus || EXERCISE_CARD_STATUS.DRAFT,
  });
}

export var NEW_EXERCISE_WORKFLOW_SEED = [
  seedExercise({ name: "Push-Up su rialzo", attrezzi: ["corpo_libero"], pattern: "spinta", priorita: 1 }),
  seedExercise({ name: "Goblet Squat", attrezzi: ["manubri"], pattern: "squat", priorita: 2, statoScheda: EXERCISE_CARD_STATUS.DRAFT, statoFoto: EXERCISE_PHOTO_STATUS.READY, statoVideo: EXERCISE_VIDEO_STATUS.LINKED }),
  seedExercise({ name: "TRX Row", attrezzi: ["trx"], pattern: "tirata", priorita: 3 }),
  seedExercise({ name: "Cable Chest Press", attrezzi: ["cavi"], pattern: "spinta", priorita: 4 }),
  seedExercise({ name: "Glute Bridge su Fitball", attrezzi: ["fitball"], pattern: "hinge", priorita: 5 }),
  seedExercise({ name: "Bird Dog", attrezzi: ["corpo_libero"], pattern: "core", priorita: 6, statoScheda: EXERCISE_CARD_STATUS.DRAFT, statoFoto: EXERCISE_PHOTO_STATUS.READY }),
  seedExercise({ name: "TRX Squat", attrezzi: ["trx"], pattern: "squat", priorita: 7 }),
  seedExercise({ name: "TRX Reverse Lunge", attrezzi: ["trx"], pattern: "affondo_unilaterale", priorita: 8 }),
  seedExercise({ name: "Cable Pull-Through", attrezzi: ["cavi"], pattern: "hinge", priorita: 9 }),
  seedExercise({ name: "TRX Hip Hinge Assistito", attrezzi: ["trx"], pattern: "hinge", priorita: 10 }),
  seedExercise({ name: "TRX Chest Press", attrezzi: ["trx"], pattern: "spinta", priorita: 11 }),
  seedExercise({ name: "Press Manubri da Seduta", attrezzi: ["manubri"], pattern: "spinta", priorita: 12 }),
  seedExercise({ name: "Half-Kneeling Single Arm Cable Press", attrezzi: ["cavi"], pattern: "spinta", priorita: 13 }),
  seedExercise({ name: "Trazioni Facilitate con Elastico", attrezzi: ["elastico", "corpo_libero"], pattern: "tirata", priorita: 14 }),
  seedExercise({ name: "TRX High Row", attrezzi: ["trx"], pattern: "tirata", priorita: 15 }),
  seedExercise({ name: "Split Squat al Cavo", attrezzi: ["cavi"], pattern: "affondo_unilaterale", priorita: 16 }),
  seedExercise({ name: "One Arm Cable Row", attrezzi: ["cavi"], pattern: "tirata", priorita: 17 }),
  seedExercise({ name: "Rematore Elastico", attrezzi: ["elastico"], pattern: "tirata", priorita: 18 }),
  seedExercise({ name: "TRX Hamstring Curl", attrezzi: ["trx"], pattern: "hinge", priorita: 19 }),
  seedExercise({ name: "Hip Thrust al Cavo", attrezzi: ["cavi"], pattern: "hinge", priorita: 20 }),
  seedExercise({ name: "TRX Split Squat", attrezzi: ["trx"], pattern: "affondo_unilaterale", priorita: 21 }),
].map(mergeSeedWithGuidePatch);

export var EXISTING_COVERED_EXERCISES = [
  "Squat",
  "Floor Press Manubri",
  "Rematore Manubri",
  "Fitball Hamstring Curl",
  "Plank",
  "Stacco Rumeno",
  "Military Press",
  "Lat Machine",
  "Affondi",
  "Squat Bulgaro",
  "Pulley",
  "Hip Thrust Bilanciere",
  "Dead Bug",
];
