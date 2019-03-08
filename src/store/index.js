import { createStore } from 'redux';

//import modules from './modules';
//import rootStorage from './root';

// funcao retorna estado inicial
function reducer() {
  return [
    {
      id: 1,
      name: 'Danilo',
      lastName: 'Caetano'
    }
  ];
}

const store = createStore(reducer);

export default store;
