// This function checks if the string is a palindrome
function isPalindrome(str1) {
    let cleanedStr = removeSpaces(str1);
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Function to remove spaces from a string "copied from internet"
function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

// This function is triggered when the button is clicked
function check() {
    let userInput = document.getElementById("pal").value;

    // If the user does not provide any input, return
    if (!userInput) {
        alert("Please enter a word!");
        return;
    }

    // Check if the string is a palindrome and update the page accordingly
    if (isPalindrome(userInput.toLowerCase())) {
       document.getElementById("updatedString").innerHTML = "This is a palindrome";
    } else {
        document.getElementById("updatedString").innerHTML = "This is NOT a palindrome";
    }

    // Ask the user if they wish to continue I tied to use this comand but is coming in too earli and as an alert so I don't like it.
    //let shouldContinue = confirm("Do you want to enter another word?");
   // if (shouldContinue) {
        document.getElementById("Pal").value = ""; // Clear the input
    //}
}
