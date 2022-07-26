function Person(name,age,gender,profession,friends){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.profession=profession;
    this.friends=friends;
this.addFriends=function(name,age,gender,profession,friends){
this.friends.push(new Person(name,age,gender,profession,friends));

}


}

const person1=new Person("parfaite","30","female","programmer",[]);

const person3=new Person("nema","40","female","IT",[]);
person1.friends.push(person3);
person3.friends.push(person1);
console.log(person1.friends[0].name);
// console.log(person1.friends);

for(const first in person1){console.log(`${first}:${person1[first]}`)}



const person2=new Person("tom","60","male","engineer",[]);
person1.friends.push(person2);
console.log(person1.friends[1]);


person2.addFriends("Joyce","19","female","teacher",[]);
console.log(person2.friends[0]);
person2.friends[0].addFriends("Sam","45","male","Artist",[]);
console.log(person2.friends[0].friends[0]);
const joyce=person2.friends[0];
console.log(joyce);
joyce.addFriends("mary","30","female","artist",[]);
joyce.addFriends("claire","25","female","dentist",[]);
joyce.addFriends("peter","54","male","pharmacist",[]);
console.log(joyce.friends[2]);
console.log(joyce.friends);
const friendNames=joyce.friends.map((item)=>item.name);
console.log(friendNames);

const name=joyce.friends.filter((item)=>item.age>30);
console.log(name);

const peter=joyce.friends[3];
console.log(peter);
peter.addFriends("tom","60","male","engineer",[]);
console.log(peter.friends[0]);

