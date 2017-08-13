import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import {
  doThing
} from '../actions/AppActions'


class ExpenseTracker extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.doThing()
  }

  render() {
    const {
      foo,
      bar
    } = this.props.app

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Add an expense
        </Text>
        <TextInput placeholder="Amount"/>
        <TextInput placeholder="Description"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => ({
  app: state.app
})

const mapDispatchToProps = {
  doThing
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTracker)
