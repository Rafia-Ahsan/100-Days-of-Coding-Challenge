// QUESTION:53
// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them
var developerSkills = {
    languages: ["Typescript", "Pyhton", "Javascript"],
    framework: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"],
};
var languages = developerSkills.languages, framework = developerSkills.framework, tools = developerSkills.tools;
console.log("I am currently learning programming language ".concat(languages[1], " along with the framework ").concat(framework[1], " with tools ").concat(tools[1], "."));
