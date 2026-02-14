/**
 * TOPIC: Closures
 * A closure gives you access to an outer function's scope from an inner function.
 */

console.log("--- 1. Basic Closure ---");

function createCounter() {
    let count = 0; // Private variable

    return function () {
        count++; // Accesses 'count' from outer scope
        return count;
    };
}

const counterA = createCounter();
const counterB = createCounter();

console.log("Counter A:", counterA()); // 1
console.log("Counter A:", counterA()); // 2
console.log("Counter A:", counterA()); // 3

console.log("Counter B:", counterB()); // 1 (Independent!)


console.log("\n--- 2. Real World: Private Properties ---");
// We can use closures to hide data
function createBankAccount(initialBalance) {
    let _balance = initialBalance; // The "_" convention implies private

    return {
        deposit(amount) {
            _balance += amount;
            console.log(`Deposited ${amount}. New Balance: ${_balance}`);
        },
        withdraw(amount) {
            if (amount > _balance) {
                console.log("Insufficient funds!");
            } else {
                _balance -= amount;
                console.log(`Withdrew ${amount}. New Balance: ${_balance}`);
            }
        },
        getBalance() {
            return _balance;
        }
    };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(20);
// console.log(myAccount._balance); // Undefined! We cannot access it directly.
