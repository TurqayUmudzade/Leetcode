class Process {
    constructor(state) {
        this.state = state
    }
}


const Singleton = (() => {
    class ProcessManager {
        constructor(state) {
            this.numProcess = 0
        }
    }

    let pManager

    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }

    return {
        getProcessManager: () => {
            if (!pManager) pManager = createProcessManager()
            return pManager
        }
    }
})()


const processManager = Singleton.getProcessManager()
const processManager2 = Singleton.getProcessManager()


console.log(processManager === processManager2);