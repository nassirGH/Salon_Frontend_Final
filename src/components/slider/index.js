import React, { Component } from 'react';

import './slider.css';
/* eslint-disable */
class Slider extends Component {
  constructor(props) {
    super(props);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.setImageSliderTransform = this.setImageSliderTransform.bind(this);
    this.state = {
        sliderInterVal: null
    }
  }
  
  componentDidMount() {
    this.imagePosition = 0;
    this.sliderItems = document.querySelectorAll('.image-slider-item');
    this.totalImageItems = document.querySelectorAll('.image-slider-item').length;
    this.imageSliderWrapper = document.querySelector('.image-wrapper');
    this.imageWrapperWidth = this.imageSliderWrapper.offsetWidth;
    this.imageWrapperHeight = this.imageSliderWrapper.offsetHeight;
    this.firstElement = this.sliderItems[0];
    this.lastElement = this.sliderItems[this.sliderItems.length - 1];
    this.itemWidth = this.firstElement.offsetWidth + 4;
    this.itemPerSlide = this.props.itemPerSlide >> 0;
    
    window.onload = () => {
      if (this.sliderItems.length <= this.itemPerSlide) {
        document.getElementsByClassName('nav-right-arrow')[0].style.visibility = 'hidden';
      }
      document.styleSheets[0].insertRule(`.image-slider-item { width: ${100 / this.itemPerSlide}%; }`, document.styleSheets[0].rules.length);
    };
    const sliderInterVal = setInterval(() => {
        if(this.imagePosition + this.itemPerSlide >= this.totalImageItems){
            this.imagePosition = -1;
            document.getElementsByClassName('nav-right-arrow')[0].style.visibility = 'visible';
        }
        this.handleNextClick({isInterval: true});
    }, 2000);
    this.setState({
        sliderInterVal
    });
  }
  componentWillUnmount(){
    clearInterval(this.state.sliderInterVal);
  }

  setImageSliderTransform() {
    const slider = document.querySelector('.image-slider');
    const itemWidth = this.sliderItems[0].offsetWidth + this.itemPerSlide * 4;
    slider.style.transform = `translate3d(${-this.imagePosition * itemWidth - this.imagePosition * 3}px,0,0)`;
  }

  handlePreviousClick() {
    clearInterval(this.state.sliderInterVal);
    this.imagePosition = Math.max(this.imagePosition - 1, 0);
    if (this.imagePosition <= 0) {
      document.getElementsByClassName('nav-left-arrow')[0].style.visibility = 'hidden';
    }
    if (this.imagePosition + this.itemPerSlide < this.totalImageItems) {
      document.getElementsByClassName('nav-right-arrow')[0].style.visibility = 'visible';
    }
    this.setImageSliderTransform();
  }

  handleNextClick({isInterval}) {
    if(!isInterval) {
        clearInterval(this.state.sliderInterVal);
    }
    this.imagePosition = Math.min(this.imagePosition + 1, this.totalImageItems - 1);
    if (this.imagePosition > 0) {
      document.getElementsByClassName('nav-left-arrow')[0].style.visibility = 'visible';
    }
    if (this.imagePosition + this.itemPerSlide === this.totalImageItems) {
      document.getElementsByClassName('nav-right-arrow')[0].style.visibility = 'hidden';
    }
    this.setImageSliderTransform();
  }

  render() {
    return (
      <div className="image-container">
        <div className="image-navigation nav-left-arrow" onClick={this.handlePreviousClick}>&lt;</div>
        <div className="image-wrapper">
          <div className="image-slider">
            {this.props.children}
          </div>
        </div>
        <div className="image-navigation nav-right-arrow" onClick={this.handleNextClick}>&gt;</div>
      </div>
    );
  }
}

export default Slider;
