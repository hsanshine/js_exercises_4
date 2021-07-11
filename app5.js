"use strict";
console.log("hey");

function repeat(n, action) {
  for (let i = 0; i < n; i++) action(i);
}

repeat(10, console.log); //console.log is the function we shall be calling in the repeat function.. nice :)

let labels = [];
// but how does it know the first value of i????
repeat(5, (i) => {
  // we have already defined repeat, now we are calling it witha function value to excecute it 5 times
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);

//higher order functions
// these are functions that have input as being function values or functions that return functions., they can even create functions for you

// function to create a function that checks if a number you give is greater than some fixed number

function greaterThan(n) {
  return (m) => m > n; // it returns a function value, that takes a variable m and checks if it is greater than n
  // the function that is return is anoymous, i.e. its name is not fixed yet and it will take on the name of the binding that you assign to it
}

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(20));
console.log(greaterThan10(3));

//functions that change other functions
function noisy(f) {
  return (...args) => {
    console.log("calling with ", args); // our new function tells us what we gave it an input
    let result = f(...args); // we call the function that was given to us with rest parameters
    console.log("called with", args, ", returned", result); //the function now tells us what its result was
    return result;
  }; //end of modification to f - function, now it prints its input and tells us the output on both sides of doing its work
}

noisy(Math.min)(3, 2, 1);
noisy(Math.max)(10, 100, 20);

// we can use the function noisy to test other functions but printing all the input that they get and all the output that they show us

//function that provide a new kind of flow control but only when they are called
// imagine an if statment that is not part of the flow unless it is called to do its job, using functions that we pass to it. one function is to be tested while the other is  to be executed if the test turns out to be positive.

function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  // n is replaced by the for loop counter because there we have action(i).. so the parameter here will take on the value of i
  unless(n % 2 === 1, () => {
    console.log(n, "is even");
  });
}); // a call to repeat, will call unless 3 times, the test is a statement, the then() is an anoymous function, takes no inputs, prints that n is even

// forEach for loop is a higher order for/of loop that runs the function we provide for each element in the array
["hamza", "kyamanywa"].forEach((item) => console.log(item)); // will run and return the output of the function we provide for each item in the array.

// Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)

