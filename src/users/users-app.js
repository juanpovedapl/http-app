import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal.js";
import { saveUser } from "./use-cases/save-users";


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const UsersApp = async ( element) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    //console.log(usersStore.getUsers());

    element.innerHTML ='';
    renderTable(element);
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async(userLike) => {
        const user = await saveUser(userLike);
        console.log(user.lastName)
        usersStore.onUserChange(user);
        renderTable();
    });
}