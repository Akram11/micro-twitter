

const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('Action is:', action)
    const returnValue = next(action)
    console.log('State:', store.getState())
    console.group.end()
    return returnValue
}

export default logger