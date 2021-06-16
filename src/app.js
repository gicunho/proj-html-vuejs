class introInfo {
    constructor(img, title, text) {
        this.img = img;
        this.title = title;
        this.text = text;
    }
};
class course {
    constructor(name, price, teacher, teacherPicture, lessons, students, img) {
        this.name = name;
        this.price = price;
        this.teacher = teacher;
        this.teacherPicture = teacherPicture;
        this.lessons = lessons;
        this.students = students;
        this.img = img
    }
};
const bFields = {
    name: 'Blanche Fields',
    pic: '/dist/img/73ee246daf47502812ccefc84bf02898 (1).jpeg'
};
const mStrickland = {
    name: 'Maggie Strickland',
    pic: '/dist/img/d0d504142acfde820eef2f11feea6253 (1).jpeg'
} 

/* Vue */
const myapp = new Vue({
    el: '#root',
    data: {
        navbarLinks: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
        introInfos: [
            new introInfo('/dist/img/home-5-image-box-01.png', 'Idea Discussion', 'Get teamed up with the specialists who work and teach coding for years at famous universities.'),
            new introInfo('/dist/img/home-5-image-box-02.png', 'Web Development', 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'),
            new introInfo('/dist/img/home-5-image-box-03.png', 'System Administration', 'Learners are encouraged to study the mechanism and structure of system administration.'),
            new introInfo('/dist/img/home-5-image-box-04.png', 'Graphic Design', 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.'),
        ],
        companyNumbers: [
            {
                desc: 'finished sessions',
                numb: '1.926'
            },
            {
                desc: 'enrolled learners',
                numb: '3.092+'
            },
            {
                desc: 'online instructors',
                numb: '200'
            },
            {
                desc: 'satisfaction rate',
                numb: '100%'
            }
        ],
        courses: [
            new course ('Learning to Write as a Professional Author', '$40.00', bFields.name, bFields.pic, 20, 50, '/dist/img/course-02-480x298.jpg'),
            new course ('Customer-centric Info-Tech Strategies', 'Free', mStrickland.name, mStrickland.pic, 24, 769, '/dist/img/stock-full-hd-03-480x298.jpg'),
            new course ('Open Programming Courses for Everyone: Python', '$19.00', mStrickland.name, mStrickland.pic, 17, 62, '/dist/img/stock-full-hd-04-480x298.jpg'),
            new course ('Academic Listening and Note-taking', '$26.00', bFields.name, bFields.pic, 14, 67, '/dist/img/stock-full-hd-06-480x298.jpg'),
            new course ('Master jQuery in a Short Period of Time', '$39.00', bFields.name, bFields.pic, 6, 51, '/dist/img/course-featured-image-01-480x298.jpg'),
            new course ('Introduction to Javascript for Beginners', '$59.00', bFields.name, bFields.pic, 14, 76, '/dist/img/stock-full-hd-05-480x298.jpg'),
        ],
        coursesFeatures: [
            'Select & customize courses to your preferences',
            'Change the tutor and make arrangements',
            'Participate in events to join others',
            'Get the desired certificate delivered at house'
        ]
    },
    methods: {

    }
})