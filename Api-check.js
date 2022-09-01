// 7.0
const loadData = () => {
   const url = `https://jsonplaceholder.typicode.com/photos`;
   fetch(url)
      .then(res => res.json())
      .then(data => displayData(data))      
};

const displayData = (data) => {
   const photoContainer = document.getElementById('display-container');

   data = data.slice(0, 5);
   data.forEach((item) => {
      const card = document.createElement('div');
      card.classList.add('col');
      // console.log(item);
      card.innerHTML = `
         <div class="card">
            <img src="${item.url}" class="card-img-top" alt="image" onclick="loadImageDetails(${item.id})" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card-body">
               <h3 class="card-title">${item.title}</h3>
            </div>
         </div>
      `
      photoContainer.appendChild(card);
   })
}

loadImageDetails = imageId => {
   const url = `https://jsonplaceholder.typicode.com/photos/${imageId}`
   fetch(url)
      .then(res => res.json())
      .then(data => displayImageDetails(data))
}

const displayImageDetails = (data) => {
   const showcase = document.getElementById('showcase');

   showcase.innerHTML = `
      <img src="${data.url}" class="card-img-top" alt="image">
      <div class="card-body">
         <h3 class="card-title">${data.title}</h3>
      </div>
   `
}

loadData();