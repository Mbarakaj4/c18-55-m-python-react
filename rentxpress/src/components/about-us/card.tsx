import React from 'react';

interface CardProps {
    title: string;
    body: string;
}

export const Card: React.FC<CardProps> = ({title, body})=> {
    return (
    <div className='font-cairo w-full pr-[5%] pl-[5%]'>
      <strong>{title ? title : 'Default Title'}</strong>
      <h3>{body ? body : 'Default Body'}</h3>
    </div>
    );
}