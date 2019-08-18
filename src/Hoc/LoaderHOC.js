import React, { Component } from 'react';
import './LoaderHOC.css'

const LoaderHOC = (WrappedComponent) => {
    return class LoaderHOC extends Component {
        render() {
            return this.props.isLoading ? <div className='loader'></div> : <WrappedComponent {...this.props} />
        }
    }

}
export default LoaderHOC  