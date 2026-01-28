import React from 'react';
import Icons from '../../../data/json/icons.json';
const MyIcon = ({ icon, className }) => {
    return (
        <span className={className} dangerouslySetInnerHTML={{ __html: Icons.find(i => i.title == icon)?.svg }}>
        </span>
    );
}

export default MyIcon;