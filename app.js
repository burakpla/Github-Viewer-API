//CHOOSE THE ELEMENTS
const githubForm=document.getElementById("github-form");
const nameInput=document.getElementById("githubname");
const clearLastUsers=document.getElementById("clear-last-users");
const lastUsers=document.getElementById("last-users");
const github = new Github();
const ui=new UI();
eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit", getData)
    clearLastUsers.addEventListener("click", clearAllSearched)
    document.addEventListener("DOMContentLoaded", getAllSearched)
}
function getData(e){
let username=nameInput.value.trim();
if(username===""){
    alert("Geçerli bir ad giriniz.")
}
else{
    github.getGithubData(username)
    .then(response=>{
        if(response.user.message==="Not Found"){
            //WARNING MESSAGE
            ui.showError("Kullanıcı Bulunamadı")
        }
        else{
                ui.showRepoInfo(response.repo)
                ui.showUserInfo(response.user)
            }
    })
    .catch(err=>ui.showError(err));
}



    ui.clearInput();//CLEANING INPUTS 
    e.preventDefault();
}

function clearAllSearched(){
//CLEAR ALL SEARCHINGS


}

function getAllSearched(){
//TAKE SEARCHINGS FROM STORAGE TO UI
}