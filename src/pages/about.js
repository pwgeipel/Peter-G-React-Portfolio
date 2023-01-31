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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione naturae intellegi potest. Quod si ita se habeat, non possit beatam praestare vitam sapientia. Haec para/doca illi, nos admirabilia dicamus. Compensabatur, inquit, cum summis doloribus laetitia. Duo Reges: constructio interrete. Peccata paria. Bonum incolumis acies: misera caecitas. Quia dolori non voluptas contraria est, sed doloris privatio. Erat enim res aperta. Quia nec honesto quic quam honestius nec turpi turpius. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Qui non moveatur et offensione turpitudinis et comprobatione honestatis? </p>
            </Container>
    )
}

export default AboutPage