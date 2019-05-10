import React from 'react'
import {TitleStyle} from './title.style'

export default (props) => {
	return (
		<TitleStyle {...props}>
			<p>{props.children}</p>
		</TitleStyle>
	)
}