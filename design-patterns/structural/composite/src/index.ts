import Class from "./models/Class";
import Content from "./models/Content";
import Course from "./models/Course";

const designPatternsCourse: Course = new Course('Design Patterns');

const introductionClass: Class = new Class('Introduction', 0.5);

designPatternsCourse.addContent(introductionClass);


const compositeClass: Class[] = [
    new Class('Principle', 1),
    new Class('Diagram', 2),
    new Class('Example', 3)
]

const compositeContent: Content = new Content('Composite', compositeClass);

designPatternsCourse.addContent(compositeContent);

console.log(designPatternsCourse.getClass(), designPatternsCourse.contents);
