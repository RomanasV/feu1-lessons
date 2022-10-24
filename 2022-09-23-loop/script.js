// console.log('- ' + 1 + '!');
// console.log('- ' + 2 + '!');
// console.log('- ' + 3 + '!');
// console.log('- ' + 4 + '!');
// console.log('- ' + 5 + '!');
// console.log('- ' + 6 + '!');
// console.log('- ' + 7 + '!');
// console.log('- ' + 8 + '!');
// console.log('- ' + 9 + '!');
// console.log('- ' + 10 + '!');
// console.log('- ' + 11 + '!');
// console.log('- ' + 12 + '!');
// console.log('- ' + 13 + '!');
// console.log('- ' + 14 + '!');
// console.log('- ' + 15 + '!');
// console.log('- ' + 16 + '!');
// console.log('- ' + 17 + '!');
// console.log('- ' + 18 + '!');
// console.log('- ' + 19 + '!');
// console.log('- ' + 20 + '!');

function count(num) {
  console.log('- ' + num + '...!!!');
}

// count(1);
// count(2);
// count(3);
// count(4);
// count(5);
// count(6);
// count(7);
// count(8);
// count(9);
// count(10);
// count(11);
// count(12);
// count(13);
// count(14);
// count(15);
// count(16);
// count(17);
// count(18);
// count(19);
// count(20);

// FOR CIKLAS (LOOP)
// 1. Iniciavimo žodis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukurtas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}

/**

for (kintamasis; sąlyga; kintamojo keitimas) {

}

 */

// for (let i = 1; i <= 20; i++) {
//   console.log('- ' + i + '!');
// }

// for (let i = 1; i <= 10; i++) {
//   count(i);
// }


function loop() {
  for (let i = 0; i < 20; i++) {
    // console.log(i);
    count(i);
  }
}

// loop();


// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:

// 1. Padaugina skaičių iš 2.
function task1() {
  for (let i = 1; i <= 100; i++) {
    console.log(i * 2);
  }
}

// task1();

// 2. Padaugina skaičių iš 5.
// 1 * 5 = 5
function task2() {
  for (let i = 1; i <= 100; i++) {
    console.log(i * 5);
  }
}

// task2();

// 3. Prideda prie skaičiaus 5.
// 1 + 5 = 6
function task3() {
  for (let i = 1; i <= 100; i++) {
    console.log(i + 5);
  }
}

// task3();

// 4. Atima iš skaičiaus 2.
// 1 - 2 = -1
function task4() {
  for (let i = 1; i <= 100; i++) {
    console.log(i - 2);
  }
}

// task4();

// 5. Pakelia skaičių kvadratu.
function task5() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i);
    // console.log(i**2);
    console.log(Math.pow(i, 2));
  }
}

// task5();

// 6. Pakelia skaičių kūbu.
function task6() {
  for (let i = 1; i <= 100; i++) {
    // console.log(i * i * i);
    // console.log(i**3);
    console.log(Math.pow(i, 3));
  }
}

// task6();


function task21() {
  for (let i = 100; i >= 1; i--) {
    console.log(i * 2);
  }
}

// task21();

function task22() {
  for (let i = 100; i >= 1; i--) {
    console.log(i * 5);
  }
}

// task22();

function task23() {
  for (let i = 100; i >= 1; i--) {
    console.log(i + 5);
  }
}

// task23();

function task24() {
  for (let i = 100; i >= 1; i--) {
    console.log(i - 2);
  }
}

// task24();

function task25() {
  for (let i = 100; i >= 1; i--) {
    console.log(i**2);
  }
}

// task25();

function task26() {
  for (let i = 100; i >= 1; i--) {
    console.log(Math.pow(i, 3));
  }
}

// task26();


// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų kiek kartų ciklas turi kartotis.
// 9.2. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.

function task31(start, end, nth) {
  for (let i = start; i <= end; i++) {
    if (i % nth === 0) {
      // console.log(`${i} * 2 = ${i * 2}`);
      let result = i * 2;
      let output = `${i} * 2 = ${result}`;
      console.log(output);
    }
  }
}

// task31(10, 50, 5);

function task2(start, count, nth) {
  let end = start + count;
  for (let i = start; i < end; i += nth) {
    // console.log(i * 5);
    let result = i * 5;
    let output = `${i} * 5 = ${result}`;
    console.log(output);
  }
}

// task2(1, 50, 10);

// FIZZ BUZZ
console.log('-----------------FIZZ BUZZ------------------');

// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

