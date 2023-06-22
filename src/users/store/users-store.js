import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    
    currentPage: 0,
    users: [],

}

const loadNextPage = async () =>{

    const users = await loadUsersByPage(state.currentPage +1 );
    if (users.length === 0) return; // es decir que no haga nada por que la pagina no existe

    state.currentPage += 1;
    state.users= users;

}
const loadPreviusPage = async () =>{
    
    const users = await loadUsersByPage(state.currentPage -1 );
    if (users.length === 0) return; // es decir que no haga nada por que la pagina no existe
    if(state.currentPage>1) state.currentPage -= 1;
    state.users= users;

}
/**
 * 
 * @param {User} updateUser 
 */
const  onUserChange= async ( updateUser) =>{

    let wasFound = false;
    state.users = state.users.map(user => {
        if (user.id === updateUser.id){
            wasFound = true;
            return updateUser;
        }
        return user;

    });
    if (state.users.length< 10 && !wasFound){
        state.users.push(updateUser);
    }

}

const  reloadPage= async () =>{

    const users = await loadUsersByPage(state.currentPage );
    if (users.length === 0) {
        await loadPreviusPage();
        return;
    }; // es decir que no haga nada por que la pagina no existe
    state.users= users;

}

export default {
    loadNextPage,
    loadPreviusPage,
    reloadPage,
    onUserChange,

    /**
     *
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    /**
     *
     * @returns {Number}
     */
    getCurrentPage: ()=> state.currentPage,
}