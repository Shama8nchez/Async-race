import { basePath, IWinners, IEditWinners } from '../types';

const winners = `${basePath}/winners`;

export async function getWinners(page: number, sort: 'id' | 'wins' | 'time', order: 'ASC' | 'DESC', limit = 10): Promise<IWinners> {
  const response: Response = await fetch(`${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  const data: Promise<IWinners> = await response.json();
  return data;
}

export async function getWinner(id: number): Promise<IWinners> {
  const response: Response = await fetch(`${winners}/${id}`);
  const data: Promise<IWinners> = await response.json();
  return data;
}

export async function createWinner(data: IWinners): Promise<Request> {
  return (await fetch(winners, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  })).json();
}

export async function deleteWinner(id: number): Promise<Request> {
  return (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();
}

export async function updateWinner(id: number, data: IEditWinners): Promise<Request> {
  return (await fetch(`${winners}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  })).json();
}