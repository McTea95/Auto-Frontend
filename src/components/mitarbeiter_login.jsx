import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyComponent extends Component {
  state = {
    showPassword: false,
  };

  togglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Logik für die Formulareinreichung hinzufügen
    // Beispiel: console.log('Formulardaten senden:', e.target.username.value, e.target.password.value);
  };

  render() {
    const { showPassword } = this.state;

    return (
      <div className="login-form">
        <Link to="/kunden" className="button">
          Kunden Login
        </Link>
        <h2>Mitarbeiter Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Mitarbeiter ID:</label>
            <input
              type="text"
              id="username"
              name="username"
              pattern="[0-9]+"
              title="Bitte geben Sie nur Zahlen ein."
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passwort:</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                required
              />
              <input
                type="checkbox"
                id="show-password"
                onClick={this.togglePassword}
              />
              <label htmlFor="show-password">Passwort anzeigen</label>
            </div>
          </div>
          <div className="input-group">
            <input type="submit" value="Login" />
          </div>
        </form>
        <Link to="/password_reset" className="reset-password">
          Passwort zurücksetzen
        </Link>
      </div>
    );
  }
}

export default MyComponent;


