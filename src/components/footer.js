import '../index.css';

function Footer() {

    return (
        <footer className="bg-light text-center footer">
            <div className="container p-4">
                <section className="mb-4">
                <a href="https://github.com/pwgeipel">
                    <i className="bi bi-github footerIcon"></i>             
                </a>
                <a href="https://www.linkedin.com/in/peter-geipel-75a84795/">
                    <i className="bi bi-linkedin footerIcon"></i>             
                </a>
                <a href="https://stackoverflow.com/users/19553134/peter-geipel">
                    <i className="bi bi-stack-overflow footerIcon"></i>            
                </a>

                </section>

            </div>

        </footer>
    )
}

export default Footer