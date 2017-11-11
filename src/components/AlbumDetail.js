import React from 'react'
import { Image, Text, View, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album
  const {thumbnailContainer, headerText, albumImage} = styles
  return (
    <Card >
      <CardSection >
        <View style={thumbnailContainer} >
          <Image style={styles.thumbnail} source={{uri: thumbnail_image}} />
        </View >
        <View style={styles.headerContent} >
          <Text style={headerText} >{title}</Text >
          <Text >{artist}</Text >
        </View >
      </CardSection >

      <CardSection >
        <Image style={albumImage} source={{url: image}} />
      </CardSection >

      <CardSection >
        <Button text={'Buy Now'} onPress={() => { Linking.openURL(url) }} />
      </CardSection >
    </Card >
  )
}

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail
