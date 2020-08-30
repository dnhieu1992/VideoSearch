import React from 'react';
import {connect} from 'react-redux';

const VideoItem = ({ videoItem,dispatch }) => {
  const onVideoSelect=(videoItem)=>{
     dispatch({
          type: 'UPDATE_SELECTED_VIDEOS',
          payload: {videoSelected:videoItem}
      })
  }
  return (
    <div className="thumbnail" onClick={() => onVideoSelect(videoItem)}>
      <img style={{width:'100%',marginBottom:'10px'}} src={videoItem.snippet.thumbnails.medium.url} alt="" />
        <div className="caption">
          <h4>{videoItem.snippet.title}</h4>
          <p>{videoItem.snippet.description}</p>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}
export default connect(mapDispatchToProps)(VideoItem);