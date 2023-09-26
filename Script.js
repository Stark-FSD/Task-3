console.log("File Linked")

// 2nd Answer:

 var requestOptions = {
   method: 'GET',
   redirect: 'follow'
 };

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      data.forEach(country => {
        console.log(country.flags.svg);
     });
    })
    .catch(error => console.log(error));

  
  
// 3rd Answer:

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log("Country Name: ", country.name.common);
      console.log("Region: ", country.region);
      console.log("Sub-region: ", country.subregion);
      console.log("Population: ", country.population);
      console.log("------------------------");
    });
  })
  .catch(error => console.log(error));
