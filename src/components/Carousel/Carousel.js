import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Carousel.css'

class Carousel extends Component {

    constructor() {
        super()
        this.state = {
            index: 0,
            slides : [],
            direction : 'right'
        }
    }

    componentDidMount() {
        this.setState({
            slides : this.props.children
        })
    }

    slidesCount = () => {
        return this.state.slides.length
    }

    next = e => {
        e.preventDefault()
        if(this.state.index >= this.slidesCount() - 1) {
           return this.setState({
                index: 0,
                direction: 'right'
            })
        }
        this.setState({
            index:  this.state.index + 1,
            direction : 'right'
        })  
    }

    prev = e => {
        e.preventDefault()
        if(this.state.index <= 0) {
            return this.setState({
                index: this.slidesCount() - 1,
                direction: 'left'
            })
        } 
        this.setState({
            index:  this.state.index - 1,
            direction: 'left'
        }) 
    }

    goto = index => {
        const direction = index > this.state.index ? 'right' : 'left'
        this.setState({
            index,
            direction
        })
    }

    createPagination =() => {
        let pagination = []
        for(let i = 0; i < this.slidesCount(); i++) {
            pagination.push(<button className={this.state.index === i ? 'active' : ''} key={i} onClick={() => this.goto(i)} ></button>)
        }
        return pagination
    }

    render() {
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                index,
                visible: index === this.state.index,
                direction : this.state.direction
            });
        });
        return (
            <div className="carousel">
                { children }
                <button className="carousel__nav carousel__next" onClick={this.next}></button>
                <button className="carousel__nav carousel__prev" onClick={this.prev}></button>
                <div className="carousel__pagination">{this.createPagination()}</div>
            </div>
        )
    }
};

Carousel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}


export default Carousel