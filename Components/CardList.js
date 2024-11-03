import React from 'react';

import ProjectGrid from '../Components/ProjectGrid';
import {GridData} from './GridData';
import './CardList.css';


function CardList({GridData}){
const Card=GridData.map((user, i) => {
	return <ProjectGrid key={i} id={GridData[i].id} name={GridData[i].name} birthDate={GridData[i].birthDate} email={GridData[i].email} contact={GridData[i].contact} />
})
	return (
<div className="Card">
  {Card}
</div>
		);
}
export default CardList;