/*

Create a Class User with properties as name, age & email. 
He can login and logout 
Create another class Moderator which has all the features of User, plus additional functionality to Add coins and remove coins. 
Create one more class Admin which has all the features of Moderator plus additional features like add a Course and delete a particular course for a user. 

*/

console.log("OOPS IN JS");



class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}




class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}


class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
 

 deleteUser(user){
    users = users.filter(u =>{
        return u.email != user.email; 
    })
}
}



let user1 = new User('Deep',25,'deepp@gmail.com')
let user2 = new User('Kishorn',24,'k@gmai.com')
let mod = new Moderator('Bebo',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

User.greet();
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');



// user1.login()
// user1.addCoins();
// user1.addCoins();
// user1.addCoins();
// user1.logout()

// user1.login().addCoins().addCoins().getDetails().logout();

// mod.deleteUser(user1);
// console.log(users);
