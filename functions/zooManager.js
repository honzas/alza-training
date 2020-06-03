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

const zooManager = (data) => {
  for (let i of data) {

    // Function: Needed food calculator
    const foodNeededCalc = foodType => {
      let foodNeeded = 0;

      for (animal of i.animals) {
        if (animal.food.type === foodType) {
          foodNeeded += +animal.food.amount;
        }
      }

      if (foodNeeded != 0) {
        console.log(`Food needed in ${i.name}: ${foodType} ${foodNeeded}`);
      }
    }

    // Function: Missing food calculator
    const foodMissingCalc = foodType => {
      let foodLimit = 0;

      for (food in i.food) {
        if (food === foodType) {
          foodLimit += +i.food[food];
        }
      }

      if (foodLimit != 0) {
        console.log(`Food limit in ${i.name}: ${foodType} ${foodLimit}`);
      }
    }

    // Pavilions
    if (i.hasOwnProperty('expositions')) {
      console.log('');
      console.log(i.name);
      console.log('---------------');

      foodMissingCalc('meat');
      foodMissingCalc('insect');
      foodMissingCalc('vegetable');
      foodMissingCalc('fish');

      zooManager(i.expositions);
    }

    // Expositions
    if (i.hasOwnProperty('animals')) {
      foodNeededCalc('meat');
      foodNeededCalc('insect');
      foodNeededCalc('vegetable');
      foodNeededCalc('fish');
    }

    // Subexpositions
    if (i.hasOwnProperty('subexpositions')) {
      zooManager(i.subexpositions);
    }
  }
}

zooManager(zooData);
