import './HomeCard.css'

function HomeCard(){
    return(
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh', width: "100%" }}>
            <div className='card' style={{ maxWidth: '600px', width: '100%' }}>
                <h1>Bem-vindo!</h1>
                <p>Use o menu ao lado para explorar todas as funcionalidades.</p>
                <p><a href="https://github.com/FelipeCostaq"><i id='github-icon' className="bi bi-github color"></i></a></p>
            </div>
        </div>
    )
}

export default HomeCard;