import Card from "./Card";
import {useState} from "react";

// const react = [
//     {
//         courseId: 1,
//         courseName: "The Ultimate React Course 2024: React, Redux & More",
//         instructor: "Jonas Schmedtmann",
//         courseLengthInHours: 67,
//         sourceLink: "https://www.udemy.com/course/the-ultimate-react-course"
//     },
//     {
//         courseId: 2,
//         courseName: "Working with React and Go (Golang)",
//         instructor: "Dr. Trevor Sawler",
//         courseLengthInHours: 13,
//         sourceLink: "https://www.udemy.com/course/working-with-react-and-go-golang"
//     }
// ]
//
// const genWebDev = [
//     {
//         courseId: 3,
//         courseName: "The Complete 2024 Web Development Bootcamp",
//         instructor: "Dr. Angela Yu",
//         courseLengthInHours: 62,
//         sourceLink: "https://www.udemy.com/course/the-complete-web-development-bootcamp"
//     },
//     {
//         courseId: 4,
//         courseName: "Building Modern Web Applications with Go (Golang)",
//         instructor: "Dr. Trevor Sawler",
//         courseLengthInHours: 30,
//         sourceLink: "https://www.udemy.com/course/building-modern-web-applications-with-go"
//     },
//     {
//         courseId: 5,
//         courseName: "Web Design for Web Developers: Build Beautiful Websites!",
//         instructor: "Jonas Schmedtmann",
//         courseLengthInHours: 3,
//         sourceLink: "https://www.udemy.com/course/web-design-secrets"
//     }
// ]
//
// const javaScript = [
//     {
//         courseId: 6,
//         courseName: "The Complete Javascript Course for Developers",
//         instructor: "Charles E. Brown",
//         courseLengthInHours: 11,
//         sourceLink: "https://www.udemy.com/course/the-complete-javascript-course-for-developers"
//     },
//     {
//         courseId: 7,
//         courseName: "The Complete JavaScript Course 2024: From Zero to Expert!",
//         instructor: "Jonas Schmedtmann",
//         courseLengthInHours: 69,
//         sourceLink: "https://www.udemy.com/course/the-complete-javascript-course"
//     }
// ]
//
// const typeScript = [
//     {
//         courseId: 8,
//         courseName: "Typescript: The Complete Developer's Guide",
//         instructor: "Stephen Grider",
//         courseLengthInHours: 28,
//         sourceLink: "https://www.udemy.com/course/typescript-the-complete-developers-guide/"
//     }
// ]
//
// const postgreSQL = [
//     {
//         courseId: 9,
//         courseName: "SQL and PostgreSQL for Beginners: Become an SQL Expert",
//         instructor: "Jon Avis",
//         courseLengthInHours: 11,
//         sourceLink: "https://www.udemy.com/course/sql-and-postgresql-for-beginners/"
//     }
// ]
//
// const golang = [
//     {
//         courseId: 10,
//         courseName: "Building a module in Go (Golang)",
//         instructor: "Dr. Trevor Sawler",
//         courseLengthInHours: 4,
//         sourceLink: "https://www.udemy.com/course/building-a-module-in-go-golang/"
//     },
//     {
//         courseId: 11,
//         courseName: "Introduction to Testing in Go (Golang)",
//         instructor: "Dr. Trevor Sawler",
//         courseLengthInHours: 13,
//         sourceLink: "https://www.udemy.com/course/introduction-to-testing-in-go-golang/"
//     },
//     {
//         courseId: 12,
//         courseName: "Working with Vue 3 and Go (Golang)",
//         instructor: "Dr. Trevor Sawler",
//         courseLengthInHours: 15,
//         sourceLink: "https://www.udemy.com/course/working-with-vue-3-and-go/"
//     },
//     {
//         courseId: 13,
//         courseName: "Learn Go for Beginners Crash Course (Golang)",
//         instructor: "Dr. Trevor Sawler",
//         courseLengthInHours: 12,
//         sourceLink: "https://www.udemy.com/course/go-programming-language-crash-course"
//     },
//     {
//         courseId: 14,
//         courseName: "Up and Running with Concurrency in Go (Golang)",
//         instructor: "Stan Vangilder",
//         courseLengthInHours: 3,
//         sourceLink: "https://www.udemy.com/course/up-n-running-with-concurrency-in-golang/"
//     }
// ]
//
// const java = [
//     {
//         courseId: 15,
//         courseName: "Java 17 Masterclass: Start Coding in 2024",
//         instructor: "Tim Buchalka",
//         courseLengthInHours: 137,
//         sourceLink: "https://www.udemy.com/course/java-the-complete-java-developer-course/"
//     }
// ]

