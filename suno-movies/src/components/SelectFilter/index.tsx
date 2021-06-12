import React from 'react'
import { SelectWrapper, SelectWrap, SelectDefault, SelectList, SelectItem } from './SelectFilterElements'

interface SelectFilterProps{
  name: string;
  type: string
}


const SelectFilter= ({name, type} : SelectFilterProps ) => {
  return (
    <SelectWrapper>
      <SelectDefault>
        <SelectItem>
          <p>Genêro</p>
        </SelectItem>
      </SelectDefault>
      <SelectList>
        <SelectItem>
          <p>Ação</p>
        </SelectItem>
        <SelectItem>
          <p>Fantasia</p>
        </SelectItem>
        <SelectItem>
          <p>Drama</p>
        </SelectItem>
        <SelectItem>
          <p>Ficição</p>
        </SelectItem>
      </SelectList>
    </SelectWrapper>
  )
}