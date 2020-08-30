import React from 'react'

import Api from '../services/api';

import { connect } from 'react-redux'

class VideoSearch extends React.Component{
    constructor(){
        super();
        this.state={searchText:''};
        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeSearchValue(event){
        this.setState({searchText:event.target.value});
    }
    componentDidMount(){
        this.fetchData();
    }
    onSubmit(event){
        event.preventDefault();
        this.fetchData();
    }
    fetchData(){
        Api.get('/search',{
            params: {
                q: this.state.searchText
              },
        })
        .then(res => {
            if(res.data.items.length>0){
                this.props.dispatch({
                    type: 'GET_VIDEOS',
                    payload: { videos: res.data.items,videoSelected:res.data.items[0] }
                })
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    render(){
        return (
            <div className='form-group'>
                <form onSubmit={this.onSubmit} style={{marginTop:'20px'}}>
                        <input type="text" className='form-control' 
                            placeholder='Enter your keyword...'
                            value={this.state.searchText}
                            onChange={this.onChangeSearchValue}/>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }

export default connect(mapDispatchToProps)(VideoSearch);