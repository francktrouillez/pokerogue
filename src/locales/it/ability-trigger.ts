import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  blockRecoilDamage: "{{abilityName}} di {{pokemonName}}\nl'ha protetto dal contraccolpo!",
  badDreams: "{{pokemonName}} è tormentato!",
  windPowerCharged: "Being hit by {{moveName}} charged {{pokemonName}} with power!",
  perishBody: "{{pokemonName}}{{abilityName}}\nsverrà entrambi i pokemon in 3 turni!",
  poisonHeal: "{{pokemonName}}'{{abilityName}}\nha ripristinato un po' i suoi HP!"
} as const;
