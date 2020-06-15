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
  vehicles: ['vehicle-0']
}

console.log('Before:');
console.log(vehicleData);
console.log(tunnelData);

const tunnelTraffic = (vehicles, tunnel) => {
  if (tunnel.vehicles.length > 0) {
    tunnel.vehicles.shift();
  } else return;

  for (let vehicle of vehicles) {
    if (vehicles.length > 0) {
      tunnel.vehicles.push(vehicle);
      vehicles.splice(vehicle, 1);

      console.log('');
      console.log(vehicle.type);
      console.log(vehicleData);
      console.log(tunnelData);
    } else return;

    console.log('');
    console.log('');

    tunnelTraffic(vehicleData, tunnelData);
  }
}

tunnelTraffic(vehicleData, tunnelData);

console.log('After:');
console.log(vehicleData);
console.log(tunnelData);
