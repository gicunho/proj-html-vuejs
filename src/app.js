class introInfo {
    constructor(img, title, text) {
        this.img = img;
        this.title = title;
        this.text = text;
    }
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
        ]
    },
    methods: {

    }
})