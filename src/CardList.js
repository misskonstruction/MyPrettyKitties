import React from 'react';
import Card from './Card';

const CardList = ({kitties}) => {
	if(true){
		throw new Error('NOOOOOOO!');
	}


	return(
			<div>
				{
					kitties.map((user, i) => {
						return (
							<Card 
								key={i} 
								id={kitties[i].id} 
								name={kitties[i].name} 
						    email={kitties[i].email}
						    />
						 );
					})
				}
			</div>
		);
}

export default CardList;