/**
 * Created by wyj on 2017/11/15.
 */
import React from 'react';
import { connect } from 'dva';
import { Input, InputNumber, Upload, Modal, Icon } from 'antd';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import styles from './addItemContent.less';

const { TextArea } = Input;
const bigBuckBunny = 'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov';
const sintelTrailer = 'https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4';

class AddItemContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  }

  onChangePrice = (value) => {
    this.setState({
      price: value,
    });
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className={styles.addItemContentWrapper}>
        <div className={styles.flexLayoutLine}>
          <div>商品名称:</div>
          <Input
            style={{ width: 500 }}
          />
        </div>
        <div className={styles.flexLayoutArea}>
          <div>商品描述:</div>
          <TextArea
            style={{ width: 500, height: 250 }}
          />
        </div>
        <div className={styles.flexLayoutLine}>
          <div>商品价格:</div>
          <InputNumber
            style={{ width: 100 }}
            formatter={value => `$ ${value}`}
          />
        </div>
        <div className={styles.flexLayoutArea}>
          <div>图片展示:</div>
          <div className="clearfix">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 3 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        </div>
        <div>
          <div>视频展示:</div>
          <div className={styles.videoListItem}>
            <Video
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              autoPlay
              ref={(c) => { this.video1 = c; }}
              onPlay={() => {
                this.video2.videoEl.pause();
              }}
            >
              <source src={sintelTrailer} type="video/mp4" />
            </Video>
          </div>
          <div className={styles.videoListItem}>
            <Video
              ref={(c) => { this.video2 = c; }}
              onPlay={() => {
                this.video1.videoEl.pause();
              }}
              src={bigBuckBunny}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AddItemContent);