var SCRIPTS = [
  {
    name: "Adlam",
    ranges: [
      [125184, 125259],
      [125264, 125274],
      [125278, 125280],
    ],
    direction: "rtl",
    year: 1987,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet",
  },
  {
    name: "Caucasian Albanian",
    ranges: [
      [66864, 66916],
      [66927, 66928],
    ],
    direction: "ltr",
    year: 420,
    living: false,
    link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet",
  },
  {
    name: "Ahom",
    ranges: [
      [71424, 71450],
      [71453, 71468],
      [71472, 71488],
    ],
    direction: "ltr",
    year: 1250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ahom_alphabet",
  },
  {
    name: "Arabic",
    ranges: [
      [1536, 1541],
      [1542, 1548],
      [1549, 1563],
      [1564, 1565],
      [1566, 1567],
      [1568, 1600],
      [1601, 1611],
      [1622, 1648],
      [1649, 1757],
      [1758, 1792],
      [1872, 1920],
      [2208, 2229],
      [2230, 2238],
      [2260, 2274],
      [2275, 2304],
      [64336, 64450],
      [64467, 64830],
      [64848, 64912],
      [64914, 64968],
      [65008, 65022],
      [65136, 65141],
      [65142, 65277],
      [69216, 69247],
      [126464, 126468],
      [126469, 126496],
      [126497, 126499],
      [126500, 126501],
      [126503, 126504],
      [126505, 126515],
      [126516, 126520],
      [126521, 126522],
      [126523, 126524],
      [126530, 126531],
      [126535, 126536],
      [126537, 126538],
      [126539, 126540],
      [126541, 126544],
      [126545, 126547],
      [126548, 126549],
      [126551, 126552],
      [126553, 126554],
      [126555, 126556],
      [126557, 126558],
      [126559, 126560],
      [126561, 126563],
      [126564, 126565],
      [126567, 126571],
      [126572, 126579],
      [126580, 126584],
      [126585, 126589],
      [126590, 126591],
      [126592, 126602],
      [126603, 126620],
      [126625, 126628],
      [126629, 126634],
      [126635, 126652],
      [126704, 126706],
    ],
    direction: "rtl",
    year: 400,
    living: true,
    link: "https://en.wikipedia.org/wiki/Arabic_script",
  },
  {
    name: "Imperial Aramaic",
    ranges: [
      [67648, 67670],
      [67671, 67680],
    ],
    direction: "rtl",
    year: 800,
    living: false,
    link: "https://en.wikipedia.org/wiki/Aramaic_alphabet",
  },
  {
    name: "Armenian",
    ranges: [
      [1329, 1367],
      [1369, 1376],
      [1377, 1416],
      [1418, 1419],
      [1421, 1424],
      [64275, 64280],
    ],
    direction: "ltr",
    year: 405,
    living: true,
    link: "https://en.wikipedia.org/wiki/Armenian_alphabet",
  },
  {
    name: "Avestan",
    ranges: [
      [68352, 68406],
      [68409, 68416],
    ],
    direction: "rtl",
    year: 400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Avestan_alphabet",
  },
  {
    name: "Balinese",
    ranges: [
      [6912, 6988],
      [6992, 7037],
    ],
    direction: "ltr",
    year: 1000,
    living: true,
    link: "https://en.wikipedia.org/wiki/Balinese_script",
  },
  {
    name: "Bamum",
    ranges: [
      [42656, 42744],
      [92160, 92729],
    ],
    direction: "ltr",
    year: 1896,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bamum_script",
  },
  {
    name: "Bassa Vah",
    ranges: [
      [92880, 92910],
      [92912, 92918],
    ],
    direction: "ltr",
    year: 1950,
    living: false,
    link: "https://en.wikipedia.org/wiki/Bassa_alphabet",
  },
  {
    name: "Batak",
    ranges: [
      [7104, 7156],
      [7164, 7168],
    ],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Batak_alphabet",
  },
  {
    name: "Bengali",
    ranges: [
      [2432, 2436],
      [2437, 2445],
      [2447, 2449],
      [2451, 2473],
      [2474, 2481],
      [2482, 2483],
      [2486, 2490],
      [2492, 2501],
      [2503, 2505],
      [2507, 2511],
      [2519, 2520],
      [2524, 2526],
      [2527, 2532],
      [2534, 2558],
    ],
    direction: "ltr",
    year: 1050,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bengali_alphabet",
  },
  {
    name: "Bhaiksuki",
    ranges: [
      [72704, 72713],
      [72714, 72759],
      [72760, 72774],
      [72784, 72813],
    ],
    direction: "ltr",
    year: 1050,
    living: false,
    link: "https://en.wikipedia.org/wiki/Bhaiksuki_alphabet",
  },
  {
    name: "Bopomofo",
    ranges: [
      [746, 748],
      [12549, 12591],
      [12704, 12731],
    ],
    direction: "ltr",
    year: 1918,
    living: true,
    link: "https://en.wikipedia.org/wiki/Bopomofo",
  },
  {
    name: "Brahmi",
    ranges: [
      [69632, 69710],
      [69714, 69744],
      [69759, 69760],
    ],
    direction: "ltr",
    year: -250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Brahmi_script",
  },
  {
    name: "Braille",
    ranges: [[10240, 10496]],
    direction: "ltr",
    year: 1824,
    living: true,
    link: "https://en.wikipedia.org/wiki/Braille",
  },
  {
    name: "Buginese",
    ranges: [
      [6656, 6684],
      [6686, 6688],
    ],
    direction: "ltr",
    year: 1650,
    living: true,
    link: "https://en.wikipedia.org/wiki/Lontara_script",
  },
  {
    name: "Buhid",
    ranges: [[5952, 5972]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Buhid_alphabet",
  },
  {
    name: "Chakma",
    ranges: [
      [69888, 69941],
      [69942, 69956],
    ],
    direction: "ltr",
    year: 1050,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chakma_alphabet",
  },
  {
    name: "Canadian Aboriginal",
    ranges: [
      [5120, 5760],
      [6320, 6390],
    ],
    direction: "ltr",
    year: 1840,
    living: true,
    link: "https://en.wikipedia.org/wiki/Canadian_Aboriginal_syllabics",
  },
  {
    name: "Carian",
    ranges: [[66208, 66257]],
    direction: "ltr",
    year: -650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Carian_alphabets",
  },
  {
    name: "Cham",
    ranges: [
      [43520, 43575],
      [43584, 43598],
      [43600, 43610],
      [43612, 43616],
    ],
    direction: "ltr",
    year: 750,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cham_alphabet",
  },
  {
    name: "Cherokee",
    ranges: [
      [5024, 5110],
      [5112, 5118],
      [43888, 43968],
    ],
    direction: "ltr",
    year: 1820,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cherokee_syllabary",
  },
  {
    name: "Coptic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },
  {
    name: "Cypriot",
    ranges: [
      [67584, 67590],
      [67592, 67593],
      [67594, 67638],
      [67639, 67641],
      [67644, 67645],
      [67647, 67648],
    ],
    direction: "rtl",
    year: -1100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Cypriot_syllabary",
  },
  {
    name: "Cyrillic",
    ranges: [
      [1024, 1157],
      [1159, 1328],
      [7296, 7305],
      [7467, 7468],
      [7544, 7545],
      [11744, 11776],
      [42560, 42656],
      [65070, 65072],
    ],
    direction: "ltr",
    year: 950,
    living: true,
    link: "https://en.wikipedia.org/wiki/Cyrillic_script",
  },
  {
    name: "Devanagari",
    ranges: [
      [2304, 2385],
      [2387, 2404],
      [2406, 2432],
      [43232, 43262],
    ],
    direction: "ltr",
    year: 100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Devanagari",
  },
  {
    name: "Deseret",
    ranges: [[66560, 66640]],
    direction: "ltr",
    year: 1854,
    living: true,
    link: "https://en.wikipedia.org/wiki/Deseret_alphabet",
  },
  {
    name: "Duployan",
    ranges: [
      [113664, 113771],
      [113776, 113789],
      [113792, 113801],
      [113808, 113818],
      [113820, 113824],
    ],
    direction: "ltr",
    year: 1860,
    living: true,
    link: "https://en.wikipedia.org/wiki/Duployan_shorthand",
  },
  {
    name: "Egyptian Hieroglyphs",
    ranges: [[77824, 78895]],
    direction: "ltr",
    year: -3200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Egyptian_hieroglyphs",
  },
  {
    name: "Elbasan",
    ranges: [[66816, 66856]],
    direction: "ltr",
    year: 1750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Elbasan_alphabet",
  },
  {
    name: "Ethiopic",
    ranges: [
      [4608, 4681],
      [4682, 4686],
      [4688, 4695],
      [4696, 4697],
      [4698, 4702],
      [4704, 4745],
      [4746, 4750],
      [4752, 4785],
      [4786, 4790],
      [4792, 4799],
      [4800, 4801],
      [4802, 4806],
      [4808, 4823],
      [4824, 4881],
      [4882, 4886],
      [4888, 4955],
      [4957, 4989],
      [4992, 5018],
      [11648, 11671],
      [11680, 11687],
      [11688, 11695],
      [11696, 11703],
      [11704, 11711],
      [11712, 11719],
      [11720, 11727],
      [11728, 11735],
      [11736, 11743],
      [43777, 43783],
      [43785, 43791],
      [43793, 43799],
      [43808, 43815],
      [43816, 43823],
    ],
    direction: "ltr",
    year: -900,
    living: true,
    link: "https://en.wikipedia.org/wiki/Ge%27ez_script",
  },
  {
    name: "Georgian",
    ranges: [
      [4256, 4294],
      [4295, 4296],
      [4301, 4302],
      [4304, 4347],
      [4348, 4352],
      [11520, 11558],
      [11559, 11560],
      [11565, 11566],
    ],
    direction: "ltr",
    year: 430,
    living: true,
    link: "https://en.wikipedia.org/wiki/Georgian_scripts",
  },
  {
    name: "Glagolitic",
    ranges: [
      [11264, 11311],
      [11312, 11359],
      [122880, 122887],
      [122888, 122905],
      [122907, 122914],
      [122915, 122917],
      [122918, 122923],
    ],
    direction: "ltr",
    year: 862,
    living: false,
    link: "https://en.wikipedia.org/wiki/Glagolitic_script",
  },
  {
    name: "Masaram Gondi",
    ranges: [
      [72960, 72967],
      [72968, 72970],
      [72971, 73015],
      [73018, 73019],
      [73020, 73022],
      [73023, 73032],
      [73040, 73050],
    ],
    direction: "ltr",
    year: 1918,
    living: true,
    link: "https://en.wikipedia.org/wiki/Gondi_writing#Masaram",
  },
  {
    name: "Gothic",
    ranges: [[66352, 66379]],
    direction: "ltr",
    year: 350,
    living: false,
    link: "https://en.wikipedia.org/wiki/Gothic_alphabet",
  },
  {
    name: "Grantha",
    ranges: [
      [70400, 70404],
      [70405, 70413],
      [70415, 70417],
      [70419, 70441],
      [70442, 70449],
      [70450, 70452],
      [70453, 70458],
      [70460, 70469],
      [70471, 70473],
      [70475, 70478],
      [70480, 70481],
      [70487, 70488],
      [70493, 70500],
      [70502, 70509],
      [70512, 70517],
    ],
    direction: "ltr",
    year: 550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Grantha_alphabet",
  },
  {
    name: "Greek",
    ranges: [
      [880, 884],
      [885, 888],
      [890, 894],
      [895, 896],
      [900, 901],
      [902, 903],
      [904, 907],
      [908, 909],
      [910, 930],
      [931, 994],
      [1008, 1024],
      [7462, 7467],
      [7517, 7522],
      [7526, 7531],
      [7615, 7616],
      [7936, 7958],
      [7960, 7966],
      [7968, 8006],
      [8008, 8014],
      [8016, 8024],
      [8025, 8026],
      [8027, 8028],
      [8029, 8030],
      [8031, 8062],
      [8064, 8117],
      [8118, 8133],
      [8134, 8148],
      [8150, 8156],
      [8157, 8176],
      [8178, 8181],
      [8182, 8191],
      [8486, 8487],
      [43877, 43878],
      [65856, 65935],
      [65952, 65953],
      [119296, 119366],
    ],
    direction: "ltr",
    year: -800,
    living: true,
    link: "https://en.wikipedia.org/wiki/Greek_alphabet",
  },
  {
    name: "Gujarati",
    ranges: [
      [2689, 2692],
      [2693, 2702],
      [2703, 2706],
      [2707, 2729],
      [2730, 2737],
      [2738, 2740],
      [2741, 2746],
      [2748, 2758],
      [2759, 2762],
      [2763, 2766],
      [2768, 2769],
      [2784, 2788],
      [2790, 2802],
      [2809, 2816],
    ],
    direction: "ltr",
    year: 1592,
    living: true,
    link: "https://en.wikipedia.org/wiki/Gujarati_alphabet",
  },
  {
    name: "Gurmukhi",
    ranges: [
      [2561, 2564],
      [2565, 2571],
      [2575, 2577],
      [2579, 2601],
      [2602, 2609],
      [2610, 2612],
      [2613, 2615],
      [2616, 2618],
      [2620, 2621],
      [2622, 2627],
      [2631, 2633],
      [2635, 2638],
      [2641, 2642],
      [2649, 2653],
      [2654, 2655],
      [2662, 2678],
    ],
    direction: "ltr",
    year: 1550,
    living: true,
    link: "https://en.wikipedia.org/wiki/Gurmukh%C4%AB_alphabet",
  },
  {
    name: "Hangul",
    ranges: [
      [4352, 4608],
      [12334, 12336],
      [12593, 12687],
      [12800, 12831],
      [12896, 12927],
      [43360, 43389],
      [44032, 55204],
      [55216, 55239],
      [55243, 55292],
      [65440, 65471],
      [65474, 65480],
      [65482, 65488],
      [65490, 65496],
      [65498, 65501],
    ],
    direction: "ltr",
    year: 1443,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hangul",
  },
  {
    name: "Han",
    ranges: [
      [11904, 11930],
      [11931, 12020],
      [12032, 12246],
      [12293, 12294],
      [12295, 12296],
      [12321, 12330],
      [12344, 12348],
      [13312, 19894],
      [19968, 40939],
      [63744, 64110],
      [64112, 64218],
      [131072, 173783],
      [173824, 177973],
      [177984, 178206],
      [178208, 183970],
      [183984, 191457],
      [194560, 195102],
    ],
    direction: "ltr",
    year: -1100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Chinese_characters",
  },
  {
    name: "Hanunoo",
    ranges: [[5920, 5941]],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hanun%C3%B3%27o_alphabet",
  },
  {
    name: "Hatran",
    ranges: [
      [67808, 67827],
      [67828, 67830],
      [67835, 67840],
    ],
    direction: "rtl",
    year: -40,
    living: false,
    link: "https://en.wikipedia.org/wiki/Hatran_alphabet",
  },
  {
    name: "Hebrew",
    ranges: [
      [1425, 1480],
      [1488, 1515],
      [1520, 1525],
      [64285, 64311],
      [64312, 64317],
      [64318, 64319],
      [64320, 64322],
      [64323, 64325],
      [64326, 64336],
    ],
    direction: "rtl",
    year: -100,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hebrew_alphabet",
  },
  {
    name: "Hiragana",
    ranges: [
      [12353, 12439],
      [12445, 12448],
      [110593, 110879],
      [127488, 127489],
    ],
    direction: "ltr",
    year: 800,
    living: true,
    link: "https://en.wikipedia.org/wiki/Hiragana",
  },
  {
    name: "Anatolian Hieroglyphs",
    ranges: [[82944, 83527]],
    direction: "ltr",
    year: -1400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Anatolian_hieroglyphs",
  },
  {
    name: "Pahawh Hmong",
    ranges: [
      [92928, 92998],
      [93008, 93018],
      [93019, 93026],
      [93027, 93048],
      [93053, 93072],
    ],
    direction: "ltr",
    year: 1959,
    living: true,
    link: "https://en.wikipedia.org/wiki/Pahawh_Hmong",
  },
  {
    name: "Old Hungarian",
    ranges: [
      [68736, 68787],
      [68800, 68851],
      [68858, 68864],
    ],
    direction: "rtl",
    year: 1150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Hungarian_alphabet",
  },
  {
    name: "Old Italic",
    ranges: [
      [66304, 66340],
      [66349, 66352],
    ],
    direction: "ltr",
    year: -750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Italic_script",
  },
  {
    name: "Javanese",
    ranges: [
      [43392, 43470],
      [43472, 43482],
      [43486, 43488],
    ],
    direction: "ltr",
    year: 1250,
    living: true,
    link: "https://en.wikipedia.org/wiki/Javanese_script",
  },
  {
    name: "Kayah Li",
    ranges: [
      [43264, 43310],
      [43311, 43312],
    ],
    direction: "ltr",
    year: 1962,
    living: true,
    link: "https://en.wikipedia.org/wiki/Kayah_Li_alphabet",
  },
  {
    name: "Katakana",
    ranges: [
      [12449, 12539],
      [12541, 12544],
      [12784, 12800],
      [13008, 13055],
      [13056, 13144],
      [65382, 65392],
      [65393, 65438],
      [110592, 110593],
    ],
    direction: "ltr",
    year: 800,
    living: true,
    link: "https://en.wikipedia.org/wiki/Katakana",
  },
  {
    name: "Kharoshthi",
    ranges: [
      [68096, 68100],
      [68101, 68103],
      [68108, 68116],
      [68117, 68120],
      [68121, 68148],
      [68152, 68155],
      [68159, 68168],
      [68176, 68185],
    ],
    direction: "rtl",
    year: -400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Kharosthi",
  },
  {
    name: "Khmer",
    ranges: [
      [6016, 6110],
      [6112, 6122],
      [6128, 6138],
      [6624, 6656],
    ],
    direction: "ltr",
    year: 611,
    living: true,
    link: "https://en.wikipedia.org/wiki/Khmer_alphabet",
  },
  {
    name: "Khojki",
    ranges: [
      [70144, 70162],
      [70163, 70207],
    ],
    direction: "ltr",
    year: 1520,
    living: false,
    link: "https://en.wikipedia.org/wiki/Khojki_script",
  },
  {
    name: "Kannada",
    ranges: [
      [3200, 3204],
      [3205, 3213],
      [3214, 3217],
      [3218, 3241],
      [3242, 3252],
      [3253, 3258],
      [3260, 3269],
      [3270, 3273],
      [3274, 3278],
      [3285, 3287],
      [3294, 3295],
      [3296, 3300],
      [3302, 3312],
      [3313, 3315],
    ],
    direction: "ltr",
    year: 450,
    living: true,
    link: "https://en.wikipedia.org/wiki/Kannada_alphabet",
  },
  {
    name: "Kaithi",
    ranges: [[69760, 69826]],
    direction: "ltr",
    year: 1550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Kaithi",
  },
  {
    name: "Tai Tham",
    ranges: [
      [6688, 6751],
      [6752, 6781],
      [6783, 6794],
      [6800, 6810],
      [6816, 6830],
    ],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tai_Tham_alphabet",
  },
  {
    name: "Lao",
    ranges: [
      [3713, 3715],
      [3716, 3717],
      [3719, 3721],
      [3722, 3723],
      [3725, 3726],
      [3732, 3736],
      [3737, 3744],
      [3745, 3748],
      [3749, 3750],
      [3751, 3752],
      [3754, 3756],
      [3757, 3770],
      [3771, 3774],
      [3776, 3781],
      [3782, 3783],
      [3784, 3790],
      [3792, 3802],
      [3804, 3808],
    ],
    direction: "ltr",
    year: 1350,
    living: true,
    link: "https://en.wikipedia.org/wiki/Lao_alphabet",
  },
  {
    name: "Latin",
    ranges: [
      [65, 91],
      [97, 123],
      [170, 171],
      [186, 187],
      [192, 215],
      [216, 247],
      [248, 697],
      [736, 741],
      [7424, 7462],
      [7468, 7517],
      [7522, 7526],
      [7531, 7544],
      [7545, 7615],
      [7680, 7936],
      [8305, 8306],
      [8319, 8320],
      [8336, 8349],
      [8490, 8492],
      [8498, 8499],
      [8526, 8527],
      [8544, 8585],
      [11360, 11392],
      [42786, 42888],
      [42891, 42927],
      [42928, 42936],
      [42999, 43008],
      [43824, 43867],
      [43868, 43877],
      [64256, 64263],
      [65313, 65339],
      [65345, 65371],
    ],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_script",
  },
  {
    name: "Lepcha",
    ranges: [
      [7168, 7224],
      [7227, 7242],
      [7245, 7248],
    ],
    direction: "ltr",
    year: 1700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Lepcha_alphabet",
  },
  {
    name: "Limbu",
    ranges: [
      [6400, 6431],
      [6432, 6444],
      [6448, 6460],
      [6464, 6465],
      [6468, 6480],
    ],
    direction: "ltr",
    year: 1740,
    living: true,
    link: "https://en.wikipedia.org/wiki/Limbu_alphabet",
  },
  {
    name: "Linear A",
    ranges: [
      [67072, 67383],
      [67392, 67414],
      [67424, 67432],
    ],
    direction: "ltr",
    year: -2500,
    living: false,
    link: "https://en.wikipedia.org/wiki/Linear_A",
  },
  {
    name: "Linear B",
    ranges: [
      [65536, 65548],
      [65549, 65575],
      [65576, 65595],
      [65596, 65598],
      [65599, 65614],
      [65616, 65630],
      [65664, 65787],
    ],
    direction: "ltr",
    year: -1450,
    living: false,
    link: "https://en.wikipedia.org/wiki/Linear_B",
  },
  {
    name: "Lisu",
    ranges: [[42192, 42240]],
    direction: "ltr",
    year: 1915,
    living: true,
    link: "https://en.wikipedia.org/wiki/Fraser_alphabet",
  },
  {
    name: "Lycian",
    ranges: [[66176, 66205]],
    direction: "ltr",
    year: -500,
    living: false,
    link: "https://en.wikipedia.org/wiki/Lycian_alphabet",
  },
  {
    name: "Lydian",
    ranges: [
      [67872, 67898],
      [67903, 67904],
    ],
    direction: "rtl",
    year: -700,
    living: false,
    link: "https://en.wikipedia.org/wiki/Lydian_alphabet",
  },
  {
    name: "Mahajani",
    ranges: [[69968, 70007]],
    direction: "ltr",
    year: 1150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Mahajani",
  },
  {
    name: "Mandaic",
    ranges: [
      [2112, 2140],
      [2142, 2143],
    ],
    direction: "rtl",
    year: 200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mandaic_alphabet",
  },
  {
    name: "Manichaean",
    ranges: [
      [68288, 68327],
      [68331, 68343],
    ],
    direction: "rtl",
    year: 250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Manichaean_alphabet",
  },
  {
    name: "Marchen",
    ranges: [
      [72816, 72848],
      [72850, 72872],
      [72873, 72887],
    ],
    direction: "ltr",
    year: 650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Zhang-Zhung_language#Scripts",
  },
  {
    name: "Mende Kikakui",
    ranges: [
      [124928, 125125],
      [125127, 125143],
    ],
    direction: "rtl",
    year: 1880,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mende_Kikakui_script",
  },
  {
    name: "Meroitic Cursive",
    ranges: [
      [68000, 68024],
      [68028, 68048],
      [68050, 68096],
    ],
    direction: "rtl",
    year: -300,
    living: false,
    link: "https://en.wikipedia.org/wiki/Meroitic_alphabet",
  },
  {
    name: "Meroitic Hieroglyphs",
    ranges: [[67968, 68000]],
    direction: "rtl",
    year: -300,
    living: false,
    link: "https://en.wikipedia.org/wiki/Meroitic_alphabet",
  },
  {
    name: "Malayalam",
    ranges: [
      [3328, 3332],
      [3333, 3341],
      [3342, 3345],
      [3346, 3397],
      [3398, 3401],
      [3402, 3408],
      [3412, 3428],
      [3430, 3456],
    ],
    direction: "ltr",
    year: 830,
    living: true,
    link: "https://en.wikipedia.org/wiki/Malayalam_script",
  },
  {
    name: "Modi",
    ranges: [
      [71168, 71237],
      [71248, 71258],
    ],
    direction: "ltr",
    year: 1200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Modi_alphabet",
  },
  {
    name: "Mongolian",
    ranges: [
      [6144, 6146],
      [6148, 6149],
      [6150, 6159],
      [6160, 6170],
      [6176, 6264],
      [6272, 6315],
      [71264, 71277],
    ],
    direction: "ttb",
    year: 1204,
    living: false,
    link: "https://en.wikipedia.org/wiki/Mongolian_script",
  },
  {
    name: "Mro",
    ranges: [
      [92736, 92767],
      [92768, 92778],
      [92782, 92784],
    ],
    direction: "ltr",
    year: 1985,
    living: true,
    link: "https://en.wikipedia.org/wiki/Mru_language#Alphabet",
  },
  {
    name: "Meetei Mayek",
    ranges: [
      [43744, 43767],
      [43968, 44014],
      [44016, 44026],
    ],
    direction: "ltr",
    year: 200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Meitei_script",
  },
  {
    name: "Multani",
    ranges: [
      [70272, 70279],
      [70280, 70281],
      [70282, 70286],
      [70287, 70302],
      [70303, 70314],
    ],
    direction: "ltr",
    year: 1750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Multani_alphabet",
  },
  {
    name: "Myanmar",
    ranges: [
      [4096, 4256],
      [43488, 43519],
      [43616, 43648],
    ],
    direction: "ltr",
    year: 984,
    living: true,
    link: "https://en.wikipedia.org/wiki/Burmese_alphabet",
  },
  {
    name: "Old North Arabian",
    ranges: [[68224, 68256]],
    direction: "rtl",
    year: 750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ancient_North_Arabian",
  },
  {
    name: "Nabataean",
    ranges: [
      [67712, 67743],
      [67751, 67760],
    ],
    direction: "rtl",
    year: 150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Nabataean_alphabet",
  },
  {
    name: "Newa",
    ranges: [
      [70656, 70746],
      [70747, 70748],
      [70749, 70750],
    ],
    direction: "ltr",
    year: 1000,
    living: true,
    link: "https://en.wikipedia.org/wiki/Prachalit_Nepal_alphabet",
  },
  {
    name: "Nko",
    ranges: [[1984, 2043]],
    direction: "rtl",
    year: 1949,
    living: false,
    link: "https://en.wikipedia.org/wiki/N%27Ko_alphabet",
  },
  {
    name: "Nushu",
    ranges: [
      [94177, 94178],
      [110960, 111356],
    ],
    direction: "ltr",
    year: 1500,
    living: true,
    link: "https://en.wikipedia.org/wiki/N%C3%BCshu_script",
  },
  {
    name: "Ogham",
    ranges: [[5760, 5789]],
    direction: "ltr",
    year: 350,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ogham",
  },
  {
    name: "Ol Chiki",
    ranges: [[7248, 7296]],
    direction: "ltr",
    year: 1925,
    living: true,
    link: "https://en.wikipedia.org/wiki/Ol_Chiki_script",
  },
  {
    name: "Old Turkic",
    ranges: [[68608, 68681]],
    direction: "rtl",
    year: 750,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Turkic_alphabet",
  },
  {
    name: "Oriya",
    ranges: [
      [2817, 2820],
      [2821, 2829],
      [2831, 2833],
      [2835, 2857],
      [2858, 2865],
      [2866, 2868],
      [2869, 2874],
      [2876, 2885],
      [2887, 2889],
      [2891, 2894],
      [2902, 2904],
      [2908, 2910],
      [2911, 2916],
      [2918, 2936],
    ],
    direction: "ltr",
    year: 1060,
    living: true,
    link: "https://en.wikipedia.org/wiki/Odia_alphabet",
  },
  {
    name: "Osage",
    ranges: [
      [66736, 66772],
      [66776, 66812],
    ],
    direction: "ltr",
    year: 2006,
    living: true,
    link: "https://en.wikipedia.org/wiki/Osage_alphabet",
  },
  {
    name: "Osmanya",
    ranges: [
      [66688, 66718],
      [66720, 66730],
    ],
    direction: "ltr",
    year: 1920,
    living: true,
    link: "https://en.wikipedia.org/wiki/Osmanya_alphabet",
  },
  {
    name: "Palmyrene",
    ranges: [[67680, 67712]],
    direction: "rtl",
    year: -100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Palmyrene_alphabet",
  },
  {
    name: "Pau Cin Hau",
    ranges: [[72384, 72441]],
    direction: "ltr",
    year: 1900,
    living: true,
    link: "https://en.wikipedia.org/wiki/Pau_Cin_Hau",
  },
  {
    name: "Old Permic",
    ranges: [[66384, 66427]],
    direction: "ltr",
    year: 1372,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Permic_alphabet",
  },
  {
    name: "Phags-pa",
    ranges: [
      [43072, 43123],
      [43124, 43127],
    ],
    direction: "ttb",
    year: 1269,
    living: false,
    link: "https://en.wikipedia.org/wiki/%27Phags-pa_script",
  },
  {
    name: "Inscriptional Pahlavi",
    ranges: [
      [68448, 68467],
      [68472, 68480],
    ],
    direction: "rtl",
    year: -171,
    living: false,
    link: "https://en.wikipedia.org/wiki/Inscriptional_Pahlavi",
  },
  {
    name: "Psalter Pahlavi",
    ranges: [
      [68480, 68498],
      [68505, 68509],
      [68521, 68528],
    ],
    direction: "rtl",
    year: 550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Psalter_Pahlavi",
  },
  {
    name: "Phoenician",
    ranges: [
      [67840, 67868],
      [67871, 67872],
    ],
    direction: "rtl",
    year: -1200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Phoenician_alphabet",
  },
  {
    name: "Miao",
    ranges: [
      [93952, 94021],
      [94032, 94079],
      [94095, 94112],
    ],
    direction: "ltr",
    year: 1936,
    living: true,
    link: "https://en.wikipedia.org/wiki/Pollard_script",
  },
  {
    name: "Inscriptional Parthian",
    ranges: [
      [68416, 68438],
      [68440, 68448],
    ],
    direction: "rtl",
    year: -250,
    living: false,
    link: "https://en.wikipedia.org/wiki/Inscriptional_Parthian",
  },
  {
    name: "Rejang",
    ranges: [
      [43312, 43348],
      [43359, 43360],
    ],
    direction: "ltr",
    year: 1750,
    living: true,
    link: "https://en.wikipedia.org/wiki/Rejang_script",
  },
  {
    name: "Runic",
    ranges: [
      [5792, 5867],
      [5870, 5881],
    ],
    direction: "ltr",
    year: 150,
    living: false,
    link: "https://en.wikipedia.org/wiki/Runes",
  },
  {
    name: "Samaritan",
    ranges: [
      [2048, 2094],
      [2096, 2111],
    ],
    direction: "rtl",
    year: -600,
    living: true,
    link: "https://en.wikipedia.org/wiki/Samaritan_alphabet",
  },
  {
    name: "Old South Arabian",
    ranges: [[68192, 68224]],
    direction: "rtl",
    year: -850,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ancient_South_Arabian_script",
  },
  {
    name: "Saurashtra",
    ranges: [
      [43136, 43206],
      [43214, 43226],
    ],
    direction: "ltr",
    year: 1920,
    living: true,
    link: "https://en.wikipedia.org/wiki/Saurashtra_alphabet",
  },
  {
    name: "SignWriting",
    ranges: [
      [120832, 121484],
      [121499, 121504],
      [121505, 121520],
    ],
    direction: "ttb",
    year: 1974,
    living: true,
    link: "https://en.wikipedia.org/wiki/SignWriting",
  },
  {
    name: "Shavian",
    ranges: [[66640, 66688]],
    direction: "ltr",
    year: 1960,
    living: true,
    link: "https://en.wikipedia.org/wiki/Shavian_alphabet",
  },
  {
    name: "Sharada",
    ranges: [
      [70016, 70094],
      [70096, 70112],
    ],
    direction: "ltr",
    year: 800,
    living: true,
    link: "https://en.wikipedia.org/wiki/%C5%9A%C4%81rad%C4%81_script",
  },
  {
    name: "Siddham",
    ranges: [
      [71040, 71094],
      [71096, 71134],
    ],
    direction: "ltr",
    year: 550,
    living: false,
    link: "https://en.wikipedia.org/wiki/Siddha%E1%B9%83_script",
  },
  {
    name: "Khudawadi",
    ranges: [
      [70320, 70379],
      [70384, 70394],
    ],
    direction: "ltr",
    year: 1550,
    living: true,
    link: "https://en.wikipedia.org/wiki/Khudabadi_script",
  },
  {
    name: "Sinhala",
    ranges: [
      [3458, 3460],
      [3461, 3479],
      [3482, 3506],
      [3507, 3516],
      [3517, 3518],
      [3520, 3527],
      [3530, 3531],
      [3535, 3541],
      [3542, 3543],
      [3544, 3552],
      [3558, 3568],
      [3570, 3573],
      [70113, 70133],
    ],
    direction: "ltr",
    year: 700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sinhalese_alphabet",
  },
  {
    name: "Sora Sompeng",
    ranges: [
      [69840, 69865],
      [69872, 69882],
    ],
    direction: "ltr",
    year: 1936,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sorang_Sompeng_alphabet",
  },
  {
    name: "Soyombo",
    ranges: [
      [72272, 72324],
      [72326, 72349],
      [72350, 72355],
    ],
    direction: "ltr",
    year: 1650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Soyombo_alphabet",
  },
  {
    name: "Sundanese",
    ranges: [
      [7040, 7104],
      [7360, 7368],
    ],
    direction: "ltr",
    year: 1350,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sundanese_script",
  },
  {
    name: "Syloti Nagri",
    ranges: [[43008, 43052]],
    direction: "ltr",
    year: 1303,
    living: true,
    link: "https://en.wikipedia.org/wiki/Sylheti_Nagari",
  },
  {
    name: "Syriac",
    ranges: [
      [1792, 1806],
      [1807, 1867],
      [1869, 1872],
      [2144, 2155],
    ],
    direction: "rtl",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Syriac_alphabet",
  },
  {
    name: "Tagbanwa",
    ranges: [
      [5984, 5997],
      [5998, 6001],
      [6002, 6004],
    ],
    direction: "ltr",
    year: 1300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tagbanwa_script",
  },
  {
    name: "Takri",
    ranges: [
      [71296, 71352],
      [71360, 71370],
    ],
    direction: "ltr",
    year: 1550,
    living: true,
    link: "https://en.wikipedia.org/wiki/Takri_alphabet",
  },
  {
    name: "Tai Le",
    ranges: [
      [6480, 6510],
      [6512, 6517],
    ],
    direction: "ltr",
    year: 1200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tai_Le_alphabet",
  },
  {
    name: "New Tai Lue",
    ranges: [
      [6528, 6572],
      [6576, 6602],
      [6608, 6619],
      [6622, 6624],
    ],
    direction: "ltr",
    year: 1950,
    living: true,
    link: "https://en.wikipedia.org/wiki/New_Tai_Lue_alphabet",
  },
  {
    name: "Tamil",
    ranges: [
      [2946, 2948],
      [2949, 2955],
      [2958, 2961],
      [2962, 2966],
      [2969, 2971],
      [2972, 2973],
      [2974, 2976],
      [2979, 2981],
      [2984, 2987],
      [2990, 3002],
      [3006, 3011],
      [3014, 3017],
      [3018, 3022],
      [3024, 3025],
      [3031, 3032],
      [3046, 3067],
    ],
    direction: "ltr",
    year: 700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tamil_script",
  },
  {
    name: "Tangut",
    ranges: [
      [94176, 94177],
      [94208, 100333],
      [100352, 101107],
    ],
    direction: "ltr",
    year: 1036,
    living: false,
    link: "https://en.wikipedia.org/wiki/Tangut_script",
  },
  {
    name: "Tai Viet",
    ranges: [
      [43648, 43715],
      [43739, 43744],
    ],
    direction: "ltr",
    year: 1200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tai_Dam_language#Writing_system",
  },
  {
    name: "Telugu",
    ranges: [
      [3072, 3076],
      [3077, 3085],
      [3086, 3089],
      [3090, 3113],
      [3114, 3130],
      [3133, 3141],
      [3142, 3145],
      [3146, 3150],
      [3157, 3159],
      [3160, 3163],
      [3168, 3172],
      [3174, 3184],
      [3192, 3200],
    ],
    direction: "ltr",
    year: -900,
    living: true,
    link: "https://en.wikipedia.org/wiki/Telugu_script",
  },
  {
    name: "Tifinagh",
    ranges: [
      [11568, 11624],
      [11631, 11633],
      [11647, 11648],
    ],
    direction: "ltr",
    year: -300,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tifinagh",
  },
  {
    name: "Tagalog",
    ranges: [
      [5888, 5901],
      [5902, 5909],
    ],
    direction: "ltr",
    year: 1250,
    living: true,
    link: "https://en.wikipedia.org/wiki/Baybayin",
  },
  {
    name: "Thaana",
    ranges: [[1920, 1970]],
    direction: "rtl",
    year: 1599,
    living: true,
    link: "https://en.wikipedia.org/wiki/Thaana",
  },
  {
    name: "Thai",
    ranges: [
      [3585, 3643],
      [3648, 3676],
    ],
    direction: "ltr",
    year: 1283,
    living: true,
    link: "https://en.wikipedia.org/wiki/Thai_alphabet",
  },
  {
    name: "Tibetan",
    ranges: [
      [3840, 3912],
      [3913, 3949],
      [3953, 3992],
      [3993, 4029],
      [4030, 4045],
      [4046, 4053],
      [4057, 4059],
    ],
    direction: "ltr",
    year: 650,
    living: false,
    link: "https://en.wikipedia.org/wiki/Tibetan_alphabet",
  },
  {
    name: "Tirhuta",
    ranges: [
      [70784, 70856],
      [70864, 70874],
    ],
    direction: "ltr",
    year: 1450,
    living: true,
    link: "https://en.wikipedia.org/wiki/Tirhuta",
  },
  {
    name: "Ugaritic",
    ranges: [
      [66432, 66462],
      [66463, 66464],
    ],
    direction: "ltr",
    year: -1400,
    living: false,
    link: "https://en.wikipedia.org/wiki/Ugaritic_alphabet",
  },
  {
    name: "Vai",
    ranges: [[42240, 42540]],
    direction: "ltr",
    year: 1830,
    living: true,
    link: "https://en.wikipedia.org/wiki/Vai_syllabary",
  },
  {
    name: "Warang Citi",
    ranges: [
      [71840, 71923],
      [71935, 71936],
    ],
    direction: "ltr",
    year: 1946,
    living: true,
    link: "https://en.wikipedia.org/wiki/Warang_Citi",
  },
  {
    name: "Old Persian",
    ranges: [
      [66464, 66500],
      [66504, 66518],
    ],
    direction: "ltr",
    year: -525,
    living: false,
    link: "https://en.wikipedia.org/wiki/Old_Persian_cuneiform",
  },
  {
    name: "Cuneiform",
    ranges: [
      [73728, 74650],
      [74752, 74863],
      [74864, 74869],
      [74880, 75076],
    ],
    direction: "ltr",
    year: -3050,
    living: false,
    link: "https://en.wikipedia.org/wiki/Cuneiform_script",
  },
  {
    name: "Yi",
    ranges: [
      [40960, 42125],
      [42128, 42183],
    ],
    direction: "ltr",
    year: 1450,
    living: true,
    link: "https://en.wikipedia.org/wiki/Yi_script",
  },
  {
    name: "Zanabazar Square",
    ranges: [[72192, 72264]],
    direction: "ltr",
    year: 1700,
    living: false,
    link: "https://en.wikipedia.org/wiki/Mongolian_writing_systems#Horizontal_square_script",
  },
];

// This makes sure the data is exported in node.js —
// `require('./path/to/scripts.js')` will get you the array.
if (
  typeof module != "undefined" &&
  module.exports &&
  (typeof window == "undefined" || window.exports != exports)
)
  module.exports = SCRIPTS;
if (typeof global != "undefined" && !global.SCRIPTS) global.SCRIPTS = SCRIPTS;

//function will return all the living langauges, the languages that are still in use
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      // here we merely have to test to is what is the value of the boolean for this element object
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, (script) => script.living)); // when the function value is called, the script parameter takes on the value of the element parameter in the filter function definition

