const zooData = [{
    "name": "jungle pavilion",
    "expositions": [{
        "name": "wild exposition",
        "animals": [{
            "name": "panther",
            "species": "mammal",
            "food": {
              "type": "meat",
              "amount": "50"
            }
          },
          {
            "name": "panther",
            "species": "mammal",
            "food": {
              "type": "meat",
              "amount": "60"
            }
          }
        ],
        "subexpositions": [{
          "name": "lake exposition",
          "animals": [{
            "name": "some bird",
            "species": "birds",
            "food": {
              "type": "meat",
              "amount": "50"
            }
          }],
          "subexpositions": [{
            "name": "nested exposition 1",
            "animals": [{
              "name": "nested animal 1",
              "species": "nested species 1",
              "food": {
                "type": "nested food type 1",
                "amount": "nested food amount 1"
              }
            }],
            "subexpositions": [{
              "name": "nested exposition 2",
              "animals": [{
                "name": "nested animal 2",
                "species": "nested species 2",
                "food": {
                  "type": "nested food type 2",
                  "amount": "nested food amount 2"
                }
              }],
              "subexpositions": [{
                "name": "nested exposition 3",
                "animals": [{
                  "name": "nested animal 3",
                  "species": "nested species 3",
                  "food": {
                    "type": "nested food type 3",
                    "amount": "nested food amount 3"
                  }
                }]
              }]
            }]
          }]
        }]
      },
      {
        "name": "cave exposition",
        "animals": [{
          "name": "bat",
          "species": "mammal",
          "food": {
            "type": "insect",
            "amount": "50"
          }
        }]
      }
    ],
    "animalCountLimit": {
      "mammal": 10,
      "birds": 20
    },
    "food": {
      "meat": 100,
      "insect": 1000,
      "vegetable": 1000,
      "fish": 200
    }
  },
  {
    "name": "arctic pavilion",
    "expositions": [{
      "name": "ice exposition",
      "animals": [{
          "name": "polar bear",
          "species": "mammal",
          "food": {
            "type": "meat",
            "amount": "100"
          }
        },
        {
          "name": "polar bear",
          "species": "mammal",
          "food": {
            "type": "meat",
            "amount": "50"
          }
        }
      ]
    }],
    "animalCountLimit": {
      "mammal": 1
    },
    "food": {
      "meat": 100
    }
  }
];

// Food counter
const foodCounter = (animal, foodType) => {
  let foodNeeded = 0;

  if (animal.food.type === foodType) {
    foodNeeded += +animal.food.amount;
  };

  const limit = pavilion.food[foodType];
  const lack = foodNeeded - limit;

  if (foodNeeded > limit) return `Missing ${foodType}: ${lack}`;
  else return 'No missing food';
}

// Animals in all expositions and subexpositions
const zooAnimals = (data) => {
  for (let pavilion of data) {
    if (pavilion.hasOwnProperty('expositions')) {
      zooAnimals(pavilion.expositions);
    }

    if (pavilion.hasOwnProperty('subexpositions')) {
      zooAnimals(pavilion.subexpositions);
    }

    if (pavilion.hasOwnProperty('animals')) {
      for (animal of pavilion.animals) {
        console.log(animal.name);
      }

      zooAnimals(pavilion.animals);
    }
  }
}

zooAnimals(zooData);


// const zooManager = (data) => {
//   for (pavilion of data) {
//     let meatNeeded = 0,
//       insectNeeded = 0,
//       mammalCount = 0,
//       birdsCount = 0,
//       statusMammal,
//       statusBirds;

//     for (exposition of pavilion.expositions) {
//       for (animal of exposition.animals) {
//         const countMeatNeeded = () => {
//           if (animal.food.type === 'meat') {
//             meatNeeded += +animal.food.amount;

//             if (meatNeeded > (pavilion.food.meat - 1)) return true;

//             countMeatNeeded();
//           }
//         }

//         const countInsectNeeded = () => {
//           if (animal.food.type === 'insect') {
//             insectNeeded += +animal.food.amount;

//             if (insectNeeded > (pavilion.food.insect - 1)) return true;

//             countInsectNeeded();
//           }
//         }

//         const countMammal = () => {
//           if (animal.species === 'mammal') {
//             mammalCount++;

//             if (mammalCount > (pavilion.animalCountLimit.mammal - 1)) return false;
//             else return true;

//             countMammal();
//           }
//         }

//         const countBirds = () => {
//           if (animal.species === 'birds') {
//             birdsCount++;

//             if (birdsCount > (pavilion.animalCountLimit.birds - 1)) return false;
//             else return true;

//             countBirds();
//           }
//         }

//         countMeatNeeded();
//         countInsectNeeded();

//         statusMammal = countMammal();
//         statusBirds = countBirds();
//       }
//     }

//     const meatMissing = meatNeeded - pavilion.food.meat;
//     const insectMissing = insectNeeded - pavilion.food.insect;

//     if (meatMissing && meatMissing != 0)
//       console.log(`Missing meat for ${pavilion.name}: ${meatMissing}`);

//     if (insectMissing && insectMissing != 0)
//       console.log(`Missing insect for ${pavilion.name}: ${insectMissing}`);

//     if (pavilion.animalCountLimit.mammal)
//       console.log(`${pavilion.name}: Mammal ${statusMammal === true ? 'OK' : 'FAIL'}`);

//     if (pavilion.animalCountLimit.birds)
//       console.log(`${pavilion.name}: Birds ${statusBirds === true ? 'OK' : 'FAIL'}`);
//   }
// }

// zooManager(zooData);
