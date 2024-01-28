'use client'

import React, { createContext, useState } from 'react'
import { ContextModel, ContextOptions } from './lib/types';

export const defaultOptions = {hdri: "/background.hdr", pickedColor: "#aabbcc"} as ContextOptions;
export const Context = createContext<ContextModel | null>(null);

export function Provider({
  children,
  options
}: {
  children: React.ReactNode,
  options: ContextOptions
}) {
  const [currentOptions, setCurrentOptions] = useState(options || defaultOptions);
  const saveOptions = (options: ContextOptions) => {
    setCurrentOptions(options)
   };

  return (
    <>
      <Context.Provider value={{options: currentOptions, saveOptions}}>
        {children}
      </Context.Provider>
    </>
  )
}

export const SettingsConsumer = Context.Consumer;