console.log(SCRIPTS.filter((s) => s.direction === "ttb")); // returns an array , a new one, it is a pure function of the elements that match this condition

//mapping an input array to an output array
// can help us to have an array of only names from array that came from our filtering
function map(array, transform) {
  // i guess this is the structure of the map function
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction === "ttb");
console.log(map(rtlScripts, (s) => s.name)); // we will return a new array from the old array, transforming or running the function transform on each element to produce the new array.

//the reduce high order operation ,it works on an array and returns just one value from it
function reduce(array, combine, start) {
  let current = start; // start is the starting total i guess
  for (let element of array) {
    current = combine(current, element);
    //current = current + element;, we shall difine this in a function 'combine'
  }
  return current;
}

console.log(reduce(range(1, 10, 1), (a, b) => a + b, 0));

//useful functions for me code here
function range(start, end, step) {
  if (step == null) step = 1; //when the step is not given then its value is null,
  // can't we just do step = 1 in the function definition?
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step) array.push(i);
  } else {
    //step is negative
    for (var i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) total += array[i];
  return total;
}

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(range(1, 5, 1).reduce((a, b) => a + b)); // can leave out the starting index on the standard function. the reduce function is a method of the array so we dont pass the array argument, we just need to provide the parameter on which we are combining and the paramter for running through the array

