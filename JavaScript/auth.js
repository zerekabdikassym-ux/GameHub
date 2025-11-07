function getUsers() {
  try {
    return JSON.parse(localStorage.getItem('users')) || [];
  } catch {
    return [];
  }
}
function saveUsers(arr) {
  localStorage.setItem('users', JSON.stringify(arr));
}
function setCurrentUser(email) {
  localStorage.setItem('currentUser', email);
}
function getCurrentUser() {
  return localStorage.getItem('currentUser') || null;
}
function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}


function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
function isValidPassword(pw) {
  
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pw);
}
function isValidPhone(phone) {
  
  return /^(\+?\d{10,15})$/.test(phone.replace(/\s+/g, ''));
}
