import style from "../styles/Style.module.css"
import General from './General'
import Education from "./Education"
import Practical from "./Practical"
import Preview from "./Preview"
import { useState } from "react"

function App() {
    const [generalData, setGeneralData] = useState({
        fullName: "",
        email: "",
        phoneNumber: ""
    })

    const [educationData, setEducationData] = useState([{
        schoolName: "",
        titleStudy: "",
        dateStudy: ""
    }])

    const [practicalData, setPracticalData] = useState([{
        companyName: "",
        positionTitle: "",
        mainResponsabilities: ""
    }])

    return (
        <div className={style.App}>
            <div className={style.leftContainer}>
                <General data={generalData} setData={setGeneralData} />
                <Education data={educationData} setData={setEducationData} />
                <Practical data={practicalData} setData={setPracticalData} />
            </div>
            <div className={style.rightContainer}>
                <Preview 
                    general={generalData}
                    education={educationData}
                    practical={practicalData}
                />
            </div>
        </div>
    )
}

export default App
