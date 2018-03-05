// @flow
import type { AbcCurrencyInfo } from 'edge-core-js'

export const litecoinInfo: AbcCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'LTC',
  currencyName: 'Litecoin',
  pluginName: 'litecoin',
  denominations: [
    { name: 'LTC', multiplier: '100000000', symbol: 'Ł' },
    { name: 'mLTC', multiplier: '100000', symbol: 'mŁ' }
  ],
  walletTypes: [
    'wallet:litecoin-bip49',
    'wallet:litecoin-bip44',
    'wallet:litecoin'
  ],

  // Configuration options:
  defaultSettings: {
    forks: [],
    network: {
      type: 'litecoin',
      magic: 0xd9b4bef9,
      keyPrefix: {
        privkey: 0x80,
        xpubkey: 0x0488b21e,
        xprivkey: 0x0488ade4,
        xpubkey58: 'xpub',
        xprivkey58: 'xprv',
        coinType: 2
      },
      addressPrefix: {
        pubkeyhash: 0x30,
        scripthash: 0x32,
        legacy: 0x05,
        witnesspubkeyhash: 0x06,
        witnessscripthash: 0x0a,
        bech32: 'lc'
      }
    },
    customFeeSettings: ['satPerByte'],
    gapLimit: 10,
    maxFee: 1000000,
    defaultFee: 50000,
    feeUpdateInterval: 60000,
    feeInfoServer: '',
    infoServer: 'https://info1.edgesecure.co:8444/v1',
    simpleFeeSettings: {
      highFee: '300',
      lowFee: '100',
      standardFeeLow: '150',
      standardFeeHigh: '200',
      standardFeeLowAmount: '20000000',
      standardFeeHighAmount: '981000000'
    },
    electrumServers: [
      'electrum://electrum-ltc.festivaldelhumor.org:60001',
      'electrum://electrum-ltc.petrkr.net:60001',
      'electrum://electrumx.nmdps.net:9433',
      'electrums://electrum-ltc.festivaldelhumor.org:60002',
      'electrums://electrum-ltc.petrkr.net:60002',
      'electrums://electrum-ltc.villocq.com:60002',
      'electrum://electrum-ltc.villocq.com:60001',
      'electrums://elec.luggs.co:444',
      'electrums://ltc01.knas.systems:50004',
      'electrum://ltc01.knas.systems:50003',
      'electrums://electrum-ltc.wilv.in:50002',
      'electrum://electrum-ltc.wilv.in:50001',
      'electrums://electrum.ltc.xurious.com:50002',
      'electrum://electrum.ltc.xurious.com:50001',
      'electrums://lith.strangled.net:50003',
      'electrums://electrum.leblancnet.us:50004',
      'electrum://electrum.leblancnet.us:50003',
      'electrums://electrum-ltc0.snel.it:50004',
      'electrum://electrum-ltc0.snel.it:50003',
      'electrums://e-2.claudioboxx.com:50004',
      'electrum://e-2.claudioboxx.com:50003',
      'electrums://e-1.claudioboxx.com:50004',
      'electrum://e-1.claudioboxx.com:50003',
      'electrum://node.ispol.sk:50003',
      'electrums://electrum-ltc.bysh.me:50002',
      'electrum://electrum-ltc.bysh.me:50001',
      'electrums://e-3.claudioboxx.com:50004',
      'electrum://e-3.claudioboxx.com:50003',
      'electrums://node.ispol.sk:50004',
      'electrums://electrumx.nmdps.net:9434'
    ]
  },
  metaTokens: [],

  // Explorers:
  addressExplorer: 'https://live.blockcypher.com/ltc/address/%s',
  blockExplorer: 'https://live.blockcypher.com/ltc/block/%s',
  transactionExplorer: 'https://live.blockcypher.com/ltc/tx/%s',

  // Images:
  symbolImage:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAQAAAAi5ZK2AAAAAXNSR0IArs4c6QAAFmhJREFUeNrtnXl0VdW9xw8kiMpoVUDUWrXqouqyxdbKc3gVa9XXvtrBqu9Z9bV2ObSvPGu7Hu2zVlsqyR3O3ufONze5yc2c3MwDYQoESMBEAsgUw6yAjEJISCCQ5H7fHwGBcDPec+7Z+9z93f+yWOueT37D/u3f/m1JEhISEhIypjAH4wz3m0ZjPL6GJ/HfeBfzIKMYB4AenEUnTqED7TiJNrShDSfRjg6cxhl0IQQAu5AHC/6Bd/A6HsPNuMpgX2Yc5kiShKsN+Ic8ChMwo+PXB907ChorViyr2r6gsxxFyEMmAvAjBT4kIQlJSEYK0pCObOSjGJVY2L6kqXbpxvI9+cfomRdxG8Ya7tsYjTcmbP1q5SNVc0u92UUpDY4We7ctRGCFBYlIQCISYYIJ5suWCSYknvs3FshQQvaQo8t9NL22IKtkXtEPF9zZPtVoNs876jE1k6tnlb7s/sC5zLPLdsIKCgICa8SLgIJA7nDsdzc5y/zvVb1Ye3/dBMSLb66jDk0JPpDyeiDLvk4+SUF7EakA+9Ilg4Cc/99PeOszU1JfWX4/rhHfP6o6PqnoO4V/cKfbPrG1yhqh7v8PgEKGvcW2IdUW/GnwRuH2NdfRCUseT0pI+oi20qjC7oteBoECa7dtl3dR2ty1D+FKwUYDnbgmOCvzA/saeqrX1qwMLPmc26dtSUuD7yyaiQmCk1qJ2tjlD2W+7zxn3Wzg7gufgsBxzLOs6LW66RgtmEXmzqfnP+cvoycV3Vz58NDLcGz1y8WzRKQf4UZs0X0ZCY5ttJt93H23ebTNtTD42vrpGCU4DqNYuPhpb5rtEAVfwC91965tgXkNdwqaQwE+peI3KTW0k6pSXtHX5gmUnanzqm8TVAcC/pXK13yNtIdP++4X/K6k95bdLuiGAz6+8pf+Opl7++4nym9LeqdKgL8EeHz5bF+l0mU84JdY/G7/ew23iuROkiRJWnmvz0VbqGGBXwAvw7Ez890902Ic+M4pGX9TPqOGieFDcfXu+uDzMVu2xdj855wNBCRGgF/k6k/7spZ+KwYdfd3d/gy5k8YY8PP7eAX2vTlvH5sYU8WX3DmOvbHj1Ptx9CHXgvLvxIi9196XVCn3kBgGfn5RKAfS5hre3nF1we8du2Pbxvtm9J4Fpd81MPKGO/1ZtFvY+GX2fij3DwY9l6t8zLmBCBsPn8+H/KnrbzFc6pbzR+U4FYAHAO/aUPwE4ozj1m9Nzpe7hI0P5ubpsZx3DOLma77nblSEWx9iw2Ugc8dNvLv10WUv2vaJ1G047RdJtfX384x8Uv5flQ6BfLhu3rFp8aOcIj8yLSNLCQm3PpKkznao4HUOL09uuzGlSGzQIsB+NiiDr1rd7qmuYgE8wugeyrFzhL1+qqNQFlYeOfbugAeTuEC+6npHtkCu0haux2/n4EBmwTRbgUCuJvbkJMaxl023CceuOnafh+GrkdVTlSIBXAPsIb8d45lEvniKPV9YuUbYu9OcDGby265zZQrkWjr5LMoY9t1TXcLKNcZOenIdDDn5I9OSgwJ5FHpou4LvMNJIiWsCueJQJTrYba1FP2QBeVy+VQkJIFGryW+v/o7u0Ev/03ZaOPZoYnfUb7hDV+TLZtv2C+TRPm/3Vm7Sb3Rh/R2uTSKa69Fd43dijC7Ij05ILmK9v9WMhIhXIovbt9MFr+vQOYu4rH+SEOvIC7An4rURFBbmIrv98KLHog69+CmlRWbezhsRubaxGtnX7bw5up3sdzqbeLi6cEAF6EsZdPC92NNyo1ihwzh/AfsJnBk+nIoYeRdyYWL0FypdBX+MXjlmLg9Wnohy9EQM/TjcMDObx9sPr4xOs/Ty79oP8bA3n48GFZz7Lmbt/FxkXxaFvpqWyb4qPi4iytilAvRapqHLIMj/o+aHMLl/JVxU2i1wo1UF6LnMOvcvXfzBFdpW41fMsh3jowZnRlbvS2sRqR0e5vbol+/ZfZUavq2Hq1PKeLljbkK1Cnb+KQjz0K2gPQWva+bii18m3bwcrySiSQXoa5HAx4Fr00ptCjXN010beDlesYDiSMTIe1DBaGHm8iw+1aLBMyIYHbDwMz7EhIAKhZkO+BhP4y5qpWqpmKXB7lw5xs/JeQLKVXDu+zmI5xdcfFKRyhNnEe9P5WlMkBn1KkBv4MTOz2HvKnpVVeglD9Dj/Ni5BQSfqQC9hOnCzOW27m5S8dwN8Ul+nuzcAjdOR4z8FFK5gi6DouBd9bZqvyCneOqEM6FQhcLMfgabJwbD7tzziTrvQ52cktTIVydcAtao4Nw/5mKP3nfrljVflTaqBXN4m/Roxk4VoFdxskfv0yD96bqvR4z8xDXJawlnyD04pkLzRApXufsF7NnzIi7Jlv2M9PD1s03IRFfE0A9zF9G/tPWduyMbLYwrXAW8OXcTFqvg3Ndxibw3rhf8JaKSbOm/kBaZu4i+WQXolRymcedzeO+Wphsi2J/7UiiHDu5oxMg7kcnVHr3vFyj/rxFDX3Ov8gV/dh5QoTBzFDZu3bsVBO4KXD3Cc7X0d/mz8wQsUqEHtpnD7drF0JWWopG1UDVex8/5+cXNExtUueBg4hh67/n6iKAXvUS6efuxFlDsjRh5COlc7tEvsfWmxuEncxjrKuXPuVvgQYcKFxxcHEf0c9h7Mn81/EOWe2xf8DduwIw8FZz7ds6B9zp496JhN1Wk/w/hcEC/CStVgL4a87mHTkAPB78xLOR7rnRW8/iglkmFo5YuFHKexp3HHvjTsKAvfJx0WDl07g4VjlpOwsF9RO+Fbq85OvRBwohzywqXdp6FsypcWTQCcitkKB35Dw0Z+vFJrnU8OvdELFQhoq/kfLt2cTIXmDfklorM++RjPE6NsmC9Cnv0oCEiei90b/WeoWbwgT9RTn/koYiht/a54GDmuCArQz664JtDLMsoC3i0czN8KkT0Ty/6/0yQkYvloBzbuv+tod1luZvHsowVJpSr0AP7ERJggQkmpGAJPkM3dnA835rCUTWkJ3v9LxMu301MUGGAWAiFmA8HitGMNi5mUQzm4O1HKmcMoXEikEY5/YGfqtA8UYRVfTKDMm57aHpfhMgevKGiZLKzkdeIHvm4kR6cMVQPjRUUmSmD1+Ieljv4jOi5KkT0y3WM8xM3AvtHzYPV5XJ+z6dzN6EGWmgv57t2GaS9YdYgLVJOP5/QzdimCfT13JdqlFDebwa5z+JYzyd0Bcc1gb6Ie+gUHu+AxdjCO2yfEy6de8ZlKZg6yuS+Ek/hWz3gs53eJ6ydfO7RF2iCnIc5coOnco7dwRsHgJ7xF17TuI80gb6f6/7386mc9VTuIwNA93FZmLHApkIPbDhtMcSJG0XRa/0i3zFWruUTug+dmkCvM0C3nBUUae/3C/3DGeQwn4WZYk2Qd6OU65suF6DTQL/QF32fnOEReqIqk93DjRpKMUi3nNLY74vMvpd4G0Bw3tI/0wT6FwbpoCGwH2y8PXw1bpTzA8JhPJ8PL05oAv0T47RItvZzoRFXeiv4mhZnghkuVGCHJkctwCqDtEjKkLuTftLPG0yeOl6gm5EAG/KwXpXXG/pTkYFaJDPCjx/aMNm5lhfofqzG5xrZ94WT9IBhmqEVZPkRHwZ62jTbNsrFD9iiUZ297zQKl4Ggp2SGhZ4509oqc+DYMxAdGeWmSy90T25Y6FUv8pC7J2JJlKA3GqIadx66rSJ4RRjoFVyMA03AlihBX2iIatz5RM66nk4OAz34NvvQLVBUuMUytBJshmEiuhUy5JZVM8PFdA6gm5GmwtssQztJtxsopltBUPfjcNk7B9ATUaLxRu3C9SZiIORWENQ8H65rhgtLXxOliP6RoezcCoLFL4SB7uYAuqzR0cqlZ2t7sNAg0yguhl4ZDrqNeegWuDSN6D04hJUIwAKTwZBbQVAcDjplHroJBSqMAA2vFmxCEBQmw9Tb+0LPCwfdwjz0BKzWAPdp7EAFPEg0oH1fHBg5hW7Gdg0aJTJghslAe/L+oGfzCN0CN75QHfoGAxVbDQjdhHR0q4w8ZKhiqyGhV2lwZu43vGMfELrMPPSNqkM/wvE8GVWyd7b36RbIOKzBRWRzzEAPu093Mg3djBQVJrn31QKD7srDQS97gbvae4IGRy2dyIgh6Atf4O6ULRGrVLfzQ7DHkHuvCQc9h2HoFlDsUB16U4xs13qhr36Ws84ZC1xoVx360piBLkM+2zA7DPTyP1CG07gc1SN6yEB97YPbubxn6VfDvZP+BmU4oq9U3c6PGawhauDGSKUmGG5GbMnT1i52oW/rc/Id+bznzZBjBroCdyHGhIGeepvM6GQpC5w48qVTbsFaFKnwiO7SGErj+r3h0nCtcyObDt6ELHQDOIWNKIEdCUiJ2NLPIiemoKcnh50lhwmeD1mFXoKDWI5kWJAIC0woj9jOT8AZM87dCoq0d8PeWsU4Xw2rqZwTBIlf5tpmFSa774qZWpwVMqzdzh/1M+ndw+xAMcslVmnBfhUGDsQSdNqa8e1+Zs4kzeGhwd8ML05GDD03pqDbjtTd1Q/08mdIF/vny4kojLgntg3eGIroBPadR6b1A73+QdrOPvQEFSa77wGJqTSOVoXdpUuSJG2eSppZd/AWyGhS4dJSQswgt4Ii2dr/iP9RnjL2b7k40RLxTZbSGIroVlAE3xxgIHA2UZhP4zIiPno5ZYCB3sPasLXnDPSgR/ZLco/MeBpXHbFz3xtDVm4FhW17cNpAT+vOVFpkxtO4rRFD/zBmjlR7oXtWYdwA0Pfd6N5JmI7oaowfKYmhqrsVBA4HRg/0WtNVrsVs98QGIr6s3I7U2ErjQqmvDPIuW8Y8ttsjSyO2889jao8ug7TW3j8I9OpnSYhlS6+PGPo6zIc5isuic0SntXuuHAT6sltsuwnDf7d7VcjdG7Euams91uh6iKvA7xn8VeUxaUF2z9rcURoopqaOQ9ENugy5J/2XQ3g/PflVVh28SYWjluhrh457BRm2I4V3DwF61bdsjA4GTojaQDE1tVrHvQKBcy0mDwE6JiqNlEnnbtHglov2KtGxFKTAb5aGpoBNYTSiH+MOeTdSdYROzi788RChF/67zOCLqyakcxjRj8OlWxpH4NzQcO0Qoa+e4mLwXN2EhRw6dz3bNSjSlAELsH1aJL0sQt/EIfQNurVryKBn8r8vDV3lz9BumbGITr685cKTqnWDTmDbfPD6YUDfOcW+mS1bN8OvwfgRrXUWebpt2BSk26XhKdPBVgafELVJ72qqXbcSrAzSUfzEMKEXfE9hqjM2EXUcOvfPdczc3auPThgmdExwLiMMRXSKnVymcfpl7slvhb29NrDy3qQMQXdzGNGBxTpFdAKyd/Xt0vD14dfszLROmZHHIfIQ8nQ6bKHw+0Zg55KEuAClzET0VRxCP6nT5FkZtCNntjQyVTysnJYZgb6dQ+gHYdMlplM41xybOELoGOdl4sa6GU4Vxo1EX806OXcSyvm9NHKVv8pCZc6ELBUGC0VfdbpU4wgcGxpviAB623Xu9YQB6AvAo0p0yd1pKC0SO5ckjMr9HWFgw7aeQ+TdSNYhohMoW+umS5Fp5xTnOr3juhylR3XVlT7DCUnIN1eKXFlvEF0vNZqRjE4u0zhZh7ydNlfdpAL0A9c51hJdt2uVHHbMALU6RHSCpP8dUVEmzOHLb0m3nudra7lM48qjnrsTKE0rb5bU0Y7rvfVEtySOYA+HyDuRGWVLlyEj8CdJPRW/Qnv0iuhJKgwQi75OwBXlEiyB/ZP6m1SEjvHeJVSnPXomOnCKu7Ur6lV3GspRK56fV9mjVKcZFXakws/ZSo36VBuKpLV7pknqCmN8PqpTVDdzuaKcxHWVPi+pr4b77Adj5b1C3hZBcjGu0gA6RuXPo+IDM4ncdnz5Q5I2OnqDd53Azt6iyDIP+SbL8LX4adomXDxryL0NR6ZJ2glj0rzC1llaMmhbxb9J2mrzze5GIj42Q3YeoP1OeFZPpT+lp4SLZwW5c1PzdEl7IS7LJlw8G1m70lbxUyk6OnqD7yOBXf9oLvdkv6th1t5Xyx93fCFcvL5LgbeiZbIUPSG+YK5I53QuyDQvv0uKrnBVapEiPr5uyEl7yc+l6GvH7e56Ye06Ze2hwN/DPqOpveq+bf9UYNfDzr1FA47t11aF/2HrEAld1PfmDfV3SPoJcXl/I90Ce1Sbog6UPyjpK4z3u1h/7MdIe3Nbe9Grkv7CRHe2iOzRsXK5M3curpBY0Oop7hpRodPeyq1nAu9grMSKVs107RbWrjV0nx1XSuwIo5Y/4/xcYNey6JpcWj9RYksYtewXyhGBXattWsrmj++U2BNGVz2vHBbYtUjg/M1Nj0psCqMrnrcdFNjVRp6yfesjErvCqAph7Soj9+3e+rjEtjC68gWHsHb1YnkT88h7rb36eYdI6dToc4VvxcaZEh/C6JpnPftEuSbCUkx3svuTayWetGKW50Nh7RH0v53x/4OpUszQVH+TN18OiaOYETn2zqx/anIhUXu1TE51yxDYh5u82VoK3uIUuSRJEiZlUeWscPPDOi9vLvqhyhMloo59bPEbYgs39Hzdu2TVNyQjaMUsdy0Vbn7wDteuNOfmqZJR1Dzd75HPCHsfKJIrB4JvIl4yknBF1u9sh0SnfHi3TuCuXfgw55E8vCoedq8Q2Xw4t+5PjWhCO9va95WUv5NW4eYvTt0cn+W/wWEZZniV+bKn3B8rwt57Gx17UoKN90qxoA1fS3XTEyTmkTv2Ff0WV0uxIowpeNxZQ2LW3glIT2rR6m9KsaYD16UnKkdjb/8ug8K1qfRXMWTjl9h7XPUsfyE9RWJqc2b7ItPy6Q1SLAtXlTztWUJAYsLCyYm0QN23DbkfHzb4CXlvu3YbOcLLoKCtnpyyx6Iw/osffXxnvtW534gRXgaF3ObKCc5m6EoSO9pyX4bddYDCODYvg4K0uoKZTxisqq6qo49vvDd3vrOZdPNv8zIISJsrPzibkXumrJ/JZT7nWSCfptymdwQK6Al/VukjAviwsvqyH7uz7QdlUP4iONx7A0mr/lUkbSOq2xXPSP8/+1raxYOzl0FBQTu9K/PnrPm6TrOfjHMyF3zWl28/zG6CJ4NAgfW0a2MSXf4kxgtm6tj82Mp7Sv/sXu5oIWAr0lNQ0A5lvc9S8IOGa0XZRX3042rvz3wzLY82yT29di/rZtu91i2fdTakmdO+t+8rgo7Gkb56atnPnNTVaDtihRJVpy9DBoUCOeQ86Pow8M/FT9dMjuIcZiFck3dP+itpXlpP2miIQruYL4Og9/+nZ8hh57Ise/YLlTMwSTDQTYfGrXkg69cuj6/OuVPuoOfw9Dp/ecT2LIOcQ01h6SL73A3uXOdbxT9aN0NsxNix+9EYXza96KGK3+S+50pT1jr22Q/RFvksgXLJutwb9EbnC4vC2kNalcOOz+1baDD5g8LfFT6ZcsuOiQI2638CEw/cUndX3kzXU2l/zvFmBvzp3nRHpi3XusjSTE7RL22YgEI+ad1Eqmy57gxfelogOzljnuPnngcqZzTf2iaycW7/AOIRj3jEYTTi3r+ybGrjw5t+8vFz59emZ+ofTL/WPhZxiEMc4hEvQAsZ0g6uFt8g5nhjjo7j4oWiXt7CHPEVhISEhAyp/wc1afNcDgilOwAAAABJRU5ErkJggg==',
  symbolImageDarkMono:
    'data:image/png;base64,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'
}
