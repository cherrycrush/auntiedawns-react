import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Container textAlign='center'>
        <Menu compact>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            <Link to={'/'}>Home</Link>
          </Menu.Item>
          <Menu.Item
            name='Beach'
            active={activeItem === 'Beach'}
            onClick={this.handleItemClick}
          >
            <Link to={'/beach'}>Beach</Link>
          </Menu.Item>
          <Menu.Item
            name='Facilities'
            active={activeItem === 'Facilities'}
            onClick={this.handleItemClick}
          >
            <Link to={'/facilities'}>Facilities</Link>
          </Menu.Item>
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          >
            <Link to={'/contact'}>Contact</Link>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
