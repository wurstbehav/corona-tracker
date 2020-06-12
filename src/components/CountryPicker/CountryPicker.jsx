import React, { useEffect, useState } from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
    const [countriesList, setCountriesList] = useState([])
    useEffect(() => {
        async function fetch() {
            const data = await fetchCountries()
            setCountriesList(data)


        }
        fetch();
    }, [countriesList])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {
                    countriesList.map((country, i) =>
                        <option key={i} value={country}>{country}</option>
                    )
                }

            </NativeSelect>

        </FormControl>
    )
}

export default CountryPicker
