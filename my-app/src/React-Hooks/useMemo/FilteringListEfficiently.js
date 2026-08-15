import React, { useMemo } from 'react'
import { useState} from 'react'

const FilteringListEfficiently = () => {

    const [search, setSearch] = useState("")

    const items = ["apple","banana","orange","mango"]
    
    const filteritems = useMemo(() =>{
        return items.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        )
    },[search,items])

    const deleteItems = () => {
      
    }
  return (
    <div>
        <input 
          value={search}
          placeholder='search fruits'
          onChange={(e) => setSearch(e.target.value)}
          />
       <ul>
        {filteritems.map((item,index) =>{
           return <li key={index}>{item}</li>
        })}
       </ul>
    </div>
  )
}

export default FilteringListEfficiently
