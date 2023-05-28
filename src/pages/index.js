import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useNetwork from '@/data/network'
import { useRouter } from 'next/router';
 
function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {network, isLoading, isError } = useNetwork()
 
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error...</div>

  const stations = network.stations;

  console.log(network);

  return (
    <>
      <Head>
        <title>Create Velo App</title>
        <meta name="description" content="My Velo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to Cycle&nbsp;
            <code className={styles.code}></code>
          </p>
        
        </div>

        <div className={styles.grid}>
        
          <a
            href="#favorite"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Favorite <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find your favorite bike spot in Antwerp.
            </p>
          </a>

          <a
            href="#prices"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Prices <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out our Day, Week and Annual Cards.
            </p>
          </a>
          <br/>
          <a
            href="#stations"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              All Stations <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find your available bike in Antwerp.
            </p>
          </a>

          <a
            href="#about"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Why I created this app
            </p>
          </a>
        </div>

        <Image
          src="/Antwerp.png"
          alt="Antwerp City"
          className={styles.Antwerp}
          width={400}
          height={400}
          priority
        />

        <div id="favorite" className={styles.div_stations} >
          <h1 className={styles.station}>Favorite Stations</h1>
            {stations.slice(0, 3).map(station => (
          <p className={styles.stations} key={station.id}>
            {station.name}<br/>Free Bikes: {station.free_bikes}<br/>Empty Spots: {station.empty_slots}
          </p>
          ))}
        </div>
        <div id="prices" className={`${styles.div_prices} ${styles.prices_section} ${styles.center_align}`}>
          <h1 className={`${styles.station} ${styles.heading} ${styles.bigger_font}`}>Our Prices</h1>
          <div className={styles.content}>
            <div className={styles.price_container}>
              <div className={styles.price}>
                <p className={styles.price_type}>Day Pass</p>
                <p className={styles.price_value}>5 Euro</p>
              </div>
              <div className={styles.price}>
                <p className={styles.price_type}>Week Pass</p>
                <p className={styles.price_value}>12 Euro</p>
              </div>
              <div className={styles.price}>
                <p className={styles.price_type}>Year Pass</p>
                <p className={styles.price_value}>58 Euro</p>
              </div>
            </div>
            <button className={styles.button}>Choose Your Pass Type</button>
          </div>
        </div>
        <div id="stations" className={`${styles.div_prices2} ${styles.prices_section} ${styles.center_align}`}>
          <div className={styles.content}>
            <div className={styles.price_container}>
            <h1 className={styles.station}>All Stations</h1>
            </div>
            <button className={styles.button2} onClick={() => window.open('./stations', '_blank')}>
            Search Your Station
            <ActiveLink href="/stations.js">
               
              </ActiveLink>
            </button>
          </div>
        </div>
        <div id="about">
          <h1 className={styles.about_header} >About</h1>
            <p className={styles.about}>
              
              I created this app with the goal of enhancing people s experience riding a bike in Antwerp.

              Antwerp is a vibrant city with a rich cycling culture, and I wanted to provide a convenient and user-friendly platform for locals and visitors alike to find and utilize the available bike-sharing services in the city.

              With this app, you can easily discover the nearest bike stations and check the availability of bikes in real-time. Whether you need a bike for a short trip or want to explore the city for a longer duration, our app will help you find the perfect bike to suit your needs.

              We understand that pricing is an important factor when it comes to bike-sharing services.<br/><br/> That s why we have carefully curated our pricing options to provide flexibility and affordability. From day passes for spontaneous riders to week and annual cards for frequent cyclists, we have options to cater to everyone s preferences and budget.

              By offering a seamless and intuitive user experience, we aim to encourage more people to choose cycling as their preferred mode of transportation in Antwerp.<br/><br/> Cycling not only contributes to a healthier and more sustainable lifestyle but also allows you to immerse yourself in the beauty of the city and discover hidden gems that might be missed when using other forms of transportation.

              So, whether you are a local resident or a visitor exploring Antwerp, I invite you to download and use this app to enhance your biking experience. Let s embrace the joy of cycling and discover all that Antwerp has to offer on two wheels!

              <br/><br/>Happy riding!
            </p>
        </div>


      </main>
      

    </>
  )
}
