import { makeCurrencyPluginFactory } from './plugin/currencyPlugin.js'

import { bitcoin } from './info/bitcoin'
import { bitcoinTestnet } from './info/bitcointestnet'
import { bitcoincash } from './info/bitcoincash'
import { bitcoincashTestnet } from './info/bitcoincashtestnet'
import { bitcoingold } from './info/bitcoingold'
import { bitcoingoldTestnet } from './info/bitcoingoldtestnet'
import { litecoin } from './info/litecoin'
import { dash } from './info/dash'
import { feathercoin } from './info/feathercoin'
import { qtum } from './info/qtum'
import { ufo } from './info/ufo'
import { zcoin } from './info/zcoin'

export const bitcoinCurrencyPluginFactory = makeCurrencyPluginFactory(bitcoin)
export const bitcoinTestnetCurrencyPluginFactory = makeCurrencyPluginFactory(bitcoinTestnet)
export const bitcoincashCurrencyPluginFactory = makeCurrencyPluginFactory(bitcoincash)
export const bitcoincashTestnetCurrencyPluginFactory = makeCurrencyPluginFactory(bitcoincashTestnet)
export const bitcoingoldCurrencyPluginFactory = makeCurrencyPluginFactory(bitcoingold)
export const bitcoingoldTestnetCurrencyPluginFactory = makeCurrencyPluginFactory(bitcoingoldTestnet)
export const litecoinCurrencyPluginFactory = makeCurrencyPluginFactory(litecoin)
export const dashCurrencyPluginFactory = makeCurrencyPluginFactory(dash)
export const feathercoinCurrencyPluginFactory = makeCurrencyPluginFactory(feathercoin)
export const qtumCurrencyPluginFactory = makeCurrencyPluginFactory(qtum)
export const ufoCurrencyPluginFactory = makeCurrencyPluginFactory(ufo)
export const zcoinCurrencyPluginFactory = makeCurrencyPluginFactory(zcoin)
