import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

import './CarouselSlide.css'
 
class carouselSlide extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            index : 0
        }
    }

    componentDidMount() {
        this.setState({
            index: this.props.index
        })
    }


    render() {
        const direction = this.props.direction
        return(
            <CSSTransitionGroup 
                transitionName={`slide-${direction}`}
            >
                { this.props.visible ? this.props.children : null }
            </CSSTransitionGroup>
        )
    }
} 
 

carouselSlide.propTypes = {
    direction: PropTypes.string,
    index: PropTypes.number,
    visible: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}


export default carouselSlide;