// Declare customerName to be bob in global scope
window.customerName = 'bob';

function upperCaseCustomerName() {
  // Modify the customerName variable
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  // Set bestCustomer to 'not bob'
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
  // Overwrite the best customer
  window.bestCustomer = newCustomer;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // Unsuccessfully try to reassign the least favorite customer
  leastFavoriteCustomer = 'someone else';
}
