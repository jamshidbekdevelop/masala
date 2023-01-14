// let n = 7775460;

// const fun = (n) => {
//   varable = 0;
//   if (n % 2 === 0) {
//     if ((n / 2) % 2===0) {
//         // console.log(12);
//       if ((n / 4) % 2===0) {
//         varable++;
//       }
//       varable++;
//     }
//     varable++;
//   }
//   console.log(varable);
// };
// fun(n);

// let n=32312

// function nextSmaller(n) {
//   return n.toString().split('').sort()
// }
// console.log(nextSmaller(n))

// let n = 100;

// function sum(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     a = parseInt(n / 10);
//     b = n % 10;
//     if (b >= 5) {
//       c = a + 1;
//     } else {
//       if (a >= 3) {
//         d=parseInt(a /3)
//         c = a + d;
//       } else {
//         c = a;
//       }
//     }
//     return a + c;
//   }
// }
// console.log(sum(n));
// sum(n)
// console.log(;

// if (condition) {

// } else {

// }

// let num =100

// function sums(num){

//   if(num===0){
//     return 0
//   }else{
//     return a=parseInt(num/10)
//   }

// }
// console.log( sums(num));

// let day=100

// function dis(day){
// if(day<=59){
//   if (day===1) {
//     return `${day} minute`
//   }else{
//     return `${day} minutes`
//   }
// }
//  else if(day>59&& day<=1440){
//    kun =parseInt(day/60)
//    min=day%60
//    if (kun===1) {
//      return `${kun} hour ${min} minute`
//    }
// }
// }
// console.log(dis(day));

// costs = 5;

// function michaelPays(costs) {
//    if(costs<=5){
//     return +costs.toFixed(2)
//    }else{
//     if(costs/3>=10){
//       return costs-10
//     }else{
//       return (costs*2/3).toFixed(2)
//     }
//    }
// }

// function michaelPays(costs) {
//   if(costs<5){
//     return +(costs.toFixed(2))
//   }else{
//     if(costs/3>=10){
//       return +((costs-10).toFixed(2))
//     }else{
//       return +((costs*2/3).toFixed(2))
//     }
//   }
// }
// console.log(michaelPays(costs));

// function bonusTime(salary, bonus) {
//   if (bonus === true) {
//     c=salary * 10
//     return `\u00A3${c}`;
//   } else {
//     `\u00A3${salary}`;
//   }
// }

// console.log(bonusTime(10000, true));

// let string = "jams4hD";

// function toUnderscore(string) {
//   // TODO: complete
//   if (typeof string == "number") {
//     return `${string}`;
//   } else {
//     newStr = "";
//     for (let i = 1; i < string.length; i++) {
// if (string[i] === string[i].toUpperCase() && string[i].match(/[A-Z]/gi)) {
//         newStr = newStr + `_${string[i].toLowerCase()}`;
//       } else {
//         newStr += string[i];
//       }
//     }
//     return string.slice(0, 1).toLowerCase() + newStr;
//   }
// }
// console.log(toUnderscore(string));

// let strng = "foo";

// function incrementString(strng) {
//   news = "";
//   num = "";
//   for (let i = 0; i < strng.length; i++) {
//     strng[i] == strng[i].match(/[a-z]/gi)
//       ? (news += strng[i])
//       : (num += strng[i]);
//   }
//   nul = "";
//   son = "";
//   for (let j = 0; j < num.length; j++) {
//     num[j] == 0 ? (nul += num[j]) : (son += num[j]);
//   }
//   sons = `${+son + 1}`;
//   if (son.length != sons.length) {
//     if (nul != "") {
//       ons = nul.split("").splice(1).join("");
//       // console.log(ons)
//     } else {
//       ons = nul;
//     }
//   } else {
//     ons = nul;
//   }
//   return `${news+ons+sons}`;
// }

// console.log(incrementString(strng));

// n=15
// function factorial(n){
//   a=1
//   for (let i = 1; i <=n; i++) {
//     a=a*i
//   }
//    c=a.toLocaleString()

//   d=  c.split(',')
//   q=''
//   for (let j = 0; j < d.length; j++) {
//       q=q+d[j]
//   }
// return q
// }
// console.log(factorial(n));
// // 1307674368000

// n = 24;

// function primeFactors(n) {
//   a = [];
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       a.push(i)
//     }
//   }
//   return a
// }
// console.log(primeFactors(n));

// integers = [2, 4, 0, 100, 4, 11, 2602, 36];

// function findOutlier(integers) {
//   odd = [];
//   even = [];
//   for (let i = 0; i < integers.length; i++) {
//     if (integers[i] % 2 != 0) {
//       odd.push(integers[i]);
//     } else {
//       even.push(integers[i]);
//     }
//   }
//   if (odd.length < even.length) {
//     return +odd.join();
//   } else {
//     return parseFloat(even);
//   }
// }
// console.log(findOutlier(integers));

// str = "the-stealth-warrior";

// function toCamelCase(str) {
//   news = "";

// str
//   for (let i = 0; i < str.length; i++) {
//     str[i] == str[i].match(/[-_]/gi)
//       ? (news = news + ` ${str[i]}`)
//       : (news += str[i]);
//   }

// num=''
// sum=''
//   for (let j = 0; j < news.length; j++) {
//     news[j] == news[j].match(/[-_]/gi)
//     ? num=num+news[j]:
//     sum+=news[j]
//   }

//   return sum;

// }
// console.log(toCamelCase(str));

// n = [1240];

// function pyramidHeight(n) {

//   console.log(c = parseInt(n))
//   if (c < 5) {
//     return 1;
//   } else {
//     d = 0;
//     ar = [];

//     for (let i = 1; i < c; i = i + 2) {
//       // console.log(i);
//       d = d + i;
//       ar.push(d);
//       // console.log(d);
//     }
//     e = 0;
//     arr = [];
//     for (let j = 1; j < ar.length; j++) {
//       e = e + ar[j];
//       if (e < n) {
//         arr.push(ar[j]);
//       } else continue;
//       // console.log(ar[j]);
//     }
//     // console.log(e);
//     return arr.length + 1;
//   }
// }

// console.log(pyramidHeight(n));

// n = 1000;
// function zeros(n) {
//   c = 0;
//   for (let i = 1; i < n; i++) {
//     if (n >= 5 ** i) {
//       d = parseInt(n / 5 ** i);
//       c += d;
//     } else continue;
//   }
//   return c;
// }
// console.log(zeros(n));

// var array = [5, 8, 6, 3, 4];
// function sortArray(array) {
//   odd = array.filter((val) => val % 2 != 0).sort((a, b) => a - b);

//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
// console.log(sortArray(array));
// str='abcdefd'
// function solution(str){
// if (str!='') {

// if (str.length%2==0) {
//   st=''
//   for (let i = 0; i < str.length; i++) {
//      if (i%2==0) {
//        st=st+` ${str[i]}`
//      }else {
//        st+=str[i]
//      }
//   }
//   odd=st.trim().split(' ')
//   return odd
// }else{
//   a=str+'_'
//   st=''
//   for (let i = 0; i < a.length; i++) {
//      if (i%2==0) {
//        st=st+` ${a[i]}`
//      }else {
//        st+=a[i]
//      }
//   }
//   odd=st.trim().split(' ')
//   return odd
// }
// }else{
//   return []
// }
// }
// console.log(solution(str));

// x='nothardlythefinaltest'
// y='zzzfinallyzzz'

// function lcs(x,y) {
//   a=x.split('')
//   b=y.split('')
//   c=''
//   for (let i = 0; i < a.length; i++) {

//     for (let j = 0; j < b.length; j++) {
//       if (a[i]==b[j]) {
//         c+=b[j]
//       }else continue
//     }
//   }
//   return c
// }
// console.log(lcs(x,y));

// arr = [ 0,0,1, 0, 0 ];

