import React, {Component} from 'react';

class Header extends Component {
  render(){
    return(
      <div className='headerBlue'>
        <p className='facebookP'>facebook</p>
        <div className='profile'>
          <p className='username'>Meu perfil</p> 
          <div className='photo'></div>
        </div>
      </div>
    )
  }
}

export default Header;