const name_Regex = "^([A-Z]{1}[a-z]{2,})$";
const address_Regex = "^([a-zA-Z0-9 ,]{4,})$";
const city_Regex = "^([a-zA-Z0-9 ,]{4,})$";
const state_Regex = "^([a-zA-Z0-9 ,]{4,})$";
const zip_Regex = "^([0-9]{3}\\s{0,1}[0-9]{3})$";
const phone_Number_Regex = "^([0-9]{2}\\s{1}[0-9]{10})$";
const email_Regex = "^([a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$)";

class Contact {
    first_Name;
    last_Name;
    address;
    city;
    state;
    zip;
    phone_Number;
    email;

    constructor(...params) {
        this.first_Name = params[0];
        this.last_Name = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone_Number = params[6];
        this.email = params[7];
    }

    get first_Name() {
        return this._first_Name;
    }

    get last_Name() {
        return this._last_Name;
    }

    get address() {
        return this.address;
    }

    get city() {
        return this._city;
    }

    get state() {
        return this._state;
    }

    get zip() {
        return this._zip;
    }

    get phone_Number() {
        return this._phone_Number;
    }

    get email() {
        return this.email;
    }


    /**
     * @param {string} first_Name
     */
    set first_Name(first_Name) {
        let result = new RegExp(name_Regex, 'g').test(first_Name);
        if (result) {
            this._firstName = first_Name;
        }
        else
            throw "Incorrect Name Format";
    }

    /**
     * @param {string} last_Name
     */
    set last_Name(last_Name) {
        let result = new RegExp(name_Regex, 'g').test(first_Name);
        if (result) {
            this._last_Name = last_Name;
        }
        else
            throw "Incorrect Name Format";

    }
    /**
     * @param {string} address
     */
    set address(address) {
        let result = new RegExp(address_Regex, 'g').test(first_Name);
        if (result) {
            this._address = address;
        }
        else
            throw "Incorrect Address Name Format";
    }

    /**
     * @param {string} city
     */
    set city(city) {
        let result = new RegExp(city_Regex, 'g').test(first_Name);
        if (result) {
            this._city = city;
        }
        else
            throw "Incorrect City Name Format";
    }

    /**
     * @param {string} state
     */
    set state(state) {
        let result = new RegExp(state_Regex, 'g').test(first_Name);
        if (result) {
            this._state = state;
        }
        else
            throw "Incorrect State Name Format";
    }

    /**
     * @param {string} zip
     */
    set zip(zip) {
        let result = new RegExp(zip_Regex, 'g').test(first_Name);
        if (result) {
            this._zip = zip;
        }
        else
            throw "Incorrect Zip Format";
    }

    /**
     * @param {string} phone_Number
     */
    set phone_Number(phone_Number) {
        let result = new RegExp(phone_Number_Regex, 'g').test(first_Name);
        if (result) {
            this._phone_Number = phone_Number;
        }
        else
            throw "Incorrect Phone Number Format";
    }

    /**
     * @param {string} email
     */
    set email(email) {
        let result = new RegExp(email_Regex, 'g').test(first_Name);
        if (result) {
            this._email = email;
        }
        else
            throw "Incorrect Email Format";
    }

    toString() {
        return "First Name : " + this.first_Name + ",\nLast Name : " + this.last_Name + ",\nAddress : " + this.address + ",\nCity : " + this.city + ",\nState : " + this.state + ",\nZip : " + this.zip + ",\nPhone Number : " + this.phone_Number + ",\nEmail : " + this.email;
    }
}

console.log("Welcome to address book program....");
try {
    let new_contact1 = new Contact("Ashish", "Kumar", "Rajapur", "Prayagraj", "UP", "221404", "91 9453627297", "ashish05041@gmail.com");
    let new_contact2 = new Contact("Sachin", "Kumar", "Rajapur", "Prayagraj", "UP", "221404", "91 7652-42754", "sachin9898@gmail.com");

    var addressBookList = new Array();
    addressBookList.push(new_contact1);
    addressBookList.push(new_contact2);

    const prompt = require('promt-sync')();
    function findContact(first_Name, last_Name) {
        let contactToDelete;                                // calling Delete function
        for(let i =0; i < addressBookList.length; i++){
            if (addressBookList[i]._first_Name=== first_Name && addressBookList[i]._last_Name=== last_Name)
            contactToDelete = addressBookList[i]
        }
        if(contactToDelete== null)
        console.log("No Contact Found To Delete")
        else{
            let input =1;
            while(input !=9) {
                console.log("1. Edit First Name\n2. Edit Last Name \n");
                input = prompt("Enter Your Choice: ")
                input = parseInt(input)
                switch (input) {
                    case 1:
                        let first_Name = prompt("Enter the first Name: ")
                        contactToEdit._first_Name = first_Name
                        break;
                    case 2:let last_Name = prompt("Enter the last name: ")
                         contactToEdit._last_Name = last_Name
                         break;
                    default:
                        console.log("Wrong Input")

                }
            }
        }
    }
    let param1 = prompt("Enter the First Name: ")
    let param2 = prompt("Enter the Last Name: ")
    findContact(param1,param2)                                  // find to contact

    console.log(addressBookList[0].toString());
    console.log(addressBookList[1].toString());
} catch (e) {
    console.log(e);
}