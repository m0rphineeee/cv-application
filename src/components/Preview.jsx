import style from "../styles/Style.module.css"

function Preview({ general, education, practical }) {
    return (
        <div className={style.preview}>
          <div className={style.headed}>
            <h1>{general.fullName}</h1>
            <div className={style.contact}>
              <p>{general.email}</p>
              <p>{general.phoneNumber}</p>
            </div>
          </div>
          <div className={style.education}>
            <h2>Educational Experience</h2>
            {education.map((data, index) => (
              <div key={index} className={style.educationData}>
                <p>School name: {data.schoolName}</p>
                <p>Title of study: {data.titleStudy}</p>
                <p>Graduation date: {data.dateStudy}</p>
              </div>
            ))}
          </div>
          <div className={style.practical}>
            <h2>Practical Experience</h2>
            {practical.map((data, index) => (
              <div key={index} className={style.practicalData}>
                <p>Company name: {data.companyName}</p>
                <p>Position title: {data.positionTitle}</p>
                <p>Responsabilities: {data.mainResponsabilities}</p>
              </div>
            ))}
          </div>
        </div>
    )
}

export default Preview