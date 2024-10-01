import style from "./Heading.module.css"

const Heading = () => {
    return(
        <div className={`${style["head"]}`}>
            <h1>Welcome to Bharat Clock</h1>
        </div>
    )
}

export default Heading