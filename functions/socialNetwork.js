const peopleList = [{
    name: 'Denis',
    friends: ['Honza', 'Kuba'],
    interests: ['gaming', 'fishing', 'cooking']
  },
  {
    name: 'Honza',
    friends: ['Pepa', 'Ondra', 'Denis'],
    interests: ['gaming', 'traveling', 'sports']
  },
  {
    name: 'Kuba',
    friends: ['Martin', 'Jirka'],
    interests: ['cooking', 'writing', 'art']
  },
];

const findFriends = (people, targetPerson, targetInterest) => {
  for (let person of people) {

    const findByInterest = interestsList => {
      for (let interest of interestsList) {
        if (interest === targetInterest) {
          // return person;
          console.log(person);
        }
      }
    }

    if (person.name === targetPerson) {

      if (person.hasOwnProperty('friends')) {

        for (let friend of person.friends) {
          for (let person of people) {
            if (person.name === friend) {
              findByInterest(person.interests);
            }
          }
        }

        // findFriends(people, targetPerson, targetInterest);
      }

      if (person.hasOwnProperty('interests')) {
        findByInterest(person.interests);
      }

    }

  };
};

const result = findFriends(peopleList, 'Denis', 'cooking');

// console.log(result);
