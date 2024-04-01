export default function CardContent({topic, isOpen}) {
    return <div className={`card-content ${isOpen ? 'open-content' : ''}`}>
        <ul className="course-list">
            {
                topic.coursesTaken.map((item) =>
                    (<li>
                        <a href={item.sourceLink} target="_blank">
                            {item.courseName}
                        </a>
                        <ul>
                            <li>
                                Instructor: {item.instructor}
                            </li>
                            <li>
                                Course length: {item.courseLengthInHours} hours
                            </li>
                        </ul>
                    </li>))
            }
        </ul>
    </div>

}