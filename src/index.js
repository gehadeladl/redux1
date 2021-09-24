import React from 'react'
import reactDom from 'react-dom'
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reminders from './redusers';
import './style.css'
const store = createStore(reminders)

reactDom.render(

    <Provider store={store}><App /></Provider> , 

    document.getElementById('root')
)