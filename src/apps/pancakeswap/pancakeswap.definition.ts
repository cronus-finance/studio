import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { GroupType, AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const PANCAKESWAP_DEFINITION = appDefinition({
  id: 'pancakeswap',
  name: 'PancakeSwap',
  description: `PancakeSwap is the leading decentralized exchange on Binance Smart Chain, with the highest trading volumes in the market`,
  url: 'https://pancakeswap.finance/',
  tags: [AppTag.LIQUIDITY_POOL, AppTag.LOTTERY],
  links: {
    twitter: 'https://twitter.com/pancakeswap',
    discord: 'https://discord.gg/pancakeswap',
    telegram: 'https://t.me/pancakeswap',
    medium: 'https://pancakeswap.medium.com/',
  },
  groups: {
    pool: { id: 'pool', type: GroupType.TOKEN, label: 'Pools' },
    farmV2: { id: 'farm-v2', type: GroupType.POSITION, label: 'Farms' },
    syrupStaking: { id: 'syrup-staking', type: GroupType.POSITION, label: 'Syrup Pools' },
    syrupCake: { id: 'syrup-cake', type: GroupType.POSITION, label: 'Syrup Pools' },
    autoCake: { id: 'auto-cake', type: GroupType.POSITION, label: 'Auto CAKE', isHiddenFromExplore: true }, // This is the old staking cake staking contract, and the rewards are being counted towards the TVL
    ifoCake: { id: 'ifo-cake', type: GroupType.POSITION, label: 'IFO Cake', isHiddenFromExplore: true },
    farm: { id: 'farm', type: GroupType.POSITION, label: 'Legacy Farms', isHiddenFromExplore: true },
  },
  supportedNetworks: { [Network.BINANCE_SMART_CHAIN_MAINNET]: [AppAction.VIEW] },
  primaryColor: '#1fc8d4',
  token: {
    address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    network: Network.ETHEREUM_MAINNET,
  },
});

@Register.AppDefinition(PANCAKESWAP_DEFINITION.id)
export class PancakeswapAppDefinition extends AppDefinition {
  constructor() {
    super(PANCAKESWAP_DEFINITION);
  }
}
