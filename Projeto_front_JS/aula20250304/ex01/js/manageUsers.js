//import usuarios from "./users";

const showAllUsers = usuarios =>{
    usuarios.forEach(element => {
        console.log(element.nome);
    });
}

const showUsersByGender = (usuarios,gender) =>{
        usuarios
        .filter(element =>element.sexo == gender)
        .forEach(element => console.log(element.nome))
}

// const manageUsers = {
//     showAllUsers,
//     showUsersByGender
// }
// export default manageUsers;

export {showAllUsers,showUsersByGender}