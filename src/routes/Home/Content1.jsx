import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content3',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animation = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={animation}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            蚂蚁金融云提供专业的服务
          </TweenOne>
          <TweenOne
            animation={{ ...animation, delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            科技想象力，金融创造力
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
