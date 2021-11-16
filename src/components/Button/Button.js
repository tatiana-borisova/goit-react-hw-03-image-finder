import { Component } from 'react';
import s from './Button.module.css';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button className={s.button} type="button" onClick={onClick}>
        Load more
      </button>
    );
  }
}
