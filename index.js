// // const rps = (p1, p2) => {
// //     switch (p1) {
// //         case "scissors":
// //             switch (p2) {
// //                 case "scissors": return 'Draw!';

// //                 case "rock": return 'Player 2 won!';

// //                 case "paper": return 'Player 1 won!';
// //             }
// //             break;
// //         case "paper":
// //             switch (p2) {
// //                 case "scissors": return 'Player 2 won';

// //                 case "rock": return 'Player 1 won!';

// //                 case "paper": return 'Draw!';
// //             }
// //             break;
// //         case "rock":
// //             switch (p2) {
// //                 case "scissors": return 'Player 1 won!';

// //                 case "rock": return 'Draw!';

// //                 case "paper": return 'Player 2 won!';
// //             }
// //             break;
// //     }
// // }
// // console.log(rps('rock', 'scissors'));
// // ////////////////////////////////////////////////////////////////////////////////////////
// // // const rps = (p1, p2) => {
// // //     switch (p1) {
// // //         case "scissors":
// // //             switch (p2) {
// // //                 case "scissors": console.log('Draw!');
// // //                     break;
// // //                 case "rock": getMsg(2);
// // //                     break;
// // //                 case "paper": getMsg(1);
// // //                     break;
// // //             }
// // //             break;
// // //         case "paper":
// // //             switch (p2) {
// // //                 case "scissors": getMsg(2);
// // //                     break;
// // //                 case "rock": getMsg(1);
// // //                     break;
// // //                 case "paper": console.log('Draw!');
// // //                     break;
// // //             }
// // //             break;
// // //         case "rock":
// // //             switch (p2) {
// // //                 case "scissors": getMsg(1);
// // //                     break;
// // //                 case "rock": console.log('Draw!');
// // //                     break;
// // //                 case "paper": getMsg(2);
// // //                     break;
// // //             }
// // //             break;
// // //     }
// // // }
// // // ////////////////////////////////////////////////////////////////////////////////////////////
// // // rps("rock", "scissors");
// ///////////////////////////////////////STRING LESSONS??????????????????????????????????????????????
// function calc(x) {
//     let total1 = '';
//     for (let e of x) {
//         total1 += `${e.charCodeAt()}`;
//     }

//     let total2 = total1.replaceAll("7", 1)
//     console.log(total1);
//     console.log(total2);
//     function sumOfString(str) {
//         let summ = 0;
//         for (ele of str) {
//             summ += Number(ele);
//         }
//         return summ;
//     };
//     console.log(sumOfString(total1));
//     console.log(sumOfString(total2));
//     return sumOfString(total1) - sumOfString(total2);
// };
// const a = 'aaaaaddddr'
// console.log(calc(a))
// a.re
//     ?????????????????????????????????????????????????????????????????????????????????????

//___________________________________________________Замыкания и рекурсия____________________________________________________

// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     function some(p0, percent, aug, p) {
//         if (p0 >= p) { return years }
//         else {
//             Math.floor(p0 = p0 + p0 * (percent / 100) + aug);
//             years++
//             console.log(years)
//             some(p0, percent, aug, p)
//             return years;
//         }
//     } some(p0, percent, aug, p);
// //     return years
// // }

// //////////////////////////////////////////////////////////////////////////Цикл ___________________________________________
// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     function some(p0, percent, aug, p) {
//         if (p0 >= p) { return years }
//         else {
//             p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
//             years++
//             some(p0, percent, aug, p)
//             return years;
//         }
//     } some(p0, percent, aug, p);
//     return years
// }



// // console.log(nbYear(1500000, 2.5, 10000, 2000000))

// class Quark {
//     constructor(color, flavor) {
//         this.color = color;
//         this.flavor = flavor;
//     }
//     baryon_number = 1 / 3;
//     interact(q) {
//         let temp = '';
//         temp = this.color;
//         this.color = q.color;
//         q.color = temp;
//     }
// }
// let q1 = new Quark('red', 'up');
// let q2 = new Quark('blue', 'left');
// console.log(q1.color)
// console.log(q2.color)

// console.log(q1.flavor)
// console.log(q2.flavor)
// q1.interact(q2)

// console.log(q1.color)
// console.log(q2.color)
// q2.interact(q1)
// console.log(q1.color)
// console.log(q2.color)
// class Quark2 extends Quark {
//     constructor(color, flavour, name) {
//         super(color, flavour)
//         this.name = name;
//     }
// }
// let q3 = new Quark2('brown', 'up', 'qquarkAm');
// console.log(q3)
// q3.interact(q1);
// console.log(q1.color)
// console.log(q3.color)
// console.log(Math.ceil(3))



function numbersWithDigitInside(x, d) {
    let count = 0;
    let sum = 0;
    let prod = 0;
    y = Array.from({ length: x + 1 }, (v, k) => k);
    y.shift();
    y.map(((num) => {
        if (String(num).indexOf(d) !== -1) {
            count++;
            sum += num;
            if (count == 1) { prod = num }
            else { prod *= num }
        }

    }))
    if (count != 0) { return [count, sum, prod] }
    else return [0, 0, 0]
}

console.log(numbersWithDigitInside(7, 6))