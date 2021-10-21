import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1 className="header-logo">TrybeWallet</h1>
        <div className="header-info">
          <span data-testid="email-field">{`E-mail: ${email} `}</span>
          <div className="currency-info">
            <span data-testid="total-field">Despesas totais: 0,00</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);