module.exports = function (plop) {
    // component generator
    plop.setGenerator("Component", {
        description: "application component logic",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "Component name",
            },
        ],
        actions: [
            {
                type: "add",
                path: "../src/components/{{ pascalCase name }}/index.tsx",
                templateFile: "templates/index.tsx.hbs",
            },
            {
                type: "add",
                path: "../src/components/{{ pascalCase name }}/{{ pascalCase name }}.styles.ts",
                templateFile: "templates/styles.ts.hbs",
            },
            {
                type: "add",
                path: "../src/components/{{ pascalCase name }}/{{ pascalCase name }}.types.ts",
                templateFile: "templates/types.ts.hbs",
            },
        ],
    });
};
