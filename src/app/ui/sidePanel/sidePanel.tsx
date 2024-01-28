import React, { useContext } from 'react'
import { ColorPicker } from '../colorPicker/colorPicker'
import Link from 'next/link'
import { Context } from 'app/provider';
import { ContextOptions } from 'app/lib/types';

const switchPage = (currentPage: number): string => {
  switch (currentPage) {
    case 0:
      return '/product2';
    case 1:
      return '/product1';
    default:
      return '/'
  }
}

function SidePanel({page}: {page: number}) {
  
  const otherProduct = switchPage(page);
  const context = useContext(Context);
  const setHdr = (newHdr: string) => {
    const newOptions = {hdri: newHdr, pickedColor: context?.options.pickedColor} as ContextOptions;
    context?.saveOptions(newOptions);
  }

  return (<>
  <div style={{height:"48px", padding:'1.25rem', position:'absolute', zIndex:'1'}}>
    <ColorPicker />
    <select
      style={{marginTop:"1rem", fontFamily:'sans-serif', fontSize:'12pt', display:'grid', width:'77%'}}
      id="hdr-switch"
      defaultValue={context?.options.hdri}
      onChange={(e) => {setHdr(e.target.value)}}
      aria-label="Default select example"
      >
      <option value="/background.hdr">HDR Lighting 1</option>
      <option value="/alt_background.hdr">HDR Lighting 2</option>
    </select>
    <div style={{marginTop:"1rem", fontFamily:'sans-serif', fontSize:'12pt', display:'grid', width:'77%'}}>
      <Link style={{marginTop:"0.5rem", textDecoration:'none'}} href='/'>
        <button>Indietro</button>
      </Link>
      <Link style={{marginTop:"0.5rem", textDecoration:'none'}} href={otherProduct} >
        <button>Cambia prodotto</button>
      </Link>
    </div>
  </div>
  </>
  )
}

export default SidePanel