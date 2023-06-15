module.exports = {
    apps: [
      {
        name: 'repkaui',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs',
      },
    ],
  }