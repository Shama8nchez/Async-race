import { basePath, IDrive, IEngine } from '../types';

const engine = `${basePath}/engine`;

export async function startEngine(id: number): Promise<IEngine> {
  const response: Response = await fetch(`${engine}?id=${id}&status=started`, {
    method: 'PATCH',
  });
  const data: Promise<IEngine> = await response.json();
  return data;
}

export async function stopEngine(id: number): Promise<IEngine> {
  const response = await fetch(`${engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  const data: Promise<IEngine> = await response.json();
  return data;
}

export async function driveMode(id: number): Promise<IDrive> {
  const response: Response = await fetch(`${engine}?id=${id}&status=drive`, {
    method: 'PATCH',
  }).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
}