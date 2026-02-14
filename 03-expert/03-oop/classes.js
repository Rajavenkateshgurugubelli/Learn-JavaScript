/**
 * TOPIC: OOP with Classes (ES6)
 */

console.log("--- 1. Basic Class ---");

class User {
    // Constructor runs when we create a new instance with 'new'
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    // Method (Function inside a class)
    login() {
        console.log(`${this.username} has logged in.`);
    }

    logout() {
        console.log(`${this.username} has logged out.`);
    }
}

const user1 = new User("Alice", "alice@example.com");
const user2 = new User("Bob", "bob@example.com");

user1.login();
user2.logout();


console.log("\n--- 2. Inheritance (extends) ---");

// Child class inherits from User
class Admin extends User {
    constructor(username, email, title) {
        // Call parent constructor
        super(username, email);
        this.title = title;
    }

    deleteUser(user) {
        console.log(`Admin ${this.username} deleted user ${user.username}.`);
    }
}

const admin = new Admin("SuperAdmin", "admin@site.com", "Manager");
admin.login(); // Inherited from User
admin.deleteUser(user1); // Specific to Admin
