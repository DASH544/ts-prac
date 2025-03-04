interface User {
  name: String;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}
const age = sumOfAge({ name: "Dash", age: 23 }, { name: "edd", age: 23 });
console.log(age);

//PICK
//works on types as well as interfaces

interface UserProfile {
  id: string;
  name: String;
  age: number;
  email: string;
  password: string;
}
type UserProfile1 = {
  id: string;
  name: String;
  age: number;
  email: string;
  password: string;
};

type updatedProps = Pick<UserProfile, "name" | "age" | "email">;
type updatedProps2 = Pick<UserProfile1, "name" | "age" | "email">;

function updateProfile(updated: updatedProps) {
  //databsecall
}

//partial
interface UserUpdate {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

type updatedProps3 = Pick<UserUpdate, "name" | "age" | "email">;
type updatedProps3optional = Partial<updatedProps3>;
// updatedProps3optional = {
//     name?: string | undefined;
//     age?: number | undefined;
//     email?: string | undefined;
// }

//readonly used for config file(api keys )
const user3 = {
  name: "dash",
  age: 21,
};
user3.name = "dahed";
console.log(user3);
//refernce remains(user3) same but can change internal variable of objects and arrays

type Userobj = {
  readonly name: string;
  readonly age: number;
};

type readOnlyObj=Readonly<Userobj>

const user4: Userobj = {
  name: "Ed",
  age: 23,
};
// user4.name="dashed" ->Cannot assign to 'name' because it is a read-only property.

//RECORD AND MAP

type User8={
    id:string
    username:string
}

 type Users=Record<string,User8>
 const myUser:Users=
 {
  "one":
  {
    id:'hellow',
    username:"edward123"
  }
 }
type Cars=
{
  cylinders:number,
  type:string
}
 const cars=new Map<string,Cars>()
 cars.set("one",{cylinders:6,type:"v6"})
 console.log( cars.get("one"))

