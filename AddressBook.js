const name_Regex = "^([A-z]{1}[a-z]{2,1}$";
const address_Regex = "([a-zA-Z0-9 ,]{4,})$";
const city_Regex = "^([a-zA-Z0-9 ,]{4,})$";
const state_Regex = "^([a-zA-Z0-9 ,]{4,})$"
const zip_Regex = "^([0-9]{3}\\s{0,1}[0-9]{3})$";
const phone_Number_Regex = "^([0-9]{2}\\s{1}[0-9]{10})$";
const email_Regex = "^([a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$";

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
        return "First Name : " + this.first_Name + ",\nLast Name : " + this.last_Name + ",\nCity : " + this.city + ",\nState : " + this.state + ",\nZip : " + this.zip + ",\nPhone Number : " + this.phone_Number + ",\nEmail : " + this.email;
    }
}

console.log("Welcome to address book program....");
try {
    let new_contact = new Contact("Ashish", "kumar", "Rajapur", "Prayagraj", "UP", "221404", "9453627297", "ashish05041@gmail.com");
    console.log(new_contact.toString());
} catch (e) {
    console.log(e);
}