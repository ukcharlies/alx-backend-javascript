const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  data = data.toString().split('\n');
  data.shift();
  if (data.slice(-1)[0] === '') {
    data.pop();
  }
  const CSList = [];
  const SWEList = [];
  console.log(`Number of students: ${data.length}`);

  for (const line of data) {
    const tokensList = line.split(',');
    if (tokensList.slice(-1)[0] === 'CS') {
      CSList.push(tokensList[0]);
    } else if (tokensList.slice(-1)[0] === 'SWE') {
      SWEList.push(tokensList[0]);
    }
  }

  console.log(`Number of students in CS: ${CSList.length}. List: ${CSList.join(', ')}`);
  console.log(`Number of students in SWE: ${SWEList.length}. List: ${SWEList.join(', ')}`);
}

module.exports = countStudents;