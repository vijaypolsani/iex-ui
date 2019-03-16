import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator } from 'react-navigation'

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import reducer from './reducer'
import RepoList from './RepoList'
import RepoDetail from './RepoDetail'
import Profile from './Profle'

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
})

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

const Tabs = TabNavigator({
  RepoList: {
    screen: RepoList
  },
  Profile: {
    screen: Profile
  }
})
const Stack = StackNavigator({
  Home: {
    screen: Tabs
  },
  Details: {
    screen: RepoDetail
  }
})

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
