function goToDashboard() {
  const restaurant = document.getElementById("restaurantSelect").value;
  window.location.href = `dashboard.html?restaurant=${restaurant}`;
}
