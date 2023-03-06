import { useEffect, useState } from 'react'

export default function useGeolocation() {
  const [location, setLocation] = useState({
    lat: 41.310589,
    long: 69.241567,
  })
  const [newLocation, setNewLocation] = useState(null)

  const onSuccess = (location) => {
    setNewLocation({
      lat: location.coords.latitude,
      long: location.coords.longitude,
      default: false,
    })
    return location
  }

  const onError = (error) => {
    setNewLocation({
      lat: 41.310589,
      long: 69.241567,
      default: true,
    })
    return error
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (newLocation) {
      setLocation(newLocation)
    }
  }, [newLocation])

  return location
}