// function findUniq(arr) {
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] <=1) {
//     arr.sort((x, y) => x - y);
//     a = arr.pop();
//     b = arr.shift();
//     c = 0;
//     d = 0;
//     for (let g = 0; g < arr.length; g++) {
//       arr[g] === a && c++;
//       arr[g] === b && d++;
//     }
//     if (c < d) {
//       return a;
//     } else b;
//   } else {
//     for (let j = 0; j < arr.length; j++) {

//       if (arr[i] != arr[j]) {
//         // console.log(arr[i] != arr[j]);
//         return arr[j];
//       } else continue;
//     }
//   }
// }
// }
// console.log(findUniq(arr));

// string = "Lets go to the movies";

// function vaporcode(string) {
//   a = string.toUpperCase().split(" ");
//   c = "";
//   b = a.map((val) => (c += val));
//   return c.split("").join('  ')

// }
// console.log(vaporcode(string));

// password='djI38D55'

// function validate(password) {
//   a = 0;
//   b = 0;
//   c = 0;
//   d = password.length;
//   title = password.replace(/([A-Z])/g, "A");
//   str = title.replace(/([a-z])/g, "b");
//   num = str.replace(/([0-9])/g, "1");
//   for (let i = 0; i <=num.length; i++) {
//     num[i] === "A" && a++;
//     num[i] === "b" && b++;
//     num[i] == "1" && c++;
//   }
//   if (d > 5 && a > 0 && b > 0 && c > 0) {
//     return true;
//   } else return false;
// }
// console.log(validate(password));

// n=2017

// function p(n) {
//   return n.toString().split('')
// }
// console.log(p(n));

// function b(n){
//  return Number(n).toString(2);
// }
// console.log(b(14));
// n = "63829983432984289347293874";
// b = "90938498237058927340892374089";
// function cr(a, b) {
//  c=`${a*1+b*1}`
// }
// console.log(cr(n, b));

// arr = [1,1,1,1,1,];

// function is(arr) {
//   c = arr.filter(function (item, pos) {
//     return arr.indexOf(item) == pos;
//   });
//   if (arr.length!=0) {
//     d=1
//     for (let i = 1; i < c.length; i++) {
//       d=(d*2)+1
//     }
//     return d;

//   }else return 0

// }
// console.log(is(arr));

// n = 695;
// p = 2;
// function digPow(n, p) {

//   a = `${n}`.split("").map((value) => +value);
//   c=0
//   for (let i = 0; i < a.length; i++) {
//     c+=a[i]**(p+i)
//   }
//   if (c%n===0) {
//       return c/n
//   }return -1
// }
// console.log(digPow(n, p));
// string = '1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110';
// function chuckPushUps(string) {

//   a = [];
//   c = [];
//   b = string.split(" ");
//   for (let i = 0; i < b.length; i++) {
//     b[i].match(/[^0-9]/g) ? c.unshift(b[i]) : a.unshift(b[i]);
//   }
//   d = a.sort((a, b) => a - b).pop();
//   return parseInt(d, 2);
// }
// console.log(chuckPushUps(string));

// strng = "103 123 4444 99 2000";

// function orderWeight(strng) {
//   ar = strng.split(" ");
//   c=ar.map((val) => parseInt(val))
//   for (let i = 0; i < ar.length; i++) {
//     for (let j = 0; j =+ar[i]; j++) {

//     }
//     // return c[i]
//   }
// //   return ar;
// }
// console.log(orderWeight(strng));

// const orderWeight = (text) => {
//   let finish = text.split(" ").map((value) =>
//     eval(
//       value
//         .split("")
//         .map((v, i) => (value.length - 1 !== i ? v + "+" : v))
//         .join("")
//     )
//   );
//   let result = finish;
//   for (let i = 0; i < result.length; i++) {
//     for (let j = 0; j < result.length; j++) {
//       if (result[0] <= result[j]) {
//         result.push(result[j]);
//       }
//     }
//   }
//   return result;
// };
// console.log(orderWeight("103 123 4444 99 2000"));

// var lcm = function (...c) {
//   r = 1;
//   c.map((val) => (r = r * val));
//   d = c.sort((a, b) => a - b).pop();
//   return r
// };
// console.log(lcm(3, 7, 5));

// function scramble(str1, str2) {
//   a = str1.split("");
//   b = str2.split("").sort();
//   c = [];
//   d = 0;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       a[i] === b[j] ? c.push(a[i]) : d++;
//     }
//   }
//   e = c.sort().join("");
//   f = b.join("");
//   return e == f ? true: false
//   //code me
// }
// console.log(scramble('scriptjavx','javascript'));
// expr=2
// function expand(expr) {
//    return expr**2
// }
// console.log(expand(expr));

// function flyBy(lamps, drone) {
//   c=''
//   for (let i = 0; i < drone.length; i++) {
//    drone[i]!='' ? c+='o' :c+=''
//   }
//   a=lamps.length
//   d=drone.length-lamps.length
//   b=c.padEnd(a,'x')
// q=b.length
// if (d>=0) {
//    r=b.slice( d,q)
//    return r
// }
// //   return
// }
// console.log(flyBy("xxxxxxxxxxxxxxxxxxxxxxx", "=======================T"));

// console.log([].length);

// console.log(81**1/2);

// console.log(27**1/2)

// function mirror(text) {
//   c = text.split(" ").map((val) => val.split("").reverse().join(""));
//   return c;
//   return "*********\n* olleH *\n* dlroW *\n*********";
// }
// console.log(mirror("Hello World"));

// function wave(str) {
//   d = [];
//   for (let i = 0; i < str.length; i++) {

//   }
// }
// console.log(wave(" gap "));

// function nameThatNumber(num) {
//   let number = parseInt(num);
//   if (num == 0) {
//     return "zero";
//   } else {
//     if (num >= 10 && 20 > num) {
//     //   let onlik = Math.floor(number / 10);
//       let ons = {
//         10: "ten",
//         11: "eleven",
//         12: "twelve",
//         13: "thirteen",
//         14: "fourteen",
//         15: "fifteen",
//         16: "sixteen",
//         17: "seventeen",
//         18: "eighteen",
//         19: "nineteen",
//       };
//       return count = `${ons[num]}`;
//     } else {
//       let yuzlik = Math.floor(number / 100);
//       number = number % 100;
//       let onlik = Math.floor(number / 10);
//       let birlik = number % 10;
//       let bir = {
//         0: "",
//         1: "one",
//         2: "two",
//         3: "three",
//         4: "four",
//         5: "five",
//         6: "six",
//         7: "seven",
//         8: "eight",
//         9: "nine",
//       };
//       let on = {
//         0: "",
//         //   1: "ten",
//         2: "twenty",
//         3: "thirdty",
//         4: "forty",
//         5: "fifty",
//         6: "sixty",
//         7: "sevinty",
//         8: "eighty",
//         9: "ninety",
//       };
//       if (!yuzlik === 0) {
//         return (count = `${bir[yuzlik]} hundered ${on[onlik]} ${bir[birlik]}`);
//       } else return (count = `${on[onlik]} ${bir[birlik]}`);
//     }
//   }
// }
// function nameThatNumber(num) {
//     let number = parseInt(num);
//   if (num == 0) {
//     return "zero";
//   } else {
//     if (num >= 10 && 20 > num) {
//     //   let onlik = Math.floor(number / 10);
//       let ons = {
//         10: "ten",
//         11: "eleven",
//         12: "twelve",
//         13: "thirteen",
//         14: "fourteen",
//         15: "fifteen",
//         16: "sixteen",
//         17: "seventeen",
//         18: "eighteen",
//         19: "nineteen",
//       };
//       return count = `${ons[num]}`;
//     } else {
//       let yuzlik = Math.floor(number / 100);
//       number = number % 100;
//       let onlik = Math.floor(number / 10);
//       let birlik = number % 10;
//       let bir = {
//         0: "",
//         1: "one",
//         2: "two",
//         3: "three",
//         4: "four",
//         5: "five",
//         6: "six",
//         7: "seven",
//         8: "eight",
//         9: "nine",
//       };
//       let on = {
//         0: "",
//         //   1: "ten",
//         2: "twenty",
//         3: "thirdty",
//         4: "forty",
//         5: "fifty",
//         6: "sixty",
//         7: "sevinty",
//         8: "eighty",
//         9: "ninety",
//       };
//       if (!yuzlik === 0) {
//         return (count = `${bir[yuzlik]} hundered ${on[onlik]} ${bir[birlik]}`);
//       } else return (count = `${on[onlik]} ${bir[birlik]}`).trim();
//     }
//   }
// }

// console.log(nameThatNumber(2));

// function getDivisorsCnt(n) {
//   c = 0;
//   for (let i = 1; i <= n; i++) {
//     n % i == 0 ? c++ : "";
//   }
//   return c;
// }
// console.log(getDivisorsCnt(12));

// const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

// let unique = [...new Set(names)];
// console.log(unique);

// let arr = [1, 2, 3, 1, 1, 1, 4, 5];
// let c = 0;
// let filtered = arr.filter((item, index) => arr.indexOf(item) === index);

// console.log(filtered);
// console.log(c);
// let s = [-9,4,-4,-7,5,7,-7,5,1,4,-4,-6,3];

// function arrange(s) {
//   T = [];
//   if (s.length < 3) {
//     return s;
//   } else {
//     if (s.length % 2 != 0) {
//       a = parseInt(s.length / 2);
//       d = s.splice(a, 1);
//       for (let i = 0; i < s.length; i++) {
//         T = T.concat(s.shift());
//         T = T.concat(s.pop());
//         s.reverse();
//       }
//       return T.concat(s).concat(d);
//     } else {
//       for (let i = 0; i < s.length; i++) {
//         T = T.concat(s.shift());
//         T = T.concat(s.pop());
//         s.reverse();
//       }
//       return T.concat(s);
//     }
//   }
// }
// console.log(arrange(s));

// function persistence(num) {
//   s = `${num}`.split("");
//   for (let i = 0; i < s.length; i++) {
//     s
//     for (let j = 0; j < s.length; j++) {

//     }
//   }
// }
// console.log(persistence(172));

// function isValidWalk(walk) {
// if (walk.length == 10) {
//   w = 1;
//   s = 1;
//   e = 1;
//   n = 1;
//   for (let i = 0; i < walk.length; i++) {
//     walk[i] == "s" && s++;
//     walk[i] == "w" && w++;
//     walk[i] == "e" && e++;
//     walk[i] == "n" && n++;
//   }
//   if (w * s * n * e == 36) {
//     return true;
//   } else return false;
// } else {
//   return false;
// }
// }
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "n"]));

