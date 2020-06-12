import React, { useEffect, useState } from 'react'
import { Cards, CountryPicker, Chart } from './components/index'
import styles from './App.module.css'
import { fetchData } from './api'
import LoadingPage from './components/LoadingPage/LoadingPage'
import coronaimage from './components/images/image.png'

const App = () => {

    const [data, setdata] = useState({})
    const [country, setCountry] = useState('')



    useEffect(() => {
        async function fetch() {
            const fetchedData = await fetchData()
            setdata(fetchedData);
        }
        fetch();
    }, []);

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        setdata(fetchedData)
        setCountry(country)
    }


    if (!data.confirmed) {
        return (
            <LoadingPage />
        )
    }

    return (

        <div className={styles.container}>
            <img className={styles.image} src={coronaimage} alt="coronaimage" />
            <Cards data={data} />
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />

        </div>


    )
}

export default App
