import { Component } from 'react';

export default class AbstractComponent extends Component {
  /**
   * Constructor
   * @param props
   */
  constructor(props) {
    super(props);

    if (this.constructor === AbstractComponent) {
      throw new TypeError('Can not construct abstract class.');
    }
  }
}
