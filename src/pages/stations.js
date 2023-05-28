
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useNetwork from '@/data/network'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  const stations = network.stations;

  console.log(network);

  return (
    <>
      
      <main className={styles.main}>
        

        <div id="favorite" className={styles.div_stations} >
          <h1 className={styles.station}>All Stations</h1>
            {stations.map(station => (
          <p className={styles.stations} key={station.id}>
            {station.name}<br/>Free Bikes: {station.free_bikes}<br/>Empty Spots: {station.empty_slots}
          </p>
          ))}
        </div>
       
      </main>
      

    </>
  )
}
