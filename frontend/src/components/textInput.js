import React, { useRef, useEffect} from 'react'
import { makeStyles, 
    } from '@material-ui/core'
import {useField} from '@unform/core'

export default function TextInput({name, title, ...rest}) {
    const useStyles = makeStyles({
        area: {
            height: '100%',
            width: '100%',
        },
        input: {
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent', 
          color: '#ffffff',
          border: '1px solid ',
          borderColor: '#f7bb28',
          margin: 0,
          padding: 0,
          minHeight: 0,
        },
        textLogin: {
          color: '#ffffff',
        },
    })

    const inputRef = useRef(null)
    const {fieldName, registerField, defaultValue, error} = useField(name)
    const classes = useStyles()
    useEffect(()=> {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      })
    }, [fieldName, registerField])

    return(
      <div className={classes.area}>
        <input href={''} ref={inputRef} {...rest} defaultValue={defaultValue} className={useStyles().input}/>

        {error && <span style={{color: '#f00'}} >{error}</span>}
      </div>


    )
}