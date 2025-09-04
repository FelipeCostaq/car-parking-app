import './HomeCard.css'

function HomeCard(){
    return(
        <div className='card'>
            <h1>Bem-vindo!</h1>
            <p>Use o menu ao lado para explorar todas as funcionalidades.</p>
            <p><a href="https://github.com/FelipeCostaq"><i id='github-icon' className="bi bi-github color"></i></a></p>
        </div>
    )
}

export default HomeCard;