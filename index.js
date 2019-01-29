
/* TODO : Add short maps url to each object */
let d = new Date();
let time = d.getHours();
let today = d.getDay();


let currentLocation = [];

/*********LOCATIONS*****************************************/
let locationsArray = [
  {
    name: 'Boykins',
    address: '18449 General Thomas Highway',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.591380,
    longitude: -77.190742,
    lonlat: '36.591380, -77.190742',
    url: 'https://goo.gl/maps/6FvqNd7qHFC2'
  },
  {
    name: 'Newsoms',
    address: '29365 Statesville Rd',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.617237,
    longitude: -77.118044,
    lonlat: '36.617237, -77.118044',
    url: 'https://goo.gl/maps/kj3AiPQDX3N2'
  },
  {
    name: 'Adams Grove',
    address: '24389 Park Drive',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.688432,
    longitude: -77.369412,
    lonlat: '36.688432, -77.369412',
    url: 'https://goo.gl/maps/EYgoviiejEG2'
  },
  {
    name: 'Southampton Meadows',
    address: '33444 Maggie Street',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.592918,
    longitude: -76.934825,
    lonlat: '36.592918, -76.934825',
    url: 'https://goo.gl/maps/dYF17jbTDt92'
  },
  {
    name: 'Berlin',
    address: '12427 Ivor Road',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.848943,
    longitude: -76.981925,
    lonlat: '36.848943, -76.981925',
    url: 'https://goo.gl/maps/RWWb6dq9iay'
  },
  {
    name: 'Flaggy Run',
    address: '29388 Flaggy Run Road',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.718276,
    longitude: -77.002836,
    lonlat: '36.718276, -77.002836',
    url: 'https://goo.gl/maps/RrJxNQxcYwQ2'
  },
  {
    name: 'Sedley',
    address: '17158 Johnsons Mill Road',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.786426,
    longitude: -76.983794,
    lonlat: '36.786426, -76.983794',
    url: 'https://goo.gl/maps/k5hSiqHkkmm'
  },

  {
    name: 'Capron',
    address: '22478 Pine Level Raod',
    open: 7,
    close: 19,
    days: [2, 4, 6],

    currentDistance: [],
    latitude: 36.711425,
    longitude: -77.204016,
    lonlat: '36.711425, -77.204016',
    url: 'https://goo.gl/maps/SiEmetHNcfz'
  },
  {
    name: "Joyner's Bridge",
    address: "33268 Joyner's Bridge Road",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.737563,
    longitude: -76.938154,
    lonlat: '36.737563, -76.938154',
    url: 'https://goo.gl/maps/K3761E2qFdz'


  },
  {
    name: "Sebrell",
    address: "22244 Barn Tavern Road",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.786994,
    longitude: -77.128300,
    lonlat: '36.786994, -77.128300',
    url: 'https://goo.gl/maps/2GU3z4qUguM2'


  },
  {
    name: "Monroe",
    address: "30080 Monroe Road",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.610853,
    longitude: -77.005194,
    lonlat: '36.610853, -77.005194',
    url: 'https://goo.gl/maps/R83aNe9skBv'


  },
  {
    name: "Courtland",
    address: "22802 Meherrin Road",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.710335,
    longitude: -77.087063,
    lonlat: '36.710335, -77.087063',
    url: 'https://goo.gl/maps/EmgZg549Qyv'


  },
  {
    name: "Drewryville",
    address: "11264 Old Belfield Road",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.718684,
    longitude: -77.316034,
    lonlat: '36.718684, -77.316034',
    url: 'https://goo.gl/maps/dFMmoJLkRy62'


  },
  {
    name: "Branchville",
    address: "16154 Old Branchville Road",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.583879,
    longitude: -77.237659,
    lonlat: '36.583879, -77.237659',
    url: 'https://goo.gl/maps/fckBkGN9FBP2'


  },
  {
    name: "Ivor",
    address: "36249 General Mahone Blvd.",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.898776,
    longitude: -76.881092,
    lonlat: '36.898776, -76.881092',
    url: 'https://goo.gl/maps/AVaU4WpEnzp'


  },
  {
    name: "Unity",
    address: "35350 Unity Road",
    open: 7,
    close: 19,
    days: [3, 5, 0],

    currentDistance: [],
    latitude: 36.814450,
    longitude: -76.899690,
    lonlat: '36.814450, -76.899690',
    url: 'https://goo.gl/maps/K1oRWVmrSRL2'


  },


]

