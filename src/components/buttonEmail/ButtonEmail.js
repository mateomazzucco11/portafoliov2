import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonEmail = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    )
}
