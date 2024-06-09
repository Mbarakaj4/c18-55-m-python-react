import React from 'react';

interface CardProps {
    title: string;
    body: string;
}

export const Card: React.FC<CardProps> = ({title, body})=> {
    return (
    <div className='px-56 py-5 font-cairo'>
      <h3>{title ? title : 'Default Title'}</h3>
      <h3>{body ? body : 'Default Body'}</h3>
    </div>
    );
}