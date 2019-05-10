import React from 'react';
import {AppStyled} from './App.style'
import {Button, Title, Input} from 'cermati-ui'

export default class App extends React.PureComponent {
  state = {
    isNotificationDisplay: true,
    pageYOffset: 0,
    isClose: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    const notificationPanelHeight = this.divRef.clientHeight
    this.setState({notificationPanelHeight})
  }
  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height
    this.setState({pageYOffset: parseFloat(scrolled.toFixed(2))})
  }
  hideNotification = () => {
    this.setState({isNotificationDisplay: false})
  }
  closePopupForm = () => {
    localStorage.removeItem('keepPopup')
    this.setState({isClose: true})
  }
  render() {
    if (this.state.pageYOffset > 0.7) {
      localStorage.setItem('keepPopup', true)
    }
    return (
      <AppStyled
        notificationPanelHeight={this.state.notificationPanelHeight}
        isNotificationDisplay={this.state.isNotificationDisplay}
        isClose={this.state.isClose}
      >
        <div className='page-wrapper'>
          <section className='notification-wrapper' ref={element => this.divRef = element}>
            <div className='notification-box'>
              <Title type='notification'>By accessing and using this website, you acknowledge that you have read and understand our <a href='/'>Cookie Policy, Privacy Policy</a>, and our <a href='/'>Terms of Service</a>.</Title>
              <Button 
                type='btn-notif'
                onClick={this.hideNotification}
              >Got it</Button>
            </div>
          </section>
          <section className='hero-wrapper'>
            <div className='overlay' />
            <div className='logo'>Logo</div>
            <div className='hero-content'>
              <Title type='hero-name'>Hello, I'm Dzumaratin Damar Sasongko</Title>
              <Title type='hero-activity'>Consult, Design, and Develop Websites</Title>
              <Title type='hero-subtitle'>Have something great in mind? Feel free to contact me. <br />I'll help you to make it happen.</Title>
              <Button type='btn-hero'>Let's Make Contact</Button>
            </div>
          </section>
          <section className='highlight-wrapper'>
            <div className='highlight-title'>
              <div className='highlight-box'>
                <Title type='hightlight-name'>How Can I Help You?</Title>
                <Title type='hightlight-subtitle'>Our work then targeted, best practices outcomes social innovation synergy. Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</Title>
              </div>
            </div>
            <div className='box-wrapper'>
              <div className='box-container'>
                <div className='box'>
                  <div className='box-title'>
                    <Title type='box-title'>Consult</Title>
                    <i className='far fa-comments' />
                  </div>
                  <div className='box-content'>
                    <Title type='box-description'>Co-create, design thinking; strengthen infrastructure resist granular.
      Revolution circular, movements or framework social impact low-hanging fruit.
      Save the world compelling revolutionary progress.</Title>
                  </div>
                </div>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='box-title'>
                    <Title type='box-title'>Design</Title>
                    <i className='fas fa-paint-brush' />
                  </div>
                  <div className='box-content'>
                    <Title type='box-description'>Policymaker collaborates collective impact humanitarian shared value
      vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.</Title>
                  </div>
                </div>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='box-title'>
                    <Title type='box-title'>Develop</Title>
                    <i className='fas fa-cubes' />
                  </div>
                  <div className='box-content'>
                    <Title type='box-description'>Revolutionary circular, movements a or impact framework social impact low-
      hanging. Save the compelling revolutionary inspire progress. Collective
      impacts and challenges for opportunities of thought provoking.</Title>
                  </div>
                </div>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='box-title'>
                    <Title type='box-title'>Marketing</Title>
                    <i className='fas fa-bullhorn' />
                  </div>
                  <div className='box-content'>
                    <Title type='box-description'>Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
      replicable, effective altruism youth. Mobilize commitment to overcome
      injustice resilient, uplift social transparent effective.</Title>
                  </div>
                </div>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='box-title'>
                    <Title type='box-title'>Manage</Title>
                    <i className='fas fa-server' />
                  </div>
                  <div className='box-content'>
                    <Title type='box-description'>Change-makers innovation or shared unit of analysis. Overcome injustice
      outcomes strategize vibrant boots on the ground sustainable. Optimism,
      effective altruism invest optimism corporate social.</Title>
                  </div>
                </div>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='box-title'>
                    <Title type='box-title'>Evolve</Title>
                    <i className='fas fa-chart-line' />
                  </div>
                  <div className='box-content'>
                    <Title type='box-description'>Activate catalyze and impact contextualize humanitarian. Unit of analysis
      overcome injustice storytelling altruism. Thought leadership mass
      incarceration. Outcomes big data, fairness, social game-changer.</Title>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='footer'>
            <Title type='footer-copyright'>© 2019 Dzumaratin Damar Sasongko. All Right reserved</Title>
          </section>
          <section className='popup-wrapper'>
            <div className="form-popup">
              <div className='form-relative'>
                <div 
                  className='close-btn'
                  onClick={this.closePopupForm}
                >x</div>
                <form action="#" className="form-container">
                  <div className='title-container'>
                    <h1>Get latest updates in web technologies</h1>
                    <Title type='form-description'>I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</Title>
                  </div>
                  <div className='input-container'>
                    <Input type="text" placeholder="Email Address" name="email" required />
                    <Button type="btn-submit-form">Count me in!</Button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </AppStyled>
    )
  }
}
