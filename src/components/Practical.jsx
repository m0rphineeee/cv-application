import { useState } from "react"
import Input from "./Input"
import style from "../styles/Style.module.css"
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

function Practical({ data, setData }) { 
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => setShowMore(!showMore)

    const handleChange = (index, event) => {
        const { name, value } = event.target
        const updatedData = data.map((practical, i) =>
            i === index ? { ...practical, [name]: value } : practical
        )
        setData(updatedData)
    }

    const addData = () => {
        setData([...data, { companyName: "", positionTitle: "", mainResponsabilities: "",
            dateWorkedFrom: "", dateWorkedUntil: ""
        }])
    }

    const removeData = (index) => {
        setData(data.filter((_, i) => i !== index))
    }

    return (
        <div className={style.container}>
            <button type="button" onClick={handleShowMore} className={style.formHeader}>
                <h2>Practical Experience</h2>
                {showMore ? <IoChevronUpSharp className={style.icon}/> : <IoChevronDownSharp className={style.icon}/>}
            </button>

            {showMore && (
                <>
                    {data.map((practical, index) => (
                        <form key={index} className={style.formInput}>
                            <div className={style.formRow}>
                                <Input 
                                    label="Company Name"
                                    placeholder="Name of the company"
                                    type="text"
                                    name="companyName"
                                    value={practical.companyName}
                                    onChange={(e) => handleChange(index, e)}
                                />
                                <Input 
                                    label="Position Title"
                                    placeholder="Position at work"
                                    type="text"
                                    name="positionTitle"
                                    value={practical.positionTitle}
                                    onChange={(e) => handleChange(index, e)}
                                />
                                <Input 
                                    label="Responsabilities"
                                    placeholder="Tasks carried out"
                                    type="text"
                                    name="mainResponsabilities"
                                    value={practical.mainResponsabilities}
                                    onChange={(e) => handleChange(index, e)}
                                />
                                <div className={style.dateWorkedInput}>
                                    <p>Date worked</p>
                                    <Input 
                                        label="From"
                                        type="date"
                                        name="dateWorkedFrom"
                                        value={practical.dateWorkedFrom}
                                        onChange={(e) => handleChange(index, e)}
                                    />
                                    <Input 
                                        label="Until"
                                        type="date"
                                        name="dateWorkedUntil"
                                        value={practical.dateWorkedUntil}
                                        onChange={(e) => handleChange(index, e)}
                                    />
                                </div>
                                <div className={style.btns}>
                                    <button type="button" onClick={addData}>Add Experience</button>
                                    {index >= 1 && 
                                    <button type="button" onClick={() => removeData(index)}>Remove Experience</button>
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

export default Practical