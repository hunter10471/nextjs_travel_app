import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet"
import { MapCard } from './MapCard';

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
    <MapContainer center={[30.3753, 69.3451]} zoom={6} scrollWheelZoom={false} className='h-[70vh] w-[80vw] rounded-2xl shadow-2xl'>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker icon={karachi} key={1} position={[24.8607, 67.0011]}>
        <Popup closeButton={false} closeOnEscapeKey={true} >
          <MapCard subTitle='metropolitan' img='/imgs/karachi.jpg' title='Karachi' desc='Karachi is the capital of the Pakistani province of Sindh. Situated on the Arabian Sea, Karachi serves as a transport hub, and is home to Pakistans two largest seaports.' />
        </Popup>
      </Marker>
      <Marker  icon={faisalabad} key={2} position={[31.4220,73.0923]}>
        <Popup closeButton={false}>
        <MapCard subTitle='metropolitan' img='/imgs/faisalabad.png' title='Faisalabad' desc='Faisalabad is famous for its food. The most common snack item samosas of Faisalabad are considered the best in Pakistan.' />
        </Popup>
      </Marker>
      <Marker  icon={multan} key={3} position={[30.197979,71.472498]}>
        <Popup closeButton={false}>
        <MapCard subTitle='metropolitan' img='/imgs/multan.jpg' title='Multan' desc='In the Punjab on the banks of the Chenab River, Multan is almost in the centre of Pakistan, and one of the oldest cities in Asia.' />
        </Popup>
      </Marker>
      <Marker  icon={islamabad} key={4} position={[33.559707,73.168945]}>
        <Popup closeButton={false}>
        <MapCard subTitle='capital' img='/imgs/islamabad.jpg' title='Islamabad' desc='Islamabad is known for the presence of several parks and forests, including the Margalla Hills National Park and the Shakarparian.' />
        </Popup>
      </Marker>
      <Marker  icon={peshawar} key={5} position={[34.0151,71.5249]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Mayor–council' img='/imgs/peshawar.jpg' title='Peshawar' desc='It is the biggest city of Khyber Pakhtunkhwa and is a relatively prosperous city. It is also a cultural and economic hub of Khyber Pakhtunkhwa, The city is famous for its food and tourism.' />
        </Popup>
      </Marker>
      <Marker  icon={quetta} key={6} position={[30.1798,66.9750]}>
        <Popup closeButton={false}>
        <MapCard subTitle='metropolitan' img='/imgs/quetta.jpg' title='Quetta' desc='Quetta is known as the fruit basket of Pakistan producing plums, peaches, pomegranates, apricots, apples, melons, cherries, pistachios and almonds. ' />
        </Popup>
      </Marker>
      <Marker  icon={gwadar} key={7} position={[25.2460,62.2861]}>
        <Popup closeButton={false}>
        <MapCard subTitle='port-city' img='/imgs/gwadar.jpeg' title='Gwadar' desc='Gwadar port is the cardinal part of the China Pakistan Economic project and it holds chief importance in the extension of silk route.' />
        </Popup>
      </Marker>
      <Marker  icon={lahore} key={8} position={[31.5204,74.3587]}>
        <Popup closeButton={false}>
        <MapCard subTitle='cosmopolitan' img='/imgs/lahore.jpg' title='Lahore' desc='Lahore is a major centre of Qawwali music. The city also hosts much of Pakistans tourist industry, with major attractions including the Walled City.' />
        </Popup>
      </Marker>
      <Marker  icon={gilgit} key={9} position={[35.8819,74.4643]}>
        <Popup closeButton={false}>
        <MapCard subTitle='Autonomous territory' img='/imgs/gilgit.jpg' title='Gilgit' desc='Gilgit was an important city on the Silk Road, along which Buddhism was spread from South Asia to the rest of Asia. ' />
        </Popup>
      </Marker>
    </MapContainer>
        </div>
  )
}
export default Map
