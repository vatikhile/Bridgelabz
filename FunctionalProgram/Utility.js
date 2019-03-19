var read = require('readline-sync');

//-------------------------------------LOGIC'S-----------------------------------------------
module.exports = {
   input() {
      var readline = require('readline');
      var r1 = readline.createInterface({
         input: process.stdin,
         output: process.stdout
      });
      return r1;
   },
   /********************************Replace string **********************************************/
   /**
    * PURPOSE Take User Name as Input. Ensure UserName has min 3 char
    * @param Print the String with User Name 
    */
   replace(name) {
      var stringreplace ="hello <<username>> how are you?"
      var result =stringreplace.replace('<<username>>',name);
      console.log(result);
      
     
   },
   /**********************************Flipcoin********************************************/
   /**
    * PURPOSE Using Random Function to get value between 0 and 1. If < 0.5 then tails or heads
    * @param number Percentage of Head vs Tails
    */
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
      //calculation percentage of heads
      var perheads = (head / n) * 100;
      console.log("percentage of heads is:" + perheads);
      var pertails = (tail / n) * 100;
      console.log("percentage of  tails is :" + pertails);
   },
   /*********************************Leapyear*********************************************/
   /**
    * PURPOSE Year, ensure it is a 4 digit number.
    * @param Print the year is a Leap Year or not.
    */
   leapYear(year) {
      //check the divisibility
      if ((((year % 100 !== 0) && (year % 4 == 0)) || (year % 400 == 0))) {  //console.log(len.length)
         console.log('leap year')
      }
      else {
         console.log('Not leap year')
      }

   },
   /* ************************************Power of Two******************************************/
   /**
    * PURPOSE The Power Value N. Only works if 0 <= N < 31 since 2^31 overflows an int
    * @param Print able of the powers of 2 
    */
   power(num) {
      // intialization
      var mul = 1;
      //checking num is greater than or not
      if (num >= 31) {
         console.log('number is greater than 31')
      }
      else
         //value is less than 31 then compute power of two
         for (i = 0; i < num; i++) {
            mul = mul * 2;
            console.log(mul);


         }
   },

   /***********************************Harmonic Number*******************************************/
   /**
    * PURPOSE compute 1/1 + 1/2 + 1/3 + ... + 1/N
    * @param Print the Nth Harmonic Value.
    */
   harmonicNumber(num) {
      var num;
      var val = 0.0;
      // compute 1/1 + 1/2 + 1/3 + ... + 1/n
      for (var i = 1; i <= num; i++) {

         val = val + (1.0 / i);

      }
      console.log(val);

   },
   /***********************************Prime Factors*******************************************/
   /**
    * PURPOSE Computes the prime factorization of N using brute force.
    * @param Print Print the prime factors of number N.
    */
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
      // n is a prime number greater than 2 
      if (num > 2)
         console.log(num);
   },
   /*************************************Gambler*****************************************/
   /**
    * PURPOSE Simulates a gambler who start with $stake and place fair $1 bets until 
    * he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of times he/she wins and the number of bets he/she makes. 
    * Run the experiment N times, averages the results, and prints them out
    *  @param Print Print Number of Wins and Percentage of Win and Loss.
    */
   gambler(cash, Goal, Times) {
      var wins = 0;
      var loss = 0;
      for (var i = 0; i < Times; i++) {
         //compute
         while (cash > 0 && cash < Goal) {



            if (Math.random() < 0.5) {
               //win add 1
               cash++;
               Times--;
               wins++;
            }
            else {
               //lose sub 1
               loss++;
               cash--;
               Times--;
            }

         }
         //total win
         var Total = wins + loss;
         var winningPercentage = (wins / Total) * 100;
         var losspercentage = (loss / Total) * 100;
         //console.log('no of wins',wins+"");
         console.log("winningPercentage" + winningPercentage);
         console.log("losspercentage" + losspercentage);

      }
   },
   /************************************Coupon Number******************************************/
   /**
    * PURPOSE Given N distinct Coupon Numbers, how many random numbers do you need to generate
    * distinct coupon number? This program simulates this random process.
    * @param Print N Distinct Coupon Number
    */
   coupon(num) {

      var size = 0;
      for (size = 0; size < num; size++) {
         //random method generate number between 0.0 to 0.1 
         var x = Math.round(Math.random() * 10000);
         console.log(x);
      }
   },
   /***************************************2DArray***************************************/
   /**
    * PURPOSE A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output.
    * @param Print function to print 2 Dimensional Array. 
    */

   array(row, column) {
      var arr = [];
      for (var i = 0; i < row; i++) {
         arr[i] = [];

         for (var j = 0; j < column; j++) {

            var element = read.question("Enter the value :")
            arr[i][j]= element+"";

         }

      }
      console.log(arr);
   },

   /**************************************Findsum3zero****************************************/
   /**
    * PURPOSE A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
    * @param Print One Output is number of distinct triplets as well as the second output is to print the distinct triplets.
    */
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

            console.log("invalid ");
         }
      }
   },

   /***************************************Distance***************************************/
   /**
    * PURPOSE takes two integer command-line arguments x and y and prints the Euclidean distance from the point (x, y) to the origin (0, 0).
    * @param Print calculate distance = sqrt(x*x + y*y).
    */

   getDistance(x, y) {
      //compute distance
      var distance = Math.sqrt(x * x + y * y);
      console.log("Print the distance between (x ,y) to origin(o,o)" + " = " + distance);
      return y;

   },

   /**********************************StopWatch********************************************/
   /**
    * PURPOSE Write a Stopwatch Program for measuring the time that elapses between the start and end clicks
    * @param Print Print the elapsed time.
    */
   findTime() {
      // var sptime
      var sttime
      //taking the input
      var sttime = read.question("enter 0 starting time :")
      var start = this.stopwatch();
      var sp = read.question("enter 1 stop :");
      var stop = this.stopwatch();
      //compute the elapsed time
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
   /***************************************Quadratic***************************************/
   /**
    * PURPOSE find the roots of the equation a*x*x + b*x + c. Since the equation is x*x, hence there are 2 roots. 
    * @param Print find the roots of x.
*/

   findRooteOfEquation(a, b, c) {

      var delta = (b * b - 4 * a * c);

      var sqrt = Math.sqrt(delta);
      var root1 = (-b + sqrt) / (2 * a);
      var root2 = (-b - sqrt) / (2 * a);
      console.log("2 root of equation :" + "root1" + "= " + root1 + " and " + "root2" + "= " + root2);

   },

   /***************************************Windchill***************************************/
   /**
    * PURPOSE Takes two command-line arguments t and v and prints the wind chill. Use Math.pow(a, b) to compute ab.
    * @param Print National Weather Service defines the effective temperature (the wind chill) .
    */

   windChill(t, v) {

      if (t > 50 || v > 120 || v < 3) {

         console.log('invalid');
      }

      else {
         var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);

         console.log("Wind chill  = " + w);
      }
   },

}