import React from 'react'

export default function Alert(Props) {
  
  return (
    <div style={{height: '50px'}}>
        {Props.alert && <div className={`alert alert-${Props.alert.type} alert-dismissible fade show`} role="alert">
             <strong>{(Props.alert.type)}</strong>: {Props.alert.msg}
  
</div>}
</div>
    
  )
}
