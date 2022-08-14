import { createCar } from '../../../api/cars';
import { drawGarage } from '../animations/updateCars';

const garageTitle = <Element>document.querySelector('.garage-title');
const carsModel: string[] = ['BMW x3', 'BMW M5', 'Audi Q5', 'Audi Q7', 'Audi A6', 'Volkswagen Polo', 'Volkswagen Passat', 'Mercedes SLR', 'Mazda 3', 'Mazda 5',
  'Alfa Romeo 2000', 'Acura MDX', 'Volvo C70', 'Volvo S40', 'Jaguar S-Type', 'Toyota Corolla', 'Toyota Corolla', 'Tesla Model S', 'Tesla Model X',
  'Renault Scenic', 'Honada Civic', 'Honda Accord', 'Seat ibiza', 'Smart Fortwo', 'Porsche Carrera', 'citroen C4', 'Citroen C5'];

const randomCar = (): string =>  carsModel[Math.floor(carsModel.length * Math.random())];

function randomColor(): string {
  const colorArr = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color = color + colorArr[Math.floor(16 * Math.random())];
  }
  return color;
}

export async function carsGenerate(count: number): Promise<void> {
  const buttonGenerate = document.querySelector('.button-generate');
  
  buttonGenerate?.addEventListener('click', async (): Promise<void> => {
    for (let i = 0; i < 100; i++) {
      await createCar({ name: randomCar(), color: randomColor() });
    }
    count += 100;
    garageTitle.innerHTML = `Garage: ${count}`;
    drawGarage();
  });
}