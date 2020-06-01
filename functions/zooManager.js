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

listZooData = (data) => {
  console.log('');
  console.log('---------------');
  console.log('');

  data.map(pavilion => {
    let meatNeeded, insectNeeded;

    console.log(pavilion.name.charAt(0).toUpperCase() + pavilion.name.slice(1));

    pavilion.expositions.map(exposition => {
      console.log(` - ${exposition.name}`);

      exposition.animals.map(animal => {
        console.log(`   -- ${animal.name} (${animal.species}) : ${animal.food.type} (${animal.food.amount})`);
      });
      console.log('');

      if (exposition.subexpositions) {
        exposition.subexpositions.map(subexposition => {
          console.log(`      - ${subexposition.name}`);

          subexposition.animals.map(animal => {
            console.log(`         -- ${animal.name} (${animal.species}) : ${animal.food.type} (${animal.food.amount})`);
          });
          console.log('');
        });
      }
    });

    console.log('Pavilion limits:');
    for (animalType in pavilion.animalCountLimit) {
      console.log(` - ${animalType} : ${pavilion.animalCountLimit[animalType]}`);
    }

    console.log('');
    console.log('Pavilion foods:');
    for (foodType in pavilion.food) {
      console.log(` - ${foodType} : ${pavilion.food[foodType]}`);
    }

    console.log('');
    console.log('---------------');
    console.log('');
  });
}

listZooData(zooData);
