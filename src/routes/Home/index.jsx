import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import ScrollAnim from 'rc-scroll-anim';

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Footer from './Footer';
import Point from './Point';

import './less/antMotion_style.less';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      show: !location.port,
    };
  }

  componentDidMount() {
    // 实现整屏滚动
    this.timeHome=setInterval(() => {
      const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
      ScrollAnim.scrollScreen.init({ docHeight });
      console.log(ReactDOM.findDOMNode(this).getBoundingClientRect())
      this.setState({
        show:true,
        height:docHeight
      });
      if(this.state.height!='') clearInterval(this.timeHome)
    }, 500);
    
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode}/>,
      <Content0 id="content_1_0" key="content_1_0" isMode={this.state.isMode}/>,
      <Content1 id="content_5_0" key="content_5_0" isMode={this.state.isMode}/>,
      <Content2 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      <Content3 id="content_6_1" key="content_6_1" isMode={this.state.isMode}/>,
      <Content4 id="content_6_0" key="content_6_0" isMode={this.state.isMode}/>,
      <Content5 id="content_7_0" key="content_7_0" isMode={this.state.isMode}/>,
      <Content6 id="content_8_0" key="content_8_0" isMode={this.state.isMode}/>,
      <Footer id="footer_1_0" key="footer_1_0" isMode={this.state.isMode}/>,
      <Point key="list" ref="list" data={['content_1_0', 'content_5_0', 'content_4_0', 'content_6_1', 'content_6_0', 'content_7_0', 'content_8_0']} />,
    ];
    return (
      <div className="templates-wrapper">
        {this.state.show && children}
      </div>
    );
  }
}
