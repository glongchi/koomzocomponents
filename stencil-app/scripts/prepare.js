const rimraf = require('rimraf');
const copyfiles = require('copyfiles');



const sourcePath = `./src/components/**/*.*`;
const destinationPath = '../stencil-components/src/components/';
const excludes =['./src/components/app-home/*','./src/components/app-root/*']

async function removeFiles(globPath) {
  rimraf(globPath, err => {
    if (err) {
      throw err;
    } else {
      console.log('Removed complete');
    }
  });
}

async function copyFiles(sourcePath, destinationPath, depth, excludes) {
  copyfiles([sourcePath, destinationPath], { up: depth, error: false, exclude:excludes }, err => {
    if (err) {
      console.error('copyFiles error', err);
      throw err;
    } else {
      console.log('copyFiles complete');
    }
  });
}

async function init() {
  //commands
  await removeFiles(destinationPath);
  //await copyFiles(sourcePath, destinationPath, 2,excludes);  
  setTimeout( async () => await copyFiles(sourcePath, destinationPath, 2,excludes),1000);
}







async function exec() {
  //execute
  await init();
  //await removeInvalids();
}

exec();
