const Carousel = ({ title, img }) => {
    return (
        <div style={{backgroundImage: img }}>
            <h1>{title}</h1>
        </>
    )
}

export default Carousel