import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ fullname, bio, profession, children, handelAlert }) => {

  return ( 
   <div  >
      <button onClick={()=>handelAlert(fullname)}>click to show alert</button>
      <p> fullname :{fullname} </p>
      <p>bio :{bio} </p>
      <p>profession :{profession} </p>
        {children}
    </div>
  )
}

Profile.propTypes = {
fullname:PropTypes.string ,   /**type */
bio : PropTypes.string , 
profession : PropTypes.string,
}

Profile.defaultProps={fullname:'my name',  }
Profile.defaultProps={bio:'my bio',  }
Profile.defaultProps={profession:'my profession',  }

export default Profile
