import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export const MenuBar = () => {
  const pathname = window.location.pathname
  const path = pathname === '/' ? 'home' : pathname.substr(1)

  const [activeItem, setActiveItem] = useState(path)

  const handleItemClick = (_, { name }) => setActiveItem(name)

  return (
    <div>
      <Menu pointing secondary size='massive' color='teal'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          as={Link}
          to='/'
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to='/login'
          />
          <Menu.Item
            name='register'
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to='/register'
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}
