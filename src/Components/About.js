import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <h4 style={{ marginTop: 20, marginLeft: 10 }}>Hey there you found me !</h4>
            <p style={{ marginTop: 20, marginLeft: 10 }}>Let us Connect : </p>
            <p align='center' style={{ marginTop: 20, marginLeft: 10 }}>
                <a href="mailto:darshanhande11@gmail.com"><img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white" alt='' /></a>&nbsp;&nbsp;
                <a href="https://github.com/darshanhande11"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt='' /></a>&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/darshan-hande-6a7479128/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt='' /></a>&nbsp;&nbsp;
                <a href="https://twitter.com/hande_darshan"><img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt='' /></a>&nbsp;&nbsp;
                <a href="https://www.instagram.com/darshanhande11/"><img src="https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white" alt='' /></a>&nbsp;&nbsp;
            </p>
            <Link to="/ToDo" style={{ marginTop: 20, marginLeft: 10 }}>Go Back</Link>
        </div>
    )
}

export default About
