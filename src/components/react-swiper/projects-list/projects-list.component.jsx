import React from 'react'


const SlideList =(props) => {

    return <span {...props}>{props.map((item, i) => <div>{item.title}</div>)}</span>
}

export default SlideList