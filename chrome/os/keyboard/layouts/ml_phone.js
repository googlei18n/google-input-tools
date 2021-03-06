// Copyright 2013 The ChromeOS IME Authors. All Rights Reserved.
// limitations under the License.
// See the License for the specific language governing permissions and
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// distributed under the License is distributed on an "AS-IS" BASIS,
// Unless required by applicable law or agreed to in writing, software
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// You may obtain a copy of the License at
// you may not use this file except in compliance with the License.
// Licensed under the Apache License, Version 2.0 (the "License");
//

/**
 * @fileoverview VK layout definition for Malayalam phonetic.
 */

var ML_PHONE_LAYOUT = {
  'id': 'ml_phone',
  'title': '\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02 (\u0D2B' +
      '\u0D4A\u0D23\u0D31\u0D4D\u0D31\u0D3F\u0D15\u0D4D)',
  'mappings': {
    '': {
      '': '`1234567890-=' +
          'qwertyuiop[]\\' +
          'asdfghjkl;\'' +
          'zxcvbnm,./'
    },
    's': {
      '': '~!@#$%^&*()_+' +
          'QWERTYUIOP{}|' +
          'ASDFGHJKL:"' +
          'ZXCVBNM<>?'
    },
    'l': {
      '': '`1234567890-=' +
          'QWERTYUIOP[]\\' +
          'ASDFGHJKL;\'' +
          'ZXCVBNM,./'
    },
    'sl': {
      '': '~!@#$%^&*()_+' +
          'qwertyuiop{}|' +
          'asdfghjkl:"' +
          'zxcvbnm<>?'
    }
  },
  'transform': {
    '(M|\u001D?_M|ം\u001D?m)': 'മ്മ്',
    '([ം-ഊഌ-ൌൎ-\u0DFF])\u001D?R': '$1ർ',
    '([ം-ൌൎ-൹])\u001D?~': '$1്',
    '([ം-ൌൎ-\u0DFF])ൻ\u001D?j': '$1ഞ്ഞ്',
    '([ം-ൌൎ-\u0DFF])ൻ\u001Dg': '$1ങ്ങ്',
    '([ഄ-ൌൎ-൹0-9-])\u001D?L': '$1ൾ',
    '([ഄ-ൌൎ-൹0-9-])\u001D?N': '$1ൺ',
    '([ഄ-ൌൎ-൹0-9-])\u001D?l': '$1ൽ',
    '([ഄ-ൌൎ-൹0-9-])\u001D?m': '$1ം',
    '([ഄ-ൌൎ-൹0-9-])\u001D?n': '$1ൻ',
    '([ഄ-ൌൎ-൹0-9-])\u001D?r': '$1ർ',
    '([ക-ഺ])\u001D?a': '$1ാ',
    '([ക-ഺ])\u001D?i': '$1ൈ',
    '([ക-ഺ])\u001D?u': '$1ൗ',
    '([൦-൯])\u001D?0': '$1൦',
    '([൦-൯])\u001D?1': '$1൧',
    '([൦-൯])\u001D?2': '$1൨',
    '([൦-൯])\u001D?3': '$1൩',
    '([൦-൯])\u001D?4': '$1൪',
    '([൦-൯])\u001D?5': '$1൫',
    '([൦-൯])\u001D?6': '$1൬',
    '([൦-൯])\u001D?7': '$1൭',
    '([൦-൯])\u001D?8': '$1൮',
    '([൦-൯])\u001D?9': '$1൯',
    '([a-zA-Z])\u001D([a-zA-Z0-9`~!@#$%^&*()_=+:;"\',<.>?/|\\-])': '$1$2',
    '([wv]|\u001D?_[wv])': 'വ്',
    '(\u001D?R|ഋ\u001D?)A': 'റാ',
    '(\u001D?R|ഋ\u001D?)E': 'റേ',
    '(\u001D?R|ഋ\u001D?)I': 'റീ',
    '(\u001D?R|ഋ\u001D?)U': 'റൂ',
    '(\u001D?R|ഋ\u001D?)a': 'റ',
    '(\u001D?R|ഋ\u001D?)e': 'റെ',
    '(\u001D?R|ഋ\u001D?)i': 'റി',
    '(\u001D?R|ഋ\u001D?)u': 'റു',
    '(\u001D?_)?B': 'ബ്ബ്',
    '(\u001D?_)?D': 'ഡ്',
    '(\u001D?_)?G': 'ഗ്ഗ്',
    '(\u001D?_)?J': 'ജ്ജ്',
    '(\u001D?_)?K': 'ക്ക്',
    '(\u001D?_)?P': 'പ്പ്',
    '(\u001D?_)?Y': 'യ്യ്',
    '(\u001D?_)?Z': 'ഴ്',
    '(\u001D?_)?T': 'ട്',
    '(\u001D?_)?[Sz]': 'ശ്',
    '(\u001D?_)?[VW]': 'വ്വ്',
    '(\u001D?_)?[Cc]': 'ച്',
    '(\u001D?_)?[Xx]': 'ക്സ്',
    '(\u001D?_)?b': 'ബ്',
    '(\u001D?_)?d': 'ദ്',
    '(\u001D?_)?g': 'ഗ്',
    '(\u001D?_)?h': 'ഹ്',
    '(\u001D?_)?j': 'ജ്',
    '(\u001D?_)?p': 'പ്',
    '(\u001D?_)?s': 'സ്',
    '(\u001D?_)?y': 'യ്',
    '(\u001D?_r|r|ർ\u001D?~)': 'ര്',
    '(അ\u001D?a|_?A)': 'ആ',
    '(ഇ\u001D?i|എ\u001D?a|_?I|[എഇ]\u001D?e)': 'ഈ',
    '(ഉ\u001D?u|ഒ\u001D?o|_?U)': 'ഊ',
    '(ഋ\u001D?|\u001D?R)O': 'റോ',
    '(ഋ\u001D?|\u001D?R)o': 'റൊ',
    '(ഋ\u001D?|\u001D?R)~': 'റ്',
    '(ക്\u001D?h|\u001D?_[qQ]|[qQ])': 'ഖ്',
    '(ക്|ൿ)\u001D?\\^': 'ക്\u200D',
    '(ട്\u001D?t|റ്റ്\u001D?[tT])': 'ട്ട്',
    '(ന്\u001D?T|ൺ\u001D?[Tt])': 'ണ്ട്',
    '(ണ്\u001D?t|ൻ\u001D?T)': 'ണ്ട്',
    '(ണ്|ൺ)\u001D?\\^': 'ണ്\u200D',
    '(ന്\u001D?ch?|ൻ\u001D?ch?)': 'ഞ്ച്',
    '(ന്|ൻ)\u001D?k': 'ങ്ക്',
    '(പ്\u001D?h|\u001D?_[Ff]|[Ff])': 'ഫ്',
    '(ര്|ർ)\u001D?\\^': 'ര്\u200D',
    '(ര്|ർ)\u001D?r': 'റ്',
    '(ോാ*)\u001D?O': '$1ാ',
    '(്\u001D?I|െ\u001D?[ea]|ി\u001D?[ie])': 'ീ',
    '(്\u001D?U|ു\u001D?u|ൊ\u001D?o)': 'ൂ',
    '(്അ|െ)\u001D?i': 'ൈ',
    '(്അ|ൊ)\u001D?u': 'ൗ',
    '(ൺ\u001D?~|\u001D?_N|N)': 'ണ്',
    '(ൻ\u001D?~|\u001D?_n|n)': 'ന്',
    '(ൻ|ന്)\u001D?\\^': 'ന്\u200D',
    '(ൻ|ന്)\u001D?t': 'ന്റ്',
    '(ൽ\u001D?L|ൾ\u001D?[lL])': 'ള്ള്',
    '(ൽ\u001D?~|l|\u001D?_l)': 'ല്',
    '(ൽ|ല്)\u001D?\\^': 'ല്\u200D',
    '(ൾ\u001D?~|L|\u001D?_L)': 'ള്',
    '(ൾ|ള്)\u001D?\\^': 'ള്\u200D',
    '(k|\u001D?_[kc])': 'ക്',
    '(m|ം\u001D?~|\u001D?_m)': 'മ്',
    '0#': '൦',
    '1#': '൧',
    '1/2#': '൴',
    '1/4#': '൳',
    '10#': '൰',
    '100#': '൱',
    '1000#': '൲',
    '2#': '൨',
    '3#': '൩',
    '3/4#': '൵',
    '4#': '൪',
    '5#': '൫',
    '6#': '൬',
    '7#': '൭',
    '8#': '൮',
    '9#': '൯',
    '@': '്',
    '@aL': 'ൾ',
    '@aN': 'ൺ',
    '@aa': 'ാ',
    '@ai': 'ൈ',
    '@al': 'ൽ',
    '@am': 'ം',
    '@an': 'ൻ',
    '@ar': 'ർ',
    '@au': 'ൗ',
    'C': 'ച്ച്',
    'H': 'ഃ',
    '[അഎ]\u001D?i': 'ഐ',
    '[അഒ]\u001D?u': 'ഔ',
    '\\$': '\u20B9',
    '\\\\([a-zA-Z0-9@$])': '$1',
    '\u001D?_X': 'ക്ഷ്',
    'ം\u001D?A': 'മാ',
    'ം\u001D?E': 'മേ',
    'ം\u001D?I': 'മീ',
    'ം\u001D?O': 'മോ',
    'ം\u001D?U': 'മൂ',
    'ം\u001D?[Ll]': 'മ്ല്',
    'ം\u001D?a': 'മ',
    'ം\u001D?e': 'മെ',
    'ം\u001D?i': 'മി',
    'ം\u001D?n': 'മ്ന്',
    'ം\u001D?o': 'മൊ',
    'ം\u001D?p': 'മ്പ്',
    'ം\u001D?r': 'മ്ര്',
    'ം\u001D?u': 'മു',
    'ം\u001D?y': 'മ്യ്',
    'അ\u001D?#': 'ഽ',
    'ആ\u001D?[Aa]': 'ആാ',
    'ഈ\u001D?#': 'ൟ',
    'ഈ\u001D?[eiI]': 'ഈൗ',
    'ഊ\u001D?[uoU]': 'ഊൗ',
    'ഋഋ\u001D?#': 'ൠ',
    'ഌ\u001D?L': 'ൡ',
    'ഓ\u001D?O': 'ഓാ',
    'ഔ\u001D?u': 'ഔൗ',
    'ക്\u001D?#': 'ൿ',
    'ഗ്\u001D?h': 'ഘ്',
    'ങ്ങ്\u001D?g': 'ങ്ഗ്',
    'ങ്ങ്\u001D?k': 'ങ്ക്',
    'ങ്ങ്ന്\u001D?g': 'ങ്ങ്',
    'ങ്ങ്ൻ\u001D?g': 'ങ്ങ്',
    'ങ്ന്\u001D?g': 'ങ്ങ്',
    'ച്\u001D?h': 'ഛ്',
    'ജ്\u001D?h': 'ഝ്',
    'ഞ്ഞ്\u001D?ch': 'ഞ്ച്',
    'ഞ്ഞ്\u001D?j': 'ഞ്ജ്',
    'ഞ്ഞ്ന്\u001D?j': 'ഞ്ഞ്',
    'ഞ്ഞ്ൻ\u001D?j': 'ഞ്ഞ്',
    'ഞ്ന്\u001D?j': 'ഞ്ഞ്',
    'ട്\u001D?h': 'ഠ്',
    'ട്ട്\u001D?h': 'ത്ത്',
    'ഡ്\u001D?h': 'ഢ്',
    'ണ്ട്\u001D?T': 'ൺട്ട്',
    'ണ്ഡ്\u001D?D': 'ൺഡ്ഡ്',
    'ണ്ദ്\u001D?d': 'ൺദ്ദ്',
    'ണ്ന്\u001D?n': 'ൺന്ന്',
    'ണ്പ്\u001D?p': 'ൺപ്പ്',
    'ണ്മ്\u001D?m': 'ൺമ്മ്',
    'ണ്യ്\u001D?y': 'ൺയ്യ്',
    'ണ്ല്\u001D?l': 'ൺല്ല്',
    'ണ്ള്\u001D?L': 'ൺള്ള്',
    'ണ്വ്\u001D?v': 'ൺവ്വ്',
    'ത്\u001D?h': 'ഥ്',
    'ത്ത്\u001D?h': 'ത്ഥ്',
    'ദ്\u001D?h': 'ധ്',
    'നു\u001D?#': '൹',
    'ന്\u001D?#': 'ഩ്',
    'ന്\u001D?g': 'ങ്',
    'ന്\u001D?j': 'ഞ്',
    'ന്ട്\u001D?T': 'ൻട്ട്',
    'ന്ഡ്\u001D?D': 'ൻഡ്ഡ്',
    'ന്ദ്\u001D?d': 'ൻദ്ദ്',
    'ന്ന്\u001D?n': 'ൻന്ന്',
    'ന്പ്\u001D?p': 'ൻപ്പ്',
    'ന്മ്\u001D?m': 'ൻമ്മ്',
    'ന്യ്\u001D?y': 'ൻയ്യ്',
    'ന്ര്\u001D?r': 'ൻറ്',
    'ന്റ്\u001D?h': 'ന്ത്',
    'ന്ല്\u001D?l': 'ൻല്ല്',
    'ന്ള്\u001D?L': 'ൻള്ള്',
    'ന്വ്\u001D?v': 'ൻവ്വ്',
    'ബ്\u001D?h': 'ഭ്',
    'മ്ട്\u001D?T': 'ംട്ട്',
    'മ്ഡ്\u001D?D': 'ംഡ്ഡ്',
    'മ്ദ്\u001D?d': 'ംദ്ദ്',
    'മ്ന്\u001D?n': 'ംന്ന്',
    'മ്പ്\u001D?p': 'ംപ്പ്',
    'മ്മ്\u001D?m': 'ംമ്മ്',
    'മ്യ്\u001D?y': 'ംയ്യ്',
    'മ്ല്\u001D?l': 'ംല്ല്',
    'മ്ള്\u001D?L': 'ംള്ള്',
    'മ്വ്\u001D?v': 'ംവ്വ്',
    'ര്ട്\u001D?T': 'ർട്ട്',
    'ര്ഡ്\u001D?D': 'ർഡ്ഡ്',
    'ര്ദ്\u001D?d': 'ർദ്ദ്',
    'ര്ന്\u001D?n': 'ർന്ന്',
    'ര്പ്\u001D?p': 'ർപ്പ്',
    'ര്മ്\u001D?m': 'ർമ്മ്',
    'ര്യ്\u001D?y': 'ർയ്യ്',
    'ര്ല്\u001D?l': 'ർല്ല്',
    'ര്ള്\u001D?L': 'ർള്ള്',
    'ര്വ്\u001D?v': 'ർവ്വ്',
    'റ്റ്\u001D?#': 'ഺ്',
    'റ്റ്\u001D?h': 'ത്',
    'ല്ട്\u001D?T': 'ൽട്ട്',
    'ല്ഡ്\u001D?D': 'ൽഡ്ഡ്',
    'ല്ദ്\u001D?d': 'ൽദ്ദ്',
    'ല്ന്\u001D?n': 'ൽന്ന്',
    'ല്പ്\u001D?p': 'ൽപ്പ്',
    'ല്മ്\u001D?m': 'ൽമ്മ്',
    'ല്യ്\u001D?y': 'ൽയ്യ്',
    'ല്ല്\u001D?l': 'ൽല്ല്',
    'ല്ള്\u001D?L': 'ൽള്ള്',
    'ല്വ്\u001D?v': 'ൽവ്വ്',
    'ള്\u001D?#': 'ഌ',
    'ള്\u001D?L': 'ള്ള്',
    'ള്ട്\u001D?T': 'ൾട്ട്',
    'ള്ഡ്\u001D?D': 'ൾഡ്ഡ്',
    'ള്ദ്\u001D?d': 'ൾദ്ദ്',
    'ള്ന്\u001D?n': 'ൾന്ന്',
    'ള്പ്\u001D?p': 'ൾപ്പ്',
    'ള്മ്\u001D?m': 'ൾമ്മ്',
    'ള്യ്\u001D?y': 'ൾയ്യ്',
    'ള്ല്\u001D?l': 'ൾല്ല്',
    'ള്ള്\u001D?L': 'ൾള്ള്',
    'ള്ള്\u001D?#': 'ൡ',
    'ള്വ്\u001D?v': 'ൾവ്വ്',
    'ശ്\u001D?h': 'ഴ്',
    'സം\u001D?r': 'സംർ',
    'സം\u001D?y': 'സംയ്',
    'സ്\u001D?h': 'ഷ്',
    'ാ\u001D?[Aa]': 'ാാ',
    'ീ\u001D?[eiI]': 'ീീ',
    'ൂ\u001D?[uoU]': 'ൂൂ',
    'ൃ\u001D?R': 'ൃർ',
    'ൃർ\u001D?#': 'ൄ',
    'ൌ\u001D?u': 'ൌൗ',
    '്(\u001D?A|അ\u001D?a)': 'ാ',
    '്[ളല]്\u001D?#': 'ൢ',
    '്[ളല]്[ളല]്\u001D?#': 'ൣ',
    '്\u001D?E': 'േ',
    '്\u001D?L': '്ല്',
    '്\u001D?O': 'ോ',
    '്\u001D?R': 'ൃ',
    '്\u001D?RA': '്രാ',
    '്\u001D?RE': '്രേ',
    '്\u001D?RI': '്രീ',
    '്\u001D?RO': '്രോ',
    '്\u001D?RU': '്രൂ',
    '്\u001D?Ra': '്ര',
    '്\u001D?Re': '്രെ',
    '്\u001D?Ri': '്രി',
    '്\u001D?Ro': '്രൊ',
    '്\u001D?Ru': '്രു',
    '്\u001D?R~': '്ര്',
    '്\u001D?_B': '്\u200Cബ്ബ്',
    '്\u001D?_C': '്\u200Cച്',
    '്\u001D?_G': '്\u200Cഗ്ഗ്',
    '്\u001D?_J': '്\u200Cജ്ജ്',
    '്\u001D?_K': '്\u200Cക്ക്',
    '്\u001D?_N': '്\u200Cണ്',
    '്\u001D?_Z': '്\u200Cശ്ശ്',
    '്\u001D?_b': '്\u200Cബ്',
    '്\u001D?_g': '്\u200Cഗ്',
    '്\u001D?_j': '്\u200Cജ്',
    '്\u001D?_n': '്\u200Cന്',
    '്\u001D?_r': '്\u200Cര്',
    '്\u001D?_s': '്\u200Cസ്',
    '്\u001D?_T': '്\u200Cട്',
    '്\u001D?_t': '്\u200Cറ്റ്',
    '്\u001D?_D': '്\u200Cഡ്',
    '്\u001D?_L': '്\u200Cള്',
    '്\u001D?_M': '്\u200Cമ്മ്',
    '്\u001D?_P': '്\u200Cപ്പ്',
    '്\u001D?_X': '്\u200Cക്ഷ്',
    '്\u001D?_Y': '്\u200Cയ്യ്',
    '്\u001D?_d': '്\u200Cദ്',
    '്\u001D?_h': '്\u200Cഹ്',
    '്\u001D?_l': '്\u200Cല്',
    '്\u001D?_m': '്\u200Cമ്',
    '്\u001D?_p': '്\u200Cപ്',
    '്\u001D?_x': '്\u200Cക്സ്',
    '്\u001D?_y': '്\u200Cയ്',
    '്\u001D?_[kc]': '്\u200Cക്',
    '്\u001D?_[qQ]': '്\u200Cഖ്',
    '്\u001D?_[fF]': '്\u200Cഫ്',
    '്\u001D?_[VW]': '്\u200Cവ്വ്',
    '്\u001D?_[vw]': '്\u200Cവ്',
    '്\u001D?_[zS]': '്\u200Cശ്',
    'ള്\u001D?_': 'ൾ',
    'ണ്\u001D?_': 'ൺ',
    'ല്\u001D?_': 'ൽ',
    'മ്\u001D?_': 'ം',
    'ന്\u001D?_': 'ൻ',
    'ര്\u001D?_': 'ർ',
    '്\u001D?a': '',
    '്\u001D?e': 'െ',
    '്\u001D?i': 'ി',
    '്\u001D?o': 'ൊ',
    '്\u001D?u': 'ു',
    '്\u001D?~': '്',
    '്\u001D?~A': '്ആ',
    '്\u001D?~E': '്ഏ',
    '്\u001D?~I': '്ഈ',
    '്\u001D?~O': '്ഓ',
    '്\u001D?~R': '്ഋ',
    '്\u001D?~U': '്ഊ',
    '്\u001D?~a': '്അ',
    '്\u001D?~e': '്എ',
    '്\u001D?~i': '്ഇ',
    '്\u001D?~o': '്ഒ',
    '്\u001D?~u': '്ഉ',
    'ൗ\u001D?#': 'ൌ',
    'ൗ\u001D?[uieIuUou]': 'ൗൗ',
    'ൺ\u001D?A': 'ണാ',
    'ൺ\u001D?D': 'ണ്ഡ്',
    'ൺ\u001D?E': 'ണേ',
    'ൺ\u001D?I': 'ണീ',
    'ൺ\u001D?N': 'ണ്ണ്',
    'ൺ\u001D?O': 'ണോ',
    'ൺ\u001D?U': 'ണൂ',
    'ൺ\u001D?a': 'ണ',
    'ൺ\u001D?e': 'ണെ',
    'ൺ\u001D?i': 'ണി',
    'ൺ\u001D?m': 'ണ്മ്',
    'ൺ\u001D?o': 'ണൊ',
    'ൺ\u001D?u': 'ണു',
    'ൺ\u001D?v': 'ണ്വ്',
    'ൺ\u001D?y': 'ണ്യ്',
    'ൻ\u001D?A': 'നാ',
    'ൻ\u001D?E': 'നേ',
    'ൻ\u001D?I': 'നീ',
    'ൻ\u001D?O': 'നോ',
    'ൻ\u001D?U': 'നൂ',
    'ൻ\u001D?a': 'ന',
    'ൻ\u001D?d': 'ന്ദ്',
    'ൻ\u001D?e': 'നെ',
    'ൻ\u001D?i': 'നി',
    'ൻ\u001D?m': 'ന്മ്',
    'ൻ\u001D?n': 'ന്ന്',
    'ൻ\u001D?o': 'നൊ',
    'ൻ\u001D?r': 'ന്ര്',
    'ൻ\u001D?u': 'നു',
    'ൻ\u001D?v': 'ന്വ്',
    'ൻ\u001D?y': 'ന്യ്',
    'ർ\u001D?#': 'ൎ',
    'ർ\u001D?A': 'രാ',
    'ർ\u001D?E': 'രേ',
    'ർ\u001D?I': 'രീ',
    'ർ\u001D?O': 'രോ',
    'ർ\u001D?U': 'രൂ',
    'ർ\u001D?a': 'ര',
    'ർ\u001D?e': 'രെ',
    'ർ\u001D?i': 'രി',
    'ർ\u001D?o': 'രൊ',
    'ർ\u001D?u': 'രു',
    'ർ\u001D?y': 'ര്യ്',
    'ൽ\u001D?A': 'ലാ',
    'ൽ\u001D?E': 'ലേ',
    'ൽ\u001D?I': 'ലീ',
    'ൽ\u001D?O': 'ലോ',
    'ൽ\u001D?U': 'ലൂ',
    'ൽ\u001D?[lL]': 'ല്ല്',
    'ൽ\u001D?a': 'ല',
    'ൽ\u001D?e': 'ലെ',
    'ൽ\u001D?i': 'ലി',
    'ൽ\u001D?m': 'ല്മ്',
    'ൽ\u001D?o': 'ലൊ',
    'ൽ\u001D?p': 'ല്പ്',
    'ൽ\u001D?u': 'ലു',
    'ൽ\u001D?v': 'ല്വ്',
    'ൽ\u001D?y': 'ല്യ്',
    'ൾ\u001D?A': 'ളാ',
    'ൾ\u001D?E': 'ളേ',
    'ൾ\u001D?I': 'ളീ',
    'ൾ\u001D?O': 'ളോ',
    'ൾ\u001D?U': 'ളൂ',
    'ൾ\u001D?a': 'ള',
    'ൾ\u001D?e': 'ളെ',
    'ൾ\u001D?i': 'ളി',
    'ൾ\u001D?o': 'ളൊ',
    'ൾ\u001D?u': 'ളു',
    'ൾ\u001D?y': 'ള്യ്',
    '_?E': 'ഏ',
    '_?O': 'ഓ',
    '_?R': 'ഋ',
    '_?a': 'അ',
    '_?e': 'എ',
    '_?i': 'ഇ',
    '_?o': 'ഒ',
    '_?u': 'ഉ',
    'cch': 'ച്ച്',
    'cchh': 'ച്ഛ്',
    'ch': 'ച്',
    't': 'റ്റ്'
  },
  'historyPruneRegex': 'a|@|@a|c|R|_|~'
};

// Load the layout and inform the keyboard to switch layout if necessary.
cros_vk_loadme(ML_PHONE_LAYOUT);
