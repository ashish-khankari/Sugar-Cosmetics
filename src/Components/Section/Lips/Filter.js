import React from 'react'
import { Select } from '@chakra-ui/react'



export default function Filter() {

    function filterbyName(){
        console.log("Hello")
    }
    return (
        <div>
            <h1>Filter</h1>

            <Select placeholder='Select option'>
                <option value='option1' onClick={filterbyName}>Name</option>
                
            </Select>

        </div>
    )
}
