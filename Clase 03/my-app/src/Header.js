import React, { Component } from 'react'
import logo from './logo.svg'

// const student = {
//   firstName: 'Juan',
//   lastName: 'Perez',
//   address: {
//     street: 'Cucha cucha'
//   }
// }

// const firstName = student.firstName

// const { firstName, lastName, age, age: { number } } = student

const styles = {
  subtitle: {
    color: 'red',
    fontSize: 72
  }
}

class Header extends Component {
  render () {
    const { titlePrimary: title, subtitle, age } = this.props

    // const number1 = age && age.number1

    // const title = this.props.titlePrimary

    console.log(title, subtitle, age)

    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>{title}</h1>
        <h2 style={styles.subtitle}>{subtitle}</h2>
      </header>
    )
  }
}

export default Header
