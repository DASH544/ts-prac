"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Dash", age: 23 }, { name: "edd", age: 23 });
console.log(age);
function updateProfile(updated) {
    //databsecall
}
// updatedProps3optional = {
//     name?: string | undefined;
//     age?: number | undefined;
//     email?: string | undefined;
// } 
//readonly
const user3 = {
    name: "dash",
    age: 21
};
user3.name = "dahed";
console.log(user3);
