const buttonGarage = document.querySelector('.button-garage');
const buttonWinners = document.querySelector('.button-winners');
const garageNav = document.querySelector('.garage-page-nav');
const winnersNav = document.querySelector('.winners-page-nav');
const garageView = document.querySelector('.garage');
const winnersView = document.querySelector('.winners');
const carsManage = document.querySelector('.cars-manage');

export function switchViews(): void {
  buttonGarage?.addEventListener('click', (): void => {
    garageNav?.classList.remove('hide');
    winnersNav?.classList.add('hide');
    garageView?.classList.remove('hide');
    winnersView?.classList.add('hide');
    carsManage?.classList.remove('hide');
  });
  
  buttonWinners?.addEventListener('click', (): void => {
    winnersNav?.classList.remove('hide');
    garageNav?.classList.add('hide');
    winnersView?.classList.remove('hide');
    garageView?.classList.add('hide');
    carsManage?.classList.add('hide');
  });
}
