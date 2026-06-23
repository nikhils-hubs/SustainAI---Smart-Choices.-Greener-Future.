const users = {}

function getUser(phone) {
    return users[phone]
}

function setUser(phone, mode) {
    users[phone] = {
        mode,
        lastActivity: Date.now(),
        history: []
    };
}
function addMessage(phone, role, content) {
    if (users[phone]) {
        users[phone].history.push({
            role,
            content
        });
    }
}

function getHistory(phone) {
    return users[phone]?.history || [];
}

function updateUser(phone) {
    if (users[phone]) {
        users[phone].lastActivity = Date.now()
    };
}

function resetUser(phone) {
    delete users[phone]
}

module.exports = {
    getUser,
    setUser,
    updateUser,
    resetUser,
    addMessage,
    getHistory
}