// function findOdd(A) {
//happy coding!
// e = 0;
// c = 0;
// A.sort((a, b) => a - b);
// for (let i = 0; i < A.length; i++) {
//   i%2==0?e+=A[i]:c+=A[i]
// }
// return e-c;
// }
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));

// function likes(names) {
// if (names.length > 0) {
//   if (names.length > 1) {
//     if ((names.length == 2)) {
//       c = names.pop();
//       return `${names} and ${c} like this`;
//     } else {
//       if ((names.length == 3)) {
//         q = names.shift();
//         r = names.pop();
//         return `${q}, ${names} and ${r} like this`;
//       } else {
//         a = names.shift();
//         b = names.shift();
//         return `${a}, ${b} and ${names.length} others like this`;
//       }
//     }
//   } else return `${names} likes this`;
// } else {
//   return "no one likes this";
// }
// }
// console.log(likes(["ppp", "skks", "kdk", ]));

// function inArray(array1, array2) {
//   c = [];
//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       array1[i].includes(array2[j]) && c.push(array2[j]);
//     }
//     // return c
//   }
//   return [...new Set(c)]
// }
// console.log(
//   inArray(
//     ["lively", "alive", "harp", "sharp", "armstrong"],
//     ["xyz", "live", "strong"]
//   )
// );

// function perimeter(n) {
//   c = 0;
//   d = [0,1,];
//   for (let i = 1; i < 2; i++) {
//     // console.log(d.length-1);
//     // console.log(c);

//     c =c+ d.indexOff();
//     d.push(c)
//     // console.log(c);
//     // console.log(d.length-1);
//   }
//   return d
//   // console.log(d.length - 1);
// }
// console.log(perimeter(20));

// function anagrams(word, words) {
// a=word.split('').sort().join('')
// b=[]
// // b= words.map((val)=>val.split('').sort().join(''))
// for (let i = 0; i < words.length; i++) {
//   words[i].split('').sort().join('')==a &&  b.push(words[i])
// }
// return b
// console.log(b);
// console.log(a);
// }
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));

// function smallest(n) {
//   // b=''
//   c= n.toString().split('').map((val)=>val*1).sort().shift()
//   d=n.toString().indexOf(c)
//   a=n.toString().split('').filter((val)=>val!=c)
//   b=[`${c}`].concat(a).join('')
//   // a.concat(`${c}`).map((val)=>b+=val)

//   // b.join('')
//   // d.filter((val)=>val!=c)
//   r=[]
//   // return n
//   // for (let i = 0; i < d.length; i++) {
//     // if (d[i]==c) {
//     //   d.splice(d[i])
//     // }
//     // n[i]==c &&  n[i].splice()
//   // }
// return b
//   // return n.toString()
// }
// console.log(smallest(261235));

// str1='Web'
// str2='Brain'
// c=str1!=str2
// // str2=str1
// // console.log(str1);
// console.log(c);
// var str = "fazliddin";
// str[str.length - 1] === "l" && console.log(true);
// str[str.length - 1] !== "l" && console.log(false);
// // way2
// var str = "fozil";
// console.log(str.endsWith("l"));
// var str2 = "fazliddin";
// console.log(str2.endsWith("l"));

//Exercise2
//way1
// const str1='Web'
// var str2='Brain'
// str= `${str1} \r${str2}`
// str2= `${str2} \r${str1.padEnd(str2.length, ' ')}`

// var str1 = "Web \rBrain";
// var str2 = "Brain\r Web ";
// st=str2
// console.log(str);
// console.log(str2);
//way2
// var str = "Web";
// var strB = "Brain";
// console.log(str.replace("Web", [strB]));
// console.log(strB.replace("Brain", [str]));

// //Exercise3
// var year = "1804";
// year % 4 == 0 && console.log("Kabisa");
// year % 4 !== 0 && console.log("Kabisa emas");

// var isPP = function (n) {

//   // if (n % n ** 0.25 == 0) {
//   //   return [n ** 0.25].concat(4);
//   // } else if (n % Math.sqrt(n)==0) {
//   //   return [Math.sqrt(n)].concat(2);
//   // } else if (n % Math.cbrt(n)==0) {
//   //   return [Math.cbrt(n)].concat(3);
//   // }else return null
// };
// console.log(isPP(32));

// function rolldiceSumProb(sum, dice) {
// c = [];
// if (dice == 2) {
//   for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 6; j++) {
//       i + j == sum && c.unshift([i, j]);
//     }
//   }
// } else if (dice == 3) {
//   for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 6; j++) {
//       for (let l = 1; l <= 6; l++) {
//         i + j + l == sum && c.unshift([i, j, l]);
//       }
//     }
//   }
// } else if (dice == 4) {
//   for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 6; j++) {
//       for (let l = 1; l <= 6; l++) {
//         for (let g = 1; g <= 6; g++) {
//           i + j + l + g == sum && c.unshift([i, j, l, g]);
//         }
//       }
//     }
//   }
// } else if (dice == 5) {
//   for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 6; j++) {
//       for (let l = 1; l <= 6; l++) {
//         for (let g = 1; g <= 6; g++) {
//           for (let d = 1; d <= 6; d++) {
//             i + j + l + g + d == sum && c.unshift([i, j, l, g, d]);
//           }
//         }
//       }
//     }
//   }
// }
// return c.length / 6 ** dice;
// }
// console.log(rolldiceSumProb(11, 2));

// var str1 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam recusandae ad architecto et beatae porro, unde, quibusdam fuga, quod id illo. Suscipit soluta ipsam asperiores accusamus temporibus! Soluta, natus quasi.";
// var str2 ="Dolorem, enim odio expedita explicabo similique obcaecati laudantium porro. Nisi, hic accusamus. Itaque quia modi labore nemo, fugit, id iure pariatur distinctio nam debitis minus ab nulla qui tempore natus. Eos minus consectetur reiciendis, impedit unde harum commodi est.";

// function bigPrimefacDiv(n) {
//   if (n % 1 == 0) {
//     n = Math.abs(n);
//     c = [];
//     for (let i = 1; i < n; i++) {
//       n % i == 0 && c.push(i);
//     }
//     a = [];
//     for (let j = 1; j < c.length; j++) {
//       d = 0;
//       for (let l = 2; l < c[j]; l++) {
//         c[j] % l == 0 && d++;
//       }
//       d == 0 && a.push(c[j]);
//     }
//     if (c.length == 1) {
//       return [];
//     } else {
//       return [a.pop(), c.pop()];
//     }
//   } else return "The number has a decimal part.";
// }
// console.log(bigPrimefacDiv(900000000));

// var lastDigit = function (str1, str2) {
//   a = str1[str1.length - 1] * 1;
//   b = str2[str2.length - 1] * 1;
//   if (str2.length > 1) {
//     r = str2[str2.length - 2];
//     q = (r + b) * 1;
//   } else {
//     q = b;
//   }

//   if (str2 == 0) {
//     return 1;
//   } else {
//     if (a == 1 || a == 6 || a == 0 || a == 5) {
//       return a;
//     } else if (a == 4 || a == 9) {
//       if (a == 4) {
//         return b % 2 == 0 ? 6 : 4;
//       } else {
//         return b % 2 == 0 ? 1 : 9;
//       }
//     } else {
//       d = q % 4;
//       if (a == 2) {
//         return (d == 1 && 2) || (d == 2 && 4) || (d == 3 && 6) || (d == 0 && 8);
//       } else if (a == 3) {
//         return (d == 1 && 3) || (d == 2 && 9) || (d == 3 && 7) || (d == 0 && 1);
//       } else if (a == 7) {
//         return (d == 1 && 7) || (d == 2 && 9) || (d == 3 && 3) || (d == 0 && 1);
//       } else {
//         return (d == 1 && 8) || (d == 2 && 4) || (d == 3 && 2) || (d == 0 && 6);
//       }
//     }
//   }
// };
// console.log(lastDigit("2", "5"));

// function sumPairs(ints, s) {
//   c = [];
//   for (let i = 0; i <=ints.length; i++) {
//         a=ints.shift()
//         console.log(a);
//     for (let j = 0; j < ints.length; j++) {
//       if (a + ints[j] == s) {
//         c.push(a, ints[j])
//       }
//     }
//   }
//   if (c.length > 1) {
//     return c.splice(0,2)
//   } else {
//     return undefined;
//   }
// }
// console.log(sumPairs([1, 2, 3, 4, 1, 0], 2))

// function largestSum(arr){
//     // write code to find the sum of the largest sub-sequence in arr
//     c=[]
//     b=arr.length
//     for (let i = 0; i <b; i++) {
//         a=0
//         for (let j = 0; j <arr.length; j++) {
//             a+=arr[j]
//         }
//         c.push(a)
//         arr.splice(0,1)
//     }

//     return c
// }
//   console.log(largestSum([31,-41,59,26,-53,58,97,-93,-23,84]));

// let factorial = function (n) {
//     var n = String(n).split('').sort().reverse().join('')

//     return Number(n)
// };
// console.log(factorial(2112));

// function findAll(n, k) {
//     for (let i = 0; i < n; i++) {
//         n/k
//     }
//     // your code here
//     // return [];
// }
// console.log(findAll(10, 3));
// arr = [ 6, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 5];
// function findIndexOf(arr, nth, number) {
//   return arr.indexOf(number, nth-1);
// }
// console.log(findIndexOf(arr, 1, 5));

