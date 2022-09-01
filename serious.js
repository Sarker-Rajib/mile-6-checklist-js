const loadData = (input) => {
   const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`;
   fetch(url)
      .then(res => res.json())
      .then(data => displayData(data.drinks))
}

const displayData = (items) => {
   console.log(items);
   const displayContainer = document.getElementById('content-wrapper');
   displayContainer.innerHTML = '';

   items.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('col', 'h-100');
      const index = items.indexOf(item);
      card.innerHTML = `
      <div class="card h-100" onclick="loadItemDetails(${item.idDrink})" data-bs-toggle="modal" data-bs-target="#show">
         <img src="${item.strDrinkThumb}" class="card-img-top" alt="image"">
         <div class="card-body">
            <p>ID : "${item.idDrink}"</p>
            <p>Category : "${item.strCategory}"</p>
            <h3 class="card-title">${item.strDrink}</h3>
            <p>Component : ${item.strIngredient1}, ${item.strIngredient2}, ${item.strIngredient3}</p>
            <p>Instuction : ${item.strInstructions.slice(0, 20)} ...</p>
         </div>
      </div>
      `
      displayContainer.appendChild(card);
   })
}

document.getElementById('search-button').addEventListener('click', function () {
   const inputElement = document.getElementById('search-field');
   const inputValue = inputElement.value;
   if (inputValue == 0) {
      alert('Please enter any alphabet')
      return
   }
   loadData(inputValue);
});

document.getElementById('search-field').addEventListener('keypress', function (e) {
   const inputElement = document.getElementById('search-field');
   const inputValue = inputElement.value;
   if (e.key === 'Enter') {
      loadData(inputValue);
   }
});


const loadItemDetails = inId => {
   const url2 = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${inId}`
   fetch(url2)
      .then(res => res.json())
      .then(data => displayItemDetails(data.drinks[0]));
}

const displayItemDetails = item => {
   const modalBody = document.getElementById('modal-inner-body');
   modalBody.innerHTML = `
      <img src="${item.strDrinkThumb}" class="card-img-top" alt="image"">
      <div class="card-body">
         <p>ID : "${item.idDrink}"</p>
         <p>Category : "${item.strCategory}"</p>
         <h3 class="card-title">${item.strDrink}</h3>
         <p>Component : ${item.strIngredient1}, ${item.strIngredient2}, ${item.strIngredient3}</p>
         <p>Instuction : ${item.strInstructions}</p>
      </div>
   `
}

