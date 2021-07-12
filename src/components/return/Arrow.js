import React from 'react';
import './Arrow.scss';
import { Link } from 'react-router-dom';

export const Arrow = ({ className, to }) => {
    return (
        <Link className={`arrow ${className}`} to={`${to}`}>
            <span></span>
        </Link>
    )
}
export default Arrow;