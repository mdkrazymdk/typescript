import { initializeModalControls } from './modal';
import { fetchData } from './dataFetcher';

initializeModalControls();


fetchData().then((data) => {
  console.log("Fetched data:", data);
});
