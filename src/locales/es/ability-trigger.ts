import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  blockRecoilDamage: "¡{{abilityName}} de {{pokemonName}}\nlo protegió del daño de retroceso!",
  badDreams: "¡{{pokemonName}} está atormentado!",
  windPowerCharged: "¡{{pokemonName}} se ha cargado de electricidad gracias a {{moveName}}!",
  perishBody: "{{pokemonName}}de {{abilityName}}\n¡desmayará a ambos pokémon en 3 turnos!",
  poisonHeal: "{{pokemonName}}de {{abilityName}}\nha restaurado un poco su HP."
} as const;
