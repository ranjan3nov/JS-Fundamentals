// Script 1
var commonVar = "Script 1";

// Script 2
var commonVar = "Script 2";

// Both scripts unintentionally share the global scope
console.log(commonVar); // Outputs "Script 2"


// Script 1
(function () {
    var commonVar = "Script 1";
    console.log(commonVar); // Outputs "Script 1"
})();

// Script 2
(function () {
    var commonVar = "Script 2";
    console.log(commonVar); // Outputs "Script 2"
})();

// Each script has its own private scope, avoiding global pollution
