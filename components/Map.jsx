import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { Icon } from "leaflet"

 var karachi = new Icon({
    iconUrl:'/imgs/karachi.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var faisalabad = new Icon({
    iconUrl:'/imgs/faisalabad.png',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var multan = new Icon({
    iconUrl:'/imgs/multan.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var lahore = new Icon({
    iconUrl:'/imgs/lahore.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var islamabad = new Icon({
    iconUrl:'/imgs/islamabad.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var peshawar = new Icon({
    iconUrl:'/imgs/peshawar.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var quetta = new Icon({
    iconUrl:'/imgs/quetta.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var gwadar = new Icon({
    iconUrl:'/imgs/gwadar.jpeg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })
  
 var gilgit = new Icon({
    iconUrl:'/imgs/gilgit.jpg',
    iconSize:[55,55],
    className:'rounded-full object-cover border-[3px] hover:border-primary transition-all hover:border-[3px]'
  })

const Map = () => {
  return (
      <div className='w-full flex justify-center my-20'>
    <MapContainer center={[30.3753, 69.3451]} zoom={6} scrollWheelZoom={true} className='h-[70vh] w-[80vw] rounded-2xl shadow-2xl'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker icon={karachi} key={1} position={[24.8607, 67.0011]}>
        <Popup>
          dgfgrdgrf
        </Popup>
      </Marker>
      <Marker  icon={faisalabad} key={2} position={[31.4220,73.0923]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker  icon={multan} key={3} position={[30.197979,71.472498]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker  icon={islamabad} key={4} position={[33.559707,73.168945]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker  icon={peshawar} key={5} position={[34.0151,71.5249]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker  icon={quetta} key={6} position={[30.1798,66.9750]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker  icon={gwadar} key={7} position={[25.2460,62.2861]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker  icon={lahore} key={8} position={[31.5204,74.3587]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker  icon={gilgit} key={9} position={[35.8819,74.4643]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
        </div>
  )
}
export default Map
