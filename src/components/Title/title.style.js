import styled from 'styled-components'

export const TitleStyle = styled.div`
	font-size: 12px;
	line-height:1.3;
	a {
		text-decoration: none;
		color: #3f08d6;
	}
	${({type}) => {
		if (type === 'hero-name') {
			return `
				font-size: 26px;
				line-height:1.4;
			`
		}
		if (type === 'hero-activity') {
			return `
				font-weight: bold;
				font-size: 20px;
				margin-bottom: 10px;
				line-height:2;
			`
		}
		if (type === 'hero-subtitle') {
			return `
				line-height: 1.8em;
				font-size: 16px;
				margin-bottom: 20px;
				font-weight: 100;
			`
		}
		if (type === 'box-description') {
			return `
				line-height: 1.5em;
				font-size: 12px;
			`
		}
		if (type === 'hightlight-name') {
			return `
				font-size: 28px;
			`
		}
		if (type === 'hightlight-subtitle') {
			return `
				font-size: 16px;
				line-height:1.5;
			`
		}
		if (type === 'box-title') {
			return `
				font-size: 22px;
			`
		}
		if (type === 'footer-copyright') {
			return `
				font-size: 14px;
				font-weight: 100;
			`
		}
		if (type === 'form-description') {
			return `
				font-weight: 100;
				font-size: 14px;
				margin-bottom: 20px;
			`
		}
	}}
`