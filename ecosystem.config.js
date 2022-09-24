module.exports = {
  apps: {
    name: 'template-express',
    script: './dist/app.js',
  },
  deploy: {
    production: {
      user: 'root',
      host: '101.200.179.232',
      ref: 'origin/main',
      repo: 'git@github.com:xsrole/template-express.git',
      path: '/usr/www/template-express',
      'pre-deploy-local': '',
      'post-deploy': 'pnpm i && pnpm run build && PORT=3901 pm2 start',
      'pre-setup': '',
    },
  },
};
