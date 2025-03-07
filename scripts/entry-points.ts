import fs from 'fs';
import path from 'path';

// use the first command-line argument as the components directory, or default to 'dist'

// const componentsDir = './dist/components';

const componentsDir = process.argv[2] ? './dist/' + process.argv[2] : './dist';

// const componentsDir = './dist';

// Get a list of all components with an index.js file
const components = fs
  .readdirSync(componentsDir, { withFileTypes: true })
  .filter((dirent) => {
    // console.log("🚀 ~ dirent === ", dirent);
    console.log(
      path.join(componentsDir, dirent.name, 'index.js'),
      '== exists ==',
      fs.existsSync(path.join(componentsDir, dirent.name, 'index.js')),
    );
    return dirent.isDirectory() && fs.existsSync(path.join(componentsDir, dirent.name, 'index.js'));
  })
  .map((dirent) => dirent.name);

// Generate the exports object
const exportsObj = {
  '.': {
    import: './dist/index.mjs',
    types: './dist/index.d.ts',
    require: './dist/index.js',
    default: './dist/index.js',
  },
};

components.forEach((component) => {
  // console.log('component ', component);

  exportsObj[`./${component}`] = {
    import: `${componentsDir}/${component}/index.mjs`,
    require: `${componentsDir}/${component}/index.js`,
    types: `${componentsDir}/${component}/index.d.ts`,
    default: `${componentsDir}/${component}/index.mjs`,
  };
});

// Update the package.json file
const packageJsonPath = './package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
packageJson.exports = exportsObj;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
