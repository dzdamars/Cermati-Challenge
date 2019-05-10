import styled from 'styled-components'
import WorkDeskImg from './img/work-desk.jpg'
import Logo from './img/y-logo-white.png'

export const AppStyled = styled.div`
	.page-wrapper {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
			flex-wrap: wrap;
	}
	.page-wrapper section {
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	.notification-wrapper {
		width: 100%;
		padding: 15px;
		background-color: #eee;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		        flex-direction: column;
		position: fixed;
		z-index: 2;
		top: 0;
		${({isNotificationDisplay}) => {
			if (!isNotificationDisplay) {
				return `
					display: none !important;
					-webkit-transition: 2s;
					-o-transition: 2s;
					transition: 2s;
				`
			}
		}}
	}
	.notification-wrapper button {
		margin-top: 10px;
	}
	.hero-wrapper {
		height: 100vh;
		background: url(${WorkDeskImg});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		        flex-direction: column;
		color: #fff;
		z-index: 1;
		padding: 25px;
		-webkit-transition: 0.5s;
		-o-transition: 0.5s;
		transition: 0.5s;
		${({notificationPanelHeight, isNotificationDisplay}) => {
			if (!isNotificationDisplay) {
				return `
					margin-top: 0 !important;
				`
			}
			if (notificationPanelHeight !== undefined) {
				return `
					margin-top: ${notificationPanelHeight}px;
				`
			}
		}}
	}
	.hero-wrapper .overlay {
		background-color: rgba(2, 41, 101, 0.79);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	.hero-wrapper .logo {
		width: 50px;
		height: 50px;
		background: url(${Logo});
		background-size: cover;
		background-position: top;
		background-repeat: no-repeat;
		text-indent: -9999px;
	}
	.hero-content {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		        transform: translate(-50%, -50%);
		width: 100%;
		padding: 25px;
		line-height: 1.8em;
	}
	.highlight-wrapper {
		background-color: #e5e5e5;
		padding: 40px 20px;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		        flex-direction: column;
	}
	.highlight-wrapper .highlight-title {
		margin-bottom: 30px;
		text-align: center;
	}
	.highlight-wrapper .highlight-title div:first-child {
		margin-bottom: 15px;
	}
	.highlight-wrapper .box {
		padding: 20px;
	}
	.highlight-wrapper .box-container {
		border: 1px solid #b2b2b2;
		margin-bottom: 20px;
	}
	.highlight-wrapper .box-title {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		        justify-content: space-between;
		margin-bottom: 10px;
	}
	.highlight-wrapper .box-title i {
		font-size: 24px;
		color: #b2b2b2;
	}
	.footer {
		background-color: #050854;
		color: #fff;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		        justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		        align-items: center;
		height: 100px;
	}

	.form-popup {
		${({isClose}) => {
			const checkPopup = localStorage.getItem('keepPopup')
			if (isClose) {
				return `
					display: none !important;
				`
			}
			if (checkPopup) {
				return `
					display: block !important;
				`
			}
		}}
		display: none;
		position: fixed;
		bottom: 0;
		right: 15px;
		z-index: 9;
		max-width: 640px;
	}
	.form-relative {
		position: relative;
	}
	.close-btn {
		position: absolute;
		right: 10px;
		color: #fff;
		top: 5px;
		cursor: pointer;
	}
	.form-container {
		padding: 20px;
		background-color: rgba(0, 123, 194, 0.8);
		color: #fff;
	}
	.form-container input[type=text], .form-container input[type=password] {
		width: 100%;
		padding: 10px;
		margin: 5px 0 22px 0;
		border: none;
		background: #f1f1f1;
	}
	.form-container input[type=text]:focus, .form-container input[type=password]:focus {
		background-color: #fff;
		outline: none;
	}
	.form-container .btn {
		background-color: #ff8000;
		color: #fff;
		padding: 10px;
		border: none;
		cursor: pointer;
		width: 100%;
		margin-bottom:10px;
		opacity: 0.8;
	}
	.form-container .cancel {
		background-color: red;
	}
	.form-container .btn:hover, .open-button:hover {
		opacity: 1;
	}
	.title-container h1 {
		margin-bottom: 10px;
	}
	.input-container {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		        flex-direction: column;
	}
	/* Tablet Styles */
	@media only screen and (min-width: 481px) and (max-width: 960px) {
		.notification-wrapper button {
			margin-top: 0;
			margin-left: 20px;
		}
		.notification-wrapper .notification-box div:first-child {
			max-width: 500px;
		}
		.notification-wrapper .notification-box {
			margin: 0 auto;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			    -ms-flex-align: center;
			        align-items: center;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
		}
		.highlight-wrapper .highlight-title {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
		}
		.highlight-wrapper .highlight-title .highlight-box {
			max-width: 600px;
		}
		.highlight-wrapper .box-container {
			width: 44.3%;
			margin: 10px;
		}
		.highlight-wrapper .box-wrapper {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			width: 100%;
			-ms-flex-wrap: wrap;
			    flex-wrap: wrap;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
		}
	}
	/* Desktop Styles */
	@media only screen and (min-width: 961px) {
		.notification-wrapper button {
			margin-top: 0;
			margin-left: 20px;
		}
		.notification-wrapper .notification-box div:first-child {
			max-width: 500px;
		}
		.notification-wrapper .notification-box {
			max-width: 720px;
			margin: 0 auto;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			    -ms-flex-align: center;
			        align-items: center;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
		}
		.highlight-wrapper .highlight-title {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
		}
		.highlight-wrapper .highlight-title .highlight-box {
			max-width: 600px;
		}
		.highlight-wrapper .box-container {
			width: 30.3%;
			margin: 20px;
		}
		.highlight-wrapper .box-wrapper {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			width: 100%;
			-ms-flex-wrap: wrap;
			    flex-wrap: wrap;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
		}
		.form-popup {
			left: 0;
		}
		.input-container {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: horizontal;
			-webkit-box-direction: normal;
			    -ms-flex-direction: row;
			        flex-direction: row;
			-webkit-box-pack: justify;
			    -ms-flex-pack: justify;
			        justify-content: space-between;
		}
		.input-container {
			width: 100%;
		}
		.form-container input[type=text], .cZHWDF .form-container input[type=password] {
			margin: 0;
			margin-right: 20px;
			height: 33px;
		}
		.input-container button {
			width: 200px !important;
			height: 33px;
			padding-top: 7px;
		}
	}
`