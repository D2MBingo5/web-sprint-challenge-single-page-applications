// File created for organization
import React from 'react'

// react-checklist - I thought that making a react-checklist would cause my failed test to pass, but I could not get it to pass.
// import { useChecklist } from 'react-checklist'

// react-checklist
// const data = [
//     { _id: 1, label: 'Pepperoni' },
//     { _id: 2, label: 'Green Bell Pepper' },
//     { _id: 3, label: 'Extra Cheese' },
//     { _id: 4, label: 'Sausage' }
// ]

// The Build a Pizza form
export default function Form (props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    // react-checklist
    // const { handleCheck, checkedItems } = useChecklist(data, {
    //     key: '_id',
    //     keyType: 'number',
    // })

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div className='valid-errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
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

            <label>Size:
                <select
                    id='size-dropdown'
                    name='size'
                    value={values.size}
                    onChange={onChange}
                >
                    <option value=''>-- Select a Size --</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Superior'>Superior</option>
                </select>
            </label>

            {/* Seems this is not the right way to go about making a checklist... */}
            <div className='toppings-checklist'>
                <h3>Toppings</h3>
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='topping1'
                        checked={values.topping1}
                        onChange={onChange}
                    />
                </label>
                <label>Green Bell Pepper
                    <input 
                        type='checkbox'
                        name='topping2'
                        checked={values.topping2}
                        onChange={onChange}
                    />
                </label>
                <label>Extra Cheese
                    <input 
                        type='checkbox'
                        name='topping3'
                        checked={values.topping3}
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input 
                        type='checkbox'
                        name='topping4'
                        checked={values.topping4}
                        onChange={onChange}
                    />
                </label>
            </div>

            {/* Here I tried implementing a react-checklist, but I realized I do not know how to implement the data into formSchema.js */}
            {/* Checklist
            <div className='toppings-checklist'>
                <h3>Toppings</h3>
                <ul>
                    {data.map((v, i) => (
                        <li key={i}>
                            <input 
                                type='checkbox'
                                data-key={v._id}
                                checked={checkedItems.has(v._id)}
                                onChange={onChange}
                            />
                            <label>{v.label}</label>
                        </li>
                    ))}
                </ul>
            </div>
             */}

            <label>Special Instructions:
                <input 
                    id='special-text'
                    name='special'
                    type='text'
                    value={values.special}
                    onChange={onChange}
                />
            </label>

            <div className='submitBtn-container'>
                <button id='order-button' disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}

