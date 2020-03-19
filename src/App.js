import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import { RestaurantsListPage } from './components/RestaurantsListPage/index';
import { Header } from './components/Header/index';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main className="content">
          <RestaurantsListPage />
        </main>
        <Footer />
      </div>

    </Provider>
    )
}

export default App;
