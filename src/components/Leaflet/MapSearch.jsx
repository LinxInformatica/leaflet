import { MapContainer, useLeaflet } from 'react-leaflet'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch'

// make new leaflet element
const Search = (props) => {
    const { map } = useLeaflet() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const searchControl = new GeoSearchControl({
            provider,
        })

        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

    return null // don't want anything to show up from this comp
}


export default function MapSearch() {
  return (
    <MapContainer {...otherProps}>
      {...otherChildren}
      <Search provider={new OpenStreetMapProvider()} />
    </MapContainer>

  )
}