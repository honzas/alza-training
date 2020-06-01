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
      "insect": 1000
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
  for (pavilion of data) {
    let meatNeeded = 0,
      insectNeeded = 0,
      mammalCount = 0,
      birdsCount = 0,
      statusMammal,
      statusBirds;

    for (exposition of pavilion.expositions) {
      for (animal of exposition.animals) {
        const countMeatNeeded = () => {
          if (animal.food.type === 'meat') {
            meatNeeded += +animal.food.amount;

            if (meatNeeded > (pavilion.food.meat - 1)) return true;

            countMeatNeeded();
          }
        }

        const countInsectNeeded = () => {
          if (animal.food.type === 'insect') {
            insectNeeded += +animal.food.amount;

            if (insectNeeded > (pavilion.food.insect - 1)) return true;

            countInsectNeeded();
          }
        }

        const countMammal = () => {
          if (animal.species === 'mammal') {
            mammalCount++;

            if (mammalCount > (pavilion.animalCountLimit.mammal - 1)) return false;
            else return true;

            countMammal();
          }
        }

        const countBirds = () => {
          if (animal.species === 'birds') {
            birdsCount++;

            if (birdsCount > (pavilion.animalCountLimit.birds - 1)) return false;
            else return true;

            countBirds();
          }
        }

        countMeatNeeded();
        countInsectNeeded();

        statusMammal = countMammal();
        statusBirds = countBirds();
      }
    }

    const meatMissing = meatNeeded - pavilion.food.meat;
    const insectMissing = insectNeeded - pavilion.food.insect;

    if (meatMissing && meatMissing != 0)
      console.log(`Missing meat for ${pavilion.name}: ${meatMissing}`);

    if (insectMissing && insectMissing != 0)
      console.log(`Missing insect for ${pavilion.name}: ${insectMissing}`);

    if (pavilion.animalCountLimit.mammal)
      console.log(`${pavilion.name}: Mammal ${statusMammal === true ? 'OK' : 'FAIL'}`);

    if (pavilion.animalCountLimit.birds)
      console.log(`${pavilion.name}: Birds ${statusBirds === true ? 'OK' : 'FAIL'}`);
  }
}

zooManager(zooData);
