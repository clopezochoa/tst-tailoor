import { ContextOptions } from 'app/lib/types';
import { Context } from 'app/provider';
import React, { useContext } from 'react'
import { HexColorPicker } from 'react-colorful';

export function ColorPicker() {
  
  const context = useContext(Context);
  const setColor = (newColor: string) => {
    const newOptions = {hdri: context?.options.hdri, pickedColor: newColor} as ContextOptions;
    context?.saveOptions(newOptions);
  }
  
  return <>
    <div>
      <h1 style={{marginBottom:"1rem", fontFamily:'sans-serif', fontSize:'12pt'}}>Seleziona il colore delle impunture</h1>
      <HexColorPicker color={context?.options.pickedColor ?? "#aabbcc"} onChange={(color) => {
        setColor(color);
      }}/>
      <div style={{marginTop:"1rem", fontFamily:'sans-serif', fontSize:'12pt', display:'grid', width:'77%'}}>
        <input
          value={context?.options.pickedColor ?? ""}
          style={{marginBottom:'0.5rem'}}
          type="text"
          name="colorHex"
          id="colorHex-input"
          placeholder="#aabbcc"
          aria-describedby="helpId"
          onChange={(e) => {
            setColor(e.target.value)
          }}
        />
        <select
          id="presetColor-input"
          defaultValue={""}
          onChange={(e) => {setColor(e.target.value)}}
          aria-label="Default select example"
          >
          <option value="#aabbcc">Colore 0</option>
          <option value="#970c08">Colore 1</option>
          <option value="#d4ab16">Colore 2</option>
          <option value="#000000">Colore 3</option>
          <option value="#cccccc">Colore 4</option>
        </select>
      </div>
    </div>

  </>
}