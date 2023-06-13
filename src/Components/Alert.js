import React from 'react'

export default function Alert(props) {


  return (
    // props.alert && <div></div>               // also can be used
    <div style={{height : '60px'}}>
<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

    <strong>{props.alert.type}</strong>{props.alert.msg}

    {/* cross button  */}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}

</div>
</div>
  )
}
