import './render-buttons.css'
import { renderTable } from '../render-table/render-table';
import usersStore from '../../store/users-store';


/**
 * 
 * @param {HTMLDivElemet} element 
 */
export const renderButtons = (element) => {

    const nexButton = document.createElement('button');
    nexButton.innerText = 'Next >';

    const previusButton = document.createElement('button');
    previusButton.innerText = '< Prev';

    const currentPageLabel = document.createElement('span');

    currentPageLabel.id ='current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append(previusButton,currentPageLabel, nexButton);

    nexButton.addEventListener('click', async () => {

        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable (element);

    });

    previusButton.addEventListener('click', async () => {

        await usersStore.loadPreviusPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        renderTable (element);

    });
}