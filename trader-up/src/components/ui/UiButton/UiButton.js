import React from 'react'
import { Button } from "antd";

export  function UiButton(props) {
  return (
    <>
      <Button className='button' {...props}>
          {props.children}
      </Button>
    </>
  )
}
