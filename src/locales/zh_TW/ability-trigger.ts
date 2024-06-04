import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  blockRecoilDamage: "{{pokemonName}} 的 {{abilityName}}\n抵消了反作用力!",
  badDreams: "{{pokemonName}} 被折磨着!",
  windPowerCharged: "Being hit by {{moveName}} charged {{pokemonName}} with power!",
  perishBody: "{{pokemonName}}的 {{abilityName}\n会在 3 个回合内同时晕倒两只小精灵！",
  poisonHeal: "{{pokemonName}}的 {{abilityName}\n恢复了一点 HP！"
} as const;
