import React from 'react'
import AppoinmentList from '../AppoinmentList'
import ContentPage from '../ContentPage'
import HotLive from '../HotLive'
import LivingRoom from '../LivingRoom'
import VideoPlayer from '../VideoPlayer'

export default function Main() {
  return (
    <div className='index-wrapper'>
        <LivingRoom />
        <VideoPlayer />
        <AppoinmentList />
        <HotLive />
        <ContentPage />
    </div>
  )
}
