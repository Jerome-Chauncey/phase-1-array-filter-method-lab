const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

function findMatching(drivers, name) {
  //We define a function named findMatching that takes two parameters: drivers in the const array and name (string)
  return drivers.filter(function (driver) {
    //.filter loops through the drivers array and returns a new array containing only the elements that pass a given condition.
    //The callback function insede the filter() takes one argument (driver), which represents each name in the drivers array
    return driver.toLowerCase() === name.toLowerCase();
    //toLowerCase() is for both (driver) and (name) so that the function should not differentiate between uppercase and lowercase letters when comparing names
    //if a match is found the driver is included in the new array returned by filter()
  });
}
console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "Sally"));

//output

// ["Bobby", "bobby"]["Sammy"]["Sally"];

function fuzzyMatch(drivers, query) {
  return drivers.filter(function (driver) {
    //filter() loops through the array
    return driver.startsWith(query); //checks if driver's name begins with a specific set of characters the query string eg, 'Sa' then it returns an array of names that match
  });
}

console.log(fuzzyMatch(drivers, "Sa"));
console.log(fuzzyMatch(drivers, "Bo"));

const drivers1 = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(drivers1, query) {
  return drivers1.filter(function (driver) {
    //.filter loops through each driver object in the drivers array.
    return driver.name === query; //checks if driver.name matches query exactly, if true that object is included in the result, if false that object is skipped
  });
}

console.log(matchName(drivers1, 'Bobby'));
