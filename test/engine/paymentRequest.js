/**
 * Created by Paul Puey on 2017/11/09
 * @flow
 */

import { assert } from 'chai'
import { describe, it } from 'mocha'
import { parsePayment } from '../../src/engine/paymentRequest.js'

const validRequests = [
  // [
  //   '3c21444f43545950452068746d6c3e0a3c68746d6c3e0a20203c686561643e0a202020203c6261736520687265663d222f696e766f6963652f223e0a202020203c6d65746120636861727365743d227574662d38222f3e0a202020203c6d657461206e616d653d2276696577706f72742220636f6e74656e743d2277696474683d6465766963652d77696474682c20696e697469616c2d7363616c653d312c206d6178696d756d2d7363616c653d31223e0a202020203c6d657461206e616d653d2272656665727265722220636f6e74656e743d226f726967696e223e0a202020203c6d657461206e616d653d22726f626f74732220636f6e74656e743d226e6f696e646578223e0a202020203c7469746c653e42697450617920496e766f6963653c2f7469746c653e0a202020203c6c696e6b20687265663d2768747470733a2f2f666f6e74732e676f6f676c65617069732e636f6d2f6373733f66616d696c793d526f626f746f3a3430302c3530302c3730302c3430306974616c69637c526f626f746f2b4d6f6e6f272072656c3d277374796c657368656574270a20202020202020202020747970653d27746578742f637373272f3e0a202020203c736372697074207372633d226173736574732f696e746c2f496e746c2e6d696e2e6a732220747970653d22746578742f6a617661736372697074222064656665723e3c2f7363726970743e0a202020203c736372697074207372633d226173736574732f696e746c2f6c6f63616c652d646174612f6a736f6e702f656e2e6a732220747970653d22746578742f6a617661736372697074222064656665723e3c2f7363726970743e0a20203c736372697074207372633d22706f6c7966696c6c732e37326562623661396562616531666235353033302e62756e646c652e6a732220747970653d22746578742f6a617661736372697074222064656665723e3c2f7363726970743e3c736372697074207372633d2276656e646f722e32643561626438653636633436353938656665322e62756e646c652e6a732220747970653d22746578742f6a617661736372697074222064656665723e3c2f7363726970743e3c736372697074207372633d226d61696e2d656e2d55532e65356535313430346139343634646338663831322e62756e646c652e6a73222064656665723e3c2f7363726970743e3c2f686561643e0a20203c626f6479207374796c653d226261636b67726f756e643a207472616e73706172656e743b223e0a202020203c6e6f7363726970743e0a2020202020203c63656e746572207374796c653d2270616464696e673a2032656d223e0a20202020202020203c68323e4a6176617363726970742069732063757272656e746c792064697361626c656420696e20796f75722062726f777365722e3c2f68323e0a20202020202020203c68353e506c6561736520656e61626c65204a6176617363726970742066726f6d202768747470733a2f2f6269747061792e636f6d2f2720616e6420726566726573682074686973207061676520666f7220746865206265737420657870657269656e63652e3c2f68353e0a0a20202020202020203c703e416c7465726e61746976656c792c20636c69636b2062656c6f7720746f20636f6e74696e756520746f206f75722048544d4c2d6f6e6c7920696e766f6963652e3c2f703e0a0a20202020202020203c666f726d20616374696f6e3d222f696e766f6963652d6e6f73637269707422206d6574686f643d22474554223e0a202020202020202020203c627574746f6e207374796c653d22746578742d6465636f726174696f6e3a20756e6465726c696e653b20636f6c6f723a20626c7565223e436f6e74696e756520746f206a6176617363726970742d64697361626c656420696e766f696365202667743b3c2f627574746f6e3e0a20202020202020203c2f666f726d3e0a2020202020203c2f63656e7465723e0a202020203c2f6e6f7363726970743e0a0a202020203c212d2d5b6966206c746520494520385d3e0a202020203c63656e746572207374796c653d2270616464696e673a2032656d223e0a2020202020203c666f726d20616374696f6e3d222f696e766f6963652d6e6f73637269707422206d6574686f643d22474554223e0a20202020202020203c627574746f6e207374796c653d22746578742d6465636f726174696f6e3a20756e6465726c696e653b20636f6c6f723a20626c7565223e436f6e74696e756520746f206c65676163792062726f7773657220636f6d70617469626c6520696e766f69636520706167650a20202020202020203c2f627574746f6e3e0a2020202020203c2f666f726d3e0a202020203c2f63656e7465723e0a202020203c215b656e6469665d2d2d3e0a0a202020203c6170703e3c2f6170703e0a0a202020200a20203c2f626f64793e0a3c2f68746d6c3e0a',
  //   { nativeAmount: '100000',
  //     merchant: '',
  //     memo: 'merchant server says hello',
  //     domain: 'localhost',
  //     spendTargets: [
  //       {
  //         currencyCode: 'BTC',
  //         publicAddress: 'msZM3qM39xSw31mmA7d9z32vfEkPrE3Fc8',
  //         nativeAmount: '100000'
  //       }
  //     ]
  //   }
  // ],
  [
    '080112046e6f6e651a00226a0a046d61696e121f08a08d06121976a9148415560b205ed9b2be9bc450ed9c3acb86437a0d88ac18db94cbd90520ebb0cbd9052a1a6d65726368616e742073657276657220736179732068656c6c6f3219687474703a2f2f6c6f63616c686f73743a343536372f61636b2a8002739f74547c06ef32e8754de4bb7d22a4a6e899ef999ecd15f3fd8b77331de367a0b4d49f929058f4dc6f8acaac36d16147edd71dafed352877500c9e4c699b30a1ae8f5f307e2f1e8b30120c2f7861031dd3682922848f9b3a9fdf64a6852dd92a719617ef7d44bed84069d3155b6b72a8b8b2ff8cc7195174b5a3a4416aeb8d6f50dd50dc9113ecc03bc4a6f750cd06a9d80613b2a35770116715b96b0b22dad48ecfc9d5e1f0f9ee09ab55210bde27b0399356e737bf2bcec1ea5d0d7651e2d61d664478d4e9936ff44374a30e77280fb8e95cb67e93aca72186ad2a530bc323e857bb442acf769286692e8b72367efd5982c90c64afc6227832b2537cd971',
    {
      nativeAmount: '100000',
      merchant: '',
      memo: 'merchant server says hello',
      domain: 'localhost',
      spendTargets: [
        {
          currencyCode: 'BTC',
          publicAddress: 'msZM3qM39xSw31mmA7d9z32vfEkPrE3Fc8',
          nativeAmount: '100000'
        }
      ]
    }
  ],
  [
    '0801120b783530392b7368613235361a89250aa40a3082052030820408a003020102020727a49d05046d62300d06092a864886f70d01010b05003081b4310b30090603550406130255533110300e060355040813074172697a6f6e61311330110603550407130a53636f74747364616c65311a3018060355040a1311476f44616464792e636f6d2c20496e632e312d302b060355040b1324687474703a2f2f63657274732e676f64616464792e636f6d2f7265706f7369746f72792f313330310603550403132a476f2044616464792053656375726520436572746966696361746520417574686f72697479202d204732301e170d3134303432363132333532365a170d3136303432363132333532365a303a3121301f060355040b1318446f6d61696e20436f6e74726f6c2056616c6964617465643115301306035504030c0c2a2e6269747061792e636f6d30820122300d06092a864886f70d01010105000382010f003082010a0282010100e2a5dd4aea959c1d0fb016e6e05bb7011e741cdc61918c61f9625a2f682f485f0e862ea63db61cc9161753127504de800604df36b10f46cb17ab6cb99dba8aa45a36adfb901a2fc380c89e234bce18de6639b883e9339801673efaee1f2df77eeb82f7c39c96a2f8ef4572b634c203d9be8fd1e0036d32fb38b6b9b5ecd5a0684345c7e9ffc5d26bc6fd69aa6619f77badaa4bfb989478fb2f41aa92782e40b34ba9ac4549a4e6fda76b5fc4a581853bd0de5fb5a2c6dfdc12cdfadb54e9636a6d1223705924b8be566b81ac7921078cf590a146ae397a84908ef4fc83ff5715a44ab59e9258674d90113bb607b8d81eb268e4c6ce849497c76521795b0873950203010001a38201ae308201aa300f0603551d130101ff04053003010100301d0603551d250416301406082b0601050507030106082b06010505070302300e0603551d0f0101ff0404030205a030360603551d1f042f302d302ba029a0278625687474703a2f2f63726c2e676f64616464792e636f6d2f676469673273312d34392e63726c30530603551d20044c304a3048060b6086480186fd6d010717013039303706082b06010505070201162b687474703a2f2f6365727469666963617465732e676f64616464792e636f6d2f7265706f7369746f72792f307606082b06010505070101046a3068302406082b060105050730018618687474703a2f2f6f6373702e676f64616464792e636f6d2f304006082b060105050730028634687474703a2f2f6365727469666963617465732e676f64616464792e636f6d2f7265706f7369746f72792f67646967322e637274301f0603551d2304183016801440c2bd278ecc348330a233d7fb6cb3f0b42c80ce30230603551d11041c301a820c2a2e6269747061792e636f6d820a6269747061792e636f6d301d0603551d0e0416041485454e3b4072e2f58e377438988b5229387e967a300d06092a864886f70d01010b050003820101002d0a7ef97f988905ebbbad4e9ffb690352535211d6792516119838b55f24ff9fa4e93b6187b8517cbb0477457d3378078ef66057abe41bcafeb142ec52443a94b88114fa069f725c6198581d97af16352727f4f35e7f2110faa41a0511bcfdf8e3f4a3a310278c150b10f32a962c81e8f3d5374d9cb56d893027ff4fa4e3c3e6384c1f1557ceea6fca9cbc0c110748c08b82d8f0ed9a579637ee43a2d8fec3b5b04d1f3c8f1a3e2088da2274b6bc60948bbe744a7f8b942b41f0ae9b4afaeefbb7e0f04a0587b52efb6ebfa2d970b9de56a068575e4bf0cf824618dc17bbeaa2cdd25d65970a9f1a06fc9fffb466a10c9568cd651795bc2c7996975027bdbaba0ad409308204d0308203b8a003020102020107300d06092a864886f70d01010b0500308183310b30090603550406130255533110300e060355040813074172697a6f6e61311330110603550407130a53636f74747364616c65311a3018060355040a1311476f44616464792e636f6d2c20496e632e3131302f06035504031328476f20446164647920526f6f7420436572746966696361746520417574686f72697479202d204732301e170d3131303530333037303030305a170d3331303530333037303030305a3081b4310b30090603550406130255533110300e060355040813074172697a6f6e61311330110603550407130a53636f74747364616c65311a3018060355040a1311476f44616464792e636f6d2c20496e632e312d302b060355040b1324687474703a2f2f63657274732e676f64616464792e636f6d2f7265706f7369746f72792f313330310603550403132a476f2044616464792053656375726520436572746966696361746520417574686f72697479202d20473230820122300d06092a864886f70d01010105000382010f003082010a0282010100b9e0cb10d4af76bdd49362eb3064b881086cc304d962178e2fff3e65cf8fce62e63c521cda16454b55ab786b63836290ce0f696c99c81a148b4ccc4533ea88dc9ea3af2bfe80619d7957c4cf2ef43f303c5d47fc9a16bcc3379641518e114b54f828bed08cbef030381ef3b026f86647636dde7126478f384753d1461db4e3dc00ea45acbdbc71d9aa6f00dbdbcd303a794f5f4c47f81def5bc2c49d603bb1b24391d8a4334eeab3d6274fad258aa5c6f4d5d0a6ae7405645788b54455d42d2a3a3ef8b8bde9320a029464c4163a50f14aaee77933af0c20077fe8df0439c269026c6352fa77c11bc87487c8b993185054354b694ebc3bd3492e1fdcc1d252fb0203010001a382011a30820116300f0603551d130101ff040530030101ff300e0603551d0f0101ff040403020106301d0603551d0e0416041440c2bd278ecc348330a233d7fb6cb3f0b42c80ce301f0603551d230418301680143a9a8507106728b6eff6bd05416e20c194da0fde303406082b0601050507010104283026302406082b060105050730018618687474703a2f2f6f6373702e676f64616464792e636f6d2f30350603551d1f042e302c302aa028a0268624687474703a2f2f63726c2e676f64616464792e636f6d2f6764726f6f742d67322e63726c30460603551d20043f303d303b0604551d20003033303106082b06010505070201162568747470733a2f2f63657274732e676f64616464792e636f6d2f7265706f7369746f72792f300d06092a864886f70d01010b05000382010100087e6c9310c838b896a9904bffa15f4f04ef6c3e9c8806c9508fa673f757311bbebce42fdbf8bad35be0b4e7e679620e0ca2d76a637331b5f5a848a43b082da25d90d7b47c254f115630c4b6449d7b2c9de55ee6ef0c61aabfe42a1bee849eb8837dc143ce44a713700d911ff4c813ad8360d9d872a873241eb5ac220eca17896258441bab892501000fcdc41b62db51b4d30f512a9bf4bc73fc76ce36a4cdd9d82ceaae9bf52ab290d14d75188a3f8a4190237d5b4bfea403589b46b2c3606083f87d5041cec2a190c3bbef022fd21554ee4415d90aaea78a33edb12d763626dc04eb9ff7611f15dc876fee469628ada1267d0a09a72e04a38dbcf8bc0430010a81093082047d30820365a00302010202031be715300d06092a864886f70d01010b05003063310b30090603550406130255533121301f060355040a131854686520476f2044616464792047726f75702c20496e632e3131302f060355040b1328476f20446164647920436c61737320322043657274696669636174696f6e20417574686f72697479301e170d3134303130313037303030305a170d3331303533303037303030305a308183310b30090603550406130255533110300e060355040813074172697a6f6e61311330110603550407130a53636f74747364616c65311a3018060355040a1311476f44616464792e636f6d2c20496e632e3131302f06035504031328476f20446164647920526f6f7420436572746966696361746520417574686f72697479202d20473230820122300d06092a864886f70d01010105000382010f003082010a0282010100bf716208f1fa5934f71bc918a3f7804958e9228313a6c52043013b84f1e685499f27eaf6841b4ea0b4db7098c73201b1053e074eeef4fa4f2f593022e7ab19566be28007fcf316758039517be5f935b6744ea98d8213e4b63fa90383faa2be8a156a7fde0bc3b6191405caeac3a804943b467c320df3006622c88d696d368c1118b7d3b21c60b438fa028cced3dd4607de0a3eeb5d7cc87cfbb02b53a4926269512505611a44818c2ca9439623dfac3a819a0e29c51ca9e95d1eb69e9e300a39cef18880fb4b5dcc32ec85624325340256270191b43b702a3f6eb1e89c88017d9fd4f9db536d609dbf2ce758abb85f46fccec41b033c09eb49315c6946b3e0470203010001a382011730820113300f0603551d130101ff040530030101ff300e0603551d0f0101ff040403020106301d0603551d0e041604143a9a8507106728b6eff6bd05416e20c194da0fde301f0603551d23041830168014d2c4b0d291d44c1171b361cb3da1fedda86ad4e3303406082b0601050507010104283026302406082b060105050730018618687474703a2f2f6f6373702e676f64616464792e636f6d2f30320603551d1f042b30293027a025a0238621687474703a2f2f63726c2e676f64616464792e636f6d2f6764726f6f742e63726c30460603551d20043f303d303b0604551d20003033303106082b06010505070201162568747470733a2f2f63657274732e676f64616464792e636f6d2f7265706f7369746f72792f300d06092a864886f70d01010b05000382010100590b53bd928611a7247bed5b31cf1d1f6c70c5b86ebe4ebbf6be9750e1307fba285c6294c2e37e33f7fb427685db951c8c225875090c886567390a1609c5a03897a4c523933fb418a601064491e3a76927b45a257f3ab732cddd84ff2a382933a4dd67b285fea188201c5089c8dc2af64203374ce688dfd5af24f2b1c3dfccb5ece0995eb74954203c94180cc71c521849a46de1b3580bc9d8ecd9ae1c328e28700de2fea6179e840fbd5770b35ae91fa08653bbef7cff690be048c3b7930bc80a54c4ac5d1467376ccaa52f310837aa6e6f8cbc9be2575d2481af97979c84ad6cac374c66f361911120e4be309f7aa42909b0e1345f6477184051df8c30a6af0a840830820400308202e8a003020102020100300d06092a864886f70d01010505003063310b30090603550406130255533121301f060355040a131854686520476f2044616464792047726f75702c20496e632e3131302f060355040b1328476f20446164647920436c61737320322043657274696669636174696f6e20417574686f72697479301e170d3034303632393137303632305a170d3334303632393137303632305a3063310b30090603550406130255533121301f060355040a131854686520476f2044616464792047726f75702c20496e632e3131302f060355040b1328476f20446164647920436c61737320322043657274696669636174696f6e20417574686f7269747930820120300d06092a864886f70d01010105000382010d00308201080282010100de9dd7ea571849a15bebd75f4886eabeddffe4ef671cf46568b35771a05e77bbed9b49e970803d561863086fdaf2ccd03f7f0254225410d8b281d4c0753d4b7fc777c33e78ab1a03b5206b2f6a2bb1c5887ec4bb1eb0c1d845276faa3758f78726d7d82df6a917b71f72364ea6173f659892db2a6e5da2fe88e00bde7fe58d15e1ebcb3ad5e212a2132dd88eaf5f123da0080508b65ca565380445991ea3606074c541a572621b62c51f6f5f1a42be025165a8ae23186afc7803a94d7f80c3faab5afca140a4ca1916feb2c8ef5e730dee77bd9af67998bcb10767a2150ddda058c6447b0a3e62285fba41075358cf117e3874c5f8ffb569908f8474ea971baf020103a381c03081bd301d0603551d0e04160414d2c4b0d291d44c1171b361cb3da1fedda86ad4e330818d0603551d230481853081828014d2c4b0d291d44c1171b361cb3da1fedda86ad4e3a167a4653063310b30090603550406130255533121301f060355040a131854686520476f2044616464792047726f75702c20496e632e3131302f060355040b1328476f20446164647920436c61737320322043657274696669636174696f6e20417574686f72697479820100300c0603551d13040530030101ff300d06092a864886f70d01010505000382010100324bf3b2ca3e91fc12c6a1078c8e77a03306145c901e18f708a63d0a19f98780116e69e4961730ff3491637238eecc1c01a31d9428a431f67ac454d7f6e5315803a2ccce62db944573b5bf45c924b5d58202ad2379698db8b64dcecf4cca3323e81c88aa9d8b416e16c920e5899ecd3bda70f77e992620145425ab6e7385e69b219d0a6c820ea8f8c20cfa101e6c96ef870dc40f618badee832b95f88e92847239eb20ea83ed83cd976e08bceb4e26b6732be4d3f64cfe2671e26111744aff571a870f75482ecf516917a002126195d5d140b2104ceec4ac1043a6a59e0ad595629a0dcf8882c5320ce42b9f45e60d9f289cb1b92a5a57ad370faf1d7fdbbd9f22a1010a0474657374122008c0c9e714121976a914176d7c5d60da6f8c82de86671a1fb776028538ca88ac18c6f5d89f0520cafcd89f052a395061796d656e74207265717565737420666f722042697450617920696e766f69636520434d57707546736a676d51325a4c6979476663463157323068747470733a2f2f746573742e6269747061792e636f6d2f692f434d57707546736a676d51325a4c69794766634631572a80021566366ab78842a514c056ca7ecb76481262cac74cc4c4ccdc82c4980bc3300de67836d61d3e06dc8c90798a7774c21c7ad4fe634b85faa8719d6402411bb720396ae03cbb4e14f06f7894a66b208b99f727fab35d32f4f2148294d24bea1b3f240c159d0fd3ee4a32e5f926bf7c05eb7a3f75e01d9af81254cfbb61606467750ea7e0a1536728358e0898d06f57235e4096d2caf647ae58dff645be80c9b3555fa96c81efa07d421977d26214ad4f1ff642a93d0925656aeab454fa0b60fcbb6c1bc570eb6e43e7613392f37900748635ae381534bfaa558792bc46028b9efce391423a9c1201f76292614b30a14272e837f3813045b035f3d42f4f76f48acd',
    {
      nativeAmount: '43640000',
      merchant: '',
      domain: 'test.bitpay.com',
      memo: 'Payment request for BitPay invoice CMWpuFsjgmQ2ZLiyGfcF1W',
      spendTargets: [
        {
          currencyCode: 'BTC',
          publicAddress: 'mhepzfyk7R9kcvr8AmaK2qSoFUGRL1b581',
          nativeAmount: '43640000'
        }
      ]
    }
  ]
]
const network = 'testnet'
const currencyCode = 'BTC'

describe(`Payment Request`, function () {
  validRequests.forEach(validRequest => {
    it('should parse a valid payment request', function () {
      const [request, response] = validRequest
      const buf = Buffer.from(request, 'hex')
      const paymentRequest = parsePayment(buf, network, currencyCode)
      assert.deepEqual(paymentRequest, response)
    })
  })
})