// multiplicationTable = function (size) {
//   c = [];
//   for (let i = 1; i <=size; i++) {
//     a = [];
//     for (let j = 1; j <=size; j++) {
//        a.push(i*j)
//     };
//     c.push(a);
//   }
//   return c;
//   // insert code here
// };

// console.log(multiplicationTable(3));
// function orderWeight(strng) {
//   function sumOfParts(num) {
//     return num.split("").reduce((a, b) => a + +b, 0);
//   }
//   return strng
//     .split(" ")
//     .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
//     .join(" ");
// }

// console.log(orderWeight("103 123 4444 99 2000"));

// function reverse(str){
//   //WRITE SOME MAGIC
//    b=str.split(' ')
//    console.log(b);
//    a=''
//    for (let i = 0; i < b.length; i++) {
//     // console.log(b[i]);
//     i%2==0? a+=` ${b[i]}` : a+= ` ${b[i].split('').reverse().join('')}`
//    }
//    return a.trim()
// }
// console.log(reverse("Reverse this string, please!"));

// function sweetDate(w1,r1,w2,r2,timePeriod){
//   a=timePeriod*(r1/w1).toFixed(1)
//   b=timePeriod*(r2/w2).toFixed(1)
//   console.log(a);
//   console.log(b);
//   return Math.round(Math.abs(a-b))
// }
// console.log(sweetDate(4,2,7,3,20));

// function firstNonRepeatingLetter(s) {
//   d = [];
//   s.split("");
//   for (let i = 0; i < s.length; i++) {
//     a = s.split("").filter((val) => val.toLowerCase() == s[i].toLowerCase());
//     a.length == 1 && d.push(...a)
//   }
//   return d.join('').slice(0,1)
// }
// console.log(firstNonRepeatingLetter("sTreSS"));

// function scramble(str1, str2) {
//   a = str1.split("");
//   b = str2.split("");
//   l = [];
//   for (let i = 0; i < a.length; i++) {
//     c = b.shift();
//     r = a.filter((val) => val == c);
//     l = [...r];
//    }
//   // return l
//   // c = b.filter((val) => val.toLowerCase().includes(a[i].toLowerCase()));
//   // console.log(c);
//   // l.push(...c);
//   // }
//   return l;
// }
// console.log(scramble("cedewaraaossoqqyt", "codewaars"));

// function luckCheck(ticket) {
//   // const str = '65768h7686876'
//   // if (
//   //   ticket
//   //     .split("")
//   //     .map((v) => (`${1 + +v}` === "NaN" ? true : false))
//   //     .filter(Boolean)[0] ||
//   //   false
//   // ) {
//   //   return undefined;
//   // } else {
//     m=0
//   c = 0;
//   d = 0;
//   a = ticket.split("");
//   r = a.length/2
//   if (a.length % 2 == 0) {
//     a.map((val)=>m+=+val)
//     a.splice(0, r ).map((val) => (d += +val));
//     c=m-d
//     // console.log(m);
//     // a.splice(r).map((val) => (c += +val));
//     // console.log(r);
//   } else {
//     a.splice(0, (r - 1) / 2).map((val) => (d += +val));
//     a.splice(r / 2).map((val) => (c += +val));
//   }
//   console.log(c);
//   // console.log(m);
//   console.log(d);
//   return c == d;
//   // }
// }
// console.log(luckCheck("554013310455"));

// function maxSumPath(l1,l2){

//   c=[]
//   a=0
//   b=0
//   for (let i = 0; i < l1.length; i++) {
//     for (let j = 0; j < l2.length; j++) {
//       if(l2[j]==l1[i]){
//         l1.filter((val)=>val<l1[i]? a+=val: 0)
//         l2.filter((val)=>val<l2[j]? b+=val: 0)
//       }
//       // console.log(l1);
//     }

//   }
//   if (a>=b) {
//     c.push(a)
//   }else c.push(b)
//   // console.log(l1);
//   console.log(b);
//   console.log(a);
//   console.log(c);
// }
// maxSumPath([2, 3, 7, 10, 12],[1, 5, 7, 8])

// function valueOfX(eq) {
//   console.log(eq.split(' '));
// c = eq.indexOf("=");
// a = eq.split("").splice(0, c).join("");
// b = eq
//   .split("")
//   .splice(c + 1)
//   .join("");
// // if (eq.split(" ").includes("x")) {
// // console.log('mm');
// if (a.split(" ").includes("x")) {
//   a = a.replace("x", 0);
//   a = eval(a);
//   b = eval(b)
//   // console.log(parseInt(b-a));
//   if (a.split('   ')) {
//     return b - a
//   }
// } else if (b.split(" ").includes("x")) {
//   b = b.replace("x", 0);
//   a = eval(a);
//   b = eval(b);
//   return Math.abs(a - b);
// }
// // } else {
// //   // console.log('mm');
// //   if (a.split(" ").includes("-x")) {
// //     a = `${a.replace("-x", -1)} + 1`;
// //     a = eval(a);
// //     b = eval(b);
// //     return -(b - a);
// //   } else {
// //     b = `${b.replace("-x", -1)} + 1`;
// //     a = eval(a);
// //     b = eval(b);
// //     return -(a - b);
// //   }
// // }
// // console.log(-1-(-0));
// }
// console.log(valueOfX("x = - 1"));

// function a(str){
//   b=''
// for (let i =str.length-1; i >=0; i--) {
//   b+=str[i]
// }
// return b
// }
// console.log(a('Hello'));

// function name(params) {
//   params = params.split("");
//   b=[]
//   for (let i = 1; i < 10; i++) {
//     b.push(i)
//   }
//   for (let j = 0; j < params.length; j++) {
//     b=b.filter(val=>val!=params[j])
//   }
//   return b

// }
// console.log(name("3468"));

// console.log(nine(plus(two())))

// function scramble(str1, str2) {
//     str1=str1.split('')
//     str2=str2.split('')
//     for (let i = 0; i < str1.length; i++) {
// // str1.map
//         c=str2.filter((val)=>val!=str1[i])
//     }
//     console.log(c);
// }
// scramble("rkqodw", "woorld");

// a = "13579";
// s = "";
// for (let i = 1; i < 10; i++) {

// }
// console.log(s);

// function noSpace(x) {
//   str = "";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i]!=' ') {
//         str += x[i];
//     }
//   }
//   return str
// }
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// function abbrevName(name) {
//   str = "";
//   for (let i = 0; i < name.length; i++) {
//     if (i==0) {
//         str += name[0].toUpperCase();
//     } else  if (name[i] == " ") {
//         str+='.'
//         str += name[i + 1].toUpperCase();
//     }
//   }
//   return str;
// }
// console.log(abbrevName("Harris sam"));

// function twoSort(s) {
//   s = s.sort()[0];
//   str = "";
//   for (let i = 0; i < s.length; i++) {
//     if (i % 2 == 0) {
//       str += s[i];
//     } else {
//       if (i == s.length - 1) {
//         str += "***";
//         str += s[i];
//       } else {
//         str += "***";
//         str += s[i];
//         str += "***";
//       }
//     }
//   }

//   console.log(str);
// }
// // 'b***i***t***c***o***i***n'
// console.log(
//   twoSort([
//     "bitcoiwegfhghgerhj",
//     "take",
//     "over",
//     "the",
//     "world",
//     "maybe",
//     "who",
//     "knows",
//     "perhaps",
//   ])
// );

// function scramble(str1, str2) {
//   str1 = str1.split("")
//   str2 = str2.split("")
//   //   console.log(str1);
//   //   l = [];
//   for (let i = 0; i < str1.length; i++) {

//     // for (let j = 0; j < str2.length; j++) {
//     //     const element = array[j];
//     // }
//     // str2.map((val) => console.log(val));
//     // console.log(str1[i]);
//     // str=str2.includes(str1[i])
//     // console.log(str);
//     // str2 = str2.filter((val) => console.log(val) != console.log(str1[i]));
//     // console.log(str2);
//     // console.log(str1[i]);
//   }
//   console.log(str2);
//   //   for (let i = 0; i < a.length; i++) {
//   //     c = b.filter((val) => val.toLowerCase() == a[i].toLowerCase());
//   //     l.push(...c);
//   //   }
//   //   d = l.sort().join("");
//   //   e = b.sort().join("");
//   //   return e == d;
// }
// console.log(scramble("rkqodw", "world"));

// function strw(s1, s2) {
//     s1=s1.split('')
//     for (let i = 0; i < s2.length; i++) {
//         s1=s1.filter((val)=>val!=s2[i])
//     }

//     // return s1
//     // console.log(s1);
// }
// console.log(strw('wer', 'rett'));
// function name(number) {
//   // condition

//   number = number+''
// //   str = "";
// //   for (let i = 0; i < number.length; i++) {
// //     // const element = array[i];
// //     if (number[i] == 2) {
// //       str += "t";
// //     } else {
// //       str += number[i];
// //     }
// //   }
//   return number;
// }
// console.log(name('12'));

