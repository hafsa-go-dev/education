export default function CardTitle({ topic, toggleCardOpen}) {

    return <div className="card-title">
        <h2>
            > {topic.topicName}
        </h2>
        <button className="btn" onClick={toggleCardOpen}>
            🔻
        </button>
    </div>
}