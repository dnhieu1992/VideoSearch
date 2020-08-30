import React from 'react'
import {connect} from 'react-redux';

import VideoItem from './VideoItem';

class VideoList extends React.Component{
    render(){
         if(this.props.videos.length>0){
             const renderedList=this.props.videos.map((video)=>{
                 return <VideoItem  key={video.id.videoId} videoItem={video} />
             });
             return (
                 <div>
                     <ul>
                         {renderedList}
                     </ul>
                 </div>
         )
         }else{
             return <div></div>
         }
    }
 }
 const mapStateToProps  = state => {
     return {videos:state.videos}
 }
 export default connect(mapStateToProps)(VideoList);