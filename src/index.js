import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import store from './redux/store';
import { Provider } from 'react-redux';

let rerender = state => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

// Отрисовываем страницу в первый раз
rerender(store.getState);

// Отдаём наш rerender в state
store.subscribe(() => {
    let state = store.getState();
    rerender(state);
});