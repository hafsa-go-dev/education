import CardTitle from './CardTitle';
import CardContent from './CardContent';

export default function Card({ topicId, topic, setCurrentlyOpen, currentlyOpen }) {
    const isOpen = topicId === currentlyOpen;

    function toggleCardOpen() {
        setCurrentlyOpen(isOpen ? null : topicId);
    }

    return <div className="card">
        <CardTitle key={topic.coursesTaken[0].id} toggleCardOpen={toggleCardOpen} topic={topic} setCurrentlyOpen={setCurrentlyOpen} currentlyOpen={currentlyOpen} />
        {
            isOpen &&
            <CardContent key={topic.coursesTaken[0].courseName} topic={topic} setCurrentlyOpen={setCurrentlyOpen} currentlyOpen={currentlyOpen} />
        }
    </div>
}