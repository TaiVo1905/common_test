export const setDataLocalStorage = function (data) {
    localStorage.setItem('data', JSON.stringify(data));
}
function getDataLocalStorage() {
    return JSON.parse(localStorage.getItem('data'))[0];
}
export default getDataLocalStorage;
function saveData() {
    fetch ('../Data/data.json')
    .then (response => response.json())
    .then (data => {
        if(localStorage.getItem('data') === null){
            localStorage.setItem('data', JSON.stringify(data));
        } 
    })
}
// localStorage.clear();
// sessionStorage.clear();
saveData();
