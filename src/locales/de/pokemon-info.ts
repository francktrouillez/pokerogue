import { PokemonInfoTranslationEntries } from "#app/plugins/i18n";

export const pokemonInfo: PokemonInfoTranslationEntries = {
  Stat: {
    HP: "KP",
    HPshortened: "KP",
    ATK: "Angriff",
    ATKshortened: "Ang",
    DEF: "Verteidigung",
    DEFshortened: "Vert",
    SPATK: "Sp. Ang",
    SPATKshortened: "SpAng",
    SPDEF: "Sp. Vert",
    SPDEFshortened: "SpVert",
    SPD: "Initiative",
    SPDshortened: "Init"
  },
  Type: {
    UNKNOWN: "Unbekannt",
    NORMAL: "Normal",
    FIGHTING: "Kampf",
    FLYING: "Flug",
    POISON: "Gift",
    GROUND: "Boden",
    ROCK: "Gestein",
    BUG: "Käfer",
    GHOST: "Geist",
    STEEL: "Stahl",
    FIRE: "Feuer",
    WATER: "Wasser",
    GRASS: "Pflanze",
    ELECTRIC: "Elektro",
    PSYCHIC: "Psycho",
    ICE: "Eis",
    DRAGON: "Drache",
    DARK: "Unlicht",
    FAIRY: "Fee",
    STELLAR: "Stellar"
  }
} as const;
