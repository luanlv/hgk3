/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {Icon, Input, Button, DatePicker, Row, Col, Card, Upload, message, Modal, Popconfirm} from 'antd';

var Waypoint = require('react-waypoint');
import CopyToClipboard from 'react-copy-to-clipboard';
import ImageEditor from '../Components/ImageEditor'
import axios from 'axios'
if(process.env.BROWSER){
  message.config({
    top: 20,
    duration: 2.5,
  });
}

const Dragger = Upload.Dragger;

var list=[]
for(let i = 0; i< 50; i++){
  list.push(i)
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image',
};

const text = 'Đồng ý?';

class Library extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      editImage: false,
      filter: '',
      time: (new Date()).toISOString(),
      imgs: [],
      selectedImage: {},
      vImg : '?v=' + new Date().getTime(),
      imageRef: null
    }
    this.fetchImage(40, this.state.time)
  }

  async fetchImage (num, time, reset = true) {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();

    this.setState(prevState => {
      if(data.listImage.length > 0) {
        let newImgs;
        if (reset) {
          newImgs = data.listImage
        } else {
          newImgs = prevState.imgs.concat(data.listImage)
        }
        return {
          ...prevState,
          imgs: newImgs,
          time: newImgs[newImgs.length - 1].created_at
        }
      }
    })
  }
  showModal (el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk (e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel (e) {
    this.setState({
      visible: false,
      imageRef : null
    });
  }
  handleOkEditImage (e) {
    this.setState({
      editImage: false,
    });
  }
  handleCancelEditImage (e) {
    this.setState({
      editImage: false,
    });
  }
  beforeUpload (file) {
    const isImage = file.type.match('image*')
    if (!isImage) {
      message.error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter () {
    alert('loading more ...')
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs
        newImgs.unshift(info.file.response)
        return {
          ...prevState,
          imgs: newImgs
        }
      })
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return (
        <div>

          <Row className="padding-5 margin-5">
            <Col sm={16}>
              <Button
                onClick={() => {
                  this.setState((preState, curProps) => {
                    return {
                      ...preState,
                      uploadArea: !preState.uploadArea
                    }
                  })
                }}
              >Thêm ảnh</Button>

            </Col>
            <Col sm={8}>
              <Input size="large" placeholder="Search by name"
                onChange={(e) => {
                  let newInput = e.target.value
                    this.setState((prevState) => {
                      return {
                        ...prevState,
                        filter: newInput
                      }
                    })
                    this.fetchImage(40, this.state.time)
                  }
                }
              />
            </Col>
          </Row>

          {this.state.uploadArea && <Row className="padding-5 margin-5">
            <div style={{ marginTop: 16, height: 180 }}>
              <Dragger
                {...props}
                onChange={(info) => this.onChange(info)}
                beforeUpload={this.beforeUpload}
              >
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Kéo thả các các file vào bất kì nơi nào trên vùng này để tải lên.</p>
                <p className="ant-upload-hint">Hoặc bấm vào vùng này để chọn ảnh</p>
              </Dragger>
            </div>
          </Row>}

          <div style={{ background: '#ECECEC'}}>
            <Row>
              {this.state.imgs.map((el, key) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={4} key={key} className="padding-5">
                    <Card bordered={false} className="imgWr"
                      onClick={() => this.showModal(el)}
                    >
                      <img src={"/image/small/" + el.name + "?t=" + el.created_at} />
                    </Card>
                  </Col>
                )
              })}
              <Col xs={12} sm={6} md={4} lg={4} className="padding-5">
                <Card bordered={false} className="imgWr"
                      onClick={() => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)}
                >
                  <img src="https://www.loadebar.com/images/template/load-more.png" />
                </Card>
              </Col>
            </Row>
            {/*<Waypoint*/}
              {/*scrollableAncestor={window}*/}
              {/*onEnter={() => this._handleWaypointEnter()}*/}
            {/*>*/}
            {/*</Waypoint>*/}
          </div>
          <Modal title="Basic Modal" visible={this.state.visible}
                 onOk={(e) => this.handleOk(e)}
                 onCancel={(e) => this.handleCancel(e)}
                 width="90%"
                 maskClosable={true}
                 className="img"
          >
            <Row>
              <Col
                lg={12}
              >
                {this.state.selectedImage.name && <Card bordered={false} className="imgWr"
                >
                  <img src={"/image/" + this.state.selectedImage.name + this.state.vImg} />
                </Card>}
              </Col>
              <Col
                lg={12}
                className="padding-5"
              >
                {this.state.selectedImage.name &&
                  <div>
                   <b>Tên tập tin:</b> {this.state.selectedImage.name }
                  </div>
                }
                {this.state.selectedImage.type &&
                  <div>
                    <b>Loại tập tin:</b> {this.state.selectedImage.type}
                  </div>
                }
                {this.state.selectedImage.created_at &&
                  <div>
                    <b>Đã tải lên vào lúc:</b> {this.state.selectedImage.created_at}
                  </div>
                }

                {!!this.state.selectedImage.fileSize &&
                  <div>
                    <b>Dung lượng tệp:</b> {this.state.selectedImage.fileSize} KB
                  </div>
                }

                {this.state.selectedImage.dimensions &&
                  <div>
                    <b>Kích thước:</b> {this.state.selectedImage.dimensions.width} × {this.state.selectedImage.dimensions.height}
                  </div>
                }
                <b>Link :</b> {this.state.copied ? <span style={{color: 'red'}}>Copied !"</span> : <span style={{color: 'blue'}}>
                  {"/image/" + this.state.selectedImage.name}
                </span>}

                <Row className="padding-5">
                  <CopyToClipboard text={"/image/" + this.state.selectedImage.name}
                                   onCopy={() => {
                                     this.setState({copied: true})
                                     setTimeout(() => {
                                       this.setState({copied: false})
                                     }, 1000)
                                   }
                                   }>
                    <Button type="primary">Copy link ảnh</Button>
                  </CopyToClipboard>
                </Row>
                <Row className="padding-5">
                  <Popconfirm placement="right" title={text}
                              onConfirm={() => {
                                axios.post('/image/min/' + this.state.selectedImage.name, {})
                                  .then(res => {
                                    message.success(<div>Đã giảm từ <b style={{color: 'red'}}>{Math.floor(res.data.oldSize).toLocaleString()} kB</b> còn <b style={{color: 'blue'}}>{Math.floor(res.data.newSize).toLocaleString()} kB</b></div>)
                                    this.setState(prev => {
                                      return {
                                        ...prev,
                                        vImg: '?v=' + new Date().getTime()
                                      }
                                    })
                                  })
                                  .catch(err => {
                                    message.error('Có lỗi')
                                  })
                              }}
                              okText="Đồng ý" cancelText="Hủy">
                    <Button
                      type="primary"
                    >Giảm chất lượng ảnh</Button>
                  </Popconfirm>
                </Row>
                <Row className="padding-5">
                  <Button
                    type="primary"
                    onClick={() => {
                      this.setState(prev => {
                        return {
                          ...prev,
                          visible: false,
                          editImage: true,
                          imageRef: "/image/" + this.state.selectedImage.name + this.state.vImg
                        }
                      })
                    }}
                  >Chỉnh sửa ảnh này</Button>
                </Row>
                <Row className="padding-5">
                  <Popconfirm placement="right" title={text}
                              onConfirm={() => {
                                console.log(' confirm')
                                axios.post('/image/delete', {
                                  slug: this.state.selectedImage.slug,
                                  name: this.state.selectedImage.name
                                })
                                  .then(res => {
                                    message.success('Xóa thành công')
                                    let currentTime = (new Date()).toISOString()
                                    this.setState(prev => {
                                      return {
                                        ...prev,
                                        time: currentTime,
                                        editImage: false,
                                        visible: false
                                      }
                                    })
                                    this.fetchImage(40, currentTime)
                                  })
                                  .catch(err => {
                                    message.error('Có lỗi')
                                  })
                              }}
                              okText="Đồng ý xóa" cancelText="Hủy">
                    <Button type="danger">Xóa ảnh</Button>
                  </Popconfirm>
                </Row>
              </Col>
            </Row>
          </Modal>


          <Modal title="Chỉnh sửa ảnh" visible={this.state.editImage}
                 onOk={(e) => this.handleOkEditImage(e)}
                 onCancel={(e) => this.handleCancelEditImage(e)}
                 style={{ top: 0 }}
                 width="100%"
                 maskClosable={true}
                 className="img"
          >
            {this.state.imageRef && <ImageEditor
              imageRef={this.state.imageRef}
              width={this.state.selectedImage.dimensions.width}
              height={this.state.selectedImage.dimensions.height}
              slug={this.state.selectedImage.slug}
              name={this.state.selectedImage.name}
              handleOk={() => {
                  console.log('close modal !!')
                  let currentTime = (new Date()).toISOString()
                  this.setState(prev => {
                    return {
                      ...prev,
                      time: currentTime,
                      editImage: false,
                      visible: false
                    }
                  })
                  this.fetchImage(40, currentTime)
                }
              }
            />}
          </Modal>

        </div>
    );
  }
}

export default Library
