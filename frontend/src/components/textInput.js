import React, { useRef, useEffect} from 'react'
import { makeStyles, 
    } from '@material-ui/core'
import {useField} from '@unform/core'

export default function TextInput({name, title, ...rest}) {
    const useStyles = makeStyles({
        root: {
            id: "filled-basic",
            label: "Filled",
            //'#282c34',
        },
        inputArea: {
            width: '80%',
            height: '10%',
        },
        input: {
          width: '100%', 
          height: '100%', 
          backgroundColor: 'transparent', 
          border: '1px solid ',
          borderColor: '#f7bb28',
        },
        textLogin: {
          color: '#ffffff',
          marginBottom: 5,
        },
    })

    const inputRef = useRef(null)
    const {fieldName, registerField, defaultValue, error} = useField(name)

    useEffect(()=> {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value'
      })
    }, [fieldName, registerField])

    return(
      <div className={useStyles().inputArea}>
        <a className={useStyles().textLogin}>
          {title}
        </a>
        <input href={''} ref={inputRef} {...rest} defaultValue={defaultValue} className={useStyles().input}/>

        {error && <span style={{color: '#f00'}} >{error}</span>}
      </div>


    )
}