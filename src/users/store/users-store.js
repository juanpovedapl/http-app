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
const  onUserChange= async () =>{

    throw new Error('No implementado');

}

const  reloadPage= async () =>{

    throw new Error('No implementado');

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