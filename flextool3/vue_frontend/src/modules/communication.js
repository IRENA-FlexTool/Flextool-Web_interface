function getScriptData() {
    const dataElement = document.querySelector("#script-data");
    return JSON.parse(dataElement.textContent);
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

function makeFetchInit() {
    return {
        method: "POST",
        credentials: "same-origin",
        headers: {"X-CSRFToken": csrftoken, 'Content-Type': 'application/json'}
    };
}

function fetchProjectList(projectsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({"type": "project list?"});
    return fetch(projectsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to load project list: ${message}`);
            });
        }
        return response.json()
    });
}

function createProject(projectName, projectsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "create project?", name: projectName});
    return fetch(projectsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to create project: ${message}`);
            });
        }
        return response.json();
    });
}

function destroyProject(projectId, projectsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "destroy project?", id: projectId});
    return fetch(projectsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to delete project: ${message}`);
            });
        }
        return response.json();
    });
}

function fetchModelData(queryType, projectId, modelUrl, extraBody = {}) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({"type": queryType, "projectId": projectId, ...extraBody});
    return fetch(modelUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to fetch ${queryType}: ${message}`);
            });
        }
        return response.json();
    });
}

function fetchExecutionList(projectId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit.body = JSON.stringify({type: "execution list?", projectId: projectId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to load solve list: ${message}`);
            });
        }
        return response.json()
    });
}

function createExecution(projectId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit.body = JSON.stringify({type: "create execution?", projectId: projectId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to create solve: ${message}`);
            });
        }
        return response.json();
    });
}

function destroyExecution(executionId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "destroy execution?", id: executionId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to delete execution: ${message}`);
            });
        }
        return response.json();
    });
}

function executeExecution(executionId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "execute?", id: executionId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to execute: ${message}`);
            });
        }
        return response.json();
    });
}

function abortExecution(executionId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "abort?", id: executionId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to abort execution: ${message}`);
            });
        }
        return response.json();
    });
}

function fetchExecutionUpdates(executionId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "updates?", id: executionId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to execution updates: ${message}`);
            });
        }
        return response.json();
    });
}

function fetchExecutionLog(executionId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "log?", id: executionId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to get log: ${message}`);
            });
        }
        return response.json();
    });
}

function fetchExecutionStatus(executionId, executionsUrl) {
    const fetchInit = makeFetchInit();
    fetchInit["body"] = JSON.stringify({type: "status?", id: executionId});
    return fetch(executionsUrl, fetchInit).then(function(response) {
        if (!response.ok) {
            return response.text().then(function(message) {
                throw new Error(`Failed to get execution status: ${message}`);
            });
        }
        return response.json();
    });
}

export {
    getScriptData,
    makeFetchInit,
    fetchModelData,
    fetchProjectList,
    createProject,
    destroyProject,
    fetchExecutionList,
    createExecution,
    destroyExecution,
    executeExecution,
    abortExecution,
    fetchExecutionLog,
    fetchExecutionUpdates,
    fetchExecutionStatus
};
