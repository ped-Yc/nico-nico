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
        //#region 根据框架选择不同的UI组件库
        switch (frame) {
          case 'react':
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
            break;
          case 'vue':
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
            break;
          case 'angular':
            inquirer.prompt([{}]).then(answers3 => {
              resolve({
                ...answers,
                ...answers3
              })
            })
            break;
          case 'node':
            inquirer.prompt([{}]).then(answers4 => {
              resolve({
                ...answers,
                ...answers4
              })
            })
            break;
          case 'chrome':
            inquirer.prompt([{}]).then(answers5 => {
              resolve({
                ...answers,
                ...answers5
              })
            })
            break;
          default:
            console.log('Unsupported frame');
            reject(new Error('Unsupported frame'));
        }
        //#endregion
      })
  })
}




