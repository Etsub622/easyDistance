
const AuthService = (function(){
  
  function setToken(item, remember) {
    let storage = sessionStorage
    if(remember) storage = localStorage
    storage.setItem('easy_distance', JSON.stringify(item));
  }
  
  function getToken() {
    return JSON.parse(localStorage.getItem('easy_distance') ?? sessionStorage.getItem('easy_distance'))
  }
  
  function clearToken() {
    localStorage.removeItem('easy_distance');
    sessionStorage.removeItem('easy_distance');
  }
  
  return {
    setToken,
    getToken,
    clearToken,
  }
    
})();

export default AuthService;