// function scramble(str1, str2) {
//   let occurences = str1.split("").reduce((arr, cur) => {
//     arr[cur] ? arr[cur]++ : (arr[cur] = 1);
//     // console.log(arr);
//     return arr;
//   }, {});
// //   console.log(occurences);
//   return str2.split("").every((character) => --occurences[character] >= 0);
// }
// console.log(scramble("rkqodllw", "world"));

// function multiTable(number) {
//   str = "";
//   for (i = 1; i <= 10; i++) {
//     str += `${i} * ${number}=${i*number }\n`;
//   }
//   return str;
// }
// console.log(multiTable(12));

// function pp(params) {
//  a=params.split("").reduce((arr, cur) => {
//     arr[cur] ? arr[cur]++ : (arr[cur] = 1);
//     // console.log(arr);
//     return arr;
//   },);
//   console.log(a);
//   // console.log(params);
// }
// console.log(pp("AABBCCD"));

// const qu = (tr) => {
//   return tr
//     .split("")
//     .map((v, i, arr) =>
//       v != arr[i + 1] ? (i !== arr.length - 1 ? v + "-" : v) : v
//     )
//     .join("")
//     .split("-")
//     .map((val) => (val.length === 1 ? val : val[0] + `${val.length}`))
//     .join("");
// };
// console.log(qu("AABBCCA"));

// function multipleOfIndex(array) {

//     return array.filter((val, index)=>{
//         val%index==0
//     })
//     // return array
//   }

//   console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

// function toCsvText(array) {
//     str=''
//   for (let i = 0; i < array.length; i++) {
//     str+=`${array[i].join(',')}\n`
//   }
//   return str.trim()
// }

// console.log(
//   toCsvText([
//     [0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34],
//   ])
// );

// // str = [1, 2, 3, 4].join(",").

// // console.log(str);

// function partlist(arr) {
//   arrays = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrays=[arr[i], `${[...arr]}`]
//     // arrs = [arr[i] + arr[i + 1] ];
//     // console.log(arrs);
//     // arrays.push(arr[i]+arr[i+1]);
//     // const element = array[i]/;
//   }
//   console.log(arrays);
//   //   console.log(arrays);
// }
// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));

// function s(params, sd) {
//     console.log(params, ...sd);
// }
// console.log(s('sdfsf',[ 'fsfsf', 'sfsf']));

// function isSortedAndHow(array) {
//   const arr = [...array].sort((a, b) => a - b);
//   const s = [...array].sort((a, b) => b - a);
//   if (arr.join('') == array.join('')) {
//     return "yes, ascending";
//   } else if (s.join('') == array.join('')) {
//     return "yes, descending";
//   } else {
//     return "no";
//   }

// }

// console.log(isSortedAndHow([2,  -2]));

// function sortByLength(array) {
//   return array.sort(function(a, b){
//     return  a.length-b.length
//   });

// }
// console.log(sortByLength(["Beg", "Life", "I", "To"]));

// const letterCount = (phrase) => {
//     let result = {};
//     for (let i of phrase) {

//         if(i in result) {
//             result[i] += 1
//         }else {
//             result[i] = 1
//         }
//     }
//     return result
// }

// console.log(letterCount('AAABBCA'))

// arr = ["asa", "al", "dadadd"];
// function names(params) {
//   return arr.filter((val) => val != params)
// }
// console.log(names("al"));

// const arr = [
//   { id: 1, name: "Abror" },
//   { id: 2, name: "Azimjon" },
//   { id: 3, name: "Rahim" },
// ];

// function splitTheBill(x) {
//   va = Object.entries(x);
//   va[0][1] = va[0][1] - va[1][1];
//   va[2][1] = va[2][1] - va[1][1];
//   va[1][1] = va[1][1] - va[1][1];
// //   c = Object.fromEntries(va);
// //    c=Object.keys()
// //   return c;

// }

// console.log(splitTheBill({ A: 20, B: 15, X: 10 }));

// function  kk(params) {
//     return params.
// }
// console.log(kk("hello world"));

// arr=[
//     {id:1, name:'Jamshid', age:12}
// ]
// const Arrds=(name, age)=>{
//     c={id:arr.length+1, name, age }
// return arr.concat(c)
// }
// console.log(Arrds('Hayot', 21));

// str = "23456";
// ls = "123456789".split("");
// for (let i = 0; i < str.length; i++) {
//   ls = ls.filter((val) => {
//     val != str[i];
//   });
// }
// console.log(ls.join(""));

// function name(params) {
//     params = params.split("");
//     b=[]
//     for (let i = 1; i < 10; i++) {
//       b.push(i)
//     }
//     // console.log(b);
//     for (let j = 0; j < params.length; j++) {
//       b=b.filter(val=>val!=params[j])
//     }
//     return b

