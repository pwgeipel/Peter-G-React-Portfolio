import Container from "../components/container";

function ResumePage() {
    return (
        <Container className="mt-5">
            <section>
                <h1>Resume</h1>
                    <p>Download resume 
                        <a href="../assets/sampleResume.pdf" download={true}>
                            here
                        </a>
                    </p>
                    <h3>
                        Front-End Skills
                    </h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>React</li>
                        </ul>
                    <h3>Back-End Skills</h3>
                        <ul>
                        <li>Node</li>
                        <li>API</li>
                        <li>Express</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                        </ul>
            </section>
        </Container>
    );
}

export default ResumePage;