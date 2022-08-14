import './style.css';
import { garageManage } from './views/garage/garageManage';
import { switchViews } from './views/pages';

const pageNumber = 1;
const carsCount = 4;

garageManage(pageNumber, carsCount);
switchViews();