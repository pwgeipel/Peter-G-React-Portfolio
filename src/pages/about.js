import { useState } from 'react'
import Container from "../components/container"
import selfieImage from '../assets/selfie.jpg'

const AboutPage = props => {
    const [term, setTerm] = useState('React')

    return (
        <Container className="mt-5">
            <h1>About Me</h1>
            <div>
                <img src={selfieImage} width={250} height={250} alt="Selfie" />
            </div>
            </Container>
    )
}

export default AboutPage