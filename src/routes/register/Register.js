/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Camera from 'react-camera';
import s from './Register.css';

const camstyle = {
  preview: {
    position: 'relative',
  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%',
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20,
  },
  captureImage: {
    width: '100%',
    justifyContent: 'center',
  },
};

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
          <div style={camstyle.container}>
            <Camera
              style={camstyle.preview}
              ref={cam => {
                this.camera = cam;
              }}
            >
              <div
                style={camstyle.captureContainer}
                onKeyPress={() => {}}
                role="button"
                tabIndex="-1"
                onClick={() => {
                  this.camera.capture().then(blob => {
                    this.img.src = URL.createObjectURL(blob);
                    this.img.onload = () => {
                      URL.revokeObjectURL(this.src);
                    };
                  });
                }}
              >
                <div style={camstyle.captureButton} />
              </div>
            </Camera>
            <img
              style={camstyle.captureImage}
              alt="pic"
              ref={img => {
                this.img = img;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