function fizzBuzzTask1() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzzTask1();

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// function fizzBuzzTask2() {
//   for (let i = 1; i <= 150; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
//       console.log('FizzBuzzBiff');
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 5 === 0 && i % 7 === 0) {
//       console.log('BuzzBiff');
//     } else if (i % 3 === 0 && i % 7 === 0) {
//       console.log('FizzBiff');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else if (i % 7 === 0) {
//       console.log('Biff');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzzTask2();

function fizzBuzzTask3() {
  for (let i = 1; i <= 150; i++) {
    let output = '';

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      output = 'FizzBuzzBiff';
    } else if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz';
    } else if (i % 5 === 0 && i % 7 === 0) {
      output = 'BuzzBiff';
    } else if (i % 3 === 0 && i % 7 === 0) {
      output = 'FizzBiff';
    } else if (i % 3 === 0) {
      output = 'Fizz';
    } else if (i % 5 === 0) {
      output = 'Buzz';
    } else if (i % 7 === 0) {
      output = 'Biff';
    } else {
      output = i;
    }

    console.log(output);
  }
}

// fizzBuzzTask3();

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

function fizzBuzzTask4() {
  for (let i = 1; i <= 150; i++) {
    let output = '';

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'FizzBuzzBiffFuzz';
    } else if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
      output = 'FizzBuzzFuzz';
    } else if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'FizzBiffFuzz';
    } else if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'BuzzBiffFuzz';
    } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      output = 'FizzBuzzBiff';
    } else if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz';
    } else if (i % 5 === 0 && i % 7 === 0) {
      output = 'BuzzBiff';
    } else if (i % 3 === 0 && i % 7 === 0) {
      output = 'FizzBiff';
    } else if (i % 3 === 0 && i % 9 === 0) {
      output = 'FizzFuzz';
    } else if (i % 5 === 0 && i % 9 === 0) {
      output = 'BuzzFuzz';
    } else if (i % 7 === 0 && i % 9 === 0) {
      output = 'BiffFuzz';
    } else if (i % 3 === 0) {
      output = 'Fizz';
    } else if (i % 5 === 0) {
      output = 'Buzz';
    } else if (i % 7 === 0) {
      output = 'Biff';
    } else if (i % 9 === 0) {
      output = 'Fuzz';
    } else {
      output = i;
    }

    console.log(output);
  }
}

// fizzBuzzTask4();


// Tarpinis variantas - nerekomenduotinas
function fizzBuzzTask5() {
  for (let i = 1; i <= 150; i++) {
    let output = i;

    if (i % 3 === 0) {
      output = 'Fizz';
    }

    if (i % 5 === 0) {
      output = 'Buzz';
    }

    if (i % 7 === 0) {
      output = 'Biff';
    }

    if (i % 9 === 0) {
      output = 'Fuzz';
    }

    if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz';
    }

    if (i % 3 === 0 && i % 7 === 0) {
      output = 'FizzBiff';
    }

    if (i % 3 === 0 && i % 9 === 0) {
      output = 'FizzFuzz';
    }

    if (i % 5 === 0 && i % 7 === 0) {
      output = 'BuzzBiff';
    }

    if (i % 5 === 0 && i % 9 === 0) {
      output = 'BuzzFuzz';
    }

    if (i % 7 === 0 && i % 9 === 0) {
      output = 'BiffFuzz';
    }

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      output = 'FizzBuzzBiff';
    }

    if (i % 3 === 0 && i % 5 === 0 && i % 9 === 0) {
      output = 'FizzBuzzFuzz';
    }

    if (i % 3 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'FizzBiffFuzz';
    }

    if (i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'BuzzBiffFuzz';
    }

    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
      output = 'FizzBuzzBiffFuzz';
    }

    console.log(output);
  }
}

// fizzBuzzTask5();

// 7. Skaičiai, kurie dalinasi iš 11, turi būti pakeisti į žodį „Bizz".
function fizzBuzzTask6() {
  for (let i = 1; i <= 1500; i++) {
    let output = '';

    if (i % 3 === 0) {
      // output = output + 'Fizz';
      output += 'Fizz';
    }

    if (i % 5 === 0) {
      output += 'Buzz';
    }

    if (i % 7 === 0) {
      output += 'Biff';
    }

    if (i % 9 === 0) {
      output += 'Fuzz';
    }

    if (i % 11 === 0) {
      output += 'Bizz';
    }

    // if (output === '') {
    //   output = i;
    // }

    if (!output) {
      output = i;
    }

    console.log(output);
  }
}

// fizzBuzzTask6()


function fizzBuzzTask7() {
  for (let i = 1; i <= 1500; i++) {
    let output = '';

    i % 3 === 0 && (output += 'Fizz');
    i % 5 === 0 && (output += 'Buzz');
    i % 7 === 0 && (output += 'Biff');
    i % 9 === 0 && (output += 'Fuzz');
    i % 11 === 0 && (output += 'Bizz');
    i % 13 === 0 && (output += 'Bezz');
    !output && (output = i);

    console.log(output);
  }
}

fizzBuzzTask7();