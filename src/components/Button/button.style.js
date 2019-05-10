import styled from 'styled-components'

export const Button = styled.button`
	border-radius: 5px;
	color: #fff;
	font-size: 14px;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	${({type}) => {
		if (type === 'btn-notif') {
			return `
				color: #fff;
			    border-color: #286090;
			    font-size: 14px;
			    cursor: pointer;
			    border: 1px solid transparent;
			    background-color: #286090;
			    width: 70px;
			    height: 30px;
			`
		}
		if (type === 'btn-hero') {
			return `
				background-color: transparent;
				text-transform: uppercase;
				padding: 13px 24px;
				border: 2px solid #fff;
				transition:0.4s ease;
				&:hover {
					background-color: #fff;
					color: #007bc1;
				}
			`
		}
		if (type === 'btn-submit-form') {
			return `
				background-color: #ff8000;
				color: #fff;
				padding: 10px;
				border: none;
				cursor: pointer;
				width: 100%;
				margin-bottom:10px;
				font-weight: bold;
			`
		}
	}}
`