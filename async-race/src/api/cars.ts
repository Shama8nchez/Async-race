import { IEditCars, basePath, ICars } from '../types';

const garage = `${basePath}/garage`;

export async function getCars(page: number, limit = 7): Promise<ICars[]> {
  const response: Response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const data: Promise<ICars[]> = await response.json();
  return data;
}

export async function getCar(id: number): Promise<ICars> {
  const response: Response = await fetch(`${garage}/${id}`);
  const data: Promise<ICars> = await response.json();
  return data;
}

export async function createCar(data: IEditCars): Promise<Request> {
  return (await fetch(garage, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  })).json();
}

export async function deleteCar(id: number): Promise<Request> {
  return (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();
}

export async function updateCar(id: number, data: IEditCars): Promise<Request> {
  return (await fetch(`${garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  })).json();
}