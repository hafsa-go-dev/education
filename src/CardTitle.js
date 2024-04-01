export default function CardTitle({ topic, toggleCardOpen, isOpen}) {

    return <div className={`card-title ${ isOpen ? 'open-card' : '' }`}>
        <h2>
            > {topic.topicName}
        </h2>
        <button className="btn" onClick={toggleCardOpen}>
            🔻
        </button>
    </div>
}