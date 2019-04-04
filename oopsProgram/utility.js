const read = require("readline-sync");
module.exports = {

  /****************** JSON Inventory Data Management of Rice, Pulses and Wheats *********************
     *  1. Inventory Data Management of Rice, Pulses and Wheats
     *----------------------------------------------------------
     * @Purpose   : To creat a file having Inventory Details for Rice, Pulses and Wheats
     *             with properties such as name, weight, price per kg.
     *
     * @Use Library : Java JSON Library
     *
     * @description: Declaring the function and passing the userinput as argument.
     *
     * @function: diplay name takes the userinput and print it with some sentence.
     *
     * @parameter : object --> objects such as rice, Wheats and Pulse which are at inventory
     */

  inventory(object) {
    var rice = object.Rice
    var wheat = object.Wheats
    var pulse = object.Pulse
    for (key in rice) {
      console.log(rice[key]);
      console.log("price per kg:" + rice[key].price + "kg");
      console.log("Total quantity:" + rice[key].weight);
      console.log("Total price for " + rice[key].name + "is:Rs", rice[key].price * rice[key].weight);
      console.log("");
    }


    for (key in wheat) {
      console.log(wheat[key]);
      console.log("price per kg:" + wheat[key].price + "kg");
      console.log("Total quantity:" + wheat[key].weight);
      console.log("Total price for " + wheat[key].name + "is:Rs", wheat[key].price * wheat[key].weight);
      console.log("");
    }


    for (key in pulse) {
      console.log(pulse[key]);
      console.log("price per kg:" + pulse[key].price + "kg");
      console.log("Total quantity:" + pulse[key].weight);
      console.log("Total price for " + pulse[key].name + "is:Rs", pulse[key].price * pulse[key].weight);
      console.log("");
    }


  },
  /************************* Regular Expression Demonstration ***************************
      *  2. Regular Expression Demonstration
      *-------------------------------------
      * @Purpose   : To replace name, full name, Mobile#, and Date with proper value.
      *
      * @Use Library : Java JSON Library
      *
      * @description: Declaring the function and passing the userinput as argument.
      *
      * @function: diplayname takes the userinput and print it with some sentence.
      *
      * @parameter : object --> 
      */


  regex(name, fullname, mobilenumber, dt) {
    var file = require("fs");
    var data = file.readFileSync("regex.txt", "utf8");
    //replace the name taking from user 
    data = data.replace("<<name>>", name);
    data = data.replace("<<fullname>>", fullname);
    data = data.replace("<<xxxxxxxxxx>>", mobilenumber);
    data = data.replace("<<xx-xx-xxxx>>", dt);

    console.log();
    //print the modified information
    console.log(data);
  },
      /***************************************** Stock Report *******************************************
    
    * 3. Stock Report
    
    
    
    * @Purpose : To read in Stock Names, Number of Share, Share Price,print a Stock Report with total 
                 value of each Stock and the total value of Stock.

    * @Use Library : Java JSON Library
    
    * @description: Declaring the function and passing the userinput as argument.
    
    * @function: diplayname takes the userinput and print it with some sentence.
    
    * @parameter : object 
    
    */

  stockReport(object) {
    try {
      var stock = object.Stock;
      for (key in stock) {
        console.log("\n");
        console.log("stock name : " + stock[key].stock_name);
        console.log("price of each share: " + stock[key].share_price);
        console.log("Total number of shares : " + stock[key].Num_of_shares);
        console.log("Total value of  " + stock[key].Num_of_shares
          + " shares of " + stock[key].stock_name
          + " is :Rs" + stock[key].Num_of_shares * stock[key].share_price
        );
      }
    }
    catch (err) {
      console.log('ERROR');
    }
  },


    /************************* Inventory Management Program ***************************
   *  4. Inventory Management Program
   *---------------------------------
   * @Purpose   :  Create InventoryManager to manage the Inventory. The Inventory Manager will use 
   *               InventoryFactory to create Inventory Object from JSON.
   *
   * @Use Library : Java JSON Library
   *
   * @description: Declaring the function and passing the userinput as argument.
   *
   * @function: diplayname takes the userinput and print it with some sentence.
   *
   * @parameter : object 
   */


    // purpose: Taking stock name as input and validate it
      inputStockName() {
        try {
            var name = read.question(" enter the name of the stock ");
            if (!isNaN(name)) throw "enter a valid name please! ";

            return name;
        }
        catch (err) {
            console.log("ERROR : " + err);
            inputStockName();
        }
    },

    // purpose: Taking stock No as input and validate it.

    inputNoOfShares() {
        try {
            var num = read.questionInt("Enter the number of stocks ");
            if (isNaN(num)) throw "enter a valid Number please! ";

            return num;

        }
        catch (err) {
            console.log("ERROR :" + err);
            inputNoOfShares()
        }
    },

    // purpose: Taking share price as input and validate it.

    inputShareAmount() {
        try {
            var amount = read.questionInt("enter the price of the stock ");
            if (isNaN(amount)) throw " enter a valid Number please ";
            return amount;
        }
        catch (err) {
            console.log("ERROR : " + err);
            inputShareAmount();
        }
    },

    /**
    * purpose     :  A program to Create InventoryManager to manage the Inventory. The
    *                Inventory Manager will use InventoryFactory to create Inventory Object
    *                from JSON. The InventoryManager will call each Inventory Object in its list
    *                to calculate the Inventory Price and then call the Inventory Object to return
    *                the JSON String.
    * 
    * @returns    : Nothing
    */
    inventoryManagement(data) {
        try {
            var key = Number(read.questionInt("Choose from the given options \n" +
                "1 - Add Stock \n 2 - Edit Stock \n 3 - Delete Stock \n 4 - Display Stocks \n 5 - Save into file  \n 6 - to display the total of a stock \n 7 - exit \n  "))
            if (isNaN(key)) throw "enter an integer value "

            switch (key) {
                case 1: this.addStock(data);
                    return this.inventoryManagement(data);


                case 2: this.editStock(data);
                    return this.inventoryManagement(data);


                case 3: this.deleteStock(data);
                    return this.inventoryManagement(data);


                case 4: this.displayStock(data);
                    return this.inventoryManagement(data);



                case 5: this.saveStock(data);
                    return this.inventoryManagement(data);


                case 6: this.totalStock(data);
                    return this.inventoryManagement(data);


                case 7: console.log("exiting .. ... .. .. . ..  .");


                default: console.log("choose from the given options");
                    return this.inventoryManagement(data);

            }
        }
        catch (err) {
            console.log("ERROR: " + err)
        }
    },


    // purpose: To add the stock data to stock object
    // @parameter: data (object)

    addStock(data) {
        var stockobj = data.stock;
        var name = this.inputStockName();
        var num = this.inputNoOfShares();
        var amt = this.inputShareAmount();
        stockobj.push(
            {
              stock_name: name,
              Num_of_shares: num,
              shares_price: amt
            });
        console.log(data);

    },

    // purpose: To edit the stock data
    // @parameter: data (object)

    editStock(data) {
        try {
            var stockobj = data.stock;
            var name = this.inputStockName();
            var val = -1;
            for (var key in stockobj) {
                if (stockobj[key].stockName == name)
                    val = key;
            }

            if (val === -1) {
                console.log("entered name does not match with any of the elements with the stock objects,please try again ");
                this.editStock(data);
            }

            console.log(stockobj[val]);
            console.log();

            var ch = Number(read.questionInt("choose among the given options \n" +
                " 1. Edit Stock Name \n 2. Edit number of shares \n 3. Edit share amount \n 4. exit \n"))
            if (isNaN(ch)) throw "enter a valid number ";

            switch (ch) {
                case 1:
                    name1 = this.inputStockName();
                    stockobj[val].stockName = name1;
                    console.log(stockobj);
                    break;

                case 2:
                    number = this.inputNoOfShares();
                    stockobj[val].numberOfShares = number;
                    console.log(stockobj);
                    break;

                case 3:
                    amount = this.inputShareAmount();
                    stockobj[val].shareAmount = amount;
                    console.log(stockobj);
                    break;

                case 4:
                    console.log("exiting . .. . ..  .. . . .. ");
                    return;

                default:
                    console.log("choose from the given options please ");
                    return;

            }
        }
        catch (err) {
            console.log("ERROR: " + err)
        }
    },

    // purpose: To delete the data from stock object.
    // @parameter: data (object)

    deleteStock(data) {
        var stockobj = data.stock;
        var val = -1;
        var name = this.inputStockName();
        for (var key in stockobj) {
            if (stockobj[key].stockName == name)
                val = key;

        }

        if (val == -1)
            console.log(" element not found ");

        console.log("Are you sure? Can not be retrieved once deleted ");
        var ch = read.questionInt("1.yes \n 2.exit");
        if (ch === 1) {
            stockobj.splice(val, 1);
            console.log(stockobj);
        }
        else if (ch === 2)
            return;
        else {
            console.log("choose from the given options ");
            return;
        }

    },

    //purpose:To Sav the object to file
    // @parameter: data (object)

    displayStock(data) {
        var stockobj = data.stock;

        for (var key in stockobj) {
            console.log(stockobj[key]);
        }

    },

    //purpose:To Save the object to file
    // @parameter: data (object)

    saveStock(data) {
        try {
            file.writeFileSync("inventoryManage.json", JSON.stringify(data));
        }
        catch (err) {
            console.log("file error");
        }
        console.log("saved successfully ");
    },

    // purpose : to calculate and sisplay the total shares
    // @parameter: data (object)

    totalStock(data) {
        var stock = data.stock;

        for (var key in stock) {
            console.log(stock[key]);
            console.log("total share of " + stock[key].stockName + " is " + stock[key].numberOfShares * stock[key].shareAmount);

        }

        var total = 0;

        for (var key in stock) {
            total += (parseInt(stock[key].numberOfShares) * parseInt(stock[key].shareAmount));
        }

        console.log("total value of total shares is " + total);

    },

  
  /**************************************  Deck Of Cards Extended ******************************
   *  5.  Deck Of Cards Etended
   *----------------------------
   * @Purpose   : To Shuffle the cards using Random method and then distribute 9 Cards to 4 Players
   *
   * @description : to create a Player Object having Deck of Cards, and having ability to Sort by Rank
   * and maintain the cards in a Queue implemented using Linked List.. To initialize deck of cards having
   * suit ("♠", "♦", "♣", "♥").
   * & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "♞", "♛", "♚", "Å").
   * Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards t
   * he received by the 4 Players using 2D Array…
   *
   * @function : Shuffle the cards using Random method and then distribute 9 Cards to 4 Players.
   *
   *
   */


  deckOfCards() {
    var suit = ["♠", "♦", "♣", "♥"];
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "♞", "♛", "♚", "Å"];
    var n = suit.length * rank.length;
    var cards = [];
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        cards.push("" + suit[i] + rank[j])
        //  console.log(" ");
      }
    }

    var temp, shuff;
    for (let i = 0; i < n; i++) {
      shuff = Math.floor(Math.random() * n);
      temp = cards[shuff]
      cards[shuff] = cards[i];
      cards[i] = temp;
    }

    return cards;

  },

  // to distribute 9 cards to 4 people each and print what cards does each person have

  distributingCards() {
    var cards = this.deckOfCards();
    var personCards = [[], [], [], []];
    for (let p = 0; p < 4; p++) {
      for (let j = 0; j < 9; j++) {
        personCards[p][j] = cards[j]
        // console.log(" ");
      }

    }
    console.log(personCards);
    console.log(" ");



    console.log(" \n cards distributed among the four players are \n");
    console.log("the first players cards are : " + personCards[0]);

    console.log("the second players cards are : " + personCards[1]);
    console.log("the third players cards are : " + personCards[2]);
    console.log("the fourth players cards are : " + personCards[3]);
  },


  deckOfCardsQueue() {
    var queue = require("./queueLinkedList");
    var util = require("./utility");
    var person1 = new queue.QueueLinkedList;
    var person2 = new queue.QueueLinkedList;
    var person3 = new queue.QueueLinkedList;
    var person4 = new queue.QueueLinkedList;
    var suit = ["♠", "♦", "♣", "♥"];
    var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "♞", "♛", "♚", "Å"];
    var n = suit.length * rank.length;
    var cards = [];

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        cards.push("" + rank[j] + "of" + suit[i]);
      }
    }

    var temp, shuff;
    for (let i = 0; i < cards.length; i++) {
      shuff = Math.floor(Math.random() * cards.length);
      temp = cards[shuff]
      cards[shuff] = cards[i];
      cards[i] = temp;
    }

    // var arr1 = [];
    for (let i = 0; i < cards.length; i++) {
      if (i <= 12) {

        person1.enqueue(cards[i]);
      }
      else if (i > 12 && i < 26) {
        person2.enqueue(cards[i]);
      }
      else if (i > 25 && i < 39)
        person3.enqueue(cards[i]);
      else
        person4.enqueue(cards[i]);
    }
    //console.log("essjfhshn",person1.cards[i]);


    arr1 = person1.display().split(" ");
    arr2 = person2.display().split(" ");
    arr3 = person3.display().split(" ");
    arr4 = person4.display().split(" ");

    arr12 = arr1.sort();
    arr22 = arr2.sort();
    arr32 = arr3.sort();
    arr42 = arr4.sort();



    console.log("\n cards distributed among four players \n ")

    console.log("first player has : " + arr12);
    console.log("second player has : " + arr22);
    console.log("third player has : " + arr32);
    console.log("fourth player has : " + arr42);
  },

  /**************************************** ADDRESS BOOK *******************************************/

  // to read the first name and validate it

  inputFirstName() {

    try {
      var read = require('readline-sync');
      var fname = read.question("Enter your first name ");
      if (!isNaN(fname)) throw "ENTER A VALID FIRST NAME";
      return fname;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }

  },

  // to read the last name and validate it

  inputLastName() {
    try {
      var read = require('readline-sync');
      var lname = read.question("Enter your last name ");
      if (!isNaN(lname)) throw "ENTER A VALID LAST NAME";
      return lname;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the address and validate it

  inputAddress() {
    try {

      var read = require('readline-sync');
      var address = read.question("Enter your address ");
      if (!isNaN(address)) throw "ENTER A VALID ADDRESS";
      return address;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the city name and validate it

  inputCity() {
    try {
      var read = require('readline-sync');
      var city = read.question("Enter your city ");
      if (!isNaN(city)) throw "ENTER A VALID CITY NAME";
      return city;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the zip code and validate it

  inputZip() {
    try {
      var read = require('readline-sync');
      var zip = read.question("Enter the ZIP code");
      if (isNaN(zip)) throw "ENTER A VALID ZIP code";
      return zip;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },

  // to read the mobile number  and validate it

  inputMobile() {
    try {
      var read = require('readline-sync');
      var mobile = read.question("Enter your mobile number ");
      if (isNaN(mobile)) throw "ENTER A VALID mobile number ";
      if (mobile.length != 10) throw "ENTER A VALID mobile number ";
      return mobile;
    }
    catch (err) {
      console.log("ERROR : " + err);
    }
  },


  /**
  * purpose: to a person's details
  * @parameter: object
  */


  addPerson(object) {
    try {
      var personObj = object.person;
      var fname = this.inputFirstName();
      var lname = this.inputLastName();
      var address = this.inputAddress();
      var city = this.inputCity();
      var zip = this.inputZip();
      var mob = this.inputMobile();

      personObj.push({
        firstName: fname,
        lastName: lname,
        address: address,
        city: city,
        zip: zip,
        mobile: mob
      });

      console.log(personObj);
    }
    catch (err) {
      console.log("ERROR : " + err);
    }


  },


  /**
  * purpose: to edit a person's details
  * @parameter: object
  */

  editPerson(object) {
    try {
      var val = -1;
      var personObj = object.person;
      var name = this.inputFirstName();
      var mob = this.inputMobile();

      for (var key in personObj) {
        if (personObj[key].firstName == name && personObj[key].mobile == mob) {
          val = key;
        }
      }

      if (val === -1) {
        console.log("record not present ");
        return;

      }

      console.log("the persons details are");
      console.log(personObj[val]);

      var ch = read.questionInt("choose from the given options \n " +
        "1.edit address \n 2.edit city \n 3.edit zipcode \n 4.edit mobile \n");
      if (isNaN(ch)) throw "enter a valid input"

      switch (ch) {
        case 1: var address = this.inputAddress();
          personObj[val].address = address;
          break;
        case 2: var city = this.inputCity();
          personObj[val].city = city;
          break;

        case 3: var zip = this.inputZip();
          personObj[val].zip = zip;
          break;

        case 4: var mobile = this.inputMobile();
          personObj[val].mobile = mobile;
          break;

        default: console.log("wrong input ");
          break;


      }
    }
    catch (err) {
      console.log("ERROR: " + err)
    }

  },


  /**
  * purpose: to delete a person
  * @parameter: object
  */

  deletePerson(object) {
    var val = -1;
    var personObj = object.person;
    var name = this.inputFirstName();
    var mob = this.inputMobile();

    for (var key in personObj) {
      if (personObj[key].firstName == name && personObj[key].mobile == mob) {
        val = key;
      }
    }

    if (val === -1) {
      console.log("record not present ");
      return;

    }

    console.log("the persons details are");
    console.log(personObj[val]);

    var ch = read.questionInt("are you sure? \n " +
      "1.Delete \n 2.exit ");

    if (ch === 1) {
      personObj.splice(val, 1);
    }
    else
      return;

  },
  /**
  * purpose: to save it into the file
  * @parameter: object
  */

  saveFile(object) {
    file.writeFileSync("address.json", JSON.stringify(object));
    console.log("save successful :) ");
  },

  /**
  * purpose: to display the object.
  * @parameter: object
  */

  display(object) {
    var personObj = object.person;
    for (var key in personObj) {
      console.log(personObj[key]);

    }
  },

  /**
  * purpose: to sort the object by its name.
  * @parameter: object
  */

  sortbyname(object) {

    for (let j = 0; j < object.person.length - 1; j++) {
      if (object.person[j].lastName.localeCompare(object.person[j + 1].lastName) == 1) {
        let temp = object.person[j];
        object.person[j] = object.person[j + 1];
        object.person[j + 1] = temp;
      }

    }
    console.log(object)
    file.writeFileSync('address.json', JSON.stringify(object));

  },

  /**
  * purpose:To sort the object by its zipcode.
  * @parameter: object
  */

  sortbyzip(object) {

    for (let j = 0; j < object.person.length - 1; j++) {

      if (object.person[j].zip > object.person[j + 1].zip) {
        let temp = object.person[j]
        object.person[j] = object.person[j + 1]
        object.person[j + 1] = temp;
      }
    }

    console.log(object);
  },


  /**
  * purpose: In this method we ask from user whether he wants to add, edit or display a person and call the
  *          method accordingly.
  * @parameter: object
  * @parameter: file
  *
  * 
  */

  personAddressBook(object, read) {
    var read = require('readline-sync');
    try {
      console.log("========== Personal Address Book ==========");
      var key = Number(
        read.question("Choose from the given options " +
          "1. Add Person\n2. Edit Person\n3. Delete Person\n4. Sort By Name\n5. Sort by Zip\n6. Display\n7. Save into file\n8. Exit\n"
        )
      );
      if (isNaN(key)) throw "enter a valid input "
      switch (key) {
        case 1:
          this.addPerson(object);
          return this.personAddressBook(object);
        case 2:
          this.editPerson(object);
          return this.personAddressBook(object);
        case 3:
          this.deletePerson(object, file);
          return this.personAddressBook(object);
        case 4:
          this.sortbyname(object);
          return this.personAddressBook(object);
        case 5:
          this.sortbyzip(object);
          return this.personAddressBook(object);
        case 6:
          this.display(object);
          return this.personAddressBook(object);
        case 7:
          this.saveFile(object, file);
          return this.personAddressBook(object);
        case 8:
          console.log("EXITING.. . .. . .. . . .CYA");
          return;
        default:
          console.log("Wrong Input  ");
          return this.personAddressBook(object);
      }
    }
    catch (err) {
      console.log("ERROR: " + err)
    }
  },




  /******************************* Clinic Management *******************************************/

  clinicManagement(data) {
    try {
      console.log("========== Clinique Management ============");
      console.log("1. Search Doctor\n2. Search patient\n3. Add doctor\n4. Add patient\n5. Take appointment\n6. Check specialist\n");
      var ch = read.question("Enter your choice:");
      if (isNaN(ch)) throw "enter a valid number";
      if (ch == 1) {
        this.searchDoctor(data);
      }
      else if (ch == 2) {
        this.searchPatient(data);
      }
      else if (ch == 3) {
        this.addDoctor(data);
      }
      else if (ch == 4) {
        this.addPatient(data);
      }
      else if (ch == 5) {
        this.appointment(data);
      }
      else if (ch == 6) {
        this.specialist(data);
      }
      else {
        console.log("Invalid key/input ");
      }
    }
    catch (err) {
      console.log("ERROR: " + err)
    }
  },

  addDoctor(data) {
    try {
      var drName = read.question("Enter name of the doctor:");
      if (!isNaN(drName)) throw "enter a valid input";
      var drId = read.question("Enter doctor's id:");
      if (isNaN(drId)) throw "enter a valid input";
      var speciality = read.question("Enter doctor's speciality:");
      if (!isNaN(speciality)) throw "enter a valid input";
      var availability = read.question("Enter availability time of doctor as AM, PM or Both:");
      if (!isNaN(availability)) throw "enter a valid input";
      data.doctor.push({
        "drName": drName,
        "drId": drId,
        "speciality": speciality,
        "availability": availability,
        "NoOfAppointment": 0
      })
      console.log(data);
      file.writeFileSync('clinique.json', JSON.stringify(data));
      this.clinicManagement(data);
    }
    catch (err) {
      console.log("ERROR  " + err);
    }
  },

  addPatient(data) {
    try {
      var pName = read.question("Enter name of the patient:");
      if (!isNaN(pName)) throw "enter a valid input";
      var pId = read.question("Enter patient's id:");
      if (isNaN(pId)) throw "enter a valid input";
      var mobNo = read.question("Enter patient's mobile number:");
      if (isNaN(mobNo)) throw "enter a valid input";
      if (mobNo.length != 10) throw "enter a valid input";
      var age = read.questionInt("Enter patient's age:");
      if (isNaN(age)) throw "enter a valid input";
      data.patient.push({
        "pName": pName,
        "pId": pId,
        "mobNo": mobNo,
        "age": age
      })
      console.log(data);
      file.writeFileSync('clinique.json', JSON.stringify(data));
      this.clinicManagement(data);
    }
    catch (err) {
      console.log("ERROR  " + err);
    }
  },

  appointment(data) {
    try {
      var drName = read.question("Enter doctor's name:");
      if (!isNaN(drName)) throw "enter a valid input";
      var pName = read.question("Enter patients name:");
      if (!isNaN(pName)) throw "enter a valid input";
      var time = read.question("Enter appointment time as AM, PM or Both:");
      if (!isNaN(time)) throw "enter a valid input";
      let i = -1
      for (key in data.doctor) {
        if (data.doctor[key].drName == drName) {
          i = key;
        }
      }
      if (i != -1) {
        if (data.doctor[i].NoOfAppointment < 5) {
          if (data.doctor[i].availability == time) {
            data.cliniqueAppointment.push({
              "drName": drName,
              "pName": pName,
              "time": time
            })
            data.doctor[i].NoOfAppointment++;
            console.log("Appointment booked")
          }
          else {
            console.log("Doctor isn't available in this time")
          }
        }
        else {
          console.log("Doctor's appointments are full");
        }
      }
      else {
        console.log("Doctor not found")
      }
      file.writeFileSync('clinique.json', JSON.stringify(data));
      this.clinicManagement(data);
    }
    catch (err) {
      console.log("ERROR  " + err);
    }
  },

  searchDoctor(data) {
    try {
      console.log("1. Search by name\n2. Search by Id\n3. Search by speciality\n4. Search by availability\n");
      var ch = read.question("Enter your choice:");
      if (isNaN(ch)) throw "enter a valid input";
      switch (ch) {
        case "1":
          var drName = read.question("Enter name of the doctor:");
          for (i in data.doctor) {
            if (data.doctor[i].drName == drName) {
              console.log(data.doctor[i]);
            }
          }
          break;
        case "2":
          var drId = read.question("Enter id of the doctor:");
          for (i in data.doctor) {
            if (data.doctor[i].drId == drId) {
              console.log(data.doctor[i]);
            }
          }
          break;
        case "3":
          var speciality = read.question("Enter speciality of the doctor:");
          for (i in data.doctor) {
            if (data.doctor[i].speciality == speciality) {
              console.log(data.doctor[i]);
            }
          }
          break;
        case "4":
          var availability = read.question("Enter availability of the doctor:");
          for (i in data.doctor) {
            if (data.doctor[i].availability == availability) {
              console.log(data.doctor[i]);
            }
          }
          break;
        default:
          console.log("Enter valid choice");
      }
      this.clinicManagement(data);
    }
    catch (err) {
      console.log("ERROR  " + err);
    }
  },

  searchPatient(data) {
    try {
      console.log("1. Search by name\n2. Search by Id\n3. Search by mobile number\n");
      var ch1 = read.question("Enter your choice:");
      if (isNaN(ch1)) throw "enter a valid input";
      switch (ch1) {
        case "1":
          var pName = read.question("Enter name of the patient:");
          for (i in data.patient) {
            if (data.patient[i].pName == pName) {
              console.log(data.patient[i]);
            }
          }
          break;
        case "2":
          var pId = read.question("Enter id of the patient:");
          for (i in data.patient) {
            if (data.patient[i].pId == pId) {
              console.log(data.patient[i]);
            }
          }
          break;
        case "3":
          var mobNo = read.question("Enter mobile no of the patient:");
          for (i in data.patient) {
            if (data.patient[i].mobNo == mobNo) {
              console.log(data.patient[i]);
            }
          }
          break;
        default:
          console.log("Enter valid choice");
      }
      this.clinicManagement(data);
    }
    catch (err) {
      console.log("ERROR  " + err);
    }
  },

  specialist(data) {
    try {
      let speciality = read.question("Enter speciality:");
      if (!isNaN(speciality)) throw "enter a valid input";
      for (let key in data.doctor) {
        if (data.doctor[key].speciality == speciality) {
          console.log("Doctor name:" + data.doctor[key].drName);
          console.log("Availability:" + data.doctor[key].availability);
        }
      }
      console.log("No doctors with this speciality");
      this.clinicManagement(data);
    }
    catch (err) {
      console.log("ERROR  " + err);
    }
  },




}
