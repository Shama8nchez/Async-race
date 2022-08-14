export const basePath = 'http://127.0.0.1:3000';

export interface ICars {
  name: string,
  color: string,
  id: number,
}

export interface IEditCars {
  name: string,
  color: string,
}

export interface IWinners {
  id: number,
  wins: number,
  time: number
}

export interface IEditWinners {
  wins: number,
  time: number
}

export interface IEngine {
  velocity: number,
  distance: number
}

export interface IDrive {
  success: boolean
}