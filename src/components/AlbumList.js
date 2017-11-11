import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  constructor (props) {
    super(props)
    this.state = {albums: []}
  }

  componentWillMount () {
    console.log('component will mount:: album list')
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({albums: data})
      })
  }

  renderAlbums () {
    return this.state.albums.map(album => {
      return <AlbumDetail key={album.title} album={album} />
    })
  }

  render () {
    const {viewStyles} = styles
    return (
      <ScrollView style={viewStyles} >
        {this.renderAlbums()}
      </ScrollView >
    )
  }
}

const styles = {
  viewStyles: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 5
  },
  itemStyles: {}
}

AlbumList.propTypes = {}
AlbumList.defaultProps = {}

export default AlbumList
