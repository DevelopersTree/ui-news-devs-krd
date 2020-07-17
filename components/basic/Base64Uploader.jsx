/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button, Popover } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

import FileInputComponent from 'react-file-input-previews-base64';

class Base64Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = () => ({
      base64: null,
      existingFileRemoved: false,
      file: this.props.file,
    });
    this.state = this.initialState();
    this.callbackFunction = (fileArr) => {
      try {
        this.setState({ base64: fileArr.base64 });
        this.props.callbackFunction(fileArr.base64);
      } catch (e) {
        // hello
      }
    };
    this.removeFile = () => {
      try {
        this.setState({ base64: null });
        this.props.callbackFunction(undefined);
      } catch (e) {
        // hello
      }
    };
    this.removeUploadedFile = (file) => {
      try {
        this.setState({ file: undefined });
        this.props.uploadedFileRemoved(file);
      } catch (e) {
        // hello
      }
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.state.base64 || this.state.file ? (
          <div>
            <Popover
              content={(
                <Button
                  onClick={() => {
                    if (this.state.file && this.state.file !== '') {
                      this.removeUploadedFile(this.state.file);
                    } else {
                      this.removeFile();
                    }
                  }}
                  type="primary"
                  danger
                  icon={<CloseOutlined />}
                >
                  {' '}
                  {this.props.removeText ? this.props.removeText : 'Upload File'}
                </Button>
              )}
            >
              {this.state.file
              && this.state.file != null
              && this.state.file !== '' ? (
                <img
                  style={{ maxWidth: '100%' }}
                  src={`${process.env.REACT_APP_STORAGE_LINK}/${this.props.file}`}
                />
                ) : (
                  <img style={{ maxWidth: '100%' }} src={this.state.base64} />
                )}
            </Popover>
          </div>
        ) : (
          <FileInputComponent
            labelText=""
            imagePreview
            labelStyle={{ fontSize: 14 }}
            multiple={false}
            accept="image/*"
            buttonComponent={(
              <Button style={this.props.style} block type="dashed" icon={<PlusOutlined />}>
                {this.props.text ? this.props.text : 'Upload File'}
              </Button>
            )}
            {...this.props}
            callbackFunction={this.callbackFunction}
          />
        )}
      </div>
    );
  }
}

export default Base64Uploader;
