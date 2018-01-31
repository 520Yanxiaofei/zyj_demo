import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnim  from 'rc-scroll-anim';
var Link = ScrollAnim.Link;

export default class Point extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    data: PropTypes.array,
  };


  render() {
    const children = this.props.data.map((item) => {
      if (item.match('nav') || item.match('footer')) {
        return null;
      }
      return (<Link key={item} className={this.props.className} to={item} toHash={false} />);
    }).filter(item => item);
    return (<div>
      {children}
    </div>);
  }
}