console.log(
  "trying to write a max function using reduce: ",
  range(1, 50, 5).reduce((a, b) => (a >= b ? a : b))
);
// it worked.

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
  // the elements of the ranges array property is a script are arrays, here we destructure them to give names to their elements, but we shall run through all of them and add their length to count

  // the zero at the end is for the starting value of count, the variable we are adding to, if you dont provide it, the first element in the array will be the starting value of the variable 'count' on which we are combining to
}

console.log(
  "the langauge with the longest ranges is : ",
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) > characterCount(b) ? a : b;
  })
); // we compare the character counts of two consecutive scripts and save the larger one in the varibles 'a' on which we build and which we hope to return.
// a, and b are scripts. here we dont provide a start because we want the first script to be the starting value for a.

//calculating the average of both the living and dead languages using the filter, map and reduce functions

//average of any general array of numbers
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
  // we get the sum using array.reduce() then divide by the array length
  //we combine upon a
  // we use variable b to loop through the array
}

//we filter out the living ones, map them to a new array that has only their years, then get its average
console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);

//we filter out the dead ones, map them to a new array that has only their years of origin then we find the average of that new array that only contains the years of origin
console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);
//we found out that on average the dead languages are older than the living ones because their year of origin is smaller.

//shorter version of program to accout the average origin year of the living ones
let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}

