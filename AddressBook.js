console.log("Welcome to Address Book Program");
class Contact {

first_Name;
last_Name;
address;
city;
state;
zip;
phone_Number;

constructor(...param) {
    this.first_Name = param[0];
    this.last_Name = param[1];
    this.address = param[2];
    this.city = param[3];
    this.state = param[4];
    this.zip = param[5];
    this.phone_Number = param[6];
    this.email = param[7];

}
get first_Name() {
    return this.first_Name;
}
get last_Name() {
    return this.last_Name;

}
get city() {
   return this.city;
}
get address() {
    return this.address;
}
get state() {
    return this.state;
}
get zip() {
    return this.zip;
}
get phone_Number(){
    return this.phone_Number;
}
get email() {
    return this.email;
}
set first_Name(first_Name) {
    this.first_Name = first_Name;
}
set last_Name(last_Name) {
    this.last_Name = last_Name;
}
set city(city) {
    
}
set zip (zip) {

}
set phone_Number (phone_Number) {

}
set email(email) {
    this.email = email;
}
tostring() {
    return "First Name :" + this.first_Name + ", \n Name :" + this.last_Name + ",\nCity : " + this.city + ",\nState : " + this.state + ", \n Zip : " + this.zip + ", \n Phone Number : " + this.phone_Number + ", \nEmail : " + this.email;
}

}
let new_contact = new_Contact("Ashish","Kumar", "Prayaraj", "UP", 221404,9453627297,"Ashish05041@gmail.com");
console.log("Welcome to adress book program...........");
console.log(new_contact.tostring());