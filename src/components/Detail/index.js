import React from 'react'

export default class Detail extends React.Component {
  render() {
    return (
      <div className="shot-detail">
        <Title>{this.props.shot.title}</Title>
        <Owner username={this.props.shot.user.username}>{this.props.shot.user.name}</Owner>
        <img src={this.props.shot.images.hidpi} />
        <span className="views"></span>
        <span className="likes"></span>
        <p>{this.props.shot.description}</p>
      </div>
    )
  }
}
