/* JavaScript Essential Training | Object Constructors */

let courseSomething = new Object();
// Creates a simple object.
// Below we create an object with the values we want.
let courseObj = {
    title: 'JavaScript Essential Training',
    instructor: 'Morten Rand-Hendriksen',
    level: 1,
    published: true,
    views: 1,
    updateViews: function() {
        return ++courseObj.views;
    }
}
console.log('==SIMPLE OBJECTS==:');
console.log(courseSomething);
console.log(courseObj);
courseObj.updateViews();
console.log(courseObj);

console.log('\n==USING A CONSTRUCTOR==\n');
/* Now, we will use a function to create an object constructor.
It is like a blueprint for this kind of object */
function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    };
}
/* Now using the constructor */
const course01 = new Course('JavaScript Essential Training', 'Morten Rand-Hendriksen', 1, true, 0);
course01.updateViews();
course01.updateViews();
course01.updateViews();
console.log('The new course:\n', course01);