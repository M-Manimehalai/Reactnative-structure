/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigations/Navigations';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// Redux Part
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Reducer from './src/redux/Index'; // This is a combineReducers path

// Configure Redux Persist
const persistConfig = {
  key: 'root', // Key for the storage
  storage: AsyncStorage, // Storage engine (AsyncStorage in this case)
};

var persistedReducer = persistReducer(persistConfig, Reducer)

// Create the Redux store
const store = createStore(persistedReducer, applyMiddleware(thunk)); // Apply middleware if needed

// Create a persisted store
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>

  )
}
