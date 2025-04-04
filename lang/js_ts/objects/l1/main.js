function createMessage(phoneNumber, message){
    const message = {
        phoneNumber: phoneNumber,
        message: message,
        messageLength: message.length
    }

    return message;
}

export {createMessage};
