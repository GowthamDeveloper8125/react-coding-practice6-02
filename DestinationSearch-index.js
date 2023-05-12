// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {destinationList: '', searchInput: ''}

  searchItems = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(itemList =>
      itemList.name.includes(searchInput),
    )

    console.log(searchInput)

    return (
      <div className="mainContainer">
        <div>
          <div className="upperPart">
            <h1>Destination Search</h1>
            <div className="searchContainer">
              <input
                className="searchInput"
                type="search"
                onChange={this.searchItems}
              />
              <img
                className="searchImage"
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
              />
            </div>
          </div>
          <ul className="unorderList">
            <li className="orderList">
              {searchResults.map(listItem => (
                <DestinationItem
                  name={listItem.name}
                  imgUrl={listItem.imgUrl}
                  id={listItem.id}
                  key={listItem.id}
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
