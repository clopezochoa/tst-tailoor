import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div style={{fontFamily:'sans-serif', fontSize:'24pt', marginTop:'2rem', display:'grid', width:'100%', justifyItems:'center'}}>
      <h1>Scegli il prodotto</h1>
      <Link href='/product1'>
        <Image
          alt='product 1 (borsa con tessuto "piazzata") thumbnail'
          src='/Piazzate/thumb.png'
          width={250}
          height={250}
          style={{marginTop:"2rem", cursor:'pointer'}}
        />
      </Link>
      <Link href='/product2'>
        <Image
          alt='product 2 (borsa con tessuto "ripetute") thumbnail'
          src='/Ripetute/thumb.png'
          width={250}
          height={250}
          style={{marginTop:"1rem", cursor:'pointer'}}
        />
      </Link>
    </div>
    </>
  )
}
