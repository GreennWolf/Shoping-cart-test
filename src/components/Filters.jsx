import { useId, useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters(){

    const {filters,setFilters} = useFilters()

    const idFilterCategory = useId()
    const idFilterPrice = useId()


    function handleChange(e){
        setFilters(prevState => ({
            ...prevState,
            minPrice:e.target.value,
        }))
    }

    function handleChangeCategory(e){
        setFilters(prevState => ({
            ...prevState,
            category:e.target.value,
        }))
    }

    return <section className="filters">
        <div>
            <label htmlFor={idFilterPrice}>Min Price</label>
            <input type="range" id={idFilterPrice} min={0} max={1000} onChange={handleChange}/>
            <span>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={idFilterCategory}>Category</label>
            <select name="category" id={idFilterCategory} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="laptops">Portatiles</option>
                <option value="smartphones">Moviles</option>
            </select>
        </div>
    </section>
}