#! /usr/bin/env node

const templateRepo = 'https://github.com/PolymathNetwork/launchpad-queue.git';

const { exec } = require('child_process');
const { promisify } = require('util');
const promiseExec = promisify(exec);

const run = ({ cmd, msg }) =>
  promiseExec(cmd).then(() => {
    console.log(msg);
  });

const [binPath, mainScriptPath, projectName, newOrigin] = process.argv;
if (!projectName) throw new Error('Missing args');

const task = {
  createFolder: {
    cmd: `mkdir ${projectName}`,
    msg: `Created repo folder: ${projectName}`,
  },
  cloneRepo: {
    cmd: `cd ${projectName} && git clone ${templateRepo} .`,
    msg: `Cloned template repo: ${templateRepo}`,
  },
  removeOrigin: {
    cmd: `cd ${projectName} && git remote rm origin`,
    msg: `Removed origin: ${templateRepo}`,
  },
  addNewOrigin: {
    cmd: `cd ${projectName} && git remote add origin ${newOrigin}`,
    msg: `Added new origin: ${newOrigin}`,
  },
};

run(task.createFolder)
  .then(() => run(task.cloneRepo))
  .then(() => run(task.removeOrigin))
  .then(() => {
    if (newOrigin) {
      run(task.addNewOrigin);
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });
