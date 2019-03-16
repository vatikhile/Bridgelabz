var read = require('readline-sync');
module.exports = {
   input() {
      var readline = require('readline');
      var r1 = readline.createInterface({
         input: process.stdin,
         output: process.stdout
      });
      return r1;
   },
   ///////////////////////////////////////////////////////////
   replace(str1, str2, str3) {

      var str1, str2, str3;
      //COMPUTATION
      if (str3.length >= 3) {
         var str4 = str1.replace(str2, str3);
         //OUTPUT
         console.log("New String: " + str4);
      }
      else {
         console.log("usermane has been minmum 3 charcter")
      }
   },
   ////////////////////////////////////////////////////////////////
   flipCoin(filp) {
      var head = 0;
      var tail = 0;

      var n = filp;
      var i;
      for (i = 0; i < n; i++) {
         var random = Math.random();
         if (random < 0.5) {
            tail++;
            console.log("tail");
         } else {
            head++;
            console.log("head");

         }
      }
      var perheads = (head / n) * 100; //calculation percentage of heads
      console.log("percentage of heads is:" + perheads);
      var pertails = (tail / n) * 100;
      console.log("percentage of  tails is :" + pertails);
   },
   /////////////////////////////////////////
   leapYear(year) {

      //var year;


      if ((((year % 100 !== 0) && (year % 4 == 0)) || (year % 400 == 0))) {  //console.log(len.length)
         console.log('leap year')
      }
      else {
         console.log('Not leap year')
      }

   },
   /////////////////////////////////////////////
   power(num) {
      var mul = 1;
      if (num >= 31) {
         console.log('number is greater than 31')
      }
      else
         for (i = 0; i < num; i++) {
            mul = mul * 2;
            console.log(mul);


         }

   },
   ///////////////////////////////////////////
   harmonicNumber(num) {
      var num;
      var val = 0.0;

      for (var i = 1; i <= num; i++) {

         val = val + (1.0 / i);
         //console.log(val);

      }
      console.log(val);

   },
   ////////////////////////////////////////////////////////////
   primeFactor(num) {
      var num;
      // A function to print all prime factors 
      // of a given number n 


      // Print the number of 2s that divide n 
      while (num % 2 == 0) {
         console.log(2 + " ");
         num = num / 2;
      }

      // n must be odd at this point. So we can 
      // skip one element (Note i = i +2) 
      for (var i = 3; i <= Math.sqrt(num); i += 2) {
         // While i divides n, print i and divide n 
         while (num % i == 0) {

            console.log('%d', i);
            num = num / i;
         }
      }

      // This condition is to handle the case whien 
      // n is a prime number greater than 2 
      if (num > 2)
         console.lo//g(num); 
   },

   gambler(cash, Goal, Times) {
      var wins = 0;
      var loss = 0;
      for (var i = 0; i < Times; i++) {

         while (cash > 0 && cash < Goal) {



            if (Math.random() < 0.5) {
               cash++;
               Times--;
               wins++;
            }
            else {
               loss++;
               cash--;
               Times--;
            }

         }

         var Total = wins + loss;
         var winningPercentage = (wins / Total) * 100;
         var losspercentage = (loss / Total) * 100;
         //console.log('no of wins',wins+"");
         console.log("winningPercentage" + winningPercentage);
         console.log("losspercentage" + losspercentage);

      }



   },
   coupon(num) {

      var size = 0;
      // 

      for (size = 0; size < num; size++) {
         var x = Math.round(Math.random() * 10000);
         console.log(x);
      }
   },
   //       for (var i = 0; i < arr.length; i++) {
   //          if (arr[i] != x && x > 0) {
   //             arr[i] = parseInt(x);
   //             size++;


   //          }
   //       }
   //    }
   // },
   // var array=[];
   // console.log(array.length);


   array(row, column) {
      var arr = [];
      for (var i = 0; i < row; i++) {
         arr[i] = [];

         for (var j = 0; j < column; j++) {

            var element = read.question("Enter the value :")
            arr[i][j] += element + "";
            // console.log(arr[i],[j]);
         }

      }
      console.log(arr);




   },


   sum(array) {

      var sum = 0;
      var arr_size = array.length;
      {
         if (arr_size != 0) {
            var l, r;

            // Fix the first element as A[i]
            for (var i = 0; i < arr_size - 2; i++) {

               // Fix the second element as A[j]
               for (var j = i + 1; j < arr_size - 1; j++) {

                  // Now look for the third number
                  for (var k = j + 1; k < arr_size; k++) {
                     if (array[i] + array[j] + array[k] == sum) {
                        console.log("Triplet is " + array[i] + ", " + array[j] + ", " + array[k]);

                     }
                  }
               }
            }
         }

         else {

            console.log("invalide ");
         }

      }


   },


   getDistance(x, y) {
      var distance = Math.sqrt(x * x + y * y);
      console.log("Print the distance between (x ,y) to origin(o,o)" + " = " + distance);
      return y;

   },
   //    permute(permutation) {
   //    var length = permutation.length,
   //          c = Array(length).fill(0),
   //          i = 1, k, p;
   //    console.log(permutation);
   //    // 
   //    getAllPermutations(string) {
   //       var results = [];

   //       if (string.length === 1) {
   //         results.push(string);
   //         return results;
   //       }

   //       for (var i = 0; i < string.length; i++) {
   //         var firstChar = string[i];
   //         var charsLeft = string.substring(0, i) + string.substring(i + 1);
   //         var innerPermutations = getAllPermutations(charsLeft);
   //         for (var j = 0; j < innerPermutations.length; j++) {
   //           results.push(firstChar + innerPermutations[j]);
   //         }
   //       }
   //       return results;
   //     },

   //   /**
   //            * @Purpose:to return all permutation of a string using recursion method
   //            * @author komalalte
   //            * @version 1.0
   //            * @since 30-1-2019
   //            *
   //            */

   perm1(s) {
      var s;
      perm1("", s);
   },

   perm1(prefix, s) {
      var n = s.length;
      if (n == 0)
         console.log(prefix);
      else {
         for (var i = 0; i < n; i++)
            perm1(prefix + s.charAt(i), s.substring(0, i) + s.substring(i + 1, n));
      }

   },
   perm2(s) {
      var n = s.length;
      //  char[] a = new char[n];
      a = [n];
      for (var i = 0; i < n; i++)
         a[i] = s.charAt(i);

   },

   //    yield permutation.slice();
   //    while (i < length) {
   //          if (c[i] < i) {
   //                k = i % 2 && c[i];
   //                p = permutation[i];
   //                permutation[i] = permutation[k];
   //                permutation[k] = p;
   //                ++c[i];
   //                i = 1;
   //                console.log(permutation);

   //                // yield permutation.slice();
   //          } else {
   //                c[i] = 0;
   //                ++i;
   //          }

   //    }

   // // },

   findTime() {
      // var sptime
      var sttime

      var sttime = read.question("enter 0 starting time :")

      var start = this.stopwatch();
      var sp = read.question("enter 1 stop :");

      var stop = this.stopwatch();
      console.log(stop - start);
   },

   stopwatch() {
      var date = new Date();
      return date.getSeconds();
   },



   stopwatchmill() {
      var date = new Date();
      return date.getMilliseconds();
   },


   findRooteOfEquation(a, b, c) {

      var delta = (b * b - 4 * a * c);

      var sqrt = Math.sqrt(delta);
      var root1 = (-b + sqrt) / (2 * a);
      var root2 = (-b - sqrt) / (2 * a);
      console.log("2 root of equation :" + "root1" + "= " + root1 + " and " + "root2" + "= " + root2);

   },

   windChill(t, v) {

      if (t > 50 || v > 120 || v < 3) {

         console.log('invalid');
      }

      else {
         var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);

         console.log("Wind chill  = " + w);
      }




   },
   
   intializeGame() {
      var game = [];
      for (let i = 0; i <= 2; i++) {
         game.push([]);
         for (let j = 0; j <= 2; j++)
            game[i][j] = '-';
      }
      return game;
   },

   random() {
      var value = Math.floor(Math.random() * 3);
      console.log(value + 1);
      return value;
   },

   mark(game, x, y, value) {
      if (game[x][y] == '-')
         game[x][y] = value;
      for (let i = 0; i <= 2; i++) {
         var print = [];
         for (let j = 0; j <= 2; j++)
            print[j] = game[i][j];
         console.log(print);
      }
      return game;
   }
   ,
   computerPlayer(game) {
      var arr;
      var flag = false;
      while (flag == false) {
         var x = this.random();
         var y = this.random();
         if (game[x][y] == '-') {
            arr = this.mark(game, x, y, 'O');
            flag = true;
         }
      }
      return game;
   }
   ,
   userPlayer(game) {
      var flag = false;
      while (flag == false) {
         console.log("Enter the row value:");
         let x = read.questionInt('Enter the value of x within 1,2,3 : ') - 1;
         let y = read.questionInt('Enter the value of y within 1,2,3 : ') - 1;
         if (game[x][y] == '-') {
            this.mark(game, x, y, 'X');
            flag = true;
         }
         else
            console.log("Please enter the correct choice");
      }
      return game;
   }
   ,
   check(game) {
      for (let i = 0; i <= 2; i++) {
         if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
            if (game[i][0] == 'O' || game[i][0] == 'X') {
               return true;
            }
         }
         if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
            if (game[0][i] == 'O' || game[0][i] == 'X') {
               return true;
            }
         }
      }
      var k = 0, l = 0;
      if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
         if (game[0][0] == 'O' || game[0][0] == 'X') {
            return true;
         }
      }
      if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
         if (game[0][0] == 'O' || game[0][0] == 'X') {
            return true;
         }
      }
      return false;
   },










intializeGame() 
{
    var game = [];
    for (let i = 0; i <= 2; i++) 
    {
        game.push([]);
        for (let j = 0; j <= 2; j++)
            game[i][j] = '-';
    }
    return game;
},


computerPlayer(game) 
{
    var arr;
    var flag = false;
    while (flag == false) 
    {
        var x = this.random();
        var y = this.random();
        if (game[x][y] == '-') 
        {
            arr = this.mark(game, x, y, 'O');
            flag = true;
        }
    }
    return game;
},
computerPlayer(game) 
{
    var arr;
    var flag = false;
    while (flag == false) 
    {
        var x = this.random();
        var y = this.random();
        if (game[x][y] == '-') 
        {
            arr = this.mark(game, x, y, 'O');
            flag = true;
        }
    }
    return game;
},
check(game) 
    {
        for (let i = 0; i <= 2; i++) 
        {
            if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) 
            {
                if (game[i][0] == 'O' || game[i][0] == 'X') 
                {
                    return true;
                }
            }
            if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) 
            {
                if (game[0][i] == 'O' || game[0][i] == 'X') 
                {
                    return true;
                }
            }
        }
        var k = 0, l = 0;
        if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) 
        {
            if (game[0][0] == 'O' || game[0][0] == 'X') 
            {
                return true;
            }
        }
        if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) 
        {
            if (game[0][0] == 'O' || game[0][0] == 'X')
            {
                return true;
            }
        }
        return false;
    },

    
}