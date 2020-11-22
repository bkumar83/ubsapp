import React from 'react';
import './items.css';
import { tableColumns } from '../../constants';
import { connect } from 'react-redux';

/**
 * Desc:This is the Items component which is displays the selected items
 * @Param:item
 */
class Items extends React.Component {
  constructor(props) {
    super(props);
    let category = '';
    if (typeof this.props.selItem !== 'undefined') {
      category = this.props.selItem.Category;
    } else {
      category = this.props.location.state.item.Category;
    }
    this.state = {
      category: category,
      itemDetails: [],
      tableColumns: tableColumns,
      isLoading: true,
    };

  }
  /**
   * Desc:this method renders to previous page
   */
  onIndex = () => {
    this.props.history.push({
      pathname: "/"
    });
  }
  /**
   * Desc:Fetchs the list of items fof the selected category
   * @Param:category
   */
  async componentDidMount() {

    this.getAllItemsByCategory();
  }

  async getAllItemsByCategory() {
    try {
      const response = await fetch(`https://api.publicapis.org/entries?category=${this.state.category}&https=true`);
      if (response.status === 200) {
        const allItems = await response.json();
        this.setState({ itemDetails: allItems.entries, isLoading: false });
      } else if (response.status === 400) {
        alert('Sorry,this page is not  available');
      }
    } catch (error) {
      this.setState({ isLoading: false });
      console.log(error);
    }
  }
  /**
   * Desc:this method renders to table header and sets the header colums
   * @Param:tablecolumns
   */
  renderTableHeader = () => {
    return this.state.tableColumns
      .map((column, i) => <th key={i}>{column.title}</th>)
  }
  /**
   * Desc:this method renders the tables rows and display the data
   * @Param:item
   */
  renderTableRows = () => {
    return this.state.itemDetails.map(item => {
      return (
        <tr key={item.Link}>
          <td><a href={item.Link}> {item.API}</a> </td>
          <td>{item.Description}</td>
          <td>{item.Auth}</td>
          <td>{item.HTTPS}</td>
          <td>{item.Cors}</td>

        </tr>
      )
    })
  }

  render() {
    const items = this.state.itemDetails;

    return items.length > 0
      ? (

        [<div calss="maintable">
          <div class="category">{this.state.category}</div>
          <table class="itemtable">
            <thead>
              <tr>
                {this.renderTableHeader()}
              </tr>
            </thead>
            <tbody>
              {this.renderTableRows()}
            </tbody>
          </table>
          <div calss="indexback">  <a onClick={this.onIndex.bind(this)}><g-emoji class="g-emoji" alias="arrow_up" >⬆</g-emoji>Back to Index</a> </div>
        </div>
        ]
      ) : (
        <div>{this.state.isLoading ? <div>Loading...</div> :
          (<div> No Data{this.props.selItem}</div>)
        }</div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    selItem: state.selitem
  }
}
export default connect(mapStateToProps)(Items);