console.log(Math.round(total / count));

function characterScript(code) {
  for (let script of SCRIPTS) {
    //the some function is a higher order function that tells you whether the function you give it return true for any of the elements of the array
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      //we check if the character code is in the range of this script
      return script;
    }
  }

  return null; //else it is not in this script
}

console.log(characterScript(121));

//two emoji characters
let horseShoe = "🐴👞";
console.log(horseShoe);

console.log(horseShoe.length); // it says the two characters are of length 4 even if they are just two of them, this is because each uses 16*2 bits and so JS thinks each of them is 2 characters instead of one

console.log(horseShoe[0]); // will be an invalid character because the algorithm for picking characters from a string uses the wrong fact that each letter is only 16 bits long

console.log(horseShoe.charCodeAt(0)); // returns code units. just 16 bits regardless of if the character is 16*2 bits long or not

console.log(horseShoe.codePointAt(0)); //gives the character code of the whole horse emoji
//knows when the character is 16 bits or 16*2 bits long

let roseDragon = "🌹🐲";
for (let char of roseDragon) {
  // for / of loop returns character codes not code units.. like codePointAt functions.. returns the charater code at the index point you give it.
  console.log(char);
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item); // get the name of the script of the character we are looking at
    let known = counts.findIndex((c) => c.name == name); // find the index of the script where the character belongs
    if (known == -1) {
      // the script object is not already in the array
      counts.push({ name, count: 1 }); // name is added as a property name and it take the value of the name parameter
    } else {
      // the script object count is already known and its index is known
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2)); //we are using the names here as true or false
//we testing each number to see if it belong to the right of 2 or the left
// and then we are assinging it to either true or false property which the arrow function n => n>2 returns

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");
  // we can return the script or return null if it does not exist
  // if script is not null we return that script name
  //the we filter out the ones whose names we saved as null

  let total = scripts.reduce((n, { count }) => n + count, 0); // starting value of n  is zero and we are looping over the objects in the array scripts, but focusing on the property called count
  if (total == 0) return "No scripts found"; // the text you gave does not have any scripts that i know of

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)} % ${name}`; // we find the percentage of each of the scripts in the output array and save it in a string showing its percentage and its name
    })
    .join(", "); // we return a modified array out of the one we have, joined together into a string seperated by commas
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

function flattener(array) {
  //let result = [];
  return array.reduce((result, current) => result.concat(current), []); // i want it to start out an an empty array
}

// if you use braces for the arrow function you have to write the return key word
console.log(flattener([[1, 2, 3], [4, 5], [6]]));

/*Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.*/
function loop(value, testFunc, updateFunc, bodyFunc) {
  if (testFunc(value)) {
    //test function is false
    bodyFunc(value);
    return loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
  } else return;
}

//testing
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

//the every function... similar to the 'some' but returns true if every elememt of the array returns true for every element of the array

function every(array, func) {
  for (let item of array) {
    if (!func(item)) {
      return false;
    }
  }
  return true;
}

console.log(every([1, 2, 3, 4, 5], (n) => n > 2));

// using array.some ..return true if there is an element of the array that fails the func test, else return true

//every function return using the some function
const every2 = (array, func) => {
  return !array.some((item) => !func(item));
};
// it will tell us if any member of the array returns false when checked with our function
//i had to pass the function in an arrow function because i had to test it by reversing it

console.log(every2([1, 2, 3, 4, 5], (n) => n > 2));

function characterScriptDirection(char) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(
        ([from, to]) => char.codePointAt(0) >= from && char.codePointAt(0) < to
      )
    ) {
      return script.direction;
    }
  }
  return null;
}

console.log(characterScriptDirection("ي"));

function countGroups(collec, func) {
  let countArray = [];
  for (let item of collec) {
    let group = func(item);
    //need to check if i already have an object in my count array with this groupName
    let known = countArray.findIndex(({ groupName }) => groupName === group);
    if (known === -1) countArray.push({ groupName: group, count: 1 });
    else countArray[known].count++;
  }
  return countArray;
}

console.log(countGroups([1, 2, 3, 4, 5], (n) => n >= 3));

function dominantDirection(text) {
  // finds the dominant direction in a given text
  let directionCountArray = countGroups(text, characterScriptDirection).filter(
    ({ groupName }) => groupName !== null
  );

  let total = directionCountArray.reduce((n, { count }) => n + count, 0);
  console.log(`total ${total}`);
  let dominantPercentage = Math.max(
    ...directionCountArray.map(({ groupName, count }) =>
      Math.round((count / total) * 100)
    )
  );

  let scriptPercentages = directionCountArray.map(({ groupName, count }) => {
    return {
      groupName,
      percentage: Math.round((count / total) * 100),
    };
  });
  console.log(scriptPercentages);
  //we want to filter out the one with the highest percentage;
  let resultScript = scriptPercentages.filter(
    ({ percentage }) => percentage === dominantPercentage
  )[0].groupName;
  return resultScript;
  // let dominantDirection = console.log(directionCountArray);
  // console.log(dominantPercentage);
}

console.log(
  dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв", ᠦᠵᠢᠯ ,أيـ ـأيـ ـأي ')
);
console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
