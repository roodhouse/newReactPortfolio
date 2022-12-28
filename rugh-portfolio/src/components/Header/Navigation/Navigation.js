import React from 'react';
import { navLinks } from '../../../helpers/navLinks';

const mapped = navLinks.map((e, idx) => {
    return (
        <li className='px-5' key={idx}>
            <a className='text-light' href={e.ref}>{e.name}</a>
        </li>
    )
})

export default function Navigation() {
    return (
        <div>
            <ul className='d-flex flex-row me-5 list-unstyled'>{mapped}</ul>
        </div>
    )
}