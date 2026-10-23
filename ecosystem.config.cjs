module.exports = {
  apps: [
    {
      name: "zentroverse-api",
      script: "src/server.js",
      cwd: __dirname,
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "768M",
      min_uptime: "10s",
      max_restarts: 15,
      env: {
        NODE_ENV: "production",
        PORT: "8787",
      },
    },
  ],
};
