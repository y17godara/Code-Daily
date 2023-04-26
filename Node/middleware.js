const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date();

    console.log(`=================================================================`);
    console.log(`Logged Triggered "Method : ${method}", "Url : ${url}", "Time : ${time}"`);

    next()
}

module.exports = logger;