const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const isLowerCaseLetter = code => (code >= 97 && code <= 122)
const isUpperCaseLetter = code => (code >= 65 && code <= 90)
const lowercase = Array.from(new Array(123).keys()).filter(isLowerCaseLetter)
const uppercase = Array.from(new Array(123).keys()).filter(isUpperCaseLetter)
const emoji = [
  [
    55357,
    56832
  ],
  [
    55357,
    56833
  ],
  [
    55357,
    56834
  ],
  [
    55358,
    56611
  ],
  [
    55357,
    56835
  ],
  [
    55357,
    56836
  ],
  [
    55357,
    56837
  ],
  [
    55357,
    56838
  ],
  [
    55357,
    56841
  ],
  [
    55357,
    56842
  ],
  [
    55357,
    56843
  ],
  [
    55357,
    56846
  ],
  [
    55357,
    56845
  ],
  [
    55357,
    56856
  ],
  [
    55357,
    56855
  ],
  [
    55357,
    56857
  ],
  [
    55357,
    56858
  ],
  [
    9786,
    65039
  ],
  [
    55357,
    56898
  ],
  [
    55358,
    56599
  ],
  [
    55358,
    56617
  ],
  [
    55358,
    56596
  ],
  [
    55358,
    56616
  ],
  [
    55357,
    56848
  ],
  [
    55357,
    56849
  ],
  [
    55357,
    56886
  ],
  [
    55357,
    56900
  ],
  [
    55357,
    56847
  ],
  [
    55357,
    56867
  ],
  [
    55357,
    56869
  ],
  [
    55357,
    56878
  ],
  [
    55358,
    56592
  ],
  [
    55357,
    56879
  ],
  [
    55357,
    56874
  ],
  [
    55357,
    56875
  ],
  [
    55357,
    56884
  ],
  [
    55357,
    56844
  ],
  [
    55357,
    56859
  ],
  [
    55357,
    56860
  ],
  [
    55357,
    56861
  ],
  [
    55358,
    56612
  ],
  [
    55357,
    56850
  ],
  [
    55357,
    56851
  ],
  [
    55357,
    56852
  ],
  [
    55357,
    56853
  ],
  [
    55357,
    56899
  ],
  [
    55358,
    56593
  ],
  [
    55357,
    56882
  ],
  [
    9785,
    65039
  ],
  [
    55357,
    56897
  ],
  [
    55357,
    56854
  ],
  [
    55357,
    56862
  ],
  [
    55357,
    56863
  ],
  [
    55357,
    56868
  ],
  [
    55357,
    56866
  ],
  [
    55357,
    56877
  ],
  [
    55357,
    56870
  ],
  [
    55357,
    56871
  ],
  [
    55357,
    56872
  ],
  [
    55357,
    56873
  ],
  [
    55358,
    56623
  ],
  [
    55357,
    56876
  ],
  [
    55357,
    56880
  ],
  [
    55357,
    56881
  ],
  [
    55357,
    56883
  ],
  [
    55358,
    56618
  ],
  [
    55357,
    56885
  ],
  [
    55357,
    56865
  ],
  [
    55357,
    56864
  ],
  [
    55358,
    56620
  ],
  [
    55357,
    56887
  ],
  [
    55358,
    56594
  ],
  [
    55358,
    56597
  ],
  [
    55358,
    56610
  ],
  [
    55358,
    56622
  ],
  [
    55358,
    56615
  ],
  [
    55357,
    56839
  ],
  [
    55358,
    56608
  ],
  [
    55358,
    56609
  ],
  [
    55358,
    56613
  ],
  [
    55358,
    56619
  ],
  [
    55358,
    56621
  ],
  [
    55358,
    56784
  ],
  [
    55358,
    56595
  ],
  [
    55357,
    56840
  ],
  [
    55357,
    56447
  ],
  [
    55357,
    56441
  ],
  [
    55357,
    56442
  ],
  [
    55357,
    56448
  ],
  [
    55357,
    56443
  ],
  [
    55357,
    56445
  ],
  [
    55358,
    56598
  ],
  [
    55357,
    56489
  ],
  [
    55357,
    56890
  ],
  [
    55357,
    56888
  ],
  [
    55357,
    56889
  ],
  [
    55357,
    56891
  ],
  [
    55357,
    56892
  ],
  [
    55357,
    56893
  ],
  [
    55357,
    56896
  ],
  [
    55357,
    56895
  ],
  [
    55357,
    56894
  ]
]

const TOKENS = [
  ...numbers,
  ...String.fromCharCode(...lowercase).split(''),
  ...String.fromCharCode(...uppercase).split(''),
  ['[\u{1f300}-\u{1f5ff}]', 'u'],
  '[A-Z]',
  '[a-z]',
  '[A-Za-z]',
  '\\d',
  '@',
  '!',
  '#',
  ':',
  ';',
  '>',
  '<',
  '"',
  `'`,
  '&',
  '%',
  '=',
  '~',
  '`',
  '_',
  ',',
  '\\-',
  '\\{',
  '\\}',
  '\\/',
  '\\s',
  '\\c',
  '\\.',
  '\\\\',
  '\\^',
  '\\$',
  '\\*',
  '\\+',
  '\\?',
  '\\(',
  '\\)',
  '\\[',
  '\\]',
  '\\|',
  '\\/',
  '\\xhh',
  '\\Oxxx',
  '.'
]

const SPECIAL = [
  '.',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '~',
  `'`,
  '`',
  '"',
  '[',
  ']',
  '-',
  '\\',
  '/'
]

module.exports.SPECIAL = SPECIAL
module.exports.TOKENS = TOKENS
window.__tokens__ = TOKENS
