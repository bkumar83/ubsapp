import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPath, storeSelItem } from '../../actions';
import { apiurl } from '../../constants';
import './itemslist.css';
/**
 * @desc This component is the second page of application which gets the list of Items from public api.
 * @param setCurrentPath : Calls this method defined in action to set current path
 */

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: [],
      loading: true
    };
  }
  /**
   * @desc: Gets all the items from the public api
   */
  async componentDidMount() {
     
    try {
      const response = await fetch(apiurl.ENTRIESAPI);
      if(response.status === 200){
       const  allItems = await response.json();
        this.setState({ itemsList: allItems.entries,loading: false });
      }else if (response.status === 404){
        alert('Sorry,this page isn not  available');
      }
       
    } catch (error) {
      console.log(error);
      alert('Something wrong. Please try again');
    }
  }
  /**
   * @Desc:This method sets the current item is selected and renders to the selected item compnent
   * @Param:item
   */
  assignItem = item => { // bound arrow function handler
    this.props.onSelItem(item);
    this.props.history.push({
      pathname: "/selItem/"
    });

  }
     
  render() {
    
    return (
    
     <div class="itemContainer">
        <div class="title">UBS APP </div>
        <div class="index">Index</div>
        <div class="idxline"></div>
        {this.state.loading ? <div>Loading...</div>: 
     (<div>{this.state.itemsList.map(item => (
        <ul>  <li key={item} onClick={e => this.assignItem(item)}>
          <a >{item.API} </a>
        </li></ul>
      ))}</div>)
  }
    
   </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    selItem:state.selItem
  }
};

const mapDispachToProps = (dispatch) => {
  return {
    currentpath: pathValue => (dispatch(setCurrentPath(pathValue))),
    onSelItem: item => (dispatch(storeSelItem(item))),

  }
};
export default connect(mapStateToProps, mapDispachToProps)(ItemsList);

