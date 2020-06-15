const vehicleData = [{
    id: 'vehicle-1',
    type: 'motorcycle',
    size: 1
  },
  {
    id: 'vehicle-2',
    type: 'car',
    size: 2
  },
  {
    id: 'vehicle-3',
    type: 'bus',
    size: 6
  }
]

const tunnelData = {
  totalSize: 8,
  vehicles: [{
    id: 'vehicle-0',
    type: 'bike',
    size: 1
  }]
}

console.log('Before:');
console.log(vehicleData);
console.log(tunnelData);

const tunnelTraffic = (vehicles, tunnel) => {
  const tunnelLeave = () => {
    if (tunnel.vehicles.length > 0) {
      tunnel.vehicles.shift();
    } else return;
  }

  tunnelLeave();

  let i = 0;

  while (vehicles[i]) {
    tunnel.vehicles.push(vehicles[i]);
    vehicles.splice(vehicles[i], 1);

    console.log('');
    console.log(vehicleData);
    console.log(tunnelData);

    tunnelLeave();
  }
}

tunnelTraffic(vehicleData, tunnelData);

console.log('After:');
console.log(vehicleData);
console.log(tunnelData);
