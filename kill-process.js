var killProcess = function(pid, ppid, kill) {
  const killedElements = [kill]
  helperKiller(pid, ppid, kill, killedElements)
  return killedElements
};

const helperKiller = (pid, ppid, kill, killedElements) => {
  for (let i = 0; i < ppid.length; i++) {
    if (ppid[i] === kill) {
      killedElements.push(pid[i])
      helperKiller(pid, ppid, pid[i], killedElements)
    }
  }
}

const pid1 =  [1, 3, 10, 5]
const ppid1 = [3, 0, 5, 3]
console.log(killProcess(pid1, ppid1, 3))