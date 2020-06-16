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
  currentSize: 1,
  vehicles: [{
    id: 'vehicle-0',
    type: 'bike',
    size: 1
  }]
}

console.log('Current Size:', tunnelData.currentSize);

const tunnelTraffic = (vehicles, tunnel) => {
  while (tunnel.vehicles.length > 0) {
    const leavingVehicle = tunnel.vehicles.shift();

    tunnel.currentSize -= leavingVehicle.size;

    console.log('Leaving:', leavingVehicle);
    console.log('Current Size:', tunnel.currentSize);
    console.log('');

    if (vehicles.length === 0) {
      continue;
    }

    let enteringVehicleSize = vehicles[0].size;

    while (tunnel.totalSize >= tunnel.currentSize + enteringVehicleSize) {
      const enteringVehicle = vehicles.shift();

      tunnel.currentSize += enteringVehicle.size;
      tunnel.vehicles.push(enteringVehicle);

      console.log('Entering:', enteringVehicle);
      console.log('Current Size:', tunnel.currentSize);

      if (vehicles.length === 0) {
        break;
      }

      enteringVehicleSize = vehicles[0].size;
    }

  }
}

tunnelTraffic(vehicleData, tunnelData);
