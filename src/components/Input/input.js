import React from 'react'

export default (props) => {
	return (
		<input 
			placeholder={props.placeholder} 
			type={props.type}
			name={props.name}
			required={props.required}
		/>
	)
}