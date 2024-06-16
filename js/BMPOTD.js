document.addEventListener("DOMContentLoaded", function() {
  const jsonFilePath = '../data/BMPOTD/Random-BMPs.json';
  const timeApiUrl = 'https://worldtimeapi.org/api/timezone/Etc/UTC';

  function fetchBMPData() {
    return fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => data.BMPVehicles)
      .catch(error => console.error('Error fetching BMP data:', error));
  }

  function fetchCurrentDate() {
    return fetch(timeApiUrl)
      .then(response => response.json())
      .then(data => data.datetime.split('T')[0]) // Get the date part
      .catch(error => console.error('Error fetching current date:', error));
  }

  function getSeededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  function getDailyBMP(bmpArray, date) {
    const seed = new Date(date).getTime(); // Use date as seed
    const randomIndex = Math.floor(getSeededRandom(seed) * bmpArray.length);
    return bmpArray[randomIndex];
  }

  function updateBMPSection(bmp) {
    document.getElementById("bmp-name").textContent = bmp.name;
    document.getElementById("bmp-image").src = bmp.imagePath;
    document.getElementById("bmp-image").alt = bmp.name;
    document.getElementById("bmp-description").textContent = bmp.description;
    document.getElementById("bmp-link").href = bmp.htmlPage;
  }

  Promise.all([fetchBMPData(), fetchCurrentDate()])
    .then(([bmpArray, currentDate]) => {
      const bmpOfTheDay = getDailyBMP(bmpArray, currentDate);
      updateBMPSection(bmpOfTheDay);
    })
    .catch(error => console.error('Error fetching BMP of the day:', error));
});
