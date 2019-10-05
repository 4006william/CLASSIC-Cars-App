import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';


const Car = (props) => {

    const id = props.match.params.id
    const car = cars.find(c => c.id == id)

    return (
        <Container maxWidth="m" className="car-container">
            <Paper className="car-paper">
                <h1>{car.Name}</h1>
                <img src={car.Image} />
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>    )
}

export default Car