const topics = [
    {
        topicName: "React",
        topicId: 100,
        coursesTaken: [
            {
                courseId: 1,
                courseName: "The Ultimate React Course 2024: React, Redux & More",
                instructor: "Jonas Schmedtmann",
                courseLengthInHours: 67,
                sourceLink: "https://www.udemy.com/course/the-ultimate-react-course"
            },
            {
                courseId: 2,
                courseName: "Working with React and Go (Golang)",
                instructor: "Dr. Trevor Sawler",
                courseLengthInHours: 13,
                sourceLink: "https://www.udemy.com/course/working-with-react-and-go-golang"
            }
        ]
    },
    {
        topicName: "Web Development",
        topicId: 101,
        coursesTaken: [
            {
                courseId: 3,
                courseName: "The Complete 2024 Web Development Bootcamp",
                instructor: "Dr. Angela Yu",
                courseLengthInHours: 62,
                sourceLink: "https://www.udemy.com/course/the-complete-web-development-bootcamp"
            },
            {
                courseId: 4,
                courseName: "Building Modern Web Applications with Go (Golang)",
                instructor: "Dr. Trevor Sawler",
                courseLengthInHours: 30,
                sourceLink: "https://www.udemy.com/course/building-modern-web-applications-with-go"
            },
            {
                courseId: 5,
                courseName: "Web Design for Web Developers: Build Beautiful Websites!",
                instructor: "Jonas Schmedtmann",
                courseLengthInHours: 3,
                sourceLink: "https://www.udemy.com/course/web-design-secrets"
            }
        ]
    },
    {
        topicName: "JavaScript",
        topicId: 102,
        coursesTaken: [
            {
                courseId: 6,
                courseName: "The Complete Javascript Course for Developers",
                instructor: "Charles E. Brown",
                courseLengthInHours: 11,
                sourceLink: "https://www.udemy.com/course/the-complete-javascript-course-for-developers"
            },
            {
                courseId: 7,
                courseName: "The Complete JavaScript Course 2024: From Zero to Expert!",
                instructor: "Jonas Schmedtmann",
                courseLengthInHours: 69,
                sourceLink: "https://www.udemy.com/course/the-complete-javascript-course"
            }
        ]
    },
    {
        topicName: "TypeScript",
        topicId: 103,
        coursesTaken: [
            {
                courseId: 8,
                courseName: "Typescript: The Complete Developer's Guide",
                instructor: "Stephen Grider",
                courseLengthInHours: 28,
                sourceLink: "https://www.udemy.com/course/typescript-the-complete-developers-guide/"
            }
        ]
    },
    {
        topicName: "PostgreSQL",
        topicId: 104,
        coursesTaken: [
            {
                courseId: 9,
                courseName: "SQL and PostgreSQL for Beginners: Become an SQL Expert",
                instructor: "Jon Avis",
                courseLengthInHours: 11,
                sourceLink: "https://www.udemy.com/course/sql-and-postgresql-for-beginners/"
            }
        ]
    },
    {
        topicName: "Go (Programming Language)",
        topicId: 105,
        coursesTaken: [
            {
                courseId: 10,
                courseName: "Building a module in Go (Golang)",
                instructor: "Dr. Trevor Sawler",
                courseLengthInHours: 4,
                sourceLink: "https://www.udemy.com/course/building-a-module-in-go-golang/"
            },
            {
                courseId: 11,
                courseName: "Introduction to Testing in Go (Golang)",
                instructor: "Dr. Trevor Sawler",
                courseLengthInHours: 13,
                sourceLink: "https://www.udemy.com/course/introduction-to-testing-in-go-golang/"
            },
            {
                courseId: 12,
                courseName: "Working with Vue 3 and Go (Golang)",
                instructor: "Dr. Trevor Sawler",
                courseLengthInHours: 15,
                sourceLink: "https://www.udemy.com/course/working-with-vue-3-and-go/"
            },
            {
                courseId: 13,
                courseName: "Learn Go for Beginners Crash Course (Golang)",
                instructor: "Dr. Trevor Sawler",
                courseLengthInHours: 12,
                sourceLink: "https://www.udemy.com/course/go-programming-language-crash-course"
            },
            {
                courseId: 14,
                courseName: "Up and Running with Concurrency in Go (Golang)",
                instructor: "Stan Vangilder",
                courseLengthInHours: 3,
                sourceLink: "https://www.udemy.com/course/up-n-running-with-concurrency-in-golang/"
            }
        ]
    },
    {
        topicName: "Java",
        topicId: 106,
        coursesTaken: [
            {
                courseId: 15,
                courseName: "Java 17 Masterclass: Start Coding in 2024",
                instructor: "Tim Buchalka",
                courseLengthInHours: 137,
                sourceLink: "https://www.udemy.com/course/java-the-complete-java-developer-course/"
            }
        ]
    }
]

export default function Grid() {

    const [currentlyOpen, setCurrentlyOpen
    ] = useState(null);

    return <div className="grid-container">
        {
            topics.map((topic) => (<Card key={topic.topicId} topic={topic} currentlyOpen={currentlyOpen} setCurrentlyOpen={setCurrentlyOpen} topicId={topic.topicId}/>))
        }
    </div>
}