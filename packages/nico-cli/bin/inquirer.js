const inquirer = require("inquirer");

function inquirerPrompt(argv) {
  const { name } = argv;
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "模板名称",
          default: name,
          validate: function (val) {
            if (!/^[a-zA-Z]+$/.test(val)) {
              return "模板名称只能含有英文";
            }
            if (!/^[A-Z]/.test(val)) {
              return "模板首字母必须大写";
            }
            return true;
          },
        },
        {
          type: "list",
          name: "type",
          message: "模板类型",
          choices: ["表单", "动态表单", "嵌套表单"],
          filter: function (val) {
            return {
              表单: "form",
              动态表单: "dynamicForm",
              嵌套表单: "nestedForm",
            }[val];
          },
        },
        {
          type: "list",
          message: "使用什么框架开发",
          choices: ["react", "vue"],
          name: "frame",
        },
        {
          type: '',
          message: '',
          choices: '',
          name: ''
        }
      ])
      .then((answers) => {
        const { frame } = answers;
        if (frame === 'react') {
          inquirer.prompt([
            {
              type: 'list',
              message: '使用什么UI组件库开发',
              choices: [
                'Ant Design'
              ],
              name: 'library'
            }
          ]).then(answers1 => {
            resolve({
              ...answers,
              ...answers1
            }).catch(err => {
              reject(err)
              console.log(err);
            })
          })
        }
        if (frame === 'vue') {
          inquirer.prompt([
            {
              type: 'list',
              message: '使用什么UI组件库开发',
              choices: ['Element'],
              name: 'library'
            }
          ]).then(answers2 => {
            resolve({
              ...answers,
              ...answers2
            })
          }).catch(err => {
            reject(err)
            console.log(err);
          })
        }
      })
      .catch((err) => { });
  });
}



