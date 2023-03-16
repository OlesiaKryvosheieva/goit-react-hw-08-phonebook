import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css'

export const Filter = ({value, onChange}) =>{
const id= nanoid()

    return (
        <div className={css.filterContainer}>
        <label htmlFor={id} className={css.label}>Find contacts by name</label>
        <input type="text" className={css.filter} id={id} value={value} onChange={onChange} />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired
}

