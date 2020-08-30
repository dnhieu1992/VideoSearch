import React from 'react';
import {connect} from 'react-redux';

class VideoSelected extends React.Component{
    render(){
        if(this.props.video!=null){
            const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
            return(
                <div className="thumbnail">
                    <iframe title="video player" src={videoSrc} style={{width:'100%',height:'280px'}} />
                    <div className="caption">
                    <h4>{this.props.video.snippet.title}</h4>
                    <p>{this.props.video.snippet.description}</p>
                </div>
                </div>
            )
        }else{
            return (
                <h4>No video was selected</h4>
            )
        }
        
    }
}
const mapStateToProps  = state => {
    return {video:state.videoSelected}
}
export default connect(mapStateToProps)(VideoSelected);