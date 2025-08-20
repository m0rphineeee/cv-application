import { useState } from "react"
import Input from "./Input"
import style from "../styles/Style.module.css"
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

function General({ data, setData }) {
    const [showMore, setShowMore] = useState(false)
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div className={style.container}>
            <button
                onClick={handleShowMore}
                className={style.formHeader}
            >
                <h2>General Information</h2>
                {showMore ? <IoChevronUpSharp className={style.icon}/> : 
                <IoChevronDownSharp className={style.icon}/>}
            </button>
            {showMore && (
                <form className={style.formInput}>
                    <div className={style.formRow}>
                        <Input 
                            label="Full Name"
                            placeholder="Your name is"
                            type="text"
                            name="fullName"
                            value={data.fullName}
                            onChange={handleChange}
                        />
                        <Input 
                            label="Email"
                            placeholder="you@example.com"
                            type="email"
                            name="email"
                            value={data.email} 
                            onChange={handleChange}
                        />
                        <Input 
                            label="Phone Number"
                            placeholder="+1 234 567 890"
                            type="text"
                            name="phoneNumber"
                            value={data.phoneNumber} 
                            onChange={handleChange}
                        />
                    </div>
                </form>
            )}
        </div>
    )
}

export default General