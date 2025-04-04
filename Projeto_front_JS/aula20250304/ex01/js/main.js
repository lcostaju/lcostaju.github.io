import usuarios from './users.js';
//import showAllUsers from './manageUsers.js';
//import manageUsers from './manageUsers.js';
import { showAllUsers,showUsersByGender } from './manageUsers.js';

window.addEventListener("DOMContentLoaded",() =>{
    //console.log(usuarios[0].nome);
    //showAllUsers(usuarios);
    // manageUsers.showAllUsers(usuarios);
    // manageUsers.showUsersByGender(usuarios,"F")
    showAllUsers(usuarios);
    showUsersByGender(usuarios,"F")
})