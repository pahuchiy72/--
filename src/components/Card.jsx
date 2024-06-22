function Card(props) {
    return (
        <div>
            <h3 className='border-2 text-fuchsia-700 font-bold border-emerald-400 bg-emerald-200 
            p-2 inline-block'>{props.title}</h3>
            <div>{props.children}</div>
        </div>
    )
}

export default Card;