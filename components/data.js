import karachi from '../public/imgs/karachi.jpg'
import gilgit from '../public/imgs/gilgit.jpg'
import islamabad from '../public/imgs/islamabad.jpg'
import lahore from '../public/imgs/lahore.jpg'
import multan from '../public/imgs/multan.jpg'
import peshawar from '../public/imgs/peshawar.jpg'
import gwadar from '../public/imgs/gwadar.jpeg'
import quetta from '../public/imgs/quetta.jpg'


const data = [
    {
        city:'karachi',
        position:[24.8607, 67.0011],
        img:karachi,
        desc:'Karachi is one of the world\'s fastest growing cities, and has communities representing almost every ethnic group in Pakistan. Karachi is built on a coastal plains with scattered rocky outcroppings, hills and coastal marshlands.',
        rating: 4
    },
    {
        city:'islamabad',
        position:[33.559707,73.168945],
        img:islamabad,
        desc:'Islamabad is known for the presence of several parks and forests, including the Margalla Hills National Park and the Shakarparian.',
        rating:5
    },
    {
        city:'multan',
        position:[30.197979,71.472498],
        img:multan,
        desc:'On the Punjab on the banks of the Chenab River, Multan is almost in the centre of Pakistan, and one of the oldest cities in Asia. It\'s famous for its mosques and shrines as well as its cotton crops and fruit – especially mangoes.',
        rating:4.5
    },
    {
        city:'quetta',
        position:[30.1798,66.9750],
        img:quetta,
        desc:'Quetta is known as the fruit basket of Pakistan producing plums, peaches, pomegranates, apricots, apples, melons, cherries, pistachios and almonds',
        rating:4
    },
    {
        city:'gilgit',
        position:[35.8819,74.4643],
        img:gilgit,
        desc:'Gilgit was an important city on the Silk Road, along which Buddhism was spread from South Asia to the rest of Asia. It is considered as a Buddhism corridor from which many Chinese monks came to Kashmir to learn and preach Buddhism.',
        rating:5
    },
    {
        city:'lahore',
        position:[31.5204,74.3587],
        img:lahore,
        desc:'Lahore is the city of wonders with a rich history of over a millennium. Lahore the 2nd largest city of Pakistan and is capital of province Punjab. Lahore is referred to as cultural heart of Pakistan.',
        rating:4.5
    },
    {
        city:'peshawar',
        position:[34.0151,71.5249],
        img:peshawar,
        desc:'It is the biggest city of Khyber Pakhtunkhwa and is a relatively prosperous city. It is also a cultural and economic hub of Khyber Pakhtunkhwa. The city is famous for its food and tourism.',
        rating:5
    },
    {
        city:'gwadar',
        position:[25.2460,62.2861],
        img:gwadar,
        desc:'Gwadar port is the cardinal part of the China Pakistan Economic project and it holds chief importance in the extension of silk route. It is a port on the coasts of ArabianSea which is serving as a hub for Pakistan.',
        rating:4
    }
]


export default data