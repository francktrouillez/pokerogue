import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const abilityTriggers: SimpleTranslationEntries = {
  blockRecoilDamage: "{{pokemonName}}[[는]] {{abilityName}} 때문에\n반동 데미지를 받지 않는다!",
  badDreams: "{{pokemonName}}[[는]]\n나이트메어 때문에 시달리고 있다!",
  windPowerCharged: "{{moveName}} 에 맞으면 {{pokemonName}}에 힘이 충전됩니다!",
  perishBody: "{{pokemonName}}의 {{능력명}}\n은 3턴 안에 두 포켓몬을 모두 기절시킵니다!",
  poisonHeal: "{{pokemonName}}의 {{능력명}}\n의 HP가 조금 회복되었습니다!"
} as const;
