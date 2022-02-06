const express = require('express');
const faker = require('faker');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

const repositoryCount = 100;

app.get('/api/repos', (req, res) => {
  const data = [];
  for (let i = 0; i < repositoryCount; i += 1) {
    const type = faker.helpers.shuffle(['public', 'private'])[0];

    const name = faker.internet.userName();
    data.push({
      Id: i,
      Url: `https://github.com/${faker.company.companyName()}/${name}`,
      Name: name,
      Clone_count: faker.random.number(1000),
      Type: type,
      Contribution_count: faker.random.number(300),
      Commit_count: faker.random.number(10000),
      Size: faker.random.number(100000),
      Last_activity: faker.date.past(),
      Risk_score: faker.random.number({ min: 1, max: 10 })
    });
  }
  res.json(data);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
