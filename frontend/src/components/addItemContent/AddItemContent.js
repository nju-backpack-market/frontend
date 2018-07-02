/**
 * Created by wyj on 2017/11/15.
 */
import React from 'react';
import { connect } from 'dva';
import { Input, InputNumber, Upload, Modal, Icon, Button, message } from 'antd';
import 'react-html5video/dist/styles.css';
import styles from './addItemContent.less';
import * as Tools from '../../utils/Tools';
import config from '../../config';

const { TextArea } = Input;

class AddItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      previewVisible: false,
      previewImage: '',
      imageList: [],
      imageUrlList: [],
      videoList: [],
      videoUrlList: [],
      itemName: '',
      itemDesc: '',
    };
  }

  onHandleSubmit = () => {
    if (this.state.itemName === '') {
      message.error('商品名称不能为空!');
    } else if (this.state.price < 0 || this.state.price === '') {
      message.error('商品价格格式错误!');
    } else {
      console.log('ok');
      const newProduct = [{
        name: this.state.itemName,
        price: this.state.price,
        description: this.state.itemDesc,
        image: this.state.videoUrlList.length === 0 ? [...this.state.imageUrlList, ''] : [...this.state.imageUrlList, this.state.videoUrlList[0]],
        on_sale: true,
      }];
      this.props.dispatch({
        type: 'admin/fetchCreateProduct',
        payload: {
          newProduct,
        },
      });
    }
  };

  onChangeItemName = (e) => {
    console.log(e.target.value);
    this.setState({
      itemName: e.target.value,
    });
  };
  onChangeItemDesc = (e) => {
    console.log(e.target.value);
    this.setState({
      itemDesc: e.target.value,
    });
  };
  onChangePrice = (value) => {
    console.log(value);
    this.setState({
      price: value,
    });
  };

  onUploadVideo = ({ fileList }) => {
    console.log(fileList);
    this.setState({
      videoList: fileList,
    });
    if (this.state.videoList.length > 0) {
      if (this.state.videoList[0].response) {
        this.setState({
          videoUrlList: [this.state.videoList[0].response],
        });
      }
    }

    if (this.state.videoList.length !== this.state.videoUrlList.length) {
      this.setState({
        videoUrlList: [],
      });
      for (let i = 0; i < this.state.videoList.length; i += 1) {
        this.setState({
          videoUrlList: [...this.state.videoUrlList, this.state.videoList[i].response],
        });
      }
    }
    console.log(this.state.videoUrlList[0]);
  };
  onUploadImage = ({ fileList }) => {
    console.log(fileList);
    this.setState({
      imageList: fileList,
    });
    for (let i = 0; i < this.state.imageList.length; i += 1) {
      if (this.state.imageList[i].response) {
        console.log(this.state.imageList[i].response);
        if (this.state.imageUrlList.indexOf(this.state.imageList[i].response) === -1) {
          this.setState({
            imageUrlList: [...this.state.imageUrlList, this.state.imageList[i].response],
          });
        }
      }
    }
    if (this.state.imageList.length !== this.state.imageUrlList.length) {
      this.setState({
        imageUrlList: [],
      });
      for (let i = 0; i < this.state.imageList.length; i += 1) {
        this.setState({
          imageUrlList: [...this.state.imageUrlList, this.state.imageList[i].response],
        });
      }
    }
    console.log(this.state.imageUrlList);
  };
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  render() {
    const { previewVisible, previewImage, imageList, videoList } = this.state;
    const uploadImageBtn = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const uploadVideoBtn = (
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    );
    const imageProps = {
      action: `${config.domain}/files/image`,
      headers: {
        Authorization: `Bearer ${Tools.getToken()}`,
      },
    };
    const videoProps = {
      action: `${config.domain}/files/video`,
      headers: {
        Authorization: `Bearer ${Tools.getToken()}`,
      },
    };

    return (
      <div className={styles.addItemContentWrapper}>
        <div className={styles.flexLayoutLine}>
          <div style={{ width: 60 }}>商品名称:</div>
          <Input
            style={{ width: 450 }}
            value={this.state.itemName}
            onChange={this.onChangeItemName}
          />
        </div>
        <div className={styles.flexLayoutArea}>
          <div style={{ width: 60 }}>商品描述:</div>
          <TextArea
            style={{ width: 450, height: 250 }}
            value={this.state.itemDesc}
            onChange={this.onChangeItemDesc}
          />
        </div>
        <div className={styles.flexLayoutLine}>
          <div style={{ width: 60 }}>商品价格:</div>
          <InputNumber
            style={{ width: 100 }}
            formatter={value => `$ ${value}`}
            onChange={this.onChangePrice}
          />
        </div>
        <div className={styles.flexLayoutArea}>
          <div style={{ width: 60 }}>图片展示:</div>
          <div className="clearfix">
            <Upload
              {...imageProps}
              listType="picture-card"
              fileList={imageList}
              onPreview={this.handlePreview}
              onChange={this.onUploadImage}
            >
              {uploadImageBtn}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        </div>
        <div className={styles.flexLayoutArea}>
          <div style={{ width: 60 }}>视频展示:</div>
          <Upload
            {...videoProps}
            fileLisy={videoList}
            onChange={this.onUploadVideo}
          >
            {uploadVideoBtn}
          </Upload>
        </div>
        <div className={styles.flexLayoutBtnArea}>
          <Button type="primary" style={{ marginRight: 40 }} onClick={this.onHandleSubmit}>提交</Button>
          <Button>取消</Button>
        </div>
      </div>
    );
  }
}

export default connect()(AddItemContent);
