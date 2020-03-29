console.log("Welcome to our webpage!");
var userName = prompt('Hello, welcome to Biccypedia! We hope you enjoy the site. Please enter your name below:');
var vote = prompt('Would you like to vote for your favourite biscuit? If yes, please type it now. If no, type "NO"');
if (vote==="NO") {
    alert('No worries! Thank you for visiting.');
}
else {
    alert('Thank you for your vote! It has been counted :-)');
}
var sentence = `${userName} voted for ${vote} as their favourite biscuit.`;
console.log(sentence);
