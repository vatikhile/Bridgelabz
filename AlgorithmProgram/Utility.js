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
  /*********************************Anagram or not string*********************************************/
  /**
   * PURPOSE String is anagram or not
   * @param Print print the string is anagram or not.
   */
  checkAnagram(string1, string2) {
    var format = /[a-zA-Z]/;
    var result;
    var count = 0;
    if (format.test(string1) && format.test(string2)) {
      if (string1.length !== string2.length) {

        console.log("strings are not anagram");
      }

      else {
        for (var i = 0; i < string1.length; i++) {

          for (var t = 0; t < string2.length; t++) {

            if (string2[t].toLowerCase() == string1[i].toLowerCase()) {
              count++;
              break;
            }
          }
        }

        if (count == string1.length) {

          console.log("string are anagram");
        }
        else {
          console.log("string are not anagram");
        }
      }
    }
    else {
      console.log("enter only letters or alphabets");
    }
  },
  /*********************************print prime number upto 1000*********************************************/
  /**
   * PURPOSE Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
   * @param Print  1000 prime number.
   */

  getPrimeNumber(number) {
    if (number <= 1000) {
      for (var i = 1; i <= number; i++) {
        var temp = 0;
        for (var j = 2; j < i - 1; j++) {
          if (i % j == 0) {
            temp = temp + 1;
          }
        }
        if (temp == 0) {
          console.log("Prime Number:" + i);
        }
      }
      return number;
    }
    else {
      console.log("Number is out of range")
    }
  },
  isPrime(num) {
    try {
      if (num == 0 || num == 1)
        return false;
      for (let i = 2; i < num; i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
    catch (e) {
      console.log(e.message);
    }
  },

  findPrimeNumber() {
    try {
      console.log("Prime number must be in the range of 0-1000");
      for (let i = 0; i <= 1000; i++) {
        if (this.isPrime(i))
          console.log(i);
      }
    }
    catch (e) {
      console.log(e.message);
    }
  },
  isNumberPalindrome(n1) {
    try {
      var string = "";
      n1 = n1 + "";

      for (let i = 0; i < n1.length; i++) {
        string = n1.charAt(i) + string;
      }
      if (string == n1) {
        return true;
      }
      return false;
    }
    catch (e) {
      console.log(e.message);
    }
  },


  isAnagram(s1, s2) {
    try {
      var format = /[a-zA-Z0-9]/;
      var result;
      if (format.test(s1) && format.test(s2)) {
        if (s1.length !== s2.length) {
          result = false;
        }
        var sorts1 = s1.toString().split("").sort().join("");
        var sorts2 = s2.toString().split("").sort().join("");
        result = sorts1 === sorts2;
        if (result == true) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        console.log("enter only letters or alphabets");
      }
    }
    catch (e) {
      console.log(e.message);
    }
  },


  isAnagramPalindrome() {
    try {
      console.log("Prime number in the range 0-1000 which are anagram and palindrome ");
      var arr = [];
      for (let i = 0; i < 1000; i++) {
        if (this.isPrime(i)) {
          arr.push(i);
        }
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (this.isAnagram(arr[i], arr[j])) {
            console.log(arr[i] + " and " + arr[j] + " are anagram");
            if (this.isNumberPalindrome(arr[i])) {
              console.log(arr[i] + " is palindrome");
            }
            if (this.isNumberPalindrome(arr[j])) {
              console.log(arr[j] + " is Palindrome");
            }
          }
        }
      }
    }
    catch (e) {

      console.log(e.message);

    }
  },
  /*********************************Bubble sort  method for Integer*********************************************/
  /**
   * PURPOSE Bubble sort  method for Integer
   * @param print the element sorted order
   */
  bubbleSortIntger(arr1) {

    var n = arr1.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (arr1[j] > arr1[j + 1])
          // swap arr[j+1] and arr[j]
          var temp = arr1[j];
        arr1[j] = arr1[j + 1];
        arr1[j + 1] = temp;


        for (i = 0; i < arr1.length; i++) {
        }
        console.log(arr1 + "");

      }
    }
    return arr1;
  },

  //It return the time in seconds
  //The value return by is an integer between 0 to 59
  stopwatch() {
    var date = new Date();
    return date.getSeconds();
  },

  //It return the time in millisecond
  stopwatchmill() {
    var date = new Date();
    return date.getMilliseconds();
  },

  /**
     * PURPOSE BinarySearch method for integer
     * @param print the search element on which position is present or not.
     */
  binarySearchInt(arr, number) {
    console.log("in binary search " + arr)
    var n = arr.length;
    var l = 1
    var tem
    while (tem != number) {
      if (n < l)
        break;
      var m = l + Math.floor((n - l) / 2)

      if (arr[m] < number)
        l = m + 1
      else if (arr[m] > number)
        n = m - 1
      else if (arr[m] == number) {
        console.log("number is present")
        tem = number
        return true
      }
      else {
        break;
        return false
      }


    }
  },
  /*********************************Bubble sort  method for String*********************************************/
  /**
   * PURPOSE Bubble sort  method for string
   * @param print the element sorted order
   */
  bubbleSortString(arr1) {
    var n;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - 1; j++) {
        if (arr1[j] > arr1[j + 1]) {
          var temp = arr1[j];
          arr1[j] = arr1[j + 1];
          arr1[j + 1] = temp;
        }
        for (var i = 0; i < arr1.length; i++) {

        }
        console.log(arr1 + "");
      }
    }
  },
  /*********************************Binary serach method for string*********************************************/
  /**
   * PURPOSE BinarySearch method for string
   * @param print the search element on which position is present or not.
   */
  binarySearchString(arr1, string) {
    console.log("in binary search " + arr1)
    var n = string.length;
    var l = 1
    var tem
    while (tem != string) {
      if (n < l)
        break;
      var m = l + Math.floor((n - l) / 2)

      if (arr1[m] < string)
        l = m + 1
      else if (arr1[m] > string)
        n = m - 1
      else if (arr1[m] == string) {
        console.log("String  is present")
        tem = string
        return true
      }
      else {
        break;
        return false
      }


    }

  },
  /*********************************Insertion sort  method for Integer*********************************************/
  /**
   * PURPOSE Insertionsort  method for Integer
   * @param print the element sorted order
   */


  insertionSortInt(array) {

    for (var i = 1; i < array.length; ++i) {
      var currentItem = array[i];

      for (var j = i - 1; j >= 0; --j) {
        if (array[j] <= currentItem) break;
        array[j + 1] = array[j];
      }

      array[j + 1] = currentItem;
    }
    console.log(array)
    return array;
  },
  /*********************************Insertion sort  method for String*********************************************/
  /**
   * PURPOSE Insertion sort  method for string
   * @param print the element sorted order
   */
  insertionSortString(array) {


    for (var i = 1; i < array.length; ++i) {
      var currentItem = array[i];

      for (var j = i - 1; j >= 0; --j) {
        if (array[j] <= currentItem) break;
        array[j + 1] = array[j];
      }

      array[j + 1] = currentItem;
    }
    console.log(array)


    return array;
  },

  /*********************************Merge Sort*********************************************/
  /**
   * PURPOSE Write a program with Static Functions to do Merge Sort of list of Strings. 
   * @param Print the result sorted element
   * */

  mergeSort(res) {
    var n = res.length;
    //if size is less than 2 return that.
    if (n < 2) {
      return;
    }
    //cal mid value 
    var mid = Math.floor(n / 2);
    var left = [mid];
    var right = [n - mid];
    //store  elements in left array which are present before the mid   
    for (let i = 0; i < mid; i++) {
      left[i] = res[i];
    }
    //store  elements in left array which are present before the mid  
    for (let j = mid; j < n; j++) {
      right[j - mid] = res[j];
    }
    //call mergesort for left halve 
    this.mergeSort(left);
    //call mergesort for left halve 
    this.mergeSort(right);
    this.merge(left, right, res);

  },

  merge(arr, brr, crr) {
    var i = 0; var j = 0;
    var k = 0;
    //merge elements into crr[]
    while (i < arr.length && j < brr.length) {
      if (arr[i] <= brr[j]) {
        crr[k] = arr[i]
        i++;
      }
      else {
        crr[k] = brr[j];
        j++;
      }
      k++;
    }
    // if arr[] is greater than brr[], push all arr[] into crr[]
    while (i < arr.length) {
      crr[k] = arr[i];
      i++;
      k++;
    }
    // if arr[] is lesser than brr[], push all brr[] into crr[]
    while (j < brr.length) {
      crr[k] = brr[j];
      j++;
      k++;
    }
    return crr;
  },

  /*********************************Dayofweek*********************************************/
  /**
   * PURPOSE  Takes a date as input and prints the day of the week that date falls on.
   * @param Print the day of the week that date falls on
   * */

  dayOfWeek(d, m, y) {
    var y0 = y - Math.floor((14 - m) / 12);
    var x = y0 + Math.floor((y0 / 4)) - Math.floor((y0 / 100)) + Math.floor((y0 / 400));
    if (m <= 12) {
      //calculating month of year using formula
      var m0 = m + 12 * Math.floor((14 - m) / 12) - 2;

      var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7;
      return d0;


    }
    else {
      console.log("Invalid month")
    }


  },
  /*********************************Vending Machine*********************************************/
  /**
   * PURPOSE  Minimum Note needed to give the change and  list of Rs Notes that would given in the Change
   * @param Print the result sorted element
   * */

  vendingMachine(arr, amount) {
    var notes = 0
    for (let i = 0; i < arr.length; i++) {
      if (amount / arr[i] >= 1) {
        var c = Math.floor(amount / arr[i])
        notes = notes + c
        console.log(arr[i] + " notes are :" + c)
        amount = amount % arr[i]
      }
    }
    console.log("total number of notes :" + notes)

  },


  // ************************** Conversion of Temprature**************************************************//

  convertToF(celsius) {
    var fahrenheit;
    // Only change code below this line
    fahrenheit = (celsius * (9 / 5)) + 32; // fahenheit = celsius * 9/5 + 32 works too.
    // Only change code above this line
    console.log(fahrenheit)
  },

  convertToT(fahrenheit) {
    var celsius;
    // Only change code below this line
    celsius = (fahrenheit - 32) * 5 / 9; // fahenheit = celsius * 9/5 + 32 works too.
    // Only change code above this line
    console.log(celsius)

  },
  /*********************************square root*********************************************/
  /**
   * PURPOSE  Compute the square root of a nonnegative number c given in the input using Newton's method.
   * @param Print the square root of non negative number
   * */
  getSquare(c) {

    var epsilon = 1e-15;    // relative error tolerance
    var t = c;              // estimate of the square root of c


    while (Math.abs(t - c / t) > epsilon * t) {
      t = (c / t + t) / 2.0;
    }

    // print out the estimate of the square root of c
    console.log("estimated of the square root :" + t);
    return t;
  },
  /*********************************Decimal to Binary*********************************************/
  /**
   * PURPOSE  Outputs the binary (base 2) representation of the decimal number typed as the input.
   * @param Print the Decimal to binary number
   * */
  toBinary(num) {
    var tem = num

    while (num > .9) {

      var s = Math.floor(num % 2)

      num = num / 2

    }

    console.log("binary value for given number is:" + s)
    return st;
  },

  /*********************************Monthly Payment*********************************************/
  /**
   * PURPOSE  Reads in three command-line arguments P, Y, and R and calculates the monthly payments you would have to make over Y years to pay off a P principal loan amount at R per cent interest compounded monthly
   * @param Print fahrenheit as input outputs the temperature in Celsius or viceversa 
   * */

  monthlyPayment(Y, R, P) {
    var n = 12 * Y;
    var r = R / (12 * 100)
    var d = 1 - (1 + r) ** (-n)
    var mp = (P * r) / d;
    console.log(" monthly Payment is :" + mp)


  },
  /*********************************Int to Binary*********************************************/
  // @Purpose:int to binary conversion
  toBinary(num) {
    var tem = num
    var st = "";
    while (num > .9) {

      var s = Math.floor(num % 2)
      st = s + st
      num = num / 2

    }

    console.log("binary value for given number is:" + st)
    return st;
  },
  /********************************Search Word*********************************************/
  /**
  * @Purpose:Read in a list of words from File. Then prompt the user to enter a word to search the list. 
  * The program reports if the search word is found in the list.
  */
  searchWord() {
    try {
      var arr = [];
      var search = read.question("Enter the word to search = ");
      const fs = require("fs");
      fs.readFile("search.txt", (err, data) => {
        if (err)
          throw err;
        arr = data.toLocaleString().split(",");
        console.log(this.getBinarySearch(arr, search));


      })

    }
    catch (e) {
      console.log(e.message);

    }
  },


  /*********************************tempretureconversion*********************************************/
  /**
   * PURPOSE  Temperature in fahrenheit as input outputs the temperature in Celsius or viceversa using the formula.
   * @param Print fahrenheit as input outputs the temperature in Celsius or viceversa 
   * */
  tempraturecon(tem) {
    var read = require('readline-sync')
    var C = 0, F = 1;
    //checking tem = C or not
    if (tem == C) {
      var a = read.questionInt("Enter the Celsius")
      a = (a * 9 / 5) + 32;
      console.log("Celsius to Fahrenheit :" + a)
    }
    //checking tem = F or not
    else if (tem == F) {
      var b;
      var b = read.question("Enter the Fahrenheit")
      b = (b - 32) * 5 / 9;
      console.log("Fahrenheit to celsius i: " + b);
    }
    else {
      console.log("Enter the proper input")
    }


  },


}