//   }
//   console.log(name("3468"));
// var str = "13468";
// var num = "123456789";
// var newnum = "";

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < num.length; j++) {
//     if (str[i] != num[i]) {
//         newnum += num[i];
//     }
//   }
// }
// console.log(newnum);

// arr = [
//   { id: 1, name: "rashid", age: 32 },
//   { id: 2, name: "Mashid", age: 332 },
//   { id: 3, name: "Bashid", age: 322 },
//   { id: 4, name: "Jashid", age: 312 },
// ];
// function ss() {
//   ls = arr.sort((a, b) => a.name.localeCompare(b.name));

//   return ls
//   // ls=arr.filter((val)=>params!=val.id)
//   // return ls
// }
// console.log(ss());

// var arr = [
//   { id: 1, name: "Fozil" },
//   { id: 2, name: "Odil" },
//   { id: 3, name: "Alibek" },
//   { id: 4, name: "Elyorbek" },
// ];

// function onsearch(text) {
//   const newarr = arr.filter((val, i) => {
//     return val.name.toLowerCase().includes(text.toLowerCase());
//   });

//   return newarr;
// }

// console.log(onsearch("e"));

// var arr = [
//   { id: 1, name: "Fozil" },
//   { id: 2, name: "Odil" },
//   { id: 3, name: "Alibek" },
//   { id: 4, name: "Elyor" },
// ];

// function onSearch(text) {
//   arr = arr.filter((val) =>
//     val.name.toLowerCase().includes(text)
//   );
//   return arr
// }

// console.log(onSearch("o"));

// let animals = [
//   "fox",
//   "ant",
//   "bird",
//   "lion",
//   "wolf",
//   "deer",
//   "bear",
//   "frog",
//   "hen",
//   "mole",
//   "duck",
//   "goat",
//   "dog",
//   "cat",
//   "bat",
//   "cock",
//   "cow",
// ];
// function scramble(str1, str2) {
//   a = [];
//   for (let i = 0; i < str2.length; i++) {
//     let occurences = str1.split("").reduce((arr, cur) => {
//       arr[cur] ? arr[cur]++ : (arr[cur] = 1);
//       return arr;
//     }, {});
//     str2[i].split("").every((character) => --occurences[character] >= 0) &&
//       a.push(str2[i]);
//   }
//   return a;
// }
// console.log(scramble("djffoxflksnaacockdknasdksnjks", animals));
//
//   function findanimals(find) {
//     ls = [];
//     find=find.split('')
//     for (let i = 0; i < animals.length; i++) {

//     }
//     return ls;
//   }

//   console.log(findanimals("djffoxflksnaacockdknasdksnjks"));

// a = null;
// b = 12;
// c = a && b;
// console.log(c);
// console.log(a || b);
// const Student =function(callback){
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('1-qadam')
//         }, 1000)
//     }).then(console.log)
//     setTimeout(callback, 1000)
//     console.log('2-qadam');
// }
// const addStudent=function(){
//     console.log('3-qadam');
// }
// Student(addStudent)

// const Hisob = (number) => {
//     let minglik=Math.floor(number/1000)
//     number=number%1000
//     let yuzlik = Math.floor(number / 100);
//     number = number % 100;
//     let onlik = Math.floor(number / 10);
//     let birlik = number % 10;
//     let bir = {
//       0: "",
//       1: "bir",
//       2: "ikki",
//       3: "uch",
//       4: "to`rt",
//       5: "besh",
//       6: "olti",
//       7: "yetti",
//       8: "sakkiz",
//       9: "to`qiz",
//     };
//     let on = {
//       0: "",
//       1: "o`n",
//       2: "yigirma",
//       3: "o`ttiz",
//       4: "qiriq",
//       5: "ellik",
//       6: "oltmish",
//       7: "yetmish",
//       8: "sakson",
//       9: "to`qson",
//     };
//     if (minglik!=0) {
//         return `${bir[minglik]} ming ${bir[yuzlik]} yuz ${on[onlik]} ${bir[birlik]}`
//     }else if (yuzlik != 0) {
//       return `${bir[yuzlik]} yuz ${on[onlik]} ${bir[birlik]}`;
//     }else return  `${on[onlik]} ${bir[birlik]}`.trim()
//   };
//   console.log(Hisob(9999));

// function logs(a) {
//   return a ** (1/5)
// }

// console.log(logs(32));

// function getSumOfDigits(integer) {
//   // var sum = null;
//   // var digits =  Math.floor(integer).toString();
//   // for(var ix = 1; ix < digits.length; ix = sum + 1) {
//   //   sum =+ digits[ix + 1];
//   // }
//   // return sum;
//   let num = 0;
//   var integer = integer.toString();
//   for (let i = 0; i < integer.length; i++) {
//     num += +integer[i];
//   }
//   return num;
// }
// console.log(getSumOfDigits(1234));

// var names = "Jamshidbek";

// function Revorse(params) {

// return params.split('').reverse().join('')

// }
// console.log(Revorse(names));
// 5/

// str = "1234567891";
// function arif(num) {
// //    return num.slice(1, 2)
// //   len = num.length;
// //   if (len % 2 != 0) {

//     // slice
// //     return (b = str.slice(parseInt(len / 2), parseInt(len / 2) + 1));
// //   } else {
// //     sum = +str.slice(len / 2 - 1, len / 2) + +str.slice(len / 2, len / 2 + 1)
// //     return sum/2
// //   }
// }
// console.log(arif(str));

// num = "456309324";
// a = "";
// for (let i = 0; i < num.length; i++) {
//   for (let j = 0; j < num.length; j++) {
//     num>num[j] ? a+=num[j] : ''
//   }
// //   console.log();
// }
// console.log(a);

// var filterString = function(value) {
//   c=''
//     for (let i = 0; i < value.length; i++) {
//         // console.log(value[i]);
//         for (let j = 0; j < 10; j++) {
//             value[i]==j ? c+=j: ''
//         }
//     }
//     return +c
// }
// console.log(filterString("aa1bb2cc3dd"));

// function squares(x, n) {

//     for (let i = 0; i < n; i++) {
//         c = [x];
//         for (let j = 0; j < 1; j++) {
//             a=c.shift()**2
//             c.push(a)
//         }
//         // console.log(c.shift()**2);
//         // c.concat(c.shift()**2)
//     // c.concat(c.shift() ** 2);
//     // a=c.shift()**2
//     // c.push(4)
//     // console.log(c);
//   }
//   //   console.log(c.shift());
//   return c;
// }
// console.log(squares(2, 5));

// function cntConsecutiveElements(array) {
//     array=array.split('')
//   let result = "";
//   let counter = 1;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[i + 1]) {
//       counter++;
//     } else {
//       result += array[i] + counter;
//       counter = 1;
//     }
//   }
//   return result;
// }
// console.log(cntConsecutiveElements('aabbccaasssd'));

// var isSquare = function (arr) {
//   if (arr.length == 0) {
//     return undefined;
//   } else {
//     a = "";
//     b = "";
//     for (let i = 0; i < arr.length; i++) {
//       Math.sqrt(arr[i]) % 1 == 0 ? (a += arr[i]) : (b += arr[i]);
//     }
//     return b != "" ? false : true;
//   }
// };
// console.log(isSquare([13]));

// function splitTheBill(x) {
//   arr = Object.values(x);

//   const initialValue = 0;
//   const sumWithInitial =
//     arr.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       initialValue
//     ) / 3;
//   console.log(sumWithInitial);

//   for (const [key, value] of Object.entries(x)) {

//     // console.log(key:value-sumWithInitial);
//   }
// //  console.log( c= Object.values(x-sumWithInitial))/
//   // return sumWithInitial

// }
// console.log(splitTheBill({ A: 20, B: 15, C: 10 }));

// var number=function(array){
//   arr=[]

//   for (let i = 0; i <array.length; i++) {
//     arr.push(`${i+1}: ${array[i]}`)
//   }
//   console.log(arr);
// }

// console.log(number([]));

// const g15 = [
//   {
//       id: 1,
//       name: 'Abdulaziz',
//       age: 20,
//       job: "developer"
//   },
//   {
//     id: 3,
//     name: 'Farrux',
//     age: 25,
//     job: "developer"
//   },
//   {
//       id: 2,
//       name: 'Shaxzodbek',
//       age: 21,
//       job: "developer"
//   },

//   {
//       id: 4,
//       name: 'Ahtambek',
//       age: 22,
//       job: "developer"
//   },

//   {
//       id: 5,
//       name: 'Miras',
//       age: 27,
//       job: "developer"
//   },

//   {
//       id: 6,
//       name: 'Islomjon',
//       age: 25,
//       job: "developer"
//   },

//   {
//       id: 7,
//       name: 'Asrorbek',
//       age: 30,
//       job: "developer"
//   },
// ]

// function name(id, name, age, job) {
//   g15.push({id, name, age, job })
// return g15
// }
// console.log(name(8, 'Asadbek' , 90, 'developers'));

// var isSquare = function (arr) {
//   arr.map((item) => {
//     if (Number.isInteger(Math.sqrt(item)) == true) {
//       console.log(true);
//     } else if (Number.isInteger(Math.sqrt(item)) == false) {
//       console.log(false);
//     } else {
//       console.log(undefined);
//     }
//   });
// };
// console.log(isSquare([1, 6, 9, 16, 25, 36]));

// function removeSmallest(numbers) {

// }
// console.log(removeSmallest([1, 3, 2, 3, 4, 5]));

// let ab = (n) => {
//   n = n + "";
//   if (n.length > 1) {
//     n = n.split("");
//     sum = 0;
//     n.forEach((item) => {
//       sum += +item;
//     });
//     ab((n = sum));
//   } else if (n.length == 1) {
//     m=+n
//   }
//   return m
// };

// console.log(ab(19622));

// function arrayDiff(a, b) {
//   for (let i = 0; i < b.length; i++) {
//     a = a.filter((val) => val != b[i]);
//   }
//   return a;
// }
// console.log(arrayDiff([1, 2, ], [1, ]));

// var countBits = function (n) {
//   n = n.toString(2);
//   c = 0;
//   for (let i = 0; i < n.length; i++) {
//     n[i] == 1 ? (c += +n[i]) : "";
//   }
//   return c;
// };
// console.log(countBits(7));

// function squareSum(numbers) {
//   numbers = numbers.map((val) => val ** 2);
//   console.log(numbers);
//   sum = 0;
//   numbers.forEach((num) => (sum += num));
//   return sum;
// }
// console.log(squareSum([1, 2]));

// function pigIt(str) {
//   let strr = [];
//   str = str.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != "!" && "?") {
//       strr.push(
//         str[i].split("").splice(1).join("") +
//           str[i].split("").splice(0, 1) +
//           "ay"
//       );
//     } else {
//       strr.push(str[i]);
//     }
//   }
//   console.log(strr);
// return str.split(" ").map((value) => value.split("").splice(1).join('')+( value.split("").splice(0,1)=='!'+'ay')
// ).join(' ');

// console.log(strr);
// "igPay atinlay siay oolcay"
// for (let i = 0; i < str.length; i++) {
//   str[i].split("").splice(0, 1);
//   console.log(str[i]);
//   // console.log(str);
// }
// }
// console.log(pigIt("O tempora o mores !"));

// function humanReadable(seconds) {
//     let minglik=Math.floor(number/1000)
//     number=number%1000
//     let yuzlik = Math.floor(number / 100);
//     number = number % 100;
//     let onlik = Math.floor(number / 10);
//     let birlik = number % 10;
// let Hour = Math.floor(seconds / 3600);
// seconds = seconds % 3600;
// let Minute = Math.floor(seconds / 60);
// seconds = seconds % 60;
// let Second = seconds;
// Hour=`${Hour}`.padStart(2,0)
// Minute=`${Minute}`.padStart(2,0)
// Second=`${Second}`.padStart(2,0)
// return `${Hour}:${Minute}:${Second}`
// console.log(Second);
// console.log(seconds);
// if (Hour>0) {
//   if (Hour<9) {

//   }
// }

//   // return '';
// }
// console.log(humanReadable(359999));

// function spinWords(string){
//   str=''
//    a=string.split(' ')
//    for (let i = 0; i < a.length; i++) {
//     if (a[i].length>4) {
//       str+=a[i].split('').reverse().join('')+ ' '
//     }else{
//       str+=a[i]+' '
//     }
//    }
//    return str

// }
// console.log(spinWords("Hashtag"));

// let ab = (n) => {
//   n = n + "";
//   c = [];
//   if (n.length > 1) {
//     n = n.split("");
//     sum = 1;
//     n.forEach((item) => {
//       // console.log(+item);
//       sum = sum * +item;
//     });
//     ab((n = sum));
//     c.push(sum)
//   }
//   return c.length;
// };

// console.log(ab(99));

// function isPrime(num) {
//   //TODO
// }
// console.log(isPrime());

// const getNumber = (number) => {
//   isPrime=true
//   if (number<=1) {
//     return false;
//   }
//   else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         return true
//     } else {
//         return false
//     }
// }
// };
// console.log(getNumber(2));

// function expandedForm(num) {
//   a = num + "".length;
//   c=[]
//   for (let i = 0; i < a; i++) {

//     m=a
//     c.push(parseInt())
//   }
// }
// console.log(expandedForm(70304));

// function flatten(...a) {
//   c=[]
//   for (let i = 0; i < a.length; i++) {
//     c.push(a[i])
//   }
//   return c
//   // console.log(c.flat(Infinity).join(' '));
// }
// console.log(flatten(1, [2, 3], 4, '5', [6, [7, [85]]]));

// let name='Jamshidbek'
// console.log(`he ${'name'}`);
// console.log(`he ${1}`);
// console.log(`he ${name}`);
// console.log('41'<   41);

// function josephusSurvivor(n, k) {
//   c = [];
//   for (let i = 1; i <= n; i++) {
//     c.push(i);
//   }
//   if (c.length > 1) {

//   }else {
//     console.log(c);
//   }
// }
// console.log(josephusSurvivor(1, 3));

// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("")
//       .match(/([^])\1+/g) || []
//   ).length;
// }
// console.log(duplicateCount("abcdescsd"));

// function duplicateEncode(word) {
//     let chars=[...word.toLowerCase()];
//     let duplicateList = chars.filter((char,index,chars)=>chars.indexOf(char)!==index);
//     let duplicateSet = new Set(duplicateList);
//     let uniqueDuplicateList = [...duplicateSet];
//     //console.log(uniqueDuplicateList);
//     let resultString = "";
//     for (let i=0, n=chars.length; i < n; ++i ) {
//       if(uniqueDuplicateList.includes(chars[i])) {
//         resultString += ")";
//       } else {
//         resultString += "(";
//       }
//     }
//     return resultString;
// }
// console.log(duplicateEncode("Success"));

// function isValidWalk(walk) {
//   let ns = 0,
//     we = 0;
//   for (let val of walk) {
//     if (val == "n") ns += 1;
//     if (val == "s") ns -= 1;
//     if (val == "w") we += 1;
//     if (val == "e") we -= 1;
//   }

//   return walk.length == 10 && ns === 0 && we === 0;
// }
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// function alphabetPosition(text) {
//   text = text.split("");
//   a = [];
//   alfabit = "abcdefghijklmnopqrstuvwxyz".split("");
//   for (let i = 0; i < text.length; i++) {
//     char = text[i].toLowerCase();

//     if (alfabit.indexOf(char) > -1) {
//       a.push(alfabit.indexOf(char));
//     }
//   }
//   return a.join(" ")
// }
// console.log(alphabetPosition("Hello World"));

// function order(words) {
//   words
//     .split(" ")
//     .sort((a, b) => console.log(a.match(/\d/),'a')-console.log(b.match(/\d/), 'b'))
//     .join(" ");
// }
// console.log(order("is2 Thi1s T4est 3a"));

// function toCamelCase(str) {
//   str = str.split(/[-_]/gi);
//   n = str.splice(0, 1);
//   m= str.join(" ").replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
//     return word.toUpperCase();
//   });
// a=n.join('')+m
// console.log(a.split(' ').join(''));
// }
// console.log(toCamelCase("the_stealth_warrior"));

// var uniqueInOrder = function (iterable) {
//   var arr = [];
//   for (var i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       arr.push(iterable[i]);
//     }
//   }
//   return arr;
// };

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// function narcissistic(value) {
//     a=(value+'').split('')
//     b=0
//     c=a.length
//     for (let i = 0; i < a.length; i++) {
//        b+=(a[i]**c)
//     }
//     return b==value
// }
// console.log(narcissistic(10024433));

// function findEvenIndex(arr) {
//   let left = 0;
//   let right = 0;
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;

//   if (arr.length == 0) {
//     return -1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       right = arr.slice(1).reduce(reducer, 0);
//       if (right === i) {
//         return i;
//       }
//     } else {
//       left = arr.slice(0, i).reduce(reducer, 0);
//       right = arr.slice(i + 1).reduce(reducer, 0);
//       if (left == right) {
//         return i;
//       }
//     }
//   }
// }
// console.log(findEvenIndex([20,10,30,10,10,15,35]));
// function isPangram(string) {
//   string = string.split(" ");
//   let index = 0,
//     newArr = [];

//   for (var i = 0; i < string.length; i++) {
//     ls = string[i].length;
//     for (let m = 0; m < ls - 1; m++) {
//       for (let l = m + 1; l < ls; l++) {
//         if (string[i][m] === string[i][l]) {
//           newArr[index] = string[i][m];
//           index++;
//         }
//       }
//     }
//   }
//   if (index>0) {
//     return false
//   }else{
//     return true
//   }
//   //   console.log(index);
// }
// console.log(isPangram("abcdefghijklmopqrstuvwxyz"));

// function numberRange (start, end) {
//     return new Array(end - start).fill().map((d, i) => i + start);
//   }

//   function getLetterPosition(letter) {
//     return letter.charCodeAt(0);
//   }

//   function getMissingNumber(array) {
//     const arraySort = array.sort((a, b) => a - b);

//     let numberMissing;

//     const range = numberRange(arraySort[0], arraySort[arraySort.length - 1])

//     for (let i = 0; i < range.length; i++) {
//       const num = range[i]
//       if (arraySort.indexOf(num) < 0) {
//         numberMissing = num;
//         break;
//       }
//     }

//     return numberMissing;
//   }
// function findMissingLetter(arr){
//     let alpha = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   if (arr[0] == arr[0].toLowerCase()) {
//     let j = alpha.indexOf(arr[0]);
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] != alpha[j]) {
//         return alpha[j];
//       }
//       j++;
//     }
//   }else{
//     let j = alpha.indexOf(arr[0].toLowerCase());
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].toLowerCase() != alpha[j]) {
//         return alpha[j].toUpperCase();
//       }
//       j++;
//     }
//   }
// }
// console.log(findMissingLetter(["b", "c", "d", "f"]));
// console.log(findMissingLetter(["O", "Q", "R", "S"]));

// function isPrime(num) {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//     console.log(i);
//     console.log(s = Math.sqrt(num));
//         // if(num % i === 0) return false;
//     return num > 1;
// }

// console.log(isPrime(1234));

// function humanReadable(number) {

//     a=[]
//     let ontri = Math.floor(number / 10000000000000);
//     number = number % 10000000000000;
//     if (ontri==0) {
//       ontri=''
//     }else{
//       ontri=ontri*10000000000000
//       a.push(ontri)
//     }
//     let tri = Math.floor(number / 1000000000000);
//     number = number % 1000000000000;
//     if (tri==0) {
//       tri=''
//     }else{
//       tri=tri*1000000000000
//       a.push(tri)
//     }
//     let yuzmiliard = Math.floor(number / 100000000000);
//     number = number % 100000000000;
//     if (yuzmiliard==0) {
//       yuzmiliard=''
//     }else{
//       yuzmiliard=yuzmiliard*100000000000
//       a.push(yuzmiliard)
//     }
//     let onmiliard = Math.floor(number / 10000000000);
//     number = number % 10000000000;
//     if (onmiliard==0) {
//       onmiliard=''
//     }else{
//       onmiliard=onmiliard*10000000000
//       a.push(onmiliard)
//     }
//     let miliard = Math.floor(number / 1000000000);
//     number = number % 1000000000;
//     if (miliard==0) {
//       miliard=''
//     }else{
//       miliard=miliard*1000000000
//       a.push(miliard)
//     }
//     let yuzmilion = Math.floor(number / 100000000);
//     number = number % 100000000;
//     if (yuzmilion==0) {
//       yuzmilion=''
//     }else{
//       yuzmilion=yuzmilion*100000000
//       a.push(yuzmilion)
//     }
//     let onmilion = Math.floor(number / 10000000);
//     number = number % 10000000;
//     if (onmilion==0) {
//       onmilion=''
//     }else{
//       onmilion=onmilion*10000000
//       a.push(onmilion)
//     }

//   let milion = Math.floor(number / 1000000);
//   number = number % 1000000;
//   if (milion==0) {
//     milion=''
//   }else{
//     milion=milion*1000000
//     a.push(milion)
//   }
//   let yuzminglik = Math.floor(number / 100000);
//   number = number % 100000;
//   if (yuzminglik==0) {
//     yuzminglik=''
//   }else{
//     yuzminglik=yuzminglik*100000
//     a.push(yuzminglik)
//   }
//   let onminglik = Math.floor(number / 10000);
//   number = number % 10000;
//   if (onminglik==0) {
//     onminglik=''
//   }else{
//     onminglik=onminglik*10000
//     a.push(onminglik)
//   }
//   let minglik = Math.floor(number / 1000);
//   number = number % 1000;
//   if (minglik==0) {
//     minglik=''
//   }else{
//     minglik=minglik*1000
//     a.push(minglik)
//   }
//   let yuzlik = Math.floor(number / 100);
//   number = number % 100;
//   if (yuzlik==0) {
//     yuzlik=''
//   }else{
//     yuzlik=yuzlik*100
//     a.push(yuzlik)
//   }
//   let onlik = Math.floor(number / 10);
//   if (onlik==0) {
//     onlik=''
//   }else{
//     onlik=onlik*10
//     a.push(onlik)
//   }
//   let birlik = number % 10;
//   if (birlik==0) {
//     birlik=''
//   }else{
//     a.push(birlik)
//   }
//   d=a.pop()
//   c=''
//   for (let i = 0; i < a.length; i++) {
//     c+= `${a[i]} + `
//   }
// return c+d

// //   return `${milion}:${yuzminglik}:${onminglik}:${minglik}:${yuzlik}:${onlik}:${birlik}`;
// }
// console.log(humanReadable(92093403034573));

// function count (string) {
//   let cache={};
//   string.split('').map(v=>cache[v]=cache[v]+1||1)
//   return cache;
// }
// console.log(count(""));

// function twoSum(nums, target) {
//   for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//       if(nums[i] + nums[j] === target){
//         return [i, j]
//       }
//     }
//   }
//   return null;
// }
// console.log(twoSum([335, -202, -853, 565, 708, 348, -391, 540, 541, -763, 376, -348, -844], 1084));

// function high(x) {
//     const words = x.split(' ');
//     const alphabetMap = {};
//     for (let i='a'.charCodeAt(), j = 1; i <= 'z'.charCodeAt(); i++, j++) {
//       alphabetMap[i] = j;
//     }
//     let highestScoringWord = { word: '', score: 0 };
//     words.forEach(w => {
//       const chars = w.split('');
//       const sumOfChars = chars.reduce((count, char) => count + alphabetMap[char.charCodeAt()], 0);
//       if (sumOfChars > highestScoringWord.score) {
//         highestScoringWord = { word: w, score: sumOfChars };
//       }
//     });

//     return highestScoringWord.word;
//   }
// console.log(high("what time are we climbing up the volcano"));

// function tribonacci(signature, n) {
//   var trib = signature;
//   for (i = 3; i < n; i++) {
//     trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
//   }
//   return trib.slice(0, n);
// }

// console.log(tribonacci([1, 1, 1], 10));

// function towerBuilder(nf) {
//   var tower = [];
//   for (var i = 0; i < nf; i++) {
//   tower.push(" ".repeat(nf - i - 1)
//   + "*".repeat((i * 2)+ 1)
//   + " ".repeat(nf - i - 1))
//   }
//   return tower;
//   }
//   console.log(towerBuilder(5));

// animal = ["foz", "ant", "bird", "lion", "wolf", "deer", "dgo"];

// // const an = (m) => {
// //   for (let i = 0; i < animal.length; i++) {
// //     c=m.split('').join(' ').match(animal[i].split(''))
// //     console.log(c);
// //   }
// // };
// // console.log(an("dgostcw"));

// anm = "d g o s t c w";
// cc = "d ";
// a = anm.match(cc);
// console.log(a);

// function getCount(str) {
//   vo = ["a", "e", "i", "o", "u"];
//   c = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vo.length; j++) {
//       vo[j] == str[i] && c++;
//     }
//   }
//   return c
// }
// console.log(getCount("abracadabra"));

// const num = (t) => {
//   c = 1;
//   if (t == 1) {
//     return 1;
//   } else {
//     for (let i = 1; i <t; i++) {
//       console.log(i);
//       console.log(c,'c');
//       // c+i
//       c=c+i
//     }
//     return c+1
//   }
// };
// console.log(num(3));

// let manu = {
//   width: 200,
//   height: 300,
//   title: "My manu",
// };

// function multiplyNumeric(manu) {
//   for (let value in manu) {
//     if (typeof manu[key] == "number") {
//       manu[key] *= 2;
//     }
//   }
//   return manu
// }

// console.log(multiplyNumeric(manu));

/* javascript program to find first 
repeating element in arr */

// This function prints the
// first repeating element in arr

// function printFirstRepeating(arr, n) {
//   // This will set k=1, if any
//   // repeating element found
//   var k = 0;
//   // max = maximum from (all elements & n)
//   var max = n;
//   for (i = 0; i < n; i++) if (max < arr[i]) max = arr[i];

//   // Array a is for storing
//   // 1st time occurrence of element
//   // initialized by 0
//   var a = Array(max + 1).fill(0);

//   // Store 1 in array b
//   // if element is duplicate
//   // initialized by 0
//   var b = Array(max + 1).fill(0);
//   for (var i = 0; i < n; i++) {
//     // Duplicate element found
//     if (a[arr[i]] != 0) {
//       b[arr[i]] = 1;
//       k = 1;
//       continue;
//     }
//     // storing 1st occurrence of arr[i]
//     else a[arr[i]] = i + 1;
//   }

//   if (k == 0) document.write("No repeating element found");
//   else {
//     var min = max + 1;

//     // trace array a & find repeating element
//     // with min index
//     for (i = 0; i < max + 1; i++)
//       if (a[i] != 0 && min > a[i] && b[i] != 0) min = a[i];
//     document.write(arr[min - 1]);
//   }
//   document.write("<br/>");
// }

// // Driver code

// var arr = [10, 5, 3, 4, 3, 5, 6];

// var N = arr.length;
// printFirstRepeating(arr, N);

// str = "ABBCACF";

// const findDuplicate = (str) => {
//   array=str.split('')
//   a=''
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {

//     }
//   }

// };
// console.log(findDuplicate(str));

// var numbers4 = [5, 2, 3, 4, 2, 6, 7, 1, 2, 3];
// var firstIndex = "";
// function findDuplicates(numbers4) {
//   for (var a = 0; a < numbers4.length; a++) {
//     for (var b = a + 1; b < numbers4.length; b++) {
//       if (numbers4[a] === numbers4[b])
//         firstIndex = numbers4.indexOf(numbers4[a]);
//       // return firstIndex
//       break;
//     }
//   }
//   return firstIndex;
// }

// console.log(findDuplicates(numbers4));

// var numbers4 = [5, 2, 3, 4, 2, 6, 7, 1, 2, 3];
// var firstIndex = "";
// for (var a = 0; a < numbers4.length; a++) {
//   for (var b = a + 1; b < numbers4.length; b++) {
//     // console.log(numbers4[a]);
//     // console.log(numbers4[b],'b');
//     if (numbers4[a] === numbers4[b]) {
//       console.log(numbers4.indexOf(2));
//       break;
//     }
//   }
// }
// console.log(firstIndex);

// const firstDupeIndex = (list) => {
//   const dict = {};

//   for (const [index, value] of list.entries()) {
//     if (dict.hasOwnProperty(value)) {
//       return dict[value];
//     }

//     dict[value] = index;
//   }

//   return -1;
// };

// console.log(
//   firstDupeIndex(['a', 'b', 'c', 'd', 'e', 'b', 'z', 't', 'c'])
// );

// var numbers4 = [5, 2, 3, 4, 4, 6, 7, 1, 2, 3];

// function findFirstDuplicateIndex(arr){
//   var found = {};

//   for (var a = 0, aa = arr.length; a < aa ; a++) {
//     if (found[arr[a]])
//       return found[arr[a]];

//     found[numbers4[a]] = a
//   }
// }

// console.log(findFirstDuplicateIndex(numbers4));

// var numbers4 = [5, 2, 3, 4,4, 2, 6, 7, 1, 2, 3];

// function firstDuplicate(arr) {
//   let elementSet = new Set();
// console.log(elementSet);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(elementSet.has(arr[i]));
//       if (elementSet.has(arr[i])) return arr[i];
//       elementSet.add(arr[i]);
//   }

//   return "No duplicates here!";
// }

// var numbers4 = ['a', 'b', 'c', 'a', 'b'];

// const findFirstDuplicate = (list) => {
//   for (let i = 0; i < list.length; i++) {
//     // console.log(Math.abs(list[i])-1);
//     if (list[Math.abs(list[i]) - 1] < 0) {
// // console.log(list[Math.abs(list[i]) - 1]);
//       return Math.abs(list[i]);
//     } else {
//       list[Math.abs(list[i]) - 1] = -list[Math.abs(list[i]) - 1];
//     }
//   }
//   return -1;
// };
// console.log(findFirstDuplicate(numbers4));

// let arr = "ABBACC";
// //for loop;if break;

// var findDup = function (arr) {
//   var a = 0,
//     found = {};
//   while (!found[arr[a]]) found[arr[a++]] = true;
//   return arr[a];
// };
// var findDup = function (arr) {
//   return (
//     arr.split('').reduce(function (a, b) {
//       return a + b;
//     }) -
//     (arr.length * (arr.length - 1)) / 2
//   );
// };
// findDup = (a) => a.split('').find((e, i) => i != a.lastIndexOf(e));

// function findDup(arr) {
//   var n = arr.length,
//     total = arr.split('').reduce((ctr, val) => ctr + val, 0),
//     expected = (n * (n - 1)) / 2;
//   return total - expected;
// }
// const findDup = (arr) => {
//   return (
//     arr
//       .split("")
//       .sort()
//       // .filter((v, i, arr) => v === arr[i + 1]) * 1
//   );
// };

// let arr = "CACBABACC";
// //for loop;if break;

// var findDup = function (arr) {
//   c = "";
//   let found = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!found[arr[i]]) {
//       found[arr[i]] = true;
//     } else {
//       return arr[i];
//     }
//   }
// };
// console.log(findDup(arr));

// function getLength(arr){
//   //return length of arr
//   return arr.length
// }
// function getFirst(arr){
//   //return the first element of arr
//   return arr.shift()
// }
// function getLast(arr){
//   //return the last element of arr
//   return arr.pop()
// }
// function pushElement(arr){
//   var el=1;
//   //push el to arr

//   return arr.push(el).length
// }
// function popElement(arr){
//   //pop an element from arr
//   arr.pop()
//   return `${arr.length}`
// }
// console.log(popElement([1,2,3]));
// arr = ["webbrain", "academy"];

// var findDup = function (arr) {
//   arr = arr.join("").split("");
//   c = 0;
//   let found = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (found[arr[i]]) {
//       found[arr[i]] += 1;
//     } else found[arr[i]] = 1;
//   }
//   return found;
// };
// console.log(findDup(arr));
