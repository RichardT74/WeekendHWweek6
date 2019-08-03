document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const travelListItem = createTravelListItem(event.target);
  const travelList = document.querySelector('#travel-list');
  travelList.appendChild(travelListItem);

  event.target.reset();
}

const createTravelListItem = function (form) {
  const travelListItem = document.createElement('li');
  travelListItem.classList.add('travel-list-item');

  const city = document.createElement('h2');
  city.textContent = form.city.value;
  travelListItem.appendChild(city);

  const country = document.createElement('h3');
  country.textContent = form.country.value;
  travelListItem.appendChild(country);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  travelListItem.appendChild(category);

  return travelListItem;
}

const handleDeleteAllClick = function (event) {
  const travelList = document.querySelector('#travel-list');
  travelList.innerHTML = '';
}


// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8">
//     <title>Reading List App</title>
//     <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
//     <script src="js/app.js"></script>
//   </head>
//   <body>
//     <form id="new-item-form">
//       <div id="form-wrapper">
//         <div class="form-item">
//           <label for="title" class="primary">Title</label>
//           <input type="text" id="title" required/>
//         </div>
//
//         <div class="form-item">
//           <label for="author" class="primary">Author</label>
//           <input type="text" id="author" required/>
//         </div>
//
//         <div class="form-item">
//           <label for="category" class="primary">Category</label>
//           <select id="category">
//             <option value="" disabled selected></option>
//             <option value="Book">Book</option>
//             <option value="Article">Article</option>
//             <option value="Blog Post">Blog Post</option>
//           </select>
//         </div>
//       </div>
//       <input type="submit" value="save"/>
//     </form>
//
//     <button id="delete-all">Delete All</button>
//
//     <h1>Reading List</h1>
//     <div id="reading-list"></div>
//   </body>
// </html>
