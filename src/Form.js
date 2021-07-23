import React from 'react'

// The Build a Pizza form
export default function Form (props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { id, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(id, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='valid-errors'>
                <div>{errors.name}</div>
            </div>
                
                <label>Name:
                    <input 
                        id='name-input'
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <div className='submitBtn-container'>
                    <button id='order-button' disabled={disabled}>Submit</button>
                </div>
        </form>
    )
}

