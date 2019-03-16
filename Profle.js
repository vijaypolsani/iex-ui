import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getUser } from './reducer'

class Profile extends Component {
    static navigationOptions = {
        title: 'Profile'
    }
    componentDidMount(){
        this.props.getUser('vijaypolsani')
    }

    render(){
        const { user, loadingProfile } = this.props
        if (loadingProfile)
          return <Text> Loading....</Text>
        const{ name, login, location, blog } = user
        return (
            <View>
                <Text>
                    name: { name }
                </Text>
                <Text>
                    login: { login }
                </Text>
                <Text>
                    Location: { location }
                </Text>
                <Text>
                    Blog: { blog }
                </Text>
            </View>
        )
    }
}
const mapStateToProps = ( { user, loadingProfile }) => ({
    user,
    loadingProfile
})

const mapDispatchToProps = {
    getUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)