import Head from 'next/head'
import BookingOriginal from "../../src-client/components/Booking/Reservar"


export default function booking() {
  return (
    <>
     <Head>
        <title>Austral</title>
        <meta name="description" content="booking" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>   
      <main>
        <BookingOriginal/>
      </main>
    </>
  );
}