let sortedLocationsArray = [];


getDistance = () => {

  const la = locationsArray;
  const sla = sortedLocationsArray;

  for (let i = 0; i < la.length; i++) {
    let lat1 = currentLocation[0];
    let lon1 = currentLocation[1];
    let lat2 = la[i].latitude;
    let lon2 = la[i].longitude;

    // Algorithm for Distance calculation
    distance = (lat1, lon1, lat2, lon2, unit) => {
      if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
      }
      else {
        let radlat1 = Math.PI * lat1 / 180;
        let radlat2 = Math.PI * lat2 / 180;
        let theta = lon1 - lon2;
        let radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        //if (unit == "K") { dist = dist * 1.609344 }
        //if (unit == "N") { dist = dist * 0.8684 }

        return dist;
      }
    }

    // Prepends distance onto location's current distance Array
    la[i].currentDistance.unshift(distance(lat1, lon1, lat2, lon2));

    //Sorts locations by distance least to greatest
    la.sort(function (a, b) { return a.currentDistance[0] - b.currentDistance[0] });





  }

  // Prepends (to account for location watching) SORTED locations to an array 
  sla.unshift(la);
  //console.log(sla);

  // Calls isOpen() in Loop from sorted locations
  isOpenLoop();

};




// Finds current locations and watches for more accurate data
geoFindMe = (callback) => {


  if (!navigator.geolocation) {
    console.log('geolocation no worky')
  }

  success = (position) => {
    //var latitude = 36.775843;
    //var longitude = -77.079327;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    currentLocation.unshift(latitude, longitude);
    //console.log(latitude, longitude);

    callback();

  }

  navigator.geolocation.watchPosition(success);

};







//  Current hour is less than or more than && is open on this day
isOpen = (e) => {

  const sla = sortedLocationsArray[0];
  const loc = sla[e];


  const renderClosed = container => {

    const closedRender = `
    <div class="location__card--closed">
        <h2 class="location__card--title">${loc.name}</h2>
        <div class="location__closed">
          <div class="location__closed--text">closed</div>
        </div>
        <div class="location__miles">
          <div class="location__miles--text">
            You are ${loc.currentDistance[0].toFixed(0)} miles away
          </div>
        </div>
        <div class="location__gps">
          <a target="_blank" href="${loc.url}">
            <div class="location__gps--link">
              go
            </div>
          </a>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', closedRender);
  };
  const renderOpen = container => {
    const openRender = `
      
      <div class="location__card--open">
          <h2 class="location__card--title">${loc.name}</h2>
          <div class="location__open">
            <div class="location__open--text">Open</div>
          </div>
          <div class="location__miles">
            <div class="location__miles--text">
              You are ${loc.currentDistance[0].toFixed(0)} miles away
            </div>
          </div>
          <div class="location__gps">
            <a target="_blank" href="${loc.url}">
              <div class="location__gps--link">
                go
              </div>
            </a>
          </div>
        </div>
      
      `;

    container.insertAdjacentHTML('beforeend', openRender);
  };

  //console.log(time >= l[e].open || time <= l[e].closed); //Open Hours?
  //console.log(today === (l[e].days[0 || 1 || 2])); //Open Day?

  if ((time >= loc.open && time <= loc.close) && (today == loc.days[0]) || (today == loc.days[1]) || (today == loc.days[2])) {
    const container = document.querySelector('.container');


    //OPEN
    renderOpen(container);
  } else {
    const container = document.querySelector('.container');

    //CLOSED
    renderClosed(container);
  };
};



isOpenLoop = () => {

  for (let i = 0; i < locationsArray.length; i++) {

    isOpen(i);

  }
}

// Calls to find and then calculate distance
geoFindMe(getDistance);
