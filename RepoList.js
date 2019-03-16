import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { listRepos } from './reducer'

class RepoList extends Component {
    componentDidMount(){
        this.props.listRepos('vijaypolsani')
    }
    renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
    )
    render(){
        const { repos } = this.props
        return (
            <FlatList
              keyExtractor={ (item, index) => index.toString() }
              styles = {styles.container}
              data={repos}
              renderItem={this.renderItem}
            />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
        }
})

const mapStateToProps = state => {
    let gitRepos = state.repos.map(repo => ({ key: repo.id, ...repo}))
    return {
        repos: gitRepos
    }
}
const mapDispatchToProps = {
    listRepos
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)
