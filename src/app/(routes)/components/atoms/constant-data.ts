import images from "@/app/assets/image";

export const DataCatgory = [
    {id: 1, title: 'Bussines Development', icon : images.Bisnis},
    {id: 2, title: 'Design', icon : images.Design},
    {id: 3, title: 'Web Development', icon : images.WebDev},
    {id: 4, title: 'Customer Service', icon : images.CustomerService},
    {id: 5, title: 'Mobile Development', icon : images.Mobile},
    {id: 6, title: 'Design', icon : images.Design},
    {id: 7, title: 'Web Development', icon : images.WebDev},
    {id: 8, title: 'Mobile Development', icon : images.Mobile},
]

export const CategoryFeatureData = [
    {
        id: 1, label: 'Development'
    },
    {
        id: 2, label: 'Design'
    },
    {
        id: 3, label: 'Project Manager'
    },
    {
        id: 4, label: 'Marketing'
    },
    {
        id: 5, label: 'Accounting/finance'
    },
]
export const CardHireData = [
    {
        id: 1,
        image: images.GoogleHire,
        company: 'Google',
        country: 'UK',
        city: 'London',
        jobPosition: 'Software Developer',
        jobType: ["Full time", "Internship"],
        description: "Join Google to develop innovative software solutions that impact billions of users worldwide. Work in a collaborative environment with cutting-edge technology. Build scalable systems and applications used by millions. Collaborate with cross-functional teams to create impactful features. Gain hands-on experience in software engineering best practices. Participate in the entire software development lifecycle. This is an excellent opportunity to grow your skills while working with talented engineers.",
        responsibilities: [
            "Develop and maintain scalable software solutions.",
            "Collaborate with cross-functional teams to define and implement new features.",
            "Write high-quality, efficient, and maintainable code.",
            "Ensure the performance, quality, and responsiveness of applications.",
            "Participate in code reviews and maintain a clean codebase.",
            "Troubleshoot and resolve software defects.",
            "Contribute to the full software development lifecycle, from design to deployment."
        ],
        requiredSkills: ["RestAPI", "JavaScript", "Node.js", "Git", "SQL", "Agile Development", "Problem-solving"],
        schedule: "Monday to Friday, 9 AM - 5 PM (Flexible hours available)",
        requirements: [
            "Bachelor's degree in Computer Science or related field.",
            "At least 1 year of experience in software development.",
            "Strong understanding of software development life cycle.",
            "Must be a team player with excellent communication skills.",
            "Ability to work in a fast-paced, collaborative environment."
        ],
        minSalary: 35,
        maxSalary: 45
    },
    {
        id: 2,
        image: images.DribbleHire,
        company: 'Dribbble',
        country: 'USA',
        city: 'San Francisco',
        jobPosition: 'Senior Engineer',
        jobType: "Full time",
        description: "Take the lead in designing and implementing high-quality engineering solutions. Drive the development of innovative products used by creative professionals worldwide. Work with a team of engineers to build scalable and efficient systems. Engage in code reviews, architecture discussions, and mentoring junior engineers. Ensure the reliability, performance, and security of the platform. Collaborate closely with product and design teams to execute on business goals. Join a company where your contributions make a direct impact on millions of creatives.",
        responsibilities: [
            "Lead the design and implementation of new features and products.",
            "Engage in architecture discussions and make technical decisions.",
            "Ensure the scalability and security of applications.",
            "Review code and mentor junior engineers to improve their skills.",
            "Work closely with cross-functional teams, including design and product management.",
            "Contribute to continuous improvement of engineering practices and processes.",
            "Provide feedback and guidance to improve the overall quality of the platform."
        ],
        requiredSkills: ["React", "TypeScript", "RESTful APIs", "GraphQL", "Cloud services (AWS, Azure)", "Agile Development", "Mentorship"],
        schedule: "Monday to Friday, 10 AM - 6 PM",
        requirements: [
            "Bachelor's degree in Computer Science, Engineering, or a related field.",
            "5+ years of experience in software engineering.",
            "Strong proficiency in React and TypeScript.",
            "Experience working with RESTful APIs and cloud services.",
            "Excellent communication and mentorship skills."
        ],
        minSalary: 60,
        maxSalary: 80
    },
    {
        id: 3,
        image: images.TwiterHire,
        company: 'Twitter',
        country: 'UK',
        city: 'London',
        jobPosition: 'UI/UX Designer',
        jobType: "Full time",
        description: "Design intuitive user experiences and ensure seamless interactions on Twitter’s platform. Work closely with product managers and engineers to create designs that are both functional and beautiful. Conduct user research to inform your design decisions. Focus on improving usability and accessibility for all users. Collaborate with other designers to maintain consistency across the platform. Help shape the future of how people engage with content on Twitter. You'll be instrumental in delivering innovative design solutions to a global audience.",
        responsibilities: [
            "Design intuitive user interfaces and user experiences for new features.",
            "Collaborate with product managers and engineers to implement designs.",
            "Conduct user research to validate design decisions and enhance user experience.",
            "Ensure designs are accessible, ensuring usability for all users.",
            "Maintain a consistent visual design language across Twitter’s platform.",
            "Iterate on designs based on feedback and usability testing.",
            "Stay current with design trends and technologies to continually improve user experience."
        ],
        requiredSkills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping", "UI/UX Design", "Wireframing"],
        schedule: "Monday to Friday, 9 AM - 5 PM (Flexible hours available)",
        requirements: [
            "Bachelor’s degree in Graphic Design, Interaction Design, or related field.",
            "3+ years of experience in UI/UX design.",
            "Experience with design tools such as Figma, Sketch, and Adobe XD.",
            "Strong portfolio showcasing design work.",
            "Ability to conduct user research and usability testing."
        ],
        minSalary: 50,
        maxSalary: 65
    },
    // More jobs can follow the same structure...
];

