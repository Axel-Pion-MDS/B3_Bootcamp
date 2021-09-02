const { exec, spawn } = require('child_process');

export const say_me = (say) => {
  exec('say', (say));
}

say_me("test");
