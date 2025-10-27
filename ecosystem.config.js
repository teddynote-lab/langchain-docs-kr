module.exports = {
  apps: [
    {
      name: 'langchain-docs',
      cwd: '/home/azureuser/github/langchain-docs/build',
      script: '/usr/local/bin/mint',
      args: 'dev --port 3000',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      error_file: '/home/azureuser/github/langchain-docs/logs/pm2-error.log',
      out_file: '/home/azureuser/github/langchain-docs/logs/pm2-out.log',
      log_file: '/home/azureuser/github/langchain-docs/logs/pm2-combined.log',
      time: true,
      merge_logs: true,
    },
  ],
};
