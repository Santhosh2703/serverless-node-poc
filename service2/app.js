const express = require('express');
const sls = require('serverless-http');
const app = express();

// Accessing environment variables
const deployedAt = process.env.DEPLOYED_AT;
const gitHash = process.env.GIT_HASH;

console.log('Deployed At:', deployedAt);
console.log('Git Hash:', gitHash);

app.get('/', async (req, res, next) => {
  res.status(200).send('Hi! Monorepo CI/CD with GitHub Actions - service2');
});

module.exports.server = sls(app);
