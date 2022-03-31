import './index.css'
import {Component} from 'react'
import WishLang from '../WishLang'

class Content extends Component {
  state = {active: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0'}

  updateId = id => this.setState({active: id})

  render() {
    const {data} = this.props
    const {active} = this.state
    const image = data.filter(each => each.id === active)

    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <ul>
          {data.map(each => (
            <WishLang
              item={each}
              key={each.id}
              updateTabId={this.updateId}
              activeBtn={active === each.id}
            />
          ))}
        </ul>
        <img
          src={image[0].imageUrl}
          alt={image[0].buttonText}
          className="greeting"
        />
      </div>
    )
  }
}

export default Content
