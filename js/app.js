document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

   // const deleteAllButton = document.querySelector('#delete-all');
   //  deleteAllButton.addEventListener('click', handleDeleteAllClick);
   //   })

    const city = event.target.city.value;
    const country = event.target.country.value;
    const category = event.target.category.value;
    // const formResult = document.querySelector('#reading-list');
    // formResult.textContent = `${title} ${author} ${category}`;
    const formResult = document.createElement('li');
    formResult.textContent = `${city} ${country} ${category}`;
    const list = document.querySelector('#holiday-list');
    list.appendChild(formResult);

    const form = document.querySelector('#new-item-form').reset();
  });


});
