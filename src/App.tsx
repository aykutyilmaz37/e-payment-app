import React from 'react';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from 'store';
import AppContainer from 'AppContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <React.Suspense fallback={null}>
          <AppContainer />
        </React.Suspense>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
