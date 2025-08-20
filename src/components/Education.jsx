import { useState } from "react"
import Input from "./Input"
import style from "../styles/Style.module.css"
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";


function Education({ data, setData }) {
    const handleChange = (index, event) => {
        const {name, value} = event.target
        const updatedData = data.map((education, i) =>
            i === index ? {...education, [name]: value} : education 
        )
        setData(updatedData)
    }

    const [showMore, setShowMore] = useState(false)
    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    const addData = () => {
        setData([
            ...data,
            {schoolName: "", titleStudy: "", dateStudy: ""}
        ])
    }

    const removeData = (index) => {
        const deleted = data.filter((_, i) => {
            return i !== index
        })
        setData(deleted)
    }

    return (
        <div className={style.container}>
            <button
                onClick={handleShowMore}
                className={style.formHeader}
            >
                <h2>Educational Experience</h2> 
                {showMore ? <IoChevronUpSharp className={style.icon}/> : 
                <IoChevronDownSharp className={style.icon}/>}
            </button>
            {showMore && (
                <>
                    {data.map((education, index) => (
                        <form key={index} className={style.formInput}>
                            <div className={style.formRow}>
                                <Input 
                                    label="School Name"
                                    placeholder="Where did you study"
                                    type="text"
                                    name="schoolName"
                                    value={education.schoolName}
                                    onChange={(event) => handleChange(index, event)}
                                />
                                <Input 
                                    label="Title of study"
                                    placeholder="Course you studied"
                                    type="text"
                                    name="titleStudy"
                                    value={education.titleStudy}
                                    onChange={(event) => handleChange(index, event)}
                                />
                                <Input 
                                    label="Graduation date"
                                    type="date"
                                    name="dateStudy"
                                    value={education.dateStudy}
                                    onChange={(event) => handleChange(index, event)}
                                />
                                <div className={style.btns}>
                                    <button type="button" onClick={addData}>Add Education</button>
                                    {index >= 1 && 
                                        <button type="button" onClick={() => removeData(index)}>Remove Education</button>
                                    }                                    
                                </div>
                            </div>
                        </form>
                    ))}
                </>
            )}
        </div>
    )
}

export default Education