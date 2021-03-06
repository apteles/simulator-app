import React from 'react';
import GlobalStyles from './styles/global';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <h1>Content</h1>
    </div>
  );
};

export default